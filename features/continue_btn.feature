Feature: continue btn

  Scenario Outline:  text continue btn
    Given I am on <name> practice with <url>
    When input <answer> in <file_name> and submit it
    Then submit and jump to continue btn

  Examples:
    | name                         | url                                                                                                              | answer                                                                                  | file_name                     |

    | variable_scope               | http://www.codefordream.com/courses/js_intermediate/sections/section_0/practices/normal/practice_1               | ./practices_answer/js_middle_section/variable_scope.js                                  | challenge_0_1.js              |