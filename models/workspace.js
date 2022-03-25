import mongoose from "mongoose";

const workspaceSchema = mongoose.Schema({
	name: { type: String, required: true },
	channels: [String]
});

export default mongoose.model("Workspace", workspaceSchema);