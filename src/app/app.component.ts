import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardiac-customer';
  constructor(private commSer: CommonService){ }
  
  ngOnInit() {
  }
  onActivate(event){
    window.scroll(0,0)
  }
}
