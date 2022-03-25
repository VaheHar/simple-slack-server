import Workspace from '../models/workspace.js';

export const getWorkspace = async (req, res) => {
	const { name } = req.body;

	try {
		const workspace = await Workspace.find({ name });

		res.status(200).json(workspace);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}

export const createWorkspace = async (req, res) => {
	const { name } = req.body;

	try {
		const workspace = await Workspace.find({ name });
		if (workspace.length) {
			return res.send(null)
		}
		const newWorkspace = new Workspace({ name });
		await newWorkspace.save();
		res.status(201).json(newWorkspace);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
}

export const suggestWorkspaceName = async (req, res) => {
	const { name } = req.body;

	try {
		const workspace = await Workspace.find({ name });
		if (workspace.length) {
			let sugestion = name + Math.floor(Math.random() * 10000);
			res.status(200).send({ sugestion: [sugestion + 1, sugestion + 2] });
		} else
			res.status(200).send({ sugestion: [] })
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
}