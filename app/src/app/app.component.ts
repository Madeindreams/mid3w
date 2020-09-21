import { Component, HostListener} from '@angular/core';


import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showOverlay = true;

  title:string = 'app';
  winH:number = 0;
  navH:number = 50;

  @HostListener('window:resize', ['$event'])
  onresize(event: { target: { innerHeight: number; }; }) {
    this.winH = event.target.innerHeight - this.navH ;
  }
  

  constructor(private router: Router){
 
this.winH = window.innerHeight - this.navH;

router.events.subscribe((event: RouterEvent) => {
  this.navigationInterceptor(event)
})
  }
 // Shows and hides the loading spinner during RouterEvent changes
 navigationInterceptor(event: RouterEvent): void {
  if (event instanceof NavigationStart) {
    this.showOverlay = true;
   
  }
  if (event instanceof NavigationEnd) {
    this.showOverlay = false;
  }

  // Set loading state to false in both of the below events to hide the spinner in case a request fails
  if (event instanceof NavigationCancel) {
    this.showOverlay = false;
  }
  if (event instanceof NavigationError) {
    this.showOverlay = false;
  }
}




 
}
