import type { Schema, Attribute } from '@strapi/strapi';

export interface VideoVideoTopic extends Schema.Component {
  collectionName: 'components_video_video_topics';
  info: {
    displayName: 'VideoTopic';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    videoUrl: Attribute.String;
  };
}

export interface UsersUsers extends Schema.Component {
  collectionName: 'components_users_users';
  info: {
    displayName: 'users';
  };
  attributes: {
    userid: Attribute.Integer;
    isCorrect: Attribute.Boolean;
  };
}

export interface TopicTopic extends Schema.Component {
  collectionName: 'components_topic_topics';
  info: {
    displayName: 'Topic';
    description: '';
  };
  attributes: {
    topic: Attribute.String;
    example: Attribute.RichText;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Attribute.String;
    description: Attribute.RichText;
    input: Attribute.Text;
    output: Attribute.String;
  };
}

export interface TextModule extends Schema.Component {
  collectionName: 'components_text_modules';
  info: {
    displayName: 'module';
  };
  attributes: {
    description: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.Component<'subcourse.name'>;
  };
}

export interface SubtaskSubtask extends Schema.Component {
  collectionName: 'components_subtask_subtasks';
  info: {
    displayName: 'subtask';
    icon: 'bell';
  };
  attributes: {
    description: Attribute.RichText;
    input: Attribute.Text;
    out: Attribute.String;
    output: Attribute.Text;
  };
}

export interface SubtaskQuiz extends Schema.Component {
  collectionName: 'components_subtask_quizzes';
  info: {
    displayName: 'quiz';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
    option1: Attribute.String;
    option2: Attribute.String;
    option3: Attribute.String;
    option4: Attribute.String;
    correct: Attribute.String;
    order: Attribute.Integer;
    points: Attribute.Integer;
  };
}

export interface SubtaskPythonSubModule extends Schema.Component {
  collectionName: 'components_subtask_python_sub_modules';
  info: {
    displayName: 'pythonSubModule';
  };
  attributes: {
    pythonSubModuleId: Attribute.Integer;
  };
}

export interface SubtaskJavascriptSubModule extends Schema.Component {
  collectionName: 'components_subtask_javascript_sub_modules';
  info: {
    displayName: 'javascriptSubModule';
  };
  attributes: {
    javascriptSubModuleId: Attribute.Integer;
  };
}

export interface SubcourseSubcourse extends Schema.Component {
  collectionName: 'components_subcourse_subcourses';
  info: {
    displayName: 'subcourse';
    icon: 'brush';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    input: Attribute.Text;
    output: Attribute.String;
  };
}

export interface SubcoursePythonSubModule extends Schema.Component {
  collectionName: 'components_subcourse_python_sub_modules';
  info: {
    displayName: 'pythonSubModule';
  };
  attributes: {
    subModuleid: Attribute.Integer;
  };
}

export interface SubcourseName extends Schema.Component {
  collectionName: 'components_subcourse_names';
  info: {
    displayName: 'name';
  };
  attributes: {
    description: Attribute.Blocks;
    input: Attribute.String;
    output: Attribute.String;
  };
}

export interface SubcourseModules extends Schema.Component {
  collectionName: 'components_subcourse_modules';
  info: {
    displayName: 'modules';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    points: Attribute.Integer;
    lessons: Attribute.Component<'subcomponent.lessons', true>;
    quiz: Attribute.Component<'subtask.quiz', true>;
    ytlink: Attribute.String;
  };
}

export interface SubcourseJavascriptSubModule extends Schema.Component {
  collectionName: 'components_subcourse_javascript_sub_modules';
  info: {
    displayName: 'javascriptSubModule';
  };
  attributes: {
    subModuleid: Attribute.Integer;
  };
}

export interface SubcourseCplusplusSubModules extends Schema.Component {
  collectionName: 'components_subcourse_cplusplus_sub_modules';
  info: {
    displayName: 'cplusplusSubModules';
  };
  attributes: {
    subModuleid: Attribute.Integer;
  };
}

export interface SubcomponentLessons extends Schema.Component {
  collectionName: 'components_subcomponent_lessons';
  info: {
    displayName: 'lessons';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    input: Attribute.String;
    output: Attribute.String;
    order: Attribute.Integer;
  };
}

