import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Entry } from 'src/model/entry';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private ds:DataService) { }

  cashIn:number = 0;
  cashOut:number = 0;
  netBalance = 0;  
  Entries:Array<Entry>=[]
  
  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    this.ds.getAllEntries().subscribe(
      data=>{
        this.Entries = data;
        this.cashIn=0
        this.cashOut=0
        this.netBalance=0
        this.Entries.forEach(i=>{
          if(i.type==true){
            this.cashIn+=i.amount
            this.netBalance+=i.amount
          }else{
            this.cashOut+=i.amount
            this.netBalance-=i.amount
          }
        })
        this.Entries = this.Entries.sort((a,b)=>(new Date(b.date).getTime()-new Date(a.date).getTime()))
      }
    )
  }

}
