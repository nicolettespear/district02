import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css', '../../app.component.css']
})
export class HomePageComponent {
    @Input()
    headerImage;

}

