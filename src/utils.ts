import { TopicSuffixingStrategy } from "./constants";

export const getRetryTopicName = (topicName: string, index: string) =>
  `${topicName}${TopicSuffixingStrategy.RETRY_SUFFIX}-${index}`;

export const getDeadTopicName = (topicName: string) =>
  `${topicName}${TopicSuffixingStrategy.DLT_SUFFIX}`;

export const getPatternRetryTopic = (topicName: string) =>
  `${topicName}${TopicSuffixingStrategy.RETRY_SUFFIX}-[1-9]`;
