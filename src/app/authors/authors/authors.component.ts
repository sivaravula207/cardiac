import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
div:boolean
  constructor() { }

  ngOnInit() {
  this.div = false
  }


  test(){
    this.div = true
  }

}
