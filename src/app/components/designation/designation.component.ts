import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss',
})
export class DesignationComponent implements OnInit {
  posts: any[] = [];
  masterService = inject(MasterService);
  ngOnInit(): void {
    this.masterService.getAllPosts().subscribe({
      next: (data: any) => {
        this.posts = data;
      },
      error: (error) => {
        alert('Something went wrong');
      },
    });
  }
}