export interface SubcomponentComponent extends Schema.Component {
  collectionName: 'components_subcomponent_components';
  info: {
    displayName: 'component';
  };
  attributes: {
    description: Attribute.Blocks;
    name: Attribute.Component<'intersub.intersub', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SubSubmodule extends Schema.Component {
  collectionName: 'components_sub_submodules';
  info: {
    displayName: 'submodule';
    icon: 'bell';
  };
  attributes: {
    description: Attribute.RichText;
    name: Attribute.String;
    input: Attribute.Text;
    output: Attribute.String;
  };
}

export interface SubCplusplusSubModule extends Schema.Component {
  collectionName: 'components_sub_cplusplus_sub_modules';
  info: {
    displayName: 'cplusplusSubModule';
  };
  attributes: {
    cplusplusSubModuleId: Attribute.Integer;
  };
}

export interface NameTopic extends Schema.Component {
  collectionName: 'components_name_topics';
  info: {
    displayName: 'topic';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    description: Attribute.RichText;
    input: Attribute.Text;
    output: Attribute.Text;
    points: Attribute.BigInteger;
  };
}

export interface NameName extends Schema.Component {
  collectionName: 'components_name_names';
  info: {
    displayName: 'name';
  };
  attributes: {
    name: Attribute.String;
    example: Attribute.RichText;
  };
}

export interface NameInfor extends Schema.Component {
  collectionName: 'components_name_infors';
  info: {
    displayName: 'infor';
    icon: 'book';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    input: Attribute.Text;
    output: Attribute.String;
  };
}

export interface IntersubIntersub extends Schema.Component {
  collectionName: 'components_intersub_intersubs';
  info: {
    displayName: 'intersub';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Blocks;
    input: Attribute.String;
    output: Attribute.String;
  };
}

export interface InforInfor extends Schema.Component {
  collectionName: 'components_infor_infors';
  info: {
    displayName: 'infor';
    icon: 'strikeThrough';
  };
  attributes: {
    description: Attribute.RichText;
    input: Attribute.String;
    output: Attribute.String;
    name: Attribute.String;
  };
}

export interface InfoInfo extends Schema.Component {
  collectionName: 'components_info_infos';
  info: {
    displayName: 'info';
    description: '';
  };
  attributes: {
    description: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.Component<'subtask.subtask'>;
  };
}

export interface CourseSubtask extends Schema.Component {
  collectionName: 'components_course_subtasks';
  info: {
    displayName: 'subtask';
    icon: 'car';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.RichText;
    name: Attribute.String;
  };
}

export interface CoursePythonModule extends Schema.Component {
  collectionName: 'components_course_python_modules';
  info: {
    displayName: 'pythonModule';
  };
  attributes: {
    pythonMainModuleId: Attribute.Integer;
    pythonSubModule: Attribute.Component<'subtask.python-sub-module', true>;
  };
}

export interface CourseJavascriptModule extends Schema.Component {
  collectionName: 'components_course_javascript_modules';
  info: {
    displayName: 'javascriptModule';
  };
  attributes: {
    javascriptMainModuleId: Attribute.Integer;
    javascriptSubModule: Attribute.Component<
      'subtask.javascript-sub-module',
      true
    >;
  };
}

export interface CourseCplusplus extends Schema.Component {
  collectionName: 'components_course_cpluspluses';
  info: {
    displayName: 'cplusplus';
  };
  attributes: {};
}

export interface CourseCplusplusModule extends Schema.Component {
  collectionName: 'components_course_cplusplus_modules';
  info: {
    displayName: 'cplusplusModule';
  };
  attributes: {
    cplusplusMainModuleId: Attribute.Integer;
    cplusplusSubModule: Attribute.Component<'sub.cplusplus-sub-module', true>;
  };
}

export interface ArticleArticle extends Schema.Component {
  collectionName: 'components_article_articles';
  info: {
    displayName: 'article';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'video.video-topic': VideoVideoTopic;
      'users.users': UsersUsers;
      'topic.topic': TopicTopic;
      'text.text': TextText;
      'text.module': TextModule;
      'subtask.subtask': SubtaskSubtask;
      'subtask.quiz': SubtaskQuiz;
      'subtask.python-sub-module': SubtaskPythonSubModule;
      'subtask.javascript-sub-module': SubtaskJavascriptSubModule;
      'subcourse.subcourse': SubcourseSubcourse;
      'subcourse.python-sub-module': SubcoursePythonSubModule;
      'subcourse.name': SubcourseName;
      'subcourse.modules': SubcourseModules;
      'subcourse.javascript-sub-module': SubcourseJavascriptSubModule;
      'subcourse.cplusplus-sub-modules': SubcourseCplusplusSubModules;
      'subcomponent.lessons': SubcomponentLessons;
      'subcomponent.component': SubcomponentComponent;
      'sub.submodule': SubSubmodule;
      'sub.cplusplus-sub-module': SubCplusplusSubModule;
      'name.topic': NameTopic;
      'name.name': NameName;
      'name.infor': NameInfor;
      'intersub.intersub': IntersubIntersub;
      'infor.infor': InforInfor;
      'info.info': InfoInfo;
      'course.subtask': CourseSubtask;
      'course.python-module': CoursePythonModule;
      'course.javascript-module': CourseJavascriptModule;
      'course.cplusplus': CourseCplusplus;
      'course.cplusplus-module': CourseCplusplusModule;
      'article.article': ArticleArticle;
    }
  }
}
