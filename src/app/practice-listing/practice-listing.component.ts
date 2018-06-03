import { Component, OnInit } from '@angular/core';
import { practice } from './../data/practice';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-practice-listing',
  templateUrl: './practice-listing.component.html',
  styleUrls: ['./practice-listing.component.css']
})
export class PracticeListingComponent implements OnInit {

  practice: Array<any> = practice;


  constructor() { }

  ngOnInit() {
  }

}
