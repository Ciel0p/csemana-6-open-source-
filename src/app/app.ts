import {Component, inject, signal, ChangeDetectionStrategy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Layout} from './shared/presentation/components/layout/layout';

/**
 * Root component that bootstraps localization and the application shell.
 */
@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App {
  /**
   * Signal for the application title.
   */
  protected readonly title = signal('learning-center');

  /**
   * Translation service instance.
   */
  private translate: TranslateService;

  /**
   * Creates an instance of App and sets up translation.
   */
  constructor() {
    this.translate = inject(TranslateService);
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
