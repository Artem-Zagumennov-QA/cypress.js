describe('Покупка аватара', function () {

    it('e2e тест на покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // перейти на сайт покемонов

         cy.get('#k_email').type('USER_NAME'); // ввод правильного логина
         cy.get('#k_password').type('USER_PASSWORD'); // ввод правильного пароля
         cy.get('.MuiButton-root').click(); // нажать кнопку "Войти"
         cy.wait(3000);
         cy.get('.header_card_trainer').click(); // нажать на кнопку профиля
         cy.wait(3000);
         cy.get('.k_mobile > :nth-child(5)').click() // нажать кнопку "Смена аватара"
         cy.get('.available > button').first().click();
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('5555555555555599');
         cy.get(':nth-child(1) > .style_1_base_input').type('1032');
         cy.get('.card_csv').type('125');
         cy.get('.card_name').type('Picachunkov');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.threeds_number').type('56456');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.payment_status_top_title').should('be.visible');
    })

})