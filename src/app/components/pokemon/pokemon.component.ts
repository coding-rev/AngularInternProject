import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MyService } from '../../test.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pageName: string = 'Pokemon Component';

  constructor(
    private readonly myService: MyService
  ) { }

  ngOnInit(): void {
    this.myService.sayMyname();
  }

}
