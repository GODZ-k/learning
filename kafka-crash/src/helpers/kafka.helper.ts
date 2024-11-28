import { KafkaMessage } from "kafkajs";
import {
  admin,
  connectKafkaConsumer,
  consumer,
  producer,
} from "../config/kafka.config.js";

export const produceMessage = async (topic: string, data: KafkaMessage) => {
  try {

    console.log("producer is producing ...");
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(data) }],
    });
    console.log("message produces successfully ...");

  } catch (error) {
    console.log("something went wrong")
  } 
};


const processMessages = (messages:Array<Object>,isProcessing:Boolean) =>{
  if(messages.length > 0 && !isProcessing){
    isProcessing = true;
    const batchToProcess = [ ...messages]
    messages.length = 0;

    try {
        console.log("data recieved successfully from ", batchToProcess);
    } catch (error) {
      console.log("failed to save into database.")
      messages.push(...batchToProcess);
    }finally{
      isProcessing = false;
    }
}}

export const consumeMessage = async (topic: string) => {
  try {      

    const messages:object[] = [];
    let isProcessing = false;

    await connectKafkaConsumer();

    await consumer.subscribe({ topic, fromBeginning:true });
      
    await consumer.run({
      eachMessage: async ({ message, topic, heartbeat, partition, pause }) => {

        const parseMessage:object = message.value ? JSON.parse(message.value?.toString()) : "";

        console.log('Pushing the message to Kafka .....');
        
        setTimeout(() => {
          messages.push(parseMessage)
        }, 5000);

        console.log(' message pushed to Kafka .....' , messages);


        if(messages.length >= 1000){
          console.log(' wait for bulk data .....');
          processMessages(messages,isProcessing)
          return
        }

        console.log(' run every 5 sec .....');
        setInterval(() => {
          processMessages(messages,isProcessing)
        }, 5000);

        return
      },
    });

  } catch (error) {
    console.log("failed to consume the message ", error);
  } 
};


export const createTopics = async (topic: string) => {
  try {
    const topicExists = await admin.listTopics();

    if (!topicExists.includes(topic)) {
      await admin.createTopics({
        topics: [
          {
            topic,
          },
        ],
      });
      console.log(`Topic "${topic}" created successfully.`);
    } else {
      console.log(`Topic already created.`);
    }
  } catch (error) {
    console.error("Failed to create topic or connect admin:", error);
  }
};
    


