import { Component, OnInit ,Input} from '@angular/core';
import { FlagInfo } from '../flag-info';


@Component({
  selector: 'app-infobody',
  templateUrl: './infobody.component.html',
  styleUrls: ['./infobody.component.css']
})
export class InfobodyComponent implements OnInit {

  @Input()
  country: FlagInfo

  constructor() { }

  ngOnInit() {
  }

}
