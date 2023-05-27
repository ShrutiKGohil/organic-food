import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchValue:string='';
  constructor(private AR:ActivatedRoute){}
  ngOnInit(): void {  
  }
  @Output()
  searchtextChange: EventEmitter<string>=new EventEmitter<string>();
 
  onsearch():void{
        this.searchtextChange.emit(this.searchValue);
  }
}
