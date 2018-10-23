Feature: To search allure reports in google

    @AllureScenario @desktop @mobile @ignore
    Scenario: Allure Reports Google
      Given I am on google page with title "Google"
      When I type "allure reports"
      Then I click search button
      Then I clear search textbox
