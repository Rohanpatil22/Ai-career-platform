import epress from 'express';
import {uploadresume} from '../Controllers/resumeController.js';
import {upload} from '../middleware/uploadmiddleware.js';
import {authMiddleware} from '../middleware/authmiddleware.js';

const router=epress.Router();

router.post('/upload',authMiddleware,upload.single('resume'),uploadresume);

export default router;  

