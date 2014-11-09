Feature: courses on code for dream
  Scenario: one practice of one section
    Given I am on the practice
    When input correct answer of the practice and submit it
    Then successful challenge to the practice
    And run