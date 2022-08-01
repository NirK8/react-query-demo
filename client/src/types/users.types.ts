import { MongoDocument } from "./types";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  address: string;
  status: 0 | 1;
} & MongoDocument;
