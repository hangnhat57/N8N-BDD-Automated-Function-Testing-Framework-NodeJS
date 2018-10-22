Feature: To search cucumber in google

    @CucumberScenario @desktop @mobile
    Scenario: Cucumber Google
      Given I am on google page with title "Google"
      When I type "cucumber"
      Then I click search button
      Then I clear search textbox
