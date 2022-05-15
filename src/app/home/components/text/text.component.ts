import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToContent(): void {
    const windowHeight: number =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    window.scrollTo({ top: windowHeight, behavior: 'smooth' });
  }
}
