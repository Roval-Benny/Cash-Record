import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  onFilter(value:number){
    if(value==0){
      this.ds.getAllEntries()
    }
    else if(value==1){
      this.ds.getAllEntriesByYear(new Date().getFullYear())
    }
    else if(value==2){
      let date = new Date();
      this.ds.getAllEntriesByMonth(date.getMonth()+1,date.getFullYear())
    }
  }
}
