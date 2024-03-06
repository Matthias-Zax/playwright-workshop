import { test, expect } from '@playwright/test';

test('T5_LOGIN_withInvalidCredentials_correctErrorMsgDisplayed', async ({ page }) => {
  // Go To the SUT

  // navigate the the login

  // Select and insert into the mail Input Field "invalid@mail.com"

  // Select and insert into the pw Input Field "invalid"

  // click the login button

  // validate that the error MSG is "Invalid email or password"

})

test('T1_INVENTORY_validateNumberOfPowerTools_mustBeGreaterThan5', async ({ page }) => {
  // Go To the SUT

  // select the checkbox with the name "Power Tools"
  
  // get all the displayed elements / items

  // assert that the number is bigger then 5
})

test('T1_ITEMPRICING_validateClawHammer_priceHigherThen10', async ({ page }) => {
  // go to the SUT

  // select the checkbox "Hammer" below the Hammer Tools

  // Search for "Claw" in the Search Field and click on the search button

  // Select all the card items and validate as the are present if the price is higher than 10

  // get all the items

});


test('T1_FILTER_useSlider70-100_correctItemsDisplayed', async ({ page }) => {
  // go to the SUT

  // set Slider to 70

  // assert first item's price is correct
  
})

test.only('T1_ITEMPRICING2_validateClawHammer_priceHigherThen10', async ({ page }) => {
  // go to the SUT

  // select the checkbox "Hammer" below the Hammer Tools

  // Search for "Claw" in the Search Field and click on the search button

  // Select all the card items and validate as the are present if the price is higher than 10

  // get all the items
  const elements = []
  for ( const element of elements) {
   
    // expect that price is higher then 10

    // Debug Msg
    console.log(element)
  }
});