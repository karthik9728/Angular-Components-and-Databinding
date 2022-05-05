import { Component, DoCheck, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit ,OnChanges,DoCheck{

  // newServerName = '';
  //newServerContent = '';

  //@ViewChild('serverContentInput',{static:true}) serverContentInput:ElementRef;

  @Output('srCreated') serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();


  constructor() {
    console.log('Constructor');
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Do Check');
  }

  onAddServer(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
    //console.log(nameInput.value)
    this.serverCreated.emit({serverName:nameInput.value,serverContent:contentInput.value});
  }

  onAddBlueprint(nameInput:HTMLInputElement,contentInput:HTMLInputElement) {
    this.blueprintCreated.emit({serverName:nameInput.value,serverContent:contentInput.value});
  } 
}
