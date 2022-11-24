import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose"; 
import cors from "cors"; 
import router from "./router.js"; 
const PORT = 3000 
const URL_EP='mongodb+srv://vladdizlaw:admin12345@cluster0.rvgvwqh.mongodb.net/?retryWrites=true&w=majority'

  
const app = express();

const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig)); 
app.use(express.json()); 
app.use(bodyParser.json({limit: '50mb',extended: true,
parameterLimit:50000}));

app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));
app.use("/api", router);

async function startApp() {
  try {
    await Mongoose.connect(URL_EP, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }); //Подключаемся к MongoDB
    
    app.listen(PORT,  () => {
      console.log("SERVER START AT PORT:", PORT);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
