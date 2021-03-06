var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.json(result);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    console.log("id: " + id);
    burger.updateOne("devoured", req.body.devoured, id, function (result) {
        if (result.changedRos == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

