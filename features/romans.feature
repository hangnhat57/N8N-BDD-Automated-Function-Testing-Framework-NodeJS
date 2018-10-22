@Romans @desktop
Feature: To Demo Testing for Romans

  Scenario: Search for properties for sale
    Given I on home page
    When I search for properties for sale with these criteria
    |Type |Location |MinPrice  |MaxPrice  | MinBedrooms|
    |Buy  |MK5 8FT  |-         |-         |-          |
    Then I should be in result page for those properties
    
