import express from 'express';
import { Path } from '../controllers';
const router = express.Router();

router.get('/all', Path.getAllPaths);
router.post('/create', Path.createPath);
router.post('/shortest-path', Path.shortestPath);
export default router;
