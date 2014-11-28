Feature: Test practice

  Scenario Outline: Doing Practice
    Given I am on <name> practice with <url>
    When input <answer> in <file_name> and submit it
    Then successful challenge

  Examples:
    | name                    | url                                                                                                                | answer                                                    | file_name      |

  # html
    | tag                     | http://www.codefordream.com/courses/html_basic/sections/section_2/practices/normal/practice_1                      | ./practices_answer/html/tag.html                          | practice.html  |
    | div_one                 | http://www.codefordream.com/courses/html_basic/sections/section_3/practices/normal/practice_1                      | ./practices_answer/html/div_one.html                      | practice.html  |
    | div_two                 | http://www.codefordream.com/courses/html_basic/sections/section_3/practices/normal/practice_2                      | ./practices_answer/html/div_two.html                      | practice.html  |
    | section_one             | http://www.codefordream.com/courses/html_basic/sections/section_4/practices/normal/practice_1                      | ./practices_answer/html/section_one.html                  | practice.html  |
    | section_two             | http://www.codefordream.com/courses/html_basic/sections/section_4/practices/normal/practice_2                      | ./practices_answer/html/section_two.html                  | practice.html  |
    | group_content           | http://www.codefordream.com/courses/html_basic/sections/section_5/practices/normal/practice_1                      | ./practices_answer/html/group_content.html                | practice.html  |
    | text_marker             | http://www.codefordream.com/courses/html_basic/sections/section_6/practices/normal/practice_1                      | ./practices_answer/html/text_marker.html                  | practice.html  |
    | basic_table             | http://www.codefordream.com/courses/html_basic/sections/section_7/practices/normal/practice_1                      | ./practices_answer/html/basic_table.html                  | practice.html  |
    | specification_table     | http://www.codefordream.com/courses/html_basic/sections/section_7/practices/normal/practice_2                      | ./practices_answer/html/specification_table.html          | practice.html  |
    | form                    | http://www.codefordream.com/courses/html_basic/sections/section_8/practices/normal/practice_1                      | ./practices_answer/html/form.html                         | practice.html  |
    | embed                   | http://www.codefordream.com/courses/html_basic/sections/section_9/practices/normal/practice_1                      | ./practices_answer/html/embed.html                        | practice.html  |

  # bootstrap
    | introduce_style_library | http://www.codefordream.com/courses/bootstrap/sections/section_1_bootstrap/practices/normal/practice_bootstrap     | ./practices_answer/bootstrap/introduce_style_library.html | index-0.html   |
    | container               | http://www.codefordream.com/courses/bootstrap/sections/section_2_Grid_System/practices/normal/practice_container   | ./practices_answer/bootstrap/container.html               | index-1.html   |
    | background_block        | http://www.codefordream.com/courses/bootstrap/sections/section_2_Grid_System/practices/normal/practice_jumbotron   | ./practices_answer/bootstrap/background_block.html        | index-2-2.html |
    | grid_system             | http://www.codefordream.com/courses/bootstrap/sections/section_2_Grid_System/practices/normal/practice_grid_system | ./practices_answer/bootstrap/grid_system.html             | index-2-3.html |
    | text_typography         | http://www.codefordream.com/courses/bootstrap/sections/section_3_Typography/practices/normal/practice_typography   | ./practices_answer/bootstrap/text_typography.html         | index-3.html   |
    | button                  | http://www.codefordream.com/courses/bootstrap/sections/section_4_Buttons/practices/normal/practice_buttons         | ./practices_answer/bootstrap/button.html                  | index-4.html   |
    | icon                    | http://www.codefordream.com/courses/bootstrap/sections/section_5_Icons/practices/normal/practice_icons             | ./practices_answer/bootstrap/icon.html                    | index-5.html   |
    | list                    | http://www.codefordream.com/courses/bootstrap/sections/section_6_lists/practices/normal/practice_lists             | ./practices_answer/bootstrap/list.html                    | index-6.html   |

