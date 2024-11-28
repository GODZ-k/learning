import { Kafka, logLevel } from "kafkajs";
export const kafka = new Kafka({
    clientId: "kafka",
    brokers: ["192.168.1.19:9092"],
    logLevel: logLevel.ERROR,
});
export const producer = kafka.producer({
    retry: {
        retries: 3,
        maxRetryTime: 10000,
    }
});
export const consumer = kafka.consumer({ groupId: "test-group", maxWaitTimeInMs: 10000 });
export const admin = kafka.admin();
// to create a kafka producer
export const connectKafka = async () => {
    try {
        await producer.connect();
        console.log("producer connected successfully");
        await admin.connect();
        console.log("Admin connected successfully.");
    }
    catch (error) {
        console.log("Something went wrong.", error);
    }
};
export const connectKafkaConsumer = async () => {
    await consumer.connect().then((res) => {
        console.log("consumer is connected successfully");
    });
};
