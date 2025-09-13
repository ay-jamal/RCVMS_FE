import { importProvidersFrom } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbDialogModule, NbDialogService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

export const provideNbTheme = () => importProvidersFrom(
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
);