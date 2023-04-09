import { verify } from "jsonwebtoken";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt,handle";
import { generateToken } from "../utils/jwt.handle";


const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) {
        return "ALREADY_USER"
    }
    const passHash = await encrypt(password);///123456789

    const resgisterNewUser = await UserModel.create({ email, password: passHash, name })
    return resgisterNewUser;

};

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password; //el encriptado que vieni e la base de datos
    const isCorrect = await verified(password, passwordHash);
    if (!isCorrect) return "PASSWORD_INCORRECT";
    const token = await generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs,
    }
    return data;


};

export { registerNewUser, loginUser };