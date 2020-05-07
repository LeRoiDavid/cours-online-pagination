import { Component, OnInit, Input } from '@angular/core';
import { IPagination } from '../interfaces/IPagination';
import { IOrganizer } from '../interfaces/IOrganizer';

@Component({
  selector: 'app-ng-pagination',
  templateUrl: './ng-pagination.component.html',
  styleUrls: ['./ng-pagination.component.css']
})
export class NgPaginationComponent implements OnInit {
  @Input() pagination: IPagination<IOrganizer>
  @Input() offset: number
  @Input() limit: number

  constructor() { }

  ngOnInit(): void {
  }

  getIndex(indexes){  
    return new Array(indexes)
  }

  goToPrev(){
    this.offset = (this.pagination.currentPage -2) * this.pagination.limit
    // this.getOrganizers();
  }

  goToNext(){
    this.offset = this.pagination.currentPage *  this.pagination.limit
    // this.getOrganizers();
  }

  onChangePage(index){
    this.offset = index * (this.pagination.limit) 
    // this.getOrganizers();
  }
  

}
