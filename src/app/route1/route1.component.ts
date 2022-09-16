import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component implements OnInit {

  constructor(private route: Router) { 
    
  }
  navToroute2(){
    this.route.navigate(['route2']);
  }

  ngOnInit(): void {
  }

}
function navToroute1() {
  throw new Error('Function not implemented.');
}

