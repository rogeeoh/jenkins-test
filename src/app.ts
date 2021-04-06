import express from "express";

const PORT = 3000;

class App {
    public application: express.Application = express();
}

const app = new App().application;

app.get("/",(req : express.Request , res : express.Response) =>{
    res.send("v2");
})
app.listen(PORT,()=> {
    console.log(`server starts at ${PORT}`);
});