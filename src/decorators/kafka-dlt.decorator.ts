import { EventPattern, Transport } from "@nestjs/microservices";
import { getDeadTopicName } from "../utils";

export const KafkaDlt = (topic: string) => {
  const deadTopicName = getDeadTopicName(topic);
  return EventPattern(deadTopicName, Transport.KAFKA);
};
