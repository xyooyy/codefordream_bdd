Feature: Test practice

  Scenario Outline: Doing Practice
    Given I am on <name> practice with <url>
    When input <answer> in <file_name> and submit it css basic
    Then successful challenge

  Examples:
    | name               | url                                                                                          | answer                                                              | file_name |

    # grammar_and_selector
    | external_css_one   | http://www.codefordream.com/courses/css_basic/sections/section_2/practices/normal/practice_1 | ./practices_answer/css/grammar_and_selector/external_css_one.css   | style.css |
    | external_css_two   | http://www.codefordream.com/courses/css_basic/sections/section_2/practices/normal/practice_2 | ./practices_answer/css/grammar_and_selector/external_css_two.css   | style.css |
    | external_css_three | http://www.codefordream.com/courses/css_basic/sections/section_2/practices/normal/practice_3 | ./practices_answer/css/grammar_and_selector/external_css_three.css | style.css |
    | external_css_four  | http://www.codefordream.com/courses/css_basic/sections/section_2/practices/normal/practice_4 | ./practices_answer/css/grammar_and_selector/external_css_four.css  | style.css |
    | external_css_five  | http://www.codefordream.com/courses/css_basic/sections/section_2/practices/normal/practice_5 | ./practices_answer/css/grammar_and_selector/external_css_five.css  | style.css |
    | external_css_six   | http://www.codefordream.com/courses/css_basic/sections/section_2/practices/normal/practice_6 | ./practices_answer/css/grammar_and_selector/external_css_six.css   | style.css |
    | external_css_seven | http://www.codefordream.com/courses/css_basic/sections/section_2/practices/normal/practice_7 | ./practices_answer/css/grammar_and_selector/external_css_seven.css  | style.css |

    # inheritance_and_cover
    | external_css_one   | http://www.codefordream.com/courses/css_basic/sections/section_3/practices/normal/practice_1 | ./practices_answer/css/inheritance_and_cover/external_css_one.css   | style.css |
    | external_css_two   | http://www.codefordream.com/courses/css_basic/sections/section_3/practices/normal/practice_2 | ./practices_answer/css/inheritance_and_cover/external_css_two.css   | style.css |
    | external_css_three | http://www.codefordream.com/courses/css_basic/sections/section_3/practices/normal/practice_3 | ./practices_answer/css/inheritance_and_cover/external_css_three.css | style.css |
    | external_css_four  | http://www.codefordream.com/courses/css_basic/sections/section_3/practices/normal/practice_4 | ./practices_answer/css/inheritance_and_cover/external_css_four.css  | style.css |
    | external_css_five  | http://www.codefordream.com/courses/css_basic/sections/section_3/practices/normal/practice_5 | ./practices_answer/css/inheritance_and_cover/external_css_five.css  | style.css |
    | external_css_six   | http://www.codefordream.com/courses/css_basic/sections/section_3/practices/normal/practice_6 | ./practices_answer/css/inheritance_and_cover/external_css_six.css   | style.css |

    # box_model
    | external_css_one | http://www.codefordream.com/courses/css_basic/sections/section_4/practices/normal/practice_1 | ./practices_answer/css/box_model/external_css_one.css | style.css |
