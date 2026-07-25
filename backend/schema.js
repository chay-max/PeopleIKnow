import { MONGO_CLIENT_EVENTS } from "mongodb";
import Schema from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    impress: {
        type: String,
        required: true
    }
});

export default Schema.model("User", userSchema);