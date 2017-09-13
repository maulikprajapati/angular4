import { Component, OnInit } from '@angular/core';
import { CommonServices } from 'app/common.services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private commonServices: CommonServices) { }
  private searchText: string;
  ngOnInit() {
  }

  searchEmp() {
    this.commonServices.setSearchParams(this.searchText);
  }

}
