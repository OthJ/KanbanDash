import { Component, OnInit,Input } from '@angular/core';
import {CollabService} from '../collaborator/collab.service';
import {Collaborateur} from '../collaborator/Collaborateur';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-list-collab',
  templateUrl: './list-collab.component.html',
  styleUrls: ['./list-collab.component.scss'],
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
      }
    `
  ]
})
export class ListCollabComponent implements OnInit {

  @Input() collabs: Collaborateur[]

  constructor(private _collabService: CollabService,private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {

    this.getCollabs();
  }

  getCollabs(): void {
        
    // this.id = this.route.snapshot.params["id"];
    // console.log(this.route.snapshot.params["id"]);
    this._collabService.getAllCollaborateurs()
      .subscribe(data=>{
            console.log(data)
            this.collabs=data;
      });
    }

}
