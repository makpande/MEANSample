import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  template: `
    <header class="row">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-pills">
          <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
          <li routerLinkActive="active"><a [routerLink]="['auth']">Authentication</a></li>
        </ul>
      </nav>
    </header>
    <div class="row">
      <div class="col-md-12">
        <app-appheader></app-appheader>
      </div>
    </div>
  `
})

export class HeaderComponent {

}
