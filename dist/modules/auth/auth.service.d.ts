import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';
import { SigninDto, SignupDto } from './dto';
export declare class AuthService {
    private readonly _authRepository;
    private readonly _jwtService;
    constructor(_authRepository: AuthRepository, _jwtService: JwtService);
    signup(signupDto: SignupDto): Promise<void>;
    signin(signinDto: SigninDto): Promise<{
        token: string;
    }>;
}
