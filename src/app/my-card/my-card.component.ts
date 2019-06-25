import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() onClick: (message: string) => void;

  constructor() {}

  ngOnInit() {}

  onButtonClick(): void {
    this.onClick('Click me !');
  }
}
