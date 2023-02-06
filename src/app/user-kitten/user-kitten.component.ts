import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit{


@Input() myCats:any
@Input() newCat: any = []
cats:any=[]
ngOnInit(): void {
this.cats=this.myCats
}

}
