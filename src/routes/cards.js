const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

router.delete("/etusivucards", async (req, res) => {
  const name = req.body.nimi;

  Card.findOneAndDelete(name)
    .exec()
    .then((data) => {
      console.log("data", data);
      res.send(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

router.post(
  "/etusivucards",
  async (req, res) => {
    const card = new Card({
      nimi: req.body.nimi,
      treeninkesto: req.body.treeninkesto,
      image: req.body.image,
    });

    try {
      await card.save();
      res.send(card);
    } catch (error) {
      console.error(error);
    }
  },
  (error, req, res, next) => {
    res.status(400).send({
      error: error.message,
    });
  }
);

router.get(
  "/etusivucards",
  async (req, res) => {
    Card.find({})
      .then((data) => {
        console.log("data", data);
        res.send(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  },
  (error, req, res, next) => {
    res.status(400).send({
      error: error.message,
    });
  }
);

module.exports = router;
