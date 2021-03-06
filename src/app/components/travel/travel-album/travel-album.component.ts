import { TravelAlbum } from './../travel';
import { TravelService } from '../travel.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'app-travel-album',
    templateUrl: './travel-album.view.html',
    styleUrls: ['../../../scss/travel.scss']
  })

  export class TravelAlbumComponent implements OnInit {
    travelAlbums: TravelAlbum[] = [];
    selectedAlbum: number;
    // @Output() showPhotos = new EventEmitter<boolean>();

    constructor (
      private router: Router,
      private route: ActivatedRoute,
      private travelService: TravelService,
    ) {
    }

    ngOnInit() {
      this.travelAlbums = this.travelService.getAlbums();
      this.route.parent.children
      .find(r => r.outlet === 'photo')
      .params
      .subscribe((params: any) => {
        if (params.id) { this.selectedAlbum = +params.id; }
      });
  }

    displayPhoto(id: number) {
      this.selectedAlbum = id;
      console.log(id);
      this.router.navigate(['/travel', {outlets: {'photo': [id]}}]);
      console.log('navigate');
    }
  }

