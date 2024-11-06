import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getAllComments().subscribe({
      next: (data: any) => {
        this.comments = data;
      },
      error: (error) => {
        alert('Something went wrong');
      },
    });
  }
}
