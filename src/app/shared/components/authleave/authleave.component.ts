import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authleave',
  templateUrl: './authleave.component.html',
  styleUrls: ['./authleave.component.scss']
})
export class AuthleaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  leave(): boolean {
    return true;
  }
}
