Feature: firefox for Cucumber

  Scenario Outline: javascript base course
    Given login in with name 1 <url>
    When select answer of 2th course <answer>
    Then successful course 2
  Examples:
    | url                                                                                   | answer                                               |
    | http://www.codefordream.com/courses/js_basic/sections/section_0/text_courses/1        | 'Sunday'                                                   |
    | http://www.codefordream.com/courses/js_basic/sections/section_0/text_courses/0        | ''Hello!''                                                 |
    | http://www.codefordream.com/courses/js_basic/sections/section_1/text_courses/0        | 'var name = 'Tom'; var age = 16;'                          |
    | http://www.codefordream.com/courses/js_basic/sections/section_1/text_courses/1        | '周四'                                                       |
    | http://www.codefordream.com/courses/js_basic/sections/section_2/text_courses/0        | ''string''                                                 |
    | http://www.codefordream.com/courses/js_basic/sections/section_2/text_courses/1        | '01012345678'                                              |
    | http://www.codefordream.com/courses/js_basic/sections/section_2/text_courses/2        | 'courses[2]'                                               |
    | http://www.codefordream.com/courses/js_basic/sections/section_3/text_courses/0        | '1'                                                        |
    | http://www.codefordream.com/courses/js_basic/sections/section_3/text_courses/1        | 'x = x+y+1'                                                |
    | http://www.codefordream.com/courses/js_basic/sections/section_4/text_courses/0        | 'true'                                                     |
    | http://www.codefordream.com/courses/js_basic/sections/section_4/text_courses/1        | 'true'                                                     |
    | http://www.codefordream.com/courses/js_basic/sections/section_5/text_courses/0        | '2'                                                        |
    | http://www.codefordream.com/courses/js_basic/sections/section_5/text_courses/1        | 'Work hard!'                                               |
    | http://www.codefordream.com/courses/js_basic/sections/section_6/text_courses/0        | '0 2 4 6 8'                                                |
    | http://www.codefordream.com/courses/js_basic/sections/section_6/text_courses/1        | '0 1 2 3'                                                  |
    | http://www.codefordream.com/courses/js_basic/sections/section_6/text_courses/2        | '7 8 9'                                                    |
    | http://www.codefordream.com/courses/js_basic/sections/section_7/text_courses/1        | '5'                                                        |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/0 | 'undefined'                                                |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/1 | 'num1 = 7; num2 = 7;'                                      |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/2 | 'num1 = 7; num2 = 3;'                                      |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/3 | '5  3  6'                                                  |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/4 | '5  undefined  8'                                          |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/5 | '3 is not less than 5'                                     |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/6 | '5 is bigger than 3'                                       |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/7 | '5 is not less than 5'                                     |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_1/text_courses/0 | 'player.score[4] = 7'                                      |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_1/text_courses/1 | '7'                                                        |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_2/text_courses/0 | 'bower'                                                    |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_2/text_courses/1 | 'cup'                                                      |
#    | http://www.codefordream.com/courses/js_intermediate/sections/section_2/text_courses/2 | 'display.apply({name:"bower"}, [["I'm a","robot"]])' |
#    | http://www.codefordream.com/courses/js_intermediate/sections/section_3/text_courses/1 | '{ age: 12, sex: "boy" }'                            |
#    | http://www.codefordream.com/courses/js_intermediate/sections/section_3/text_courses/2 | '{ age: 13, sex: "boy" }'                            |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_3/text_courses/3 | 'bower, undefined, cup, 12'                                |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_3/text_courses/4 | 'Robot.prototype,Function.prototype,Object.prototype,null' |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_4/text_courses/1 | '0  1'                                                     |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_4/text_courses/3 | 'do something.  do another thing.'                         |

