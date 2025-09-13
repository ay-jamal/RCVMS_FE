import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { agCofigrations } from '../../config/table.configration';
import { NbButtonModule, NbDialogModule, NbDialogService } from "@nebular/theme";
import { UpsertVolunteerComponent } from '../upsert-volunteer/upsert-volunteer.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    AgGridModule,
    NbButtonModule,
    NbButtonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  constructor(
    private dialogService: NbDialogService) {
  }

  openAddVolunteer() {
    this.dialogService.open(UpsertVolunteerComponent).onClose.subscribe({
      next: (res) => {
      }
    })
  }

  agConfig = new agCofigrations()


  columnDefs: ColDef[] = [
    {
      field: 'fullName',
      headerName: 'الاسم الكامل',
      sortable: true,
    },
    {
      field: 'birthDate',
      headerName: 'تاريخ الميلاد',
      sortable: true,
    },
    {
      field: 'gender',
      headerName: 'الجنس',
      sortable: true,
    },
    {
      field: 'phoneNumber',
      headerName: 'رقم الهاتف',
      sortable: true,
    },
    {
      field: 'bloodType',
      headerName: 'فصيلة الدم',
      sortable: true,
      cellRenderer: (params: any) => params.value || '',
    },
    {
      field: 'joinDate',
      headerName: 'تاريخ الانضمام',
      sortable: true,
      filter: 'agDateColumnFilter',
      valueFormatter: (params) => new Date(params.value).toLocaleDateString('ar-EG'),
    },
    {
      field: 'membershipType',
      headerName: 'نوع العضوية',
      sortable: true,
    },
    {
      field: 'city',
      headerName: 'المدينة',
      sortable: true,
    },

  ]

}
