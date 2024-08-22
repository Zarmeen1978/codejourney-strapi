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

export interface ArticleArticle extends Schema.Component {
  collectionName: 'components_article_articles';
  info: {
    displayName: 'article';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    input: Attribute.String;
    output: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'video.video-topic': VideoVideoTopic;
      'topic.topic': TopicTopic;
      'text.text': TextText;
      'name.topic': NameTopic;
      'name.name': NameName;
      'name.infor': NameInfor;
      'article.article': ArticleArticle;
    }
  }
}
