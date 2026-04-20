import {router as UserRouter} from "./routes/user.routes.js";
import express from "express";
import cors from "cors";
const app = express();




app.use(cors());
app.use("/api/v1/user",UserRouter);

export default app;