export default class HealthCheckService {
    public async invoke(): Promise<string> {
        return 'OK!';
    }
}
