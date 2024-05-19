// Store
import { store } from "./store/store";
export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

// User
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface IUser {
  address?: Address;
  company?: Company;
  email: string;
  id?: number;
  name: string;
  phone?: string;
  username: string;
  website?: string;
}

// Comment
export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
