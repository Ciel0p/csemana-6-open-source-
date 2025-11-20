import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Component for displaying footer content in the presentation layer of the shared bounded context.
 */
@Component({
  selector: 'app-footer-content',
  imports: [
    TranslatePipe
  ],
  templateUrl: './footer-content.html',
  styleUrl: './footer-content.css'
})
export class FooterContent {

}
