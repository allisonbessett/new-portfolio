import { TravelAlbum } from './travel-album';
import { TravelService } from '../travel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-travel-album',
    templateUrl: './travel-album.view.html',
    styleUrls: ['../../../scss/travel.scss'],
    providers: [TravelService]
  })

  export class TravelAlbumComponent implements OnInit {

    // selectedAlbum: number;
    // currentAlbum: TravelAlbum;

    albums: TravelAlbum[] = [
      {id: 1, name: 'Iceland', src:
     '../../../images/iceland/geyser-cover.jpg'},
  ];


    constructor (
      private router: Router,
      private route: ActivatedRoute,
      private travelService: TravelService
    ) {}

    ngOnInit() {
      console.log('onInit1');
      // this.albums = this.travelService.getAlbums();
      // console.log(this.route.children);
      // this.route.parent.children
      // .find(a => a.outlet === 'album')
      // .params
      // .subscribe((params: any) => {
      //   console.log('onInit2');
      //   if (params.id) {
      //     this.selectedAlbum = +params.id;
      //   }
      //   console.log('onInit3');
      // });
    }

    showAlbum(clickedAlbum: TravelAlbum) {
      console.log('showAlbum1');
    this.router.navigate(['/travel', clickedAlbum.id]);
    console.log('showAlbum2');
    }
  }

