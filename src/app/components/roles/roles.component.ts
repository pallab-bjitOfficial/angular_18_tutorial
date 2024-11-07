import {
  CommonModule,
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { KebabCasePipe } from '../../pipes/kebab-case.pipe';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    EmployeeFormComponent,
    UpperCasePipe,
    LowerCasePipe,
    DecimalPipe,
    KebabCasePipe,
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  users: any[] = [];
  masterService = inject(MasterService);
  ngOnInit() {
    this.masterService.getAllEmployees().subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (error) => {
        alert('Something went wrong');
      },
    });
  }
}
