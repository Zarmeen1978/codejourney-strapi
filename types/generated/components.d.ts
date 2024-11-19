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
      'topic.topic': TopicTopic;
      'text.text': TextText;
      'text.module': TextModule;
      'subtask.subtask': SubtaskSubtask;
      'subcourse.subcourse': SubcourseSubcourse;
      'subcourse.name': SubcourseName;
      'subcomponent.component': SubcomponentComponent;
      'sub.submodule': SubSubmodule;
      'name.topic': NameTopic;
      'name.name': NameName;
      'name.infor': NameInfor;
      'intersub.intersub': IntersubIntersub;
      'infor.infor': InforInfor;
      'info.info': InfoInfo;
      'course.subtask': CourseSubtask;
      'article.article': ArticleArticle;
    }
  }
}
