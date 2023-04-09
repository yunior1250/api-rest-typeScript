

import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            default: 'soy la desripxion ...',
        }



    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const UserModel = model('users', UserSchema);

export default UserModel;