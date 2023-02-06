import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cat } from '../kitten'

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  @Input() catsAdoption: any
  @Output() catsToAdoptUserEmitter = new EventEmitter()
  item: Cat[] = []


  ngOnInit(): void {
    this.item
  }
  adoptCat(index: number) {
    this.catsToAdoptUserEmitter.emit(index)
  }

  deleteCat(item: any) {
    console.log(this.catsAdoption);
    console.log(item);
    this.catsAdoption.splice(this.catsAdoption.indexOf(item), 1)
  }


}
