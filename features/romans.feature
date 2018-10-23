@Romans
Feature: To Demo Testing for Romans
  @desktop
  Scenario: Desktop Search for properties
    Given Desktop I on home page
    When Desktop I search for properties for sale with these criteria
    |Type |Location |MinPrice  |MaxPrice  | MinBedrooms|
    |Buy  |MK5 8FT  |-         |-         |-          |
    Then Desktop I should be in result page for those properties

  @mobile
  Scenario: Mobile Search for properties
    Given Mobile I on home page
    When Mobile I search for properties for sale with these criteria
      |Type |Location |
      |Buy  |MK5 8FT  |
    Then Mobile I should be in result page for those properties

