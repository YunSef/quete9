import { Component } from '@angular/core';
import { Cat } from './kitten'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cats To Adopt';

  item: Cat[] = []
  catToAdopt: any
  catsAdoption: Cat[] = [
    {
      nom: 'Moona',
      race: 'Europeen',
      date: new Date(2007, 11, 0o1),
      photo: "https://media.istockphoto.com"
    },
    {
      nom: 'Ruby',
      race: 'Chartreux',
      date: new Date(2021, 12, 25),
      photo: "https://media.istockphoto.com"
    },
  ]
  myCats: Cat[] = [
    {
      nom: 'Caprice',
      race: 'Gouttiere',
      date: new Date(2020, 12, 25),
      photo: "https://media.istockphoto.com"
    }
  ]

  ngOnInit(): void {  }

  adoptCatForAdoption(event: any) {

    this.myCats.push(this.catsAdoption[event])

    this.catsAdoption.splice(event, 1)
    console.log(this.myCats);
    console.log(this.catsAdoption);


  }
adopteLapinFormulaire(event: Cat){
  console.log(event);

this.catsAdoption.push(event)
}


}
