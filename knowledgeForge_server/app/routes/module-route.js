import express from 'express';
import * as moduleController from '../controllers/module-controller.js';
const router= express.Router();



router.post('/', moduleController.post);
router.get('/:_id',moduleController.searchById);
router.delete('/:_id',moduleController.remove);
export default router;
