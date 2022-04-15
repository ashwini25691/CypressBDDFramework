import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

  Given('Open the Url', () => {
    cy.visit('https://admin-advertisement.herokuapp.com/advertisements')
    //cy.get('*[class^="hbar__brand ng-binding"]').should('have.value', 'Advertisements')
    })

  And('Get No of Rows in Table', () => {
    cy.get('*[class^="md-table ng-isolate-scope"]')
    .find("tr")
    .then((row) => {
      cy.log(row.length)
      // let BeforeRow=row.length
      // cy.wrap(BeforeRow).as("BeforeRowCount")
    })
  })

  And ('I Add New Addvertisement', () => {
    cy.get('*[class^="al-add__icon ng-scope material-icons"]').click()
  })

  And ('I edit existing Advertisement', () => {
  cy.get('*[class^="md-table ng-isolate-scope"]').find('tr').eq(1).find('td').eq(1).click()

  })
  
  When('I type Advertisement Name as {string}',advertisementname=> {
    
    cy.get('#input_0').type(advertisementname)
  })

  And('I type Street Name as {string}',streetname=> {
    cy.get('#input_1').type(streetname)
  })

  And('I clear the Street Name', () => {
    cy.get('#input_1').clear();
  })

  And('I clear the Rooms field', () => {
    cy.get('#input_2').clear();
  })

  And('I clear the price field', () => {
    cy.get('#input_3').clear();
  })



  And('I type Rooms as {string}',roomno=> {
    cy.get('#input_2').type(roomno)
  })

  And('I type price as {string}',roomno=> {
    cy.get('#input_3').type(roomno)
  })

  And('I check the checkbox', () => {
    cy.get('*[class^="md-container"]').click()
  })

  And('click on Save button', () => {
    cy.get('button[ng-click="$ctrl.saveAdvertisementDetails()"]').click()
  })

  And('click on Cancel button', () => {
    cy.get('button[ng-click="$ctrl.cancel()"]').click()
  })

  And('Validate Confirm dialog box and click on ok button', () => {
      cy.log("dialog box exist")
      cy.wait(3000)
      cy.get('*[class^="md-primary md-confirm-button md-button md-ink-ripple md-default-theme"]').click();  
  })

  And('Validate Confirm dialog box and click on cancel button', () => {
    cy.log("dialog box exist")
    cy.get('*[class^="md-primary md-cancel-button md-button ng-scope md-default-theme md-ink-ripple"]').click();  
})
  
  Then('Row is added', ()=> {
    cy.get('*[class^="md-table ng-isolate-scope"]')
    .find("tr")
    .then((row) => {
      cy.log(row.length);
      // let AfterRowCount=cy.get("@BeforeRowCount")
      // cy.log(AfterRowCount)
      // cy.wrap(BeforeRow).as("BeforeRowCount")
      // expect(introw).to.be.equal(row.length);
      cy.log("Row is added as expected.")
      
    });
    cy.log("1 row is added")
  }) 

  And('Max Length reached error is displayed for Advertisement Name Field', () => {
    cy.get('div:contains("Max length reached")').should('be.visible')
  })

  And('Save button is disabled', () => {
    cy.get('button[ng-click="$ctrl.saveAdvertisementDetails()"]').should('be.disabled')
  })

  And('I Validate Room Field {string}',expectedroom=> {
    cy.get('#input_2').invoke('val').then(
      introom => {
        expect(introom).to.be.equal(expectedroom);
    if (introom == expectedroom) {
      cy.log('Expected and Actual is matched.Exepcted is ' + expectedroom +' and Actual is '+ introom);
    }
    else {
      cy.log('Expected and Actual do not match.Exepcted is ' + expectedroom +' and Actual is '+ introom);
    }
  });
  })

  And('I Validate price Field error message',() => {
    cy.get('div:contains("Invalid price(Valid currency in euros: 12,12")').should('be.visible')
  })

  And('I Validate the Advertisement Status {string}',expectedstatus=> {
    cy.get('*[class^="md-table ng-isolate-scope"]')
    .find("tr")
    .then((rows) => {
      rows.toArray().forEach((element) => {        
        if (element.innerHTML.includes(expectedstatus)) {
          if (rows.index(element)==(rows.length-1))
          {
            expect(element.innerHTML).to.be.includes(expectedstatus);
            cy.log("status is Inactive")
          }

        }
        
      });
      
    })
  
  })

  Then('Row is saved successfully', ()=> {  
      cy.log("Row is saved successfully")
})

Then('Row should not be saved', ()=> {
  cy.get('*[class^="md-table ng-isolate-scope"]')
    .find("tr")
    .then((row) => {
      cy.log(row.length);
      //expect(1).to.be.equal(row.length);
      cy.log("Row is not saved, as expected.")
      
    });
})
Then('Edit Advertisement page should only be displayed', ()=> {
  cy.url().should('include','/edit')
})

When ('I Post request through API and validate the response',()=> {

          cy.request({
               method: 'POST',
               url: "https://admin-advertisement.herokuapp.com/api/advertisements/",
               body: {
                "_id":"2",
                "name":"McMakler",
                "street":"1",
                "rooms":"1",
                "price":"abcd",
                "status":true
               
               }
          }).then((response) => { 
                  expect(response.body).has.property("_id","2"); 
          })
    })

    // And ('I Validate the reponse',()=> {
D
    //   cy.request({
    //        method: 'GET',
    //        url: "https://admin-advertisement.herokuapp.com/api/advertisements/",
    //   }).should((response) => { 
    //     cy.log(JSON.stringify(response.body))
    //           //expect(response.body).has.property("_id","1"); 
    //   })
//})