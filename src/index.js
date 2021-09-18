let express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");

const PORT = process.env.PORT || 5050;
const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

const treenit = require("./routes/treenit");
const cards = require("./routes/cards");

app.use("/api/uploads", express.static("./uploads"));
app.use("/api/treenit", treenit);
app.use("/api/cards", cards);

mongoose
  .connect(
    "mongodb+srv://niemax:sd1YLhqA2S68ngaj@cluster0.47fkt.mongodb.net/myDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    },
    {
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.info(`Server has successfully started on PORT: ${PORT}`);
    });
  });
