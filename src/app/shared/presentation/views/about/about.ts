import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Component for the about page view in the presentation layer of the shared bounded context.
 */
@Component({
  selector: 'app-about',
  imports: [
    TranslatePipe
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
