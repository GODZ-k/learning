import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv";
import { consumeMessage, produceMessage } from "./helpers/kafka.helper.js";
import { startServices } from "./start.services.js";

const app: express.Express = express();
app.use(cors({}));
app.use(express.json())

startServices()

app.post("/", async (req: Request, res: Response)=> {
  const data = req.body;

  for(let i=0; i<=10000; i++){
      await produceMessage('test' , data)
  }

  return res.status(200).json({
    msg: "everything is working fine !",
  });
});


app.listen(3000, () => {
  console.log("server is listning on port 3000");
});


