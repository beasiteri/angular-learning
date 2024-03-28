import { ResourceWithId } from "src/app/shared/services/data.interfaces";

export interface Followers extends ResourceWithId {
  avatar_url: string;
  login: number;
  html_url: string;
}