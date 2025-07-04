describe('Formulario de Registro', () => {
  it('debería llenar y enviar el formulario correctamente', () => {
    cy.visit('http://localhost:8100/registro');

    cy.get('ion-input[data-testid="nombreInput"]').shadow().find('input').type('Antonia');
    cy.get('ion-input[data-testid="apellidosInput"]').shadow().find('input').type('Zúñiga');
    cy.get('ion-input[data-testid="correoInput"]').shadow().find('input').type('antonia@example.com');
    cy.get('ion-input[data-testid="telefonoInput"]').shadow().find('input').type('912345678');
    cy.get('ion-input[data-testid="regionInput"]').shadow().find('input').type('Valparaíso');
    cy.get('ion-input[data-testid="comunaInput"]').shadow().find('input').type('Puchuncaví');
    cy.get('ion-input[data-testid="direccionInput"]').shadow().find('input').type('Calle Ficticia 123');

    // Checkbox también va con shadow()
    cy.get('ion-checkbox[data-testid="terminosCheck"]').shadow().find('input').click();

    // Botón con data-testid, si lo tienes asignado:
    cy.get('ion-button[data-testid="botonRegistrar"]').click();
  });
});



