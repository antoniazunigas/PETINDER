import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({ providedIn: 'root' })
export class DBTaskService {
  private db!: SQLiteObject;
  private isNative: boolean = false;
  private readyPromise: Promise<void>;

  constructor(
    private sqlite: SQLite,
    private storage: Storage,
    private platform: Platform
  ) {
    console.log('🔧 Constructor DBTaskService');
    this.readyPromise = this.init();
  }

  private async init(): Promise<void> {
    console.log('⏳ Esperando platform.ready()...');
    await this.platform.ready();
    console.log('✅ Platform ready!');

    await this.storage.create();
    console.log('✅ Storage creado');

    this.isNative = this.platform.is('capacitor') || this.platform.is('cordova') || this.platform.is('android');
    console.log('📱 Plataforma detectada como nativa:', this.isNative);
    console.log('🔍 Plataformas detectadas:', this.platform.platforms());

    if (this.isNative) {
      try {
        this.db = await this.sqlite.create({
          name: 'petinder.db',
          location: 'default',
        });
        console.log('✅ Base de datos SQLite inicializada');

        await this.db.executeSql(
          `CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            correo TEXT UNIQUE,
            clave TEXT,
            edad INTEGER,
            telefono TEXT,
            direccion TEXT,
            region TEXT,
            comuna TEXT
          )`,
          []
        );
        console.log('✅ Tabla usuarios creada o verificada');

        const nuevasColumnas = [
          { nombre: 'telefono', tipo: 'TEXT' },
          { nombre: 'direccion', tipo: 'TEXT' },
          { nombre: 'region', tipo: 'TEXT' },
          { nombre: 'comuna', tipo: 'TEXT' },
        ];

        for (const col of nuevasColumnas) {
          try {
            await this.db.executeSql(`ALTER TABLE usuarios ADD COLUMN ${col.nombre} ${col.tipo}`, []);
            console.log(`✅ Columna ${col.nombre} agregada`);
          } catch (err: any) {
            console.log(`⚠️ Columna ${col.nombre} ya existe o no se pudo agregar:`, err.message);
          }
        }

        await this.db.executeSql(
          `CREATE TABLE IF NOT EXISTS sesiones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_usuario INTEGER,
            active INTEGER,
            FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
          )`,
          []
        );
        console.log('✅ Tabla sesiones creada o verificada');

        await this.db.executeSql(
          `CREATE TABLE IF NOT EXISTS formularios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            apellidos TEXT,
            correo TEXT,
            telefono TEXT,
            fechaNacimiento TEXT,
            region TEXT,
            comuna TEXT,
            direccion TEXT
          )`,
          []
        );
        console.log('✅ Tabla formularios creada o verificada');

      } catch (e) {
        console.error('❌ Error inicializando SQLite:', e);
      }
    } else {
      console.log('🧪 Plataforma web: usando Ionic Storage.');
    }
  }

  private async ready() {
    return this.readyPromise;
  }

  async registrarUsuario(
    nombre: string,
    correo: string,
    clave: string,
    edad: number,
    telefono: string,
    direccion: string,
    region: string,
    comuna: string
  ): Promise<boolean> {
    await this.ready();
    if (this.isNative) {
      await this.db.executeSql(
        `INSERT INTO usuarios (nombre, correo, clave, edad, telefono, direccion, region, comuna)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [nombre.trim(), correo.trim().toLowerCase(), clave, edad, telefono, direccion, region, comuna]
      );
    } else {
      const usuarios = (await this.storage.get('usuarios')) || [];
      const existe = usuarios.find((u: any) => u.correo === correo.trim().toLowerCase());
      if (existe) throw new Error('Correo ya registrado');
      usuarios.push({
        id: Date.now(),
        nombre,
        correo: correo.trim().toLowerCase(),
        clave,
        edad,
        telefono,
        direccion,
        region,
        comuna,
      });
      await this.storage.set('usuarios', usuarios);
    }
    return true;
  }

  async validarUsuario(correo: string, clave: string): Promise<any> {
    await this.ready();
    if (this.isNative) {
      const res = await this.db.executeSql(
        'SELECT * FROM usuarios WHERE correo = ? AND clave = ?',
        [correo.trim().toLowerCase(), clave]
      );
      return res.rows.length ? res.rows.item(0) : null;
    } else {
      const usuarios = (await this.storage.get('usuarios')) || [];
      return usuarios.find(
        (u: any) => u.correo === correo.trim().toLowerCase() && u.clave === clave
      ) || null;
    }
  }

  async iniciarSesion(idUsuario: number) {
    await this.ready();
    if (this.isNative) {
      await this.db.executeSql('UPDATE sesiones SET active = 0 WHERE active = 1', []);
      await this.db.executeSql('INSERT INTO sesiones (id_usuario, active) VALUES (?, 1)', [idUsuario]);
    }
    await this.storage.set('sesion_activa', idUsuario);
  }

  async cerrarSesion(idUsuario: number) {
    await this.ready();
    if (this.isNative) {
      await this.db.executeSql('UPDATE sesiones SET active = 0 WHERE id_usuario = ?', [idUsuario]);
    }
    await this.storage.remove('sesion_activa');
  }

  async obtenerSesionActiva(): Promise<number | null> {
    await this.ready();
    const id = await this.storage.get('sesion_activa');
    return id ? +id : null;
  }

  async haySesionActiva(): Promise<boolean> {
    return (await this.obtenerSesionActiva()) !== null;
  }

  async obtenerUsuarioPorId(id: number): Promise<any> {
    await this.ready();
    if (this.isNative) {
      const res = await this.db.executeSql('SELECT * FROM usuarios WHERE id = ?', [id]);
      return res.rows.length ? res.rows.item(0) : null;
    } else {
      const usuarios = (await this.storage.get('usuarios')) || [];
      return usuarios.find((u: any) => u.id === id) || null;
    }
  }

  async actualizarUsuario(usuario: any): Promise<void> {
    await this.ready();
    if (!usuario.id) throw new Error('El usuario debe tener un id para actualizar');

    if (this.isNative) {
      await this.db.executeSql(
        `UPDATE usuarios SET 
          nombre = ?, 
          edad = ?, 
          telefono = ?, 
          direccion = ?, 
          region = ?, 
          comuna = ? 
        WHERE id = ?`,
        [
          usuario.nombre,
          usuario.edad,
          usuario.telefono || '',
          usuario.direccion || '',
          usuario.region || '',
          usuario.comuna || '',
          usuario.id
        ]
      );
    } else {
      const usuarios = (await this.storage.get('usuarios')) || [];
      const index = usuarios.findIndex((u: any) => u.id === usuario.id);
      if (index === -1) throw new Error('Usuario no encontrado para actualizar');
      usuarios[index] = usuario;
      await this.storage.set('usuarios', usuarios);
    }
  }

  async guardarFormulario(datos: any): Promise<void> {
    await this.ready();
    const {
      nombre,
      apellidos,
      correo,
      telefono,
      fechaNacimiento,
      region,
      comuna,
      direccion,
    } = datos;

    if (this.isNative) {
      await this.db.executeSql(
        `INSERT INTO formularios 
        (nombre, apellidos, correo, telefono, fechaNacimiento, region, comuna, direccion) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [nombre, apellidos, correo, telefono, fechaNacimiento, region, comuna, direccion]
      );
    } else {
      const formularios = (await this.storage.get('formularios')) || [];
      formularios.push({
        id: Date.now(),
        nombre,
        apellidos,
        correo,
        telefono,
        fechaNacimiento,
        region,
        comuna,
        direccion,
      });
      await this.storage.set('formularios', formularios);
    }
  }
}




















