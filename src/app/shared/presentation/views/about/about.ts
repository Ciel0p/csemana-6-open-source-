import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * About view for the shared presentation context.
 */
@Component({
  selector: 'app-about',
  imports: [
    TranslatePipe
  ],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './about.css'
})
export class About {

}
