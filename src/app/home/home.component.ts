import { Component, OnInit } from '@angular/core';
import { ProfService } from '../services/prof.service';
import { OrganizersService } from '../services/organizers.service';
import { IOrganizer } from '../interfaces/IOrganizer';
import { IPagination } from '../interfaces/IPagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public limit = 10
  public offset = 0
  public organizers: IOrganizer[] = []
  public pagination: IPagination<IOrganizer>

  constructor(private OrganiService: OrganizersService) { }

  ngOnInit(): void {
    this.getOrganizers();
  }

  getOrganizers(){
    this.OrganiService.getOrganizers(this.limit, this.offset).subscribe(
      response => { 
        this.pagination = response
      },
      error =>{ console.log(error) }
    )
  }

  getIndex(indexes){  
    return new Array(indexes)
  }

  goToPrev(){
    this.offset = (this.pagination.currentPage -2) * this.pagination.limit
    this.getOrganizers();
  }

  goToNext(){
    this.offset = this.pagination.currentPage *  this.pagination.limit
    this.getOrganizers();
  }

  onChangePage(index){
    this.offset = index * (this.pagination.limit) 
    this.getOrganizers();
  }
  

  
}
