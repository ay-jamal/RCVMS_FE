import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbDialogService, NbLayoutModule, NbThemeModule, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NbThemeModule,
    NbLayoutModule,
  ],
  providers: [NbThemeService, NbDialogService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'RCVMS_FE';

}
