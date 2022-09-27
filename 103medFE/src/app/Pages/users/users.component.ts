import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { GET_USERS } from 'src/app/service/user.queris';
import { ApiHttpService } from 'src/app/service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data: IUser[] = [];

  constructor(private api: ApiHttpService) { }

  ngOnInit(): void {
    this.api.getUsers({ query: GET_USERS}).subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }

}
