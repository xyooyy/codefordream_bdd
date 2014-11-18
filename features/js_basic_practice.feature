Feature: Test practice
  Scenario Outline: Doing Practice
    Given I am on <name> practice with <url>
    When input <answer> in <file_name> and submit it
    Then successful challenge

  Examples:
  | name             | url                                                                                         | answer                                  | file_name  |
  |hello_world       | http://www.codefordream.com/courses/js_basic/sections/section_0/practices/normal/practice_1 | ./practices_answer/hello_world.js       | practice.js|
  |code_comments     | http://www.codefordream.com/courses/js_basic/sections/section_1/practices/normal/practice_1 | ./practices_answer/code_comments.js     | practice.js|
  |simple_data_types | http://www.codefordream.com/courses/js_basic/sections/section_2/practices/normal/practice_1 | ./practices_answer/simple_data_types.js | practice.js|
  |complex_data_types| http://www.codefordream.com/courses/js_basic/sections/section_2/practices/normal/practice_2 | ./practices_answer/complex_data_types.js| practice.js|
  |math_caculate     | http://www.codefordream.com/courses/js_basic/sections/section_3/practices/normal/practice_1 | ./practices_answer/math_caculate.js     | practice.js|
  |compare_symble    | http://www.codefordream.com/courses/js_basic/sections/section_4/practices/normal/practice_1 | ./practices_answer/compare_symble.js    | practice.js|
  |logic_symble      | http://www.codefordream.com/courses/js_basic/sections/section_4/practices/normal/practice_2 | ./practices_answer/logic_symble.js      | practice.js|
  |if_operator       | http://www.codefordream.com/courses/js_basic/sections/section_5/practices/normal/practice_1 | ./practices_answer/if_operator.js       | practice.js|
  |if_else_operator  | http://www.codefordream.com/courses/js_basic/sections/section_5/practices/normal/practice_2 | ./practices_answer/if_else_operator.js  | practice.js|
  |for_loop          | http://www.codefordream.com/courses/js_basic/sections/section_6/practices/normal/practice_1 | ./practices_answer/for_loop.js          | practice.js|
  |function          | http://www.codefordream.com/courses/js_basic/sections/section_7/practices/normal/practice_1 | ./practices_answer/function.js          | practice.js|