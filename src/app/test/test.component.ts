import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="Vipin"
  public siteUrl = window.location.href;
  public myID = "input-1";
  public isDisabled = false;
  public styleBinding = "red"
  public styleObj = {
    color:"green",
    fontStyle:"italic"
  }
  public greetMessage;
  public values="";
  public InputMsg="";

  //setting display name true false for If condition
  public displayname = false;

  //ngSwitchCase
  public color="green";

  //ngFor
  public colors = ["red","green","yellow","blue","pink"];

  @Input() public parentData;


  @Output() public childEvent = new EventEmitter();




  constructor() { }

  ngOnInit(): void {
  }

  GreetUser(){
    this.greetMessage = "Hey Vipin How are you?";
  }

  onKey(value: string){
    this.values += value + " | ";
  }

  PrintEnterValue(value){
    console.log(value);
    this.InputMsg = value;
  }

  fireEvent(){
    this.childEvent.emit('Hey Angular App');
    
  }
  getPipeGreetMessage(name){
    return "Hey "+name+" Pipe method is working!!"
  }

}
