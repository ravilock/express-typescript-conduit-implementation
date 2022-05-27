import express, { NextFunction, Request, Response } from 'express';
import { healthCheckController } from '../Home/Index';

const PublicRoutes = express.Router();

PublicRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
    healthCheckController.handle(req, res, next);
});

export { PublicRoutes };