import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class FooterComponent implements OnInit {
name 
  constructor() { }

  ngOnInit() {
  }
  siva(){
    this.name= "Siva"
    console.log(this.name + "footer")
  }

}
