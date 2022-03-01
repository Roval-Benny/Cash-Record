import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Entry } from 'src/model/entry';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  entries:Array<Entry> = []
  entriesSubject: BehaviorSubject<Array<Entry>> = new BehaviorSubject(this.entries)
  cashIn:number = 0;
  cashOut:number = 0;
  netBalance = 0;  
  cashInSubject:BehaviorSubject<number> = new BehaviorSubject(this.cashIn)
  cashOutSubject:BehaviorSubject<number> = new BehaviorSubject(this.cashOut)
  netBalanceSubject:BehaviorSubject<number> = new BehaviorSubject(this.netBalance)
  constructor(private httpClient:HttpClient,private auth:AuthenticationService) {
  }
  
  getAllEntries():BehaviorSubject<Array<Entry>>{
     this.httpClient.get<Array<Entry>>("http://localhost:1892/entry",
     {headers:{
      'Authorization': "Bearer "+this.auth.getBearToken() as string
    }}
    ).subscribe(
      data=>{
          this.entries = data;
          this.entriesSubject.next(this.entries)
      }
     )
    return this.entriesSubject
  }

  getAllEntriesByMonth(month:number,year:number):BehaviorSubject<Array<Entry>>{
    this.httpClient.get<Array<Entry>>("http://localhost:1892/entry/"+month+"/"+year,
    {headers:{
      'Authorization': "Bearer "+this.auth.getBearToken() as string
    }}).subscribe(
      data=>{
        this.entries = data;
        this.entriesSubject.next(this.entries)
      }
    )
    return this.entriesSubject
  }

  getAllEntriesByYear(year:number):BehaviorSubject<Array<Entry>>{
    this.httpClient.get<Array<Entry>>("http://localhost:1892/entry/"+year,
    {headers:{
      'Authorization': "Bearer "+this.auth.getBearToken() as string
    }}).subscribe(
      data=>{
        this.entries = data;
        this.entriesSubject.next(this.entries)
      }
    )
    return this.entriesSubject
  }

  addEntry(entry:Entry):Observable<Entry>{
    return this.httpClient.post<Entry>("http://localhost:1892/entry",entry,{headers:{
      'Authorization': "Bearer "+this.auth.getBearToken() as string
    }})
  }
}
