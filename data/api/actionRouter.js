const express = require("express");
const router = express.Router();
const Actions = require("../helpers/actionModel.js");

router.get("/", async (req, res) => {
	try {
		const actions = await Actions.get(req.params.id);
		res.status(200).json(actions);
	} catch (err) {
		res.status(500).json({ message: "error fetching actions", error });
	}
});

router.post("/", async (req, res) => {
    try {
        const post = await Actions.insert(req.body);
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ message: "error posting action", error });
    }
})

module.exports = router;