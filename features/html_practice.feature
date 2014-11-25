Feature: Test practice

  Scenario Outline: Doing Practice
    Given I am on <name> practice with <url>
    When input <answer> in <file_name> and submit it
    Then successful challenge

  Examples:
    | name                | url                                                                                           | answer                                           | file_name     |

  # html
    | tag                 | http://www.codefordream.com/courses/html_basic/sections/section_2/practices/normal/practice_1 | ./practices_answer/html/tag.html                 | practice.html |
    | div_one             | http://www.codefordream.com/courses/html_basic/sections/section_3/practices/normal/practice_1 | ./practices_answer/html/div_one.html             | practice.html |
    | div_two             | http://www.codefordream.com/courses/html_basic/sections/section_3/practices/normal/practice_2 | ./practices_answer/html/div_two.html             | practice.html |
    | section_one         | http://www.codefordream.com/courses/html_basic/sections/section_4/practices/normal/practice_1 | ./practices_answer/html/section_one.html         | practice.html |
    | section_two         | http://www.codefordream.com/courses/html_basic/sections/section_4/practices/normal/practice_2 | ./practices_answer/html/section_two.html         | practice.html |
    | group_content       | http://www.codefordream.com/courses/html_basic/sections/section_5/practices/normal/practice_1 | ./practices_answer/html/group_content.html       | practice.html |
    | text_marker         | http://www.codefordream.com/courses/html_basic/sections/section_6/practices/normal/practice_1 | ./practices_answer/html/text_marker.html         | practice.html |
    | basic_table         | http://www.codefordream.com/courses/html_basic/sections/section_7/practices/normal/practice_1 | ./practices_answer/html/basic_table.html         | practice.html |
    | specification_table | http://www.codefordream.com/courses/html_basic/sections/section_7/practices/normal/practice_2 | ./practices_answer/html/specification_table.html | practice.html |
    | form                | http://www.codefordream.com/courses/html_basic/sections/section_8/practices/normal/practice_1 | ./practices_answer/html/form.html                | practice.html |
    | embed               | http://www.codefordream.com/courses/html_basic/sections/section_9/practices/normal/practice_1 | ./practices_answer/html/embed.html               | practice.html |