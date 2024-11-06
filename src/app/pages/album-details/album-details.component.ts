import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss',
})
export class AlbumDetailComponent implements OnInit {
  albumId: string | null = null;
  albumDetails: any = {};
  constructor(private readonly route: ActivatedRoute) {}
  masterService = inject(MasterService);
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.albumId = params.get('id');
    });
    this.getAlbumDetails(this.albumId ?? '');
  }

  getAlbumDetails(id: string) {
    this.masterService.getAlbumById(id).subscribe({
      next: (data: any) => {
        this.albumDetails = data;
      },
      error: (error) => {
        alert('Something went wrong');
      },
    });
  }
}
