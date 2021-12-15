import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto';
export declare class AuthController {
    private readonly _authService;
    constructor(_authService: AuthService);
    signup(signupDto: SignupDto): Promise<void>;
    signin(signinDto: SigninDto): Promise<{
        token: string;
    }>;
}
