import { NextFunction, Request, Response } from 'express';
import HealthCheckService from '../Services/HealthCheckService';

export default class HealthCheckController {
    constructor(private service: HealthCheckService) {}

    public async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const dto = await this.service.invoke();

        return res.status(200).send(dto);
    }
}
