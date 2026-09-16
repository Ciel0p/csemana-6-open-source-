import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Displays localized footer text.
 */
@Component({
  selector: 'app-footer-content',
  imports: [
    TranslatePipe
  ],
  templateUrl: './footer-content.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer-content.css'
})
export class FooterContent {

}
