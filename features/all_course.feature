Feature: firefox for Cucumber

  Scenario Outline: javascript base course
    Given login in with name and visit <url>
    When select answer of course <answer>
    Then successful course
  Examples:
    | url                                                                                                 | answer                                                     |

  #js_basic
    | http://www.codefordream.com/courses/js_basic/sections/section_0/text_courses/1                      | 'Sunday'                                                   |
    | http://www.codefordream.com/courses/js_basic/sections/section_0/text_courses/0                      | ''Hello!''                                                 |
    | http://www.codefordream.com/courses/js_basic/sections/section_1/text_courses/0                      | 'var name = 'Tom'; var age = 16;'                          |
    | http://www.codefordream.com/courses/js_basic/sections/section_1/text_courses/1                      | '周四'                                                       |
    | http://www.codefordream.com/courses/js_basic/sections/section_2/text_courses/0                      | ''string''                                                 |
    | http://www.codefordream.com/courses/js_basic/sections/section_2/text_courses/1                      | '01012345678'                                              |
    | http://www.codefordream.com/courses/js_basic/sections/section_2/text_courses/2                      | 'courses[2]'                                               |
    | http://www.codefordream.com/courses/js_basic/sections/section_3/text_courses/0                      | '1'                                                        |
    | http://www.codefordream.com/courses/js_basic/sections/section_3/text_courses/1                      | 'x = x+y+1'                                                |
    | http://www.codefordream.com/courses/js_basic/sections/section_4/text_courses/0                      | 'true'                                                     |
    | http://www.codefordream.com/courses/js_basic/sections/section_4/text_courses/1                      | 'true'                                                     |
    | http://www.codefordream.com/courses/js_basic/sections/section_5/text_courses/0                      | '2'                                                        |
    | http://www.codefordream.com/courses/js_basic/sections/section_5/text_courses/1                      | 'Work hard!'                                               |
    | http://www.codefordream.com/courses/js_basic/sections/section_6/text_courses/0                      | '0 2 4 6 8'                                                |
    | http://www.codefordream.com/courses/js_basic/sections/section_6/text_courses/1                      | '0 1 2 3'                                                  |
    | http://www.codefordream.com/courses/js_basic/sections/section_6/text_courses/2                      | '7 8 9'                                                    |
    | http://www.codefordream.com/courses/js_basic/sections/section_7/text_courses/1                      | '5'                                                        |

  #js_mediate
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/0               | 'undefined'                                                |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/1               | 'num1 = 7; num2 = 7;'                                      |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/2               | 'num1 = 7; num2 = 3;'                                      |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/3               | '5  3  6'                                                  |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/4               | '5  undefined  8'                                          |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/5               | '3 is not less than 5'                                     |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/6               | '5 is bigger than 3'                                       |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_0/text_courses/7               | '5 is not less than 5'                                     |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_1/text_courses/0               | 'player.score[4] = 7'                                      |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_1/text_courses/1               | '7'                                                        |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_2/text_courses/0               | 'bower'                                                    |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_2/text_courses/1               | 'cup'                                                      |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_2/text_courses/2               | 'display.apply({name:\"bower\"}, [[\"I'm a\",\"robot\"]])' |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_3/text_courses/1               | '{ age: 12, sex: \"boy\" }'                                |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_3/text_courses/2               | '{ age: 13, sex: \"boy\" }'                                |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_3/text_courses/3               | 'bower, undefined, cup, 12'                                |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_3/text_courses/4               | 'Robot.prototype,Function.prototype,Object.prototype,null' |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_4/text_courses/1               | '0  1'                                                     |
    | http://www.codefordream.com/courses/js_intermediate/sections/section_4/text_courses/3               | 'do something.  do another thing.'                         |

  #js_angularjs
    | http://www.codefordream.com/courses/angularjs/sections/section_angular_template_view/text_courses/1 | ''/choose_person/liming''                                  |
    | http://www.codefordream.com/courses/angularjs/sections/section_angular_template_view/text_courses/2 | 'views/choose_person.html'                                 |
    | http://www.codefordream.com/courses/angularjs/sections/section_angular_template_view/text_courses/3 | 'ChoosePersonCtrl'                                         |
    | http://www.codefordream.com/courses/angularjs/sections/section_angular_data_binding/text_courses/1  | 'Hello,world!'                                             |
    | http://www.codefordream.com/courses/angularjs/sections/section_angular_data_binding/text_courses/2  | '$scope.alert_tip = function(){alert('hello world!')}'     |
    | http://www.codefordream.com/courses/angularjs/sections/section_angular_ngRepeat/text_courses/0      | '$scope.numbers = [1,2,3]'                                 |
    | http://www.codefordream.com/courses/angularjs/sections/section_angular_ngRepeat/text_courses/1      | 'admin:admin vic:31415926'                                 |
    | http://www.codefordream.com/courses/angularjs/sections/section_angular_ngShow/text_courses/0        | '显示，true'                                                  |

  #html
    | http://www.codefordream.com/courses/html_basic/sections/section_1/text_courses/1 | '<h1>我也是标题<h1>'                                    |
    | http://www.codefordream.com/courses/html_basic/sections/section_1/text_courses/2 | 'p是div的子元素'                                        |
    | http://www.codefordream.com/courses/html_basic/sections/section_1/text_courses/3 | '<a class= link button >我是一个链接</a>'               |
    | http://www.codefordream.com/courses/html_basic/sections/section_3/text_courses/1 | '<div id=\"left_side\" class=\"side service-side\"></div>' |
    | http://www.codefordream.com/courses/html_basic/sections/section_3/text_courses/2 | 'div1、div2与divall是嵌套关系，div1、div2是并列关系'     |
    | http://www.codefordream.com/courses/html_basic/sections/section_4/text_courses/1 | '\<hgroup\>\<h1\>标题四\</h1\>\<h2\>标题三\</h2\>\</hgroup\>'       |
    | http://www.codefordream.com/courses/html_basic/sections/section_4/text_courses/2 | '一个\<article\>元素可以是\<address\>元素的子节点。'         |
    | http://www.codefordream.com/courses/html_basic/sections/section_5/text_courses/0 | '\<blockquote\>显示文字缩进\</blockquote\>'                 |
    | http://www.codefordream.com/courses/html_basic/sections/section_5/text_courses/1 | '\<ol\>\<li\>测试\</li\>\</ol\>'                               |
    | http://www.codefordream.com/courses/html_basic/sections/section_6/text_courses/0 | '在当前窗口当前框架中打开'                               |
    | http://www.codefordream.com/courses/html_basic/sections/section_7/text_courses/0 | '\<thead\>标签定义表格的页头'                             |
    | http://www.codefordream.com/courses/html_basic/sections/section_7/text_courses/2 | 'colspan=\"2\"'                                          |
    | http://www.codefordream.com/courses/html_basic/sections/section_8/text_courses/0 | 'accept-charset设置在发送到服务器之前对表单数据的编码'    |
    | http://www.codefordream.com/courses/html_basic/sections/section_8/text_courses/2 | '<input size=\"10\" maxlength=\"20\" placeholder=\"姓名\">'  |
    | http://www.codefordream.com/courses/html_basic/sections/section_8/text_courses/3 | '设置隐藏输入框type=\"search\"'                           |
    | http://www.codefordream.com/courses/html_basic/sections/section_8/text_courses/4 | '<textarea rows=\"10\" cols=\"20\" required></textarea>'   |

  #css
    | http://www.codefordream.com/courses/css_basic/sections/%E5%BC%95%E5%85%A5CSS/text_courses/1                                                                                                                                    | '\<h1 style=\'color: #ffffff\'\>我的颜色被修改了\</h1\>'                             |
    | http://www.codefordream.com/courses/css_basic/sections/%E5%BC%95%E5%85%A5CSS/text_courses/2                                                                                                                                    | '\<head\>\<style type=\'text/css\'\>h1 { font-size: 12px; } \</style\>\</head\>' |
    | http://www.codefordream.com/courses/css_basic/sections/CSS%E8%AF%AD%E6%B3%95%E4%B8%8E%E9%80%89%E6%8B%A9%E5%99%A8/text_courses/1                                                                                                | 'p'                                                                    |
    | http://www.codefordream.com/courses/css_basic/sections/CSS%E8%AF%AD%E6%B3%95%E4%B8%8E%E9%80%89%E6%8B%A9%E5%99%A8/text_courses/2                                                                                                | 'button{ color: white; }'                                              |
    | http://www.codefordream.com/courses/css_basic/sections/%E6%A0%B7%E5%BC%8F%E7%9A%84%E7%BB%A7%E6%89%BF%E4%B8%8E%E8%A6%86%E7%9B%96(Cascade%20Order%EF%BC%8C%E7%9B%B4%E8%AF%91%E7%BA%A7%E8%81%94%E9%A1%BA%E5%BA%8F)/text_courses/0 | 'border'                                                               |
    | http://www.codefordream.com/courses/css_basic/sections/%E6%A0%B7%E5%BC%8F%E7%9A%84%E7%BB%A7%E6%89%BF%E4%B8%8E%E8%A6%86%E7%9B%96(Cascade%20Order%EF%BC%8C%E7%9B%B4%E8%AF%91%E7%BA%A7%E8%81%94%E9%A1%BA%E5%BA%8F)/text_courses/1 | '#123456'                                                              |
    | http://www.codefordream.com/courses/css_basic/sections/%E6%A0%B7%E5%BC%8F%E7%9A%84%E7%BB%A7%E6%89%BF%E4%B8%8E%E8%A6%86%E7%9B%96(Cascade%20Order%EF%BC%8C%E7%9B%B4%E8%AF%91%E7%BA%A7%E8%81%94%E9%A1%BA%E5%BA%8F)/text_courses/2 | '#dddadd'                                                              |
    | http://www.codefordream.com/courses/css_basic/sections/%E6%A0%B7%E5%BC%8F%E7%9A%84%E7%BB%A7%E6%89%BF%E4%B8%8E%E8%A6%86%E7%9B%96(Cascade%20Order%EF%BC%8C%E7%9B%B4%E8%AF%91%E7%BA%A7%E8%81%94%E9%A1%BA%E5%BA%8F)/text_courses/3 | 'red'                                                                  |
    | http://www.codefordream.com/courses/css_basic/sections/%E6%A0%B7%E5%BC%8F%E7%9A%84%E7%BB%A7%E6%89%BF%E4%B8%8E%E8%A6%86%E7%9B%96(Cascade%20Order%EF%BC%8C%E7%9B%B4%E8%AF%91%E7%BA%A7%E8%81%94%E9%A1%BA%E5%BA%8F)/text_courses/4 | 'black'                                                                |
    | http://www.codefordream.com/courses/css_basic/sections/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E4%B8%8E%E5%88%9D%E7%BA%A7%E5%B8%83%E5%B1%80%E5%AE%9A%E4%BD%8D/text_courses/0                                                      | '69px'                                                                 |
    | http://www.codefordream.com/courses/css_basic/sections/%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E4%B8%8E%E5%88%9D%E7%BA%A7%E5%B8%83%E5%B1%80%E5%AE%9A%E4%BD%8D/text_courses/1                                                      | 'right'                                                                |
    | http://www.codefordream.com/courses/css_basic/sections/%E5%B8%83%E5%B1%80%E5%AE%9A%E4%BD%8D%EF%BC%88%E9%AB%98%E7%BA%A7%EF%BC%89/text_courses/0                                                                                 | 'none'                                                                 |
    | http://www.codefordream.com/courses/css_basic/sections/%E5%B8%83%E5%B1%80%E5%AE%9A%E4%BD%8D%EF%BC%88%E9%AB%98%E7%BA%A7%EF%BC%89/text_courses/1                                                                                 | '1000'                                                                 |
