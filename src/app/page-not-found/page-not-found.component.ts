import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  standalone: true,
  styleUrls: ['./page-not-found.component.scss'],
  imports: [RouterLink],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'blueBg');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'blueBg');
  }
}
