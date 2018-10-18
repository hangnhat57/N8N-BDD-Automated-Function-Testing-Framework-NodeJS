Feature: To search protractor in google

    @ProtractorScenario
    Scenario: Protractor Google
      Given I am on google page with title "Google"
      When I type "protractor"
      Then I click search button
      Then I clear search textbox
