import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  constructor(private route:Router) { 
    
    
  }
  navToroute1(){
    this.route.navigate(['route1']);

  }

  ngOnInit(): void {
  }

}
function navToroute1() {
  throw new Error('Function not implemented.');
}

