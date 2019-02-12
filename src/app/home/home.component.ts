import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'seed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
    console.log(debounceTime);
    console.log(map); // remove map for bundle testing
  }
}
