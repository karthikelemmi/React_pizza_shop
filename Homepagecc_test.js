Feature('pizza-shop');

Scenario('test something', ({I})=>{
    I.amOnPage('http://localhost:3000/');

    I.fillField("name", "Karthik Elemmi")

    I.fillField("email", "karthik@gmail.com")

    I.fillField("textarea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt")

    I.see("Lorem ipsum dolor sit amet, consectetur adipiscing elit,adipiscing elit, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", ".card-text")

    I.seeInField("name", "Karthik Elemmi");
    I.seeInField("email", "karthik@gmail.com");
    I.seeInField("textarea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt");
    pause();
}
);