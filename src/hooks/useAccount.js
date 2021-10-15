import { swellInstance } from "../swell/config";

export default function useAccount() {
    async function createUserAccount(name, email, password) {
        return await swellInstance.account.create({
            name,
            email,
            password,
        });
    }

    async function signedUserDetails() {
        return await swellInstance.account.get();
    }

    return {
        createUserAccount,
        signedUserDetails,
    };
}
