import express from "express";
import dotenv from "dotenv";
import indexRouter from "./router";
import versionRouter from "./router/version";

dotenv.config();

const PORT:Number = parseInt(process.env.PORT!) || 3000;

const app:express.Application = express();

app.use('/', indexRouter);
app.use('/version', versionRouter);

app.listen(PORT,()=> {
    console.log(`server starts at ${PORT}`);
});