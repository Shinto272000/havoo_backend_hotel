import express from "express"
import serverConfig from "./Config/serverConfig.js";
import dbConnection from "./Config/dbConfig.js";
import apiRouter from "./Routes/index.js";
import cors from 'cors'


const app = express();


app.use(cors(
  {
origin:["https://car-rental-front-end-renderhelp.vercel.app","http://localhost:5173"],  

methods:['GET','POST','PUT','DELETE','OPTIONS'], 
allowedHeaders:['Content-Type', 'Authorization'], 
credentials : true, 
}
)
); 

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Successful response.');
});
app.use("/api",apiRouter)


app.listen(serverConfig.Port, () => {console.log(`Example app is listening on port ${serverConfig.Port}.`);
dbConnection()
console.log("Db connected");
})
