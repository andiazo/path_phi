import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { SignupDto } from './dto';
export declare class AuthRepository extends Repository<User> {
    signup(signupDto: SignupDto): Promise<void>;
}
