import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit{
  users: User[] = [];

  @Input()
  childVar :string;

  
  childVar1:string='sanju123';

  @Output()
  emitterEvent:EventEmitter<string> = new EventEmitter<string>();

  onEvent(){
    this.emitterEvent.emit(this.childVar1);
    console.log(this.childVar1);
  }



  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>{
        console.log(data);
        this.users=data;
        console.log(this.users);
 });
  }

}
