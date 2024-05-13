import mongoose from "mongoose";
const messageSchema = newmongoose.messageSchema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    },
    //Gives the Created and Updated at fields
}, {timestammps: true});

const Message = mongoose.model("Message",messageSchema);

export default Message;