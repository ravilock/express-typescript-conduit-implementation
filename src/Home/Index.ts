import HealthCheckController from './Actions/HealthCheckController';
import HealthCheckService from './Services/HealthCheckService';

const healthCheckService = new HealthCheckService();

export const healthCheckController = new HealthCheckController(healthCheckService);