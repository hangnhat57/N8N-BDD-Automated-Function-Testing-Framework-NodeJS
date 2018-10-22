Feature: To search protractor in google

    @ProtractorScenario @desktop @mobile
    Scenario: Protractor Google on Desktop
      Given I am on google page with title "Google" on Desktop
      When I type "protractor" on Desktop
      Then I click search button on Desktop
      Then I clear search textbox on Desktop

    @ProtractorScenario @desktop @mobile
    Scenario: Protractor Google on Mobile
      Given I am on google page with title "Google" on Mobile
      When I type "protractor" on Mobile
      Then I click search button on Mobile
      Then I clear search textbox on Mobile
