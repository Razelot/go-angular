import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: any = [];

  newName: string;
  newAge: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.refresh();
  }

  public refresh() {
    console.log('refreshing');
    this.http.get("http://localhost:8080/api/users")
      .subscribe(result => {
        // console.log(result);
        this.users = result;
      });
  }

  public create() {
    console.log('creating', this.newName, this.newAge);
    const newUser = { 'Name': this.newName, 'Age': this.newAge };
    this.http.post("http://localhost:8080/api/user", JSON.stringify(newUser))
      .subscribe(result => {
        console.log(result);
        this.newName = null;
        this.newAge = null;
        this.refresh();
      });
  }

  public delete(id) {
    console.log('deleting', id);
    this.http.delete(`http://localhost:8080/api/user/${id}`)
      .subscribe(result => {
        console.log(result);
        this.refresh();
      });
  }

  public save(user){
    console.log('saving', user);
    this.http.put(`http://localhost:8080/api/user/${user.id}`, JSON.stringify(user))
      .subscribe(result => {
        console.log(result);
        this.refresh();
      });
  }


}
