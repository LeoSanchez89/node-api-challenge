const express = require("express");
const router = express.Router();
const Actions = require("../helpers/actionModel.js");
// const Projects = require("../helpers/projectModel.js");

// get all actions
router.get("/", async (req, res) => {
	try {
		const actions = await Actions.get(req.params.id);
		res.status(200).json(actions);
	} catch (err) {
		res.status(500).json({ message: "error fetching actions", err });
	}
});

// get action by id
router.get("/:id", async (req, res) => {
	try {
		const actions = await Actions.get(req.params.id);
		res.status(200).json(actions);
	} catch (err) {
		res.status(500).json({ message: "error fetching actions", err });
	}
});

module.exports = router;