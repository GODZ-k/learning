import { connectKafka, connectKafkaConsumer } from "./config/kafka.config.js";
import { consumeMessage, createTopics } from "./helpers/kafka.helper.js";


export const startServices = async()=>{
    try {
        await connectKafka()
        await createTopics('test')        
        await consumeMessage('test')
    } catch (error) {
        console.log("something went wrong");
        process.exit(1)
    }
}