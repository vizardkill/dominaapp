import { UserAPIResponse } from "../models/getUser.api.response";
declare const useGetUsers: () => {
    users: UserAPIResponse | null;
    getUsers: () => Promise<void>;
};
export default useGetUsers;
