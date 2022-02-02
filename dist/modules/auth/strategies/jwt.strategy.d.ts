import { Strategy } from "passport-jwt";
import { ConfigService } from "../../../config/config.service";
import { AuthRepository } from "../auth.repository";
import { IJwtPayload } from "../jwt-payload.interface";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly _configService;
    private readonly _authRepository;
    constructor(_configService: ConfigService, _authRepository: AuthRepository);
    validate(payload: IJwtPayload): Promise<IJwtPayload>;
}
export {};
