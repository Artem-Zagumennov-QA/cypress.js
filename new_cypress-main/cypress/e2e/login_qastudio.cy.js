describe('Форма логина и пароля', function () {

    it('1.Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // перейти на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // ввод правильного логина
         cy.get('#pass').type('iLoveqastudio1'); // ввод правильного пароля
         cy.get('#loginButton').click(); // нажать кнопку "Войти"

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //кнопка закрыть видна пользователю
     })
    
     it('2.Забыли пароль', function () {
        cy.visit('https://login.qa.studio/'); // перейти на сайт

        cy.get('#forgotEmailButton').click(); // нажать кнопку "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввод правильного логина
        cy.get('#restoreEmailButton').click(); // нажать кнопку "отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //кнопка закрыть видна пользователю
    })
   
    it('3.Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // перейти на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // ввод правильного логина
        cy.get('#pass').type('iLoveqastudio007'); // ввод правильного пароля
        cy.get('#loginButton').click(); // нажать кнопку "Войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //кнопка закрыть видна пользователю
    })

    it('4.Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // перейти на сайт

        cy.get('#mail').type('germa@dolnikov.ru'); // ввод правильного логина
        cy.get('#pass').type('iLoveqastudio1'); // ввод правильного пароля
        cy.get('#loginButton').click(); // нажать кнопку "Войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //кнопка закрыть видна пользователю
    })

    it('5.Проверка валидации @', function () {
        cy.visit('https://login.qa.studio/'); // перейти на сайт

        cy.get('#mail').type('germandolnikov.ru'); // ввод правильного логина
        cy.get('#pass').type('iLoveqastudio1'); // ввод правильного пароля
        cy.get('#loginButton').click(); // нажать кнопку "Войти"

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //кнопка закрыть видна пользователю
    })

    it('6.Проверка обязательности приведения к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // перейти на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввод правильного логина
        cy.get('#pass').type('iLoveqastudio1'); // ввод правильного пароля
        cy.get('#loginButton').click(); // нажать кнопку "Войти"

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //кнопка закрыть видна пользователю
    })


    })