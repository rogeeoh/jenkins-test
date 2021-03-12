import express from "express";

class App {
    public application: express.Application = express();

    // constructor() {
    //     this.application = express();
    // }
}

const app = new App().application;

app.get("/",(req : express.Request , res : express.Response) =>{
    res.send("v4");
})
app.listen(4000,()=>console.log("start"));