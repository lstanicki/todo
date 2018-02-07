import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnDestroy {

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Igor';
  }

  ngOnDestroy() {}

}
