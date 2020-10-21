import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() heroeName;
  @Input() heroeId;

  constructor() { }

  ngOnInit(): void {
  }

}
