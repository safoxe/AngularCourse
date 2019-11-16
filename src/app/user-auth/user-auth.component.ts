import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  userName : string = "Enter name...";
  isUserNameEmpty = true;
  constructor() { 
  }
  onUserInput(event :Event)
  {
    this.isUserNameEmpty = (<HTMLInputElement>event.target).value == ""? true : false;
  }
  onAddUserClick()
  {
    this.userName = "";
    this.isUserNameEmpty = true;
  }
  ngOnInit() {
  }

}
