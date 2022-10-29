import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//routes
import postRouter from "./routes/posts.js";

const app = express();
app.use("/posts", postRouter);

//we might send images
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//connecting mongodb
const CONNECTION_URL = `mongodb+srv://shareme:${process.env.CONNECTION_URL_PASSWORD}@cluster0.dfgco0x.mongodb.net/?retryWrites=true&w=majority`;

//heroku will automatically create port number
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => app.listen(PORT),
    () => console.log(`server running on port ${PORT}`)
  )
  .catch((error) => console.log(error.message));

//we don't get any warning in console
// mongoose.set("useFindAndModify", false);
