const express = require("express");
const router = express.Router();
const Projects = require("../helpers/projectModel");

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
})

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

module.exports = router;