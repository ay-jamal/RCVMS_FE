import { Component } from '@angular/core';
import { NbButtonModule, NbInputModule } from '@nebular/theme';

@Component({
  selector: 'app-auth',
  imports: [
    NbInputModule,
    NbButtonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
