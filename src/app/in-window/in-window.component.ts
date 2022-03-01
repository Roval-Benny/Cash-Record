import { DatePipe } from '@angular/common';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'src/model/entry';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-in-window',
  templateUrl: './in-window.component.html',
  styleUrls: ['./in-window.component.css']
})
export class InWindowComponent implements OnInit {

  constructor(private ds:DataService,private rs:Router) { }
  public dateValue: Object = new Date();
  entry:Entry = new Entry(0,new Date(),'',0,true,0)
  Entries:Array<Entry> = []
  balance:number=0
  public maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getUTCDate());
  ngOnInit(): void {
    this.ds.getAllEntries().subscribe(
      data=>{
        this.Entries = data;
        this.Entries = this.Entries.sort()
        this.balance = this.Entries[0].balance
        console.log(this.balance)
      }
    )
  }
  private formater:DatePipe = new DatePipe('en-US');
  onChange(args:any) {
    this.dateValue = args.value;
    console.log( "args " + this.formater.transform(args.value,'yyyy-MM-dd'));
  }
  onAddEntry(){
    if(this.entry.amount<1){
      return
    }
    this.entry.amount = parseInt(''+this.entry.amount)
    this.entry.balance = this.balance+this.entry.amount
    this.entry.date = new Date(this.formater.transform(this.dateValue as string,'yyyy-MM-dd') as string)
    this.ds.addEntry(this.entry).subscribe(data=>{console.log(data)
      if(data){
        alert("Cash In Entered")
        this.rs.navigate([''])
      }
    })
    console.log(this.entry)
  }
}
