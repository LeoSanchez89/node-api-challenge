const express = require("express");
const router = express.Router();
const Projects = require("../helpers/projectModel");
const Actions = require("../helpers/actionModel.js");

// get all
router.get("/", async (req, res) => {
	try {
		const proj = await Projects.get(req.params.id);
		res.status(200).json(proj);
	} catch (err) {
		res.status(500).json({ message: "error fetching projects", err });
	}
});

// get by id
router.get("/:id", async (req, res) => {
	try {
		const proj = await Projects.get(req.params.id);
		res.status(200).json(proj);
	} catch (err) {
		res.status(500).json({ message: "error fetching projects", err });
	}
});

// post new
router.post("/", async (req, res) => {
	try {
		const post = await Projects.insert(req.body);
		res.status(201).json(post);
	} catch (err) {
		res.status(500).json({ message: "error posting project", err });
	}
});

// update
router.put("/:id", async (req, res) => {
	try {
		const revise = await Projects.update(req.params.id, req.body);
		res.status(200).json(revise);
	} catch (err) {
		res.status(500).json({ message: "error updating project", err });
	}
});

// delete
router.delete("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const proj = await Projects.get(id);
		const del = await Projects.remove(id);
		res.status(200).json({ message: `${proj.name} has been removed` });
	} catch (err) {
		res.status(500).json({ message: "error deleting post", err });
	}
});

// get proj actions
router.get("/:id/actions", async (req, res) => {
	try {
		const projAct = await Projects.getProjectActions(req.params.id);
		res.status(200).json(projAct);
	} catch (err) {
		res.status(500).json({ message: "error fetching project actions", err });
	}
});

// post action to project
router.post("/:id/actions", async (req, res) => {
	const actionData = req.body;
	try {
		actionData.project_id = req.params.id;
		const action = await Actions.insert(actionData);
		res.status(201).json(action);
	} catch (err) {
		res.status(500).json({ message: "error posting project actions", err });
	}
});

// edit action on project
router.put("/:id/actions/:actid", async (req, res) => {
	const actionData = req.body;
	try {
        actionData.project_id = req.params.id;        
		const action = await Actions.update(req.params.actid, actionData);
		res.status(201).json(action);
	} catch (err) {
		res.status(500).json({ message: "error updating project actions", err });
	}
});

// delete action on project
router.delete("/:id/actions/:actid", async (req, res) => {
	const actionData = req.body;
	try {
        actionData.project_id = req.params.id;
        const action = await Actions.get(req.params.actid);
		const del = await Actions.remove(req.params.actid);
		res.status(201).json({message: `action: ${action.description} has been removed`});
	} catch (err) {
		res.status(500).json({ message: "error deleting project actions", err });
	}
});


module.exports = router;
