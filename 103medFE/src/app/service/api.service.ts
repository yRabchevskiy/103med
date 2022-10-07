import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IDrug, IDrugs } from "../models/drug.model";
import { IUser, IUsers } from "../models/user.model";
import { BaseHttpService } from "./base.service";

@Injectable({ providedIn: 'root' })
export class ApiHttpService {
  constructor(private api: BaseHttpService) {
  }

  getUsers(query: any): Observable<IUser[]> {
    return this.api.query<IUsers>(query).pipe(map((res) => res.users));
  }
  getDrugs(query: any): Observable<IDrug[]> {
    return this.api.query<IDrugs>(query).pipe(map((res) => res.drugs));
  }
}