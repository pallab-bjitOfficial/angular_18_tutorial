import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  router = inject(Router); // Inject Router here

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
  onView(id: string) {
    this.router.navigate(['album', id]);
  }
}
