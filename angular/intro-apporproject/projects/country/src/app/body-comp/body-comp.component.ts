import { Component, OnInit } from '@angular/core';
import { FlagInfo } from '../flag-info';


@Component({
  selector: 'app-body-comp',
  templateUrl: './body-comp.component.html',
  styleUrls: ['./body-comp.component.css']
})
export class BodyCompComponent implements OnInit {


  countryObj: FlagInfo ={
    title:  'India',
    imgUrl: 'assets/i.png',
    info:`India (official name: the Republic of India;[19] Hindi: 
      Bhārat Gaṇarājya) is a country in South Asia. 
      It is the seventh-largest country by area, the second-most populous country, 
      and the most populous democracy in the world. 
      Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest,
       and the Bay of Bengal on the southeast, it shares land borders with Pakistan to
        the west;[d] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar
         to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and 
         the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.`
,
mobile: 7835625268,
address: 'Mumbai,Maharashtra'
}

  constructor() { }

  ngOnInit() {
  }

  onPick(evDt: FlagInfo) {
    this.countryObj= evDt
  }

}
