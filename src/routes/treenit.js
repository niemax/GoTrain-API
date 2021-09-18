const express = require("express");

const router = express.Router();

const Treeni = require("../models/Treeni");

router.post("/:treeni", async (req, res) => {
  const treeni = new Treeni({
    name: req.params.treeni,
    kuvaus: req.body.kuvaus,
    liikkeet: req.body.liikkeet,
  });

  try {
    await treeni.save();
    res.send(treeni);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:treeni", async (req, res) => {
  Treeni.find({
    name: req.params.treeni,
  })
    .exec()
    .then((data) => {
      console.log("data", data);
      res.send(data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

module.exports = router;
