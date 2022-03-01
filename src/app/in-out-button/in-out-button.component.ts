import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-out-button',
  templateUrl: './in-out-button.component.html',
  styleUrls: ['./in-out-button.component.css']
})
export class InOutButtonComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onCashIn(){
    this.router.navigate(['/in-window'])
  }
  onCashOut(){
    this.router.navigate(['/out-window'])
  }

}
