import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss'],
})
export class HomeRootComponent implements OnInit, AfterViewInit {
  @ViewChild('animatedBackground') animatedBackground: any;
  backgroundImage = 'url(/assets/Images/schilthorn.jpg)';
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    const threshold = 0.2; // how much % of the element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animatedBackground.nativeElement.classList.add('');
            observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
          }
        });
      },
      { threshold }
    );
    observer.observe(this.animatedBackground.nativeElement);
  }
}
