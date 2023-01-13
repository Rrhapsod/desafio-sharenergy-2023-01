import { Schema, model, InferSchemaType } from "mongoose";

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: Number, required: true },
  address: { type: String, required: true },
  cpf: { type: Number, required: true, unique: true },
});

type Client = InferSchemaType<typeof schema>;

export const Client = model("Client", schema);
