import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent  {

greeting:string = 'Work with us';
winH:number = 0;
navH:number = 50;
totalMargin:number = 0;


  @HostListener('window:resize', ['$event'])
  onresize(event: { target: { innerHeight: number; }; }) {
    this.winH = event.target.innerHeight - this.navH ;
  }



  constructor() { 
    this.winH = window.innerHeight - this.navH;
    
  
  }

//  ngOnInit(): void {
//  }

} 
