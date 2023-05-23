import mongoose from "mongoose";

const trashSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Trash = mongoose.model("Trash", trashSchema);

export default Trash;