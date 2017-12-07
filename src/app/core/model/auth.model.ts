import { User } from './../../routes/user/model/user.model';
export class Auth {
    redirectUrl: string;
    user: User;
    hasError: boolean;
    errMsg: string;
}
