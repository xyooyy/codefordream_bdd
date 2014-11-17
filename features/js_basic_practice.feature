Feature: Test practice
  Scenario Outline: Doing Practice
    Given I am on <name> practice with <url>
    When input <answer> in <file_name> and submit it
    Then successful challenge

  Examples:
  | name         | url                                                                                         | answer                             | file_name  |
  | hello_world  | http://www.codefordream.com/courses/js_basic/sections/section_0/practices/normal/practice_1 | ./practices_answer/hello_world.js  | practice.js|
  | code_comments| http://www.codefordream.com/courses/js_basic/sections/section_1/practices/normal/practice_1 | ./practices_answer/code_comments.js| practice.js|