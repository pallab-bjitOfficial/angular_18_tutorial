import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      position: ['', Validators.required],
      salary: ['', [Validators.required, this.validateSalary]],
      dateOfJoining: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  validateSalary(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value < 30000 ? { invalidSalary: true } : null;
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Employee Details:', this.employeeForm.value);
      alert('Form is valid. Please check the details and try again.');
    } else {
      alert('Form is invalid. Please check the details and try again.');
    }
  }

  get f() {
    return this.employeeForm.controls;
  }
}
