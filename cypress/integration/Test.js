
describe("Testing API Endpoints Using Cypress", () => {

    // it("Test GET Request", () => {
    //       cy.request("https://admin-advertisement.herokuapp.com/api/advertisements/")
    //            .then((response) => {
    //                   expect(response.body).to.have.property('code', 200);
    //       })
    // })

    it("Test POST Request", () => {
          cy.request({
               method: 'POST',
               url: "https://admin-advertisement.herokuapp.com/api/advertisements/",
               body: {
                "_id":"3",
                "name":"McMakler",
                "street":"1",
                "rooms":"3",
                "price":"100026022",
                "status":true
               
               }
          }).then((response) => { 
                  expect(response.body).has.property("_id","3"); 
          })
    })
})
    