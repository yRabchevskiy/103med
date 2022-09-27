import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IUser, IUsers } from "../models/user.model";
import { BaseHttpService } from "./base.service";

@Injectable({ providedIn: 'root' })
export class ApiHttpService {
  constructor(private api: BaseHttpService) {
  }

  getUsers(query: any): Observable<IUser[]> {
    return this.api.query<IUsers>(query).pipe(map((res) => res.users));
  }
}