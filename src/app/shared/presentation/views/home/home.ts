import {Component, ChangeDetectionStrategy} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Home view for the shared presentation context.
 */
@Component({
  selector: 'app-home',
  imports: [TranslatePipe],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home.css'
})
export class Home {

}
