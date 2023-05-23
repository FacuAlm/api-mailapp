import mongoose from "mongoose";
import User from "./User";
import Message from "./Message";

const mailboxSchema = new mongoose.Schema(
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

const Mailbox = mongoose.model("Mailbox", mailboxSchema);

export default Mailbox;
