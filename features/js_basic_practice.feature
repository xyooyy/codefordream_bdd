Feature: Test practice

  Scenario Outline: Doing Practice
    Given I am on <name> practice with <url>
    When input <answer> in <file_name> and submit it
    Then successful challenge

  Examples:
    | name                         | url                                                                                                              | answer                                                                                  | file_name                     |

  # js basic
    | hello_world                  | http://www.codefordream.com/courses/js_basic/sections/section_0/practices/normal/practice_1                      | ./practices_answer/js_basic_section/hello_world.js                                      | practice.js                   |
    | code_comments                | http://www.codefordream.com/courses/js_basic/sections/section_1/practices/normal/practice_1                      | ./practices_answer/js_basic_section/code_comments.js                                    | practice.js                   |
    | simple_data_types            | http://www.codefordream.com/courses/js_basic/sections/section_2/practices/normal/practice_1                      | ./practices_answer/js_basic_section/simple_data_types.js                                | practice.js                   |
    | complex_data_types           | http://www.codefordream.com/courses/js_basic/sections/section_2/practices/normal/practice_2                      | ./practices_answer/js_basic_section/complex_data_types.js                               | practice.js                   |
    | math_caculate                | http://www.codefordream.com/courses/js_basic/sections/section_3/practices/normal/practice_1                      | ./practices_answer/js_basic_section/math_caculate.js                                    | practice.js                   |
    | compare_symble               | http://www.codefordream.com/courses/js_basic/sections/section_4/practices/normal/practice_1                      | ./practices_answer/js_basic_section/compare_symble.js                                   | practice.js                   |
    | logic_symble                 | http://www.codefordream.com/courses/js_basic/sections/section_4/practices/normal/practice_2                      | ./practices_answer/js_basic_section/logic_symble.js                                     | practice.js                   |
    | if_operator                  | http://www.codefordream.com/courses/js_basic/sections/section_5/practices/normal/practice_1                      | ./practices_answer/js_basic_section/if_operator.js                                      | practice.js                   |
    | if_else_operator             | http://www.codefordream.com/courses/js_basic/sections/section_5/practices/normal/practice_2                      | ./practices_answer/js_basic_section/if_else_operator.js                                 | practice.js                   |
    | mutiple_conditions           | http://www.codefordream.com/courses/js_basic/sections/section_5/practices/normal/practice_3                      | ./practices_answer/js_basic_section/mutiple_conditions.js                               | practice.js                   |
    | for_loop                     | http://www.codefordream.com/courses/js_basic/sections/section_6/practices/normal/practice_1                      | ./practices_answer/js_basic_section/for_loop.js                                         | practice.js                   |
    | string_splice                | http://www.codefordream.com/courses/js_basic/sections/section_6/practices/normal/practice_2                      | ./practices_answer/js_basic_section/string_splice.js                                    | practice.js                   |
    | sum_loop                     | http://www.codefordream.com/courses/js_basic/sections/section_6/practices/normal/practice_3                      | ./practices_answer/js_basic_section/sum_loop.js                                         | practice.js                   |
    | function                     | http://www.codefordream.com/courses/js_basic/sections/section_7/practices/normal/practice_1                      | ./practices_answer/js_basic_section/function.js                                         | practice.js                   |
    | function_invoke              | http://www.codefordream.com/courses/js_basic/sections/section_7/practices/normal/practice_2                      | ./practices_answer/js_basic_section/function_invoke.js                                  | practice.js                   |
    | function_para                | http://www.codefordream.com/courses/js_basic/sections/section_7/practices/normal/practice_3                      | ./practices_answer/js_basic_section/function_para.js                                    | practice.js                   |
    | using_para                   | http://www.codefordream.com/courses/js_basic/sections/section_7/practices/normal/practice_4                      | ./practices_answer/js_basic_section/using_para.js                                       | practice.js                   |

  #  js middle
    | variable_scope               | http://www.codefordream.com/courses/js_intermediate/sections/section_0/practices/normal/practice_1               | ./practices_answer/js_middle_section/variable_scope.js                                  | challenge_0_1.js              |
    | parameter_variable           | http://www.codefordream.com/courses/js_intermediate/sections/section_0/practices/normal/practice_2               | ./practices_answer/js_middle_section/parameter_variable.js                              | challenge_0_2.js              |
    | scope                        | http://www.codefordream.com/courses/js_intermediate/sections/section_0/practices/normal/practice_3               | ./practices_answer/js_middle_section/scope.js                                           | challenge_0_3.js              |
    | class_and_object             | http://www.codefordream.com/courses/js_intermediate/sections/section_1/practices/normal/practice_1               | ./practices_answer/js_middle_section/class_and_object.js                                | challenge_1_1.js              |
    | structure_function           | http://www.codefordream.com/courses/js_intermediate/sections/section_1/practices/normal/practice_2               | ./practices_answer/js_middle_section/structure_function.js                              | challenge_1_2.js              |
    | this_reference               | http://www.codefordream.com/courses/js_intermediate/sections/section_2/practices/normal/practice_1               | ./practices_answer/js_middle_section/this_reference.js                                  | challenge_2_1.js              |
    | apply_function               | http://www.codefordream.com/courses/js_intermediate/sections/section_2/practices/normal/practice_2               | ./practices_answer/js_middle_section/apply_function.js                                  | challenge_2_2.js              |
    | prototype_based              | http://www.codefordream.com/courses/js_intermediate/sections/section_3/practices/normal/practice_1               | ./practices_answer/js_middle_section/prototype_based.js                                 | challenge_3_1.js              |
    | prototype_expand             | http://www.codefordream.com/courses/js_intermediate/sections/section_3/practices/normal/practice_2               | ./practices_answer/js_middle_section/prototype_expand.js                                | challenge_3_2.js              |
    | callback_function            | http://www.codefordream.com/courses/js_intermediate/sections/section_4/practices/normal/practice_1               | ./practices_answer/js_middle_section/callback_function.js                               | challenge_4_1.js              |

  # js basic training camp
    # js_array
    | add_one_dimensional_array    | http://www.codefordream.com/courses/js_learning_camps/sections/section_1/practices/normal/practice_1             | ./practices_answer/js_basic_training_camp/js_array/add_one_dimensional_array.js         | practice.js                   |
    | create_one_dimensional_array | http://www.codefordream.com/courses/js_learning_camps/sections/section_1/practices/normal/practice_2             | ./practices_answer/js_basic_training_camp/js_array/create_one_dimensional_array.js      | practice.js                   |
    | visit_one_dimensional_array  | http://www.codefordream.com/courses/js_learning_camps/sections/section_1/practices/normal/practice_3             | ./practices_answer/js_basic_training_camp/js_array/visit_one_dimensional_array.js       | practice.js                   |
    | add_two_dimensional_array    | http://www.codefordream.com/courses/js_learning_camps/sections/section_1/practices/normal/practice_4             | ./practices_answer/js_basic_training_camp/js_array/add_two_dimensional_array.js         | practice.js                   |
    | create_two_dimensional_array | http://www.codefordream.com/courses/js_learning_camps/sections/section_1/practices/normal/practice_5             | ./practices_answer/js_basic_training_camp/js_array/create_two_dimensional_array.js      | practice.js                   |
    | visit_two_dimensional_array  | http://www.codefordream.com/courses/js_learning_camps/sections/section_1/practices/normal/practice_6             | ./practices_answer/js_basic_training_camp/js_array/visit_two_dimensional_array.js       | practice.js                   |
    | hash_array_assignment        | http://www.codefordream.com/courses/js_learning_camps/sections/section_1/practices/normal/practice_7             | ./practices_answer/js_basic_training_camp/js_array/hash_array_assignment.js             | practice.js                   |
    | select_hash_array            | http://www.codefordream.com/courses/js_learning_camps/sections/section_1/practices/normal/practice_8             | ./practices_answer/js_basic_training_camp/js_array/select_hash_array.js                 | practice.js                   |

    # branch_and_cycle_one
    | simple_if_else               | http://www.codefordream.com/courses/js_learning_camps/sections/section_2/practices/normal/practice_1             | ./practices_answer/js_basic_training_camp/branch_and_cycle_one/simple_if_else.js        | practice.js                   |
    | variety_condition            | http://www.codefordream.com/courses/js_learning_camps/sections/section_2/practices/normal/practice_2             | ./practices_answer/js_basic_training_camp/branch_and_cycle_one/variety_condition.js     | practice.js                   |
    | for_simple_cycle             | http://www.codefordream.com/courses/js_learning_camps/sections/section_2/practices/normal/practice_3             | ./practices_answer/js_basic_training_camp/branch_and_cycle_one/for_simple_cycle.js      | practice.js                   |
    | for_nested_cycle             | http://www.codefordream.com/courses/js_learning_camps/sections/section_2/practices/normal/practice_4             | ./practices_answer/js_basic_training_camp/branch_and_cycle_one/for_nested_cycle.js      | practice.js                   |
    | hash_array_one               | http://www.codefordream.com/courses/js_learning_camps/sections/section_2/practices/normal/practice_5             | ./practices_answer/js_basic_training_camp/branch_and_cycle_one/hash_array_one.js        | practice.js                   |
    | tied_if_else                 | http://www.codefordream.com/courses/js_learning_camps/sections/section_2/practices/normal/practice_6             | ./practices_answer/js_basic_training_camp/branch_and_cycle_one/tied_if_else.js          | practice.js                   |
    | hash_array_two               | http://www.codefordream.com/courses/js_learning_camps/sections/section_2/practices/normal/practice_7             | ./practices_answer/js_basic_training_camp/branch_and_cycle_one/hash_array_two.js        | practice.js                   |

    # branch_and_cycle_two
    | for_if_nested                | http://www.codefordream.com/courses/js_learning_camps/sections/section_3/practices/normal/practice_1             | ./practices_answer/js_basic_training_camp/branch_and_cycle_two/for_if_nested.js         | practice.js                   |
    | for_if_else_nested           | http://www.codefordream.com/courses/js_learning_camps/sections/section_3/practices/normal/practice_2             | ./practices_answer/js_basic_training_camp/branch_and_cycle_two/for_if_else_nested.js    | practice.js                   |
    | result_the_highest           | http://www.codefordream.com/courses/js_learning_camps/sections/section_3/practices/normal/practice_3             | ./practices_answer/js_basic_training_camp/branch_and_cycle_two/result_the_highest.js    | practice.js                   |
    | complex_data                 | http://www.codefordream.com/courses/js_learning_camps/sections/section_3/practices/normal/practice_4             | ./practices_answer/js_basic_training_camp/branch_and_cycle_two/complex_data.js          | practice.js                   |
    | tide_cycle                   | http://www.codefordream.com/courses/js_learning_camps/sections/section_3/practices/normal/practice_5             | ./practices_answer/js_basic_training_camp/branch_and_cycle_two/tide_cycle.js            | practice.js                   |
    | multilayer_for_if            | http://www.codefordream.com/courses/js_learning_camps/sections/section_3/practices/normal/practice_6             | ./practices_answer/js_basic_training_camp/branch_and_cycle_two/multilayer_for_if.js     | practice.js                   |
    | hybrid_nested                | http://www.codefordream.com/courses/js_learning_camps/sections/section_3/practices/normal/practice_7             | ./practices_answer/js_basic_training_camp/branch_and_cycle_two/hybrid_nested.js         | practice.js                   |
    | for_cycle_nested             | http://www.codefordream.com/courses/js_learning_camps/sections/section_3/practices/normal/practice_8             | ./practices_answer/js_basic_training_camp/branch_and_cycle_two/for_cycle_nested.js      | practice.js                   |

    # string operation
    | connect_string               | http://www.codefordream.com/courses/js_learning_camps/sections/section_4/practices/normal/practice_1             | ./practices_answer/js_basic_training_camp/string_operation/connect_string.js            | practice.js                   |
    | connect_array                | http://www.codefordream.com/courses/js_learning_camps/sections/section_4/practices/normal/practice_2             | ./practices_answer/js_basic_training_camp/string_operation/connect_array.js             | practice.js                   |
    | connect_hash_array           | http://www.codefordream.com/courses/js_learning_camps/sections/section_4/practices/normal/practice_3             | ./practices_answer/js_basic_training_camp/string_operation/connect_hash_array.js        | practice.js                   |
    | read_average                 | http://www.codefordream.com/courses/js_learning_camps/sections/section_4/practices/normal/practice_4             | ./practices_answer/js_basic_training_camp/string_operation/read_average.js              | practice.js                   |
    | read_subject_result          | http://www.codefordream.com/courses/js_learning_camps/sections/section_4/practices/normal/practice_5             | ./practices_answer/js_basic_training_camp/string_operation/read_subject_result.js       | practice.js                   |
    | print_result                 | http://www.codefordream.com/courses/js_learning_camps/sections/section_4/practices/normal/practice_6             | ./practices_answer/js_basic_training_camp/string_operation/print_result.js              | practice.js                   |
    | connect_student_string       | http://www.codefordream.com/courses/js_learning_camps/sections/section_4/practices/normal/practice_7             | ./practices_answer/js_basic_training_camp/string_operation/connect_student_string.js    | practice.js                   |
    | student_average_result       | http://www.codefordream.com/courses/js_learning_camps/sections/section_4/practices/normal/practice_8             | ./practices_answer/js_basic_training_camp/string_operation/student_average_result.js    | practice.js                   |

    # object operation
    | supplement_object            | http://www.codefordream.com/courses/js_learning_camps/sections/section_5/practices/normal/practice_1             | ./practices_answer/js_basic_training_camp/object_operation/supplement_object.js         | practice.js                   |
    | create_object                | http://www.codefordream.com/courses/js_learning_camps/sections/section_5/practices/normal/practice_2             | ./practices_answer/js_basic_training_camp/object_operation/create_object.js             | practice.js                   |
    | select_object_data           | http://www.codefordream.com/courses/js_learning_camps/sections/section_5/practices/normal/practice_3             | ./practices_answer/js_basic_training_camp/object_operation/select_object_data.js        | practice.js                   |
    | supplement_complex_object    | http://www.codefordream.com/courses/js_learning_camps/sections/section_5/practices/normal/practice_4             | ./practices_answer/js_basic_training_camp/object_operation/supplement_complex_object.js | practice.js                   |
    | create_complex_object        | http://www.codefordream.com/courses/js_learning_camps/sections/section_5/practices/normal/practice_5             | ./practices_answer/js_basic_training_camp/object_operation/create_complex_object.js     | practice.js                   |
    | select_complex_object        | http://www.codefordream.com/courses/js_learning_camps/sections/section_5/practices/normal/practice_6             | ./practices_answer/js_basic_training_camp/object_operation/select_complex_object.js     | practice.js                   |
    | print_result                 | http://www.codefordream.com/courses/js_learning_camps/sections/section_5/practices/normal/practice_7             | ./practices_answer/js_basic_training_camp/object_operation/print_result.js              | practice.js                   |
    | strives_for_average          | http://www.codefordream.com/courses/js_learning_camps/sections/section_5/practices/normal/practice_8             | ./practices_answer/js_basic_training_camp/object_operation/strives_for_average.js       | practice.js                   |

    # js function
    | function_one                 | http://www.codefordream.com/courses/js_learning_camps/sections/section_6/practices/normal/practice_1             | ./practices_answer/js_basic_training_camp/js_function/function_one.js                   | practice.js                   |
    | function_two                 | http://www.codefordream.com/courses/js_learning_camps/sections/section_6/practices/normal/practice_2             | ./practices_answer/js_basic_training_camp/js_function/function_two.js                   | practice.js                   |
    | call_one                     | http://www.codefordream.com/courses/js_learning_camps/sections/section_6/practices/normal/practice_3             | ./practices_answer/js_basic_training_camp/js_function/call_one.js                       | practice.js                   |
    | call_two                     | http://www.codefordream.com/courses/js_learning_camps/sections/section_6/practices/normal/practice_4             | ./practices_answer/js_basic_training_camp/js_function/call_two.js                       | practice.js                   |
    | variable_scope               | http://www.codefordream.com/courses/js_learning_camps/sections/section_6/practices/normal/practice_7             | ./practices_answer/js_basic_training_camp/js_function/variable_scope.js                 | practice.js                   |


  # js sicp
    # process and operation
    | factorial                    | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_1/practices/normal/practice_1             | ./practices_answer/js_sicp/process_and_operation/factorial.js                           | practice.js                   |
    | sequence                     | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_1/practices/normal/practice_2             | ./practices_answer/js_sicp/process_and_operation/sequence.js                            | practice.js                   |
    | change_problem               | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_1/practices/normal/practice_3             | ./practices_answer/js_sicp/process_and_operation/change_problem.js                      | practice.js                   |
    | branch_with_recursive        | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_1/practices/normal/practice_4             | ./practices_answer/js_sicp/process_and_operation/branch_with_recursive.js               | practice.js                   |
    | pascal_triangle              | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_1/practices/normal/practice_5             | ./practices_answer/js_sicp/process_and_operation/pascal_triangle.js                     | practice.js                   |
    | greatest_common_divisor      | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_1/practices/normal/practice_6             | ./practices_answer/js_sicp/process_and_operation/greatest_common_divisor.js             | practice.js                   |

    # function first citizen
    | senior_function_sum          | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_2/practices/normal/practice_1             | ./practices_answer/js_sicp/function_first_citizen/senior_function_sum.js                | practice.js                   |
    | high_order_function          | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_2/practices/normal/practice_2             | ./practices_answer/js_sicp/function_first_citizen/high_order_function.js                | practice.js                   |
    | abstract_endless             | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_2/practices/normal/practice_3             | ./practices_answer/js_sicp/function_first_citizen/abstract_endless.js                   | practice.js                   |
    | again_abstract               | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_2/practices/normal/practice_4             | ./practices_answer/js_sicp/function_first_citizen/again_abstract.js                     | practice.js                   |
    | continued_fraction           | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_2/practices/normal/practice_5             | ./practices_answer/js_sicp/function_first_citizen/continued_fraction.js                 | practice.js                   |
    | newton_method_function       | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_2/practices/normal/practice_6             | ./practices_answer/js_sicp/function_first_citizen/newton_method_function.js             | practice.js                   |
    | function_first_citizen       | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_2/practices/normal/practice_7             | ./practices_answer/js_sicp/function_first_citizen/function_first_citizen.js             | practice.js                   |
    | iterative_improvement        | http://www.codefordream.com/courses/js-sicp-boot-camp/sections/section_2/practices/normal/practice_8             | ./practices_answer/js_sicp/function_first_citizen/iterative_improvement.js              | practice.js                   |

  # data structures
    # array
    | select_data                  | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_1/practices/normal/practice_1         | ./practices_answer/data_structures/array/select_data.js                                 | find_data_index_from_array.js |
    | add_data                     | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_1/practices/normal/practice_2         | ./practices_answer/data_structures/array/add_data.js                                    | array_basic_operation.js      |
    | delete_data                  | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_1/practices/normal/practice_3         | ./practices_answer/data_structures/array/delete_data.js                                 | array_basic_operation.js      |
    | insert_data                  | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_1/practices/normal/practice_4         | ./practices_answer/data_structures/array/insert_data.js                                 | array_basic_operation.js      |

    # hash table
    | create                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_4/practices/normal/practice_1         | ./practices_answer/data_structures/hash_table/create.js                                 | hash_table.js                 |
    | insert                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_4/practices/normal/practice_2         | ./practices_answer/data_structures/hash_table/insert.js                                 | hash_table.js                 |
    | select                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_4/practices/normal/practice_3         | ./practices_answer/data_structures/hash_table/select.js                                 | hash_table.js                 |

    # sort
    | insert                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_5/practices/normal/practice_1         | ./practices_answer/data_structures/sort/insert.js                                       | array_sort.js                 |
    | bubble                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_5/practices/normal/practice_2         | ./practices_answer/data_structures/sort/bubble.js                                       | array_sort.js                 |
    | select                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_5/practices/normal/practice_3         | ./practices_answer/data_structures/sort/select.js                                       | array_sort.js                 |
    | hill                         | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_5/practices/normal/practice_4         | ./practices_answer/data_structures/sort/hill.js                                         | array_sort.js                 |
    | quick                        | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_5/practices/normal/practice_5         | ./practices_answer/data_structures/sort/quick.js                                        | array_sort.js                 |

    # binary_tree
    | traverse                     | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_3/practices/normal/practice_0         | ./practices_answer/data_structures/binary_tree/traverse.js                              | binary_tree.js                |
    | insert                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_3/practices/normal/practice_1         | ./practices_answer/data_structures/binary_tree/insert.js                                | binary_tree.js                |
    | create                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_3/practices/normal/practice_2         | ./practices_answer/data_structures/binary_tree/create.js                                | binary_tree.js                |
    | select                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_3/practices/normal/practice_3         | ./practices_answer/data_structures/binary_tree/select.js                                | binary_tree.js                |
    | delete                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_3/practices/normal/practice_4         | ./practices_answer/data_structures/binary_tree/delete.js                                | binary_tree.js                |

    # list
    | insert                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_2/practices/normal/practice_1         | ./practices_answer/data_structures/list/insert.js                                       | linked_list.js                |
    | create                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_2/practices/normal/practice_2         | ./practices_answer/data_structures/list/create.js                                       | linked_list.js                |
    | create_two                   | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_2/practices/normal/practice_3         | ./practices_answer/data_structures/list/create_two.js                                   | linked_list.js                |
    | select                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_2/practices/normal/practice_4         | ./practices_answer/data_structures/list/select.js                                       | linked_list.js                |
    | delete                       | http://www.codefordream.com/courses/js_intermediate_camps/sections/section_2/practices/normal/practice_5         | ./practices_answer/data_structures/list/delete.js                                       | linked_list.js                |

  # angular_js 此测试只适应于无html且只改变当前单页的内容
    | template_view                | http://www.codefordream.com/courses/angularjs/sections/section_angular_template_view/practices/normal/practice_1 | ./practices_answer/angular_js/template_view.js                                          | route.js                      |
    | variable_binding             | http://www.codefordream.com/courses/angularjs/sections/section_angular_data_binding/practices/normal/practice_1  | ./practices_answer/angular_js/variable_binding.js                                       | order_details_controller.js   |
    | function_binding             | http://www.codefordream.com/courses/angularjs/sections/section_angular_data_binding/practices/normal/practice_2  | ./practices_answer/angular_js/function_binding.js                                       | order_details_controller.js   |
    | ng_repeat                    | http://www.codefordream.com/courses/angularjs/sections/section_angular_ngRepeat/practices/normal/practice_1      | ./practices_answer/angular_js/ng_repeat.js                                              | choose_person_controller.js   |

