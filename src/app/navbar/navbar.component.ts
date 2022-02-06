import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from '../common.service';
import { FooterComponent } from '../footer/footer.component';
// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  someVariable:any
  sticky:any
  logo;
  navbarOpen = false;
  navbar: any
  
  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      
      
      // this.sticky = true
      
    }
    
    
  
  constructor(private commSer: CommonService, private foo: FooterComponent) { }

  ngOnInit() {
    this.sticky = true
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  getLogo(){
    this.commSer.getLogos().subscribe(data => {
      this.logo = data
      console.log('data', data)
    })
  }
  

}
