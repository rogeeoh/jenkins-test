import express from "express";

class App {
    public application: express.Application = express();

    // constructor() {
    //     this.application = express();
    // }
}

const app = new App().application;

app.get("/",(req : express.Request , res : express.Response) =>{
    res.send("v9");
})
app.listen(4050,()=>console.log("start"));