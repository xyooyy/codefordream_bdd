Feature: Test reset code

  Scenario Outline: reset code
    Given I am on <name> practice with <url>
    When input <answer> in <file_name> and submit it
    Then successful result reset code

  Examples:
    | name        | url                                                                                         | answer                                             | file_name   |

    | hello_world | http://www.codefordream.com/courses/js_basic/sections/section_0/practices/normal/practice_1 | ./practices_answer/js_basic_section/hello_world.js | practice.js |