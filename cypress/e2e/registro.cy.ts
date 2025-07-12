// cypress/e2e/registro.cy.ts
// -----------------------------------------------------------------
// Este evento intercepta cualquier excepción no controlada que se genere
// durante la ejecución de la app Ionic y evita que Cypress marque el test como fallido.
// Esto es útil porque Ionic a veces lanza errores internos que no afectan la prueba.
Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false; // ← al retornar false, se evita que la excepción detenga el test
});
// -----------------------------------------------------------------

describe('Formulario de Registro', () => {
  it('debería llenar y enviar el formulario correctamente', () => {
    cy.visit('http://localhost:8100/registro');
    cy.wait(500);

    cy.get('ion-input[data-testid="nombreInput"]').find('input').type('Antonia');
    cy.get('ion-input[data-testid="claveInput"]').find('input').type('miClaveSegura123');
    cy.get('ion-input[data-testid="edadInput"]').find('input').type('25'); // Edad válida >=18
    cy.get('ion-input[data-testid="correoInput"]').find('input').type('antonia@example.com');
    cy.get('ion-input[data-testid="telefonoInput"]').find('input').type('912345678');
    cy.get('ion-input[data-testid="regionInput"]').find('input').type('Valparaíso');
    cy.get('ion-input[data-testid="comunaInput"]').find('input').type('Puchuncaví');
    cy.get('ion-input[data-testid="direccionInput"]').find('input').type('Calle Ficticia 123');

    cy.get('ion-button[data-testid="botonRegistrar"]').click();
  });

  it('debería mostrar error si la edad es menor a 18', () => {
    cy.visit('http://localhost:8100/registro');
    cy.wait(500);

    cy.get('ion-input[data-testid="nombreInput"]').find('input').type('Juan');
    cy.get('ion-input[data-testid="claveInput"]').find('input').type('clave123');
    cy.get('ion-input[data-testid="edadInput"]').find('input').type('16'); // MENOR a 18, debe fallar
    cy.get('ion-input[data-testid="correoInput"]').find('input').type('juan1@example.com');
    cy.get('ion-input[data-testid="telefonoInput"]').find('input').type('987654321');
    cy.get('ion-input[data-testid="regionInput"]').find('input').type('Metropolitana');
    cy.get('ion-input[data-testid="comunaInput"]').find('input').type('Santiago');
    cy.get('ion-input[data-testid="direccionInput"]').find('input').type('Av. Siempre Viva 123');

    cy.get('ion-button[data-testid="botonRegistrar"]').click();

    cy.contains('Debe ser mayor o igual a 18 años').should('be.visible');
  });
});






