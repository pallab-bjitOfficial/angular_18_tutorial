import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss',
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  masterService = inject(MasterService);
  ngOnInit() {
    this.masterService.getAllAlbums().subscribe({
      next: (data: any) => {
        this.albums = data;
        console.log(this.albums);
      },
      error: (error) => {
        alert('Something went wrong');
      },
    });
  }
}
