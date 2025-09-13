import { Component } from '@angular/core';
import { NbButtonModule, NbInputModule, NbStepperModule } from '@nebular/theme';

@Component({
  selector: 'app-upsert-volunteer',
  imports: [
    NbStepperModule,
    NbButtonModule,
    NbInputModule,
    
  ],
  templateUrl: './upsert-volunteer.component.html',
  styleUrl: './upsert-volunteer.component.scss'
})
export class UpsertVolunteerComponent {

}
