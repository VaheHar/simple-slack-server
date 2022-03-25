import express from 'express';
import { getWorkspace, createWorkspace, suggestWorkspaceName } from '../controllers/workspace.js'
import { auth } from '../middleware/auth.js'
const router = express.Router();

router.post('/find', auth, getWorkspace);
router.post('/suggest', auth, suggestWorkspaceName);
router.post('/', auth, createWorkspace);

export default router;