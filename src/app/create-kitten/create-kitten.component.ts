import { Component,EventEmitter, Output, Input } from '@angular/core';
import { Cat } from '../kitten';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

@Output() addAdoptionEmitter = new EventEmitter()

  @Input() catsAdoption: any;
  @Input() item: any

 formOk: boolean = false
 form: FormGroup = new FormGroup ({
   nom: new FormControl ("",Validators.required),
   race: new FormControl ("",Validators.required),
   date: new FormControl( "",Validators.required ),
   photo: new FormControl ("",Validators.required)
 })

submit():void{
    console.log(this.form.value.date)
  
 const createdCat = new Cat(this.form.value.nom, this.form.value.race, this.form.value.date, this.form.value.photo)
  
  console.log(createdCat);
  this.addAdoptionEmitter.emit(createdCat)

 }

}
