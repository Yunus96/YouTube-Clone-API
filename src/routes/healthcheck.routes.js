import { Router } from 'express';
import { healthcheck } from "../controllers/healthcheck.controller.js"

const router = Router();

/**
 * @swagger
 * /api/v1/healthcheck:
 *   get:
 *     summary: Healthcheck
 *     tags: [Healthcheck]
 *     responses:
 *       200:
 *         description: Healthcheck successful
 */

router.route('/').get(healthcheck);

export default router