import dotenv from "dotenv";
import express from "express"
import cors from "cors";

import connectDB from "./config/db";

import eventRoutes from "./routes/eventRoutes"
import goalRoutes from "./routes/goalRoutes"
import taskRoutes from "./routes/taskRoutes"

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.use('/api/events', eventRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(port => {

    connectDB();
    console.log(`app listens on port: ${port}`);

});