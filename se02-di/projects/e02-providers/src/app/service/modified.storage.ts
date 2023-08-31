import { IStorage } from "./storage";

export class ModifiedStroage implements IStorage{
    
    list:string[] = []

    add(data: string) {
        this.list.push("Modified " + data)
    }

}