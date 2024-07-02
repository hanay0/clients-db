import { Child } from "./child";

export interface Client {
    id: number;
    name: string;
    age: string | number;
    children: Child[];
}
