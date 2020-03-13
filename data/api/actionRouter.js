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

// update action
router.put("/:id", async (req, res) => {
	try {
		const updated = await Actions.update(req.params.id, req.body);
		res.status(201).json(updated);
	} catch (err) {
		res.status(500).json({ message: "error updating action", err });
	}
});

// delete action
router.delete("/:id", async (req, res) => {
	try {
		const action = await Actions.get(req.params.id);
		const del = await Actions.remove(req.params.id);
		res.status(200).json({ message: `${action.description} has been removed` })
	} catch (err) {
		res.status(500).json({ message: "error deleting action" });
	}
});

module.exports = router;