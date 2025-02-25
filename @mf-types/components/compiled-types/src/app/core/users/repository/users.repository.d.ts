import { UserAPIResponse } from "../domain/models/getUser.api.response";
export declare class UsersRepository {
    private httpService;
    private configService;
    private cache;
    constructor();
    getUsers(): Promise<UserAPIResponse>;
}
