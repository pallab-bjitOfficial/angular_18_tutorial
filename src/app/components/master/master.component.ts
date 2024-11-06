import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [
    RolesComponent,
    DesignationComponent,
    CommonModule,
    EmployeeFormComponent,
  ],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss',
})
export class MasterComponent {
  currentActiveComponent = 'roles';

  setActiveComponent(componentTitle: string) {
    this.currentActiveComponent = componentTitle;
  }
}
