import { Schema, model, InferSchemaType } from "mongoose";

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

type User = InferSchemaType<typeof schema>;

export const User = model("User", schema);
