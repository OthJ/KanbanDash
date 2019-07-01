import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CollabService} from './collab.service';
import {Collaborateur} from './Collaborateur';
import {Chart} from 'chart.js'


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {


  collab: Collaborateur

  id: number;
  Piechart = [];
  Piechart1 = [];
  Piechart2 = [];
  wip_limit : number;
  Linechart = []; 
  pieData1 = [];
  pieData2 = [];
  // data=[''];
  constructor(private _collabService: CollabService,private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // console.log('he got in collab with the id : '+this.id)
    this.onChangeId();
    // console.log('somthing wrong ?with the id : '+this.id)
    // this.loadChart(this.collab);
    this.getCollabs();
     
    
            
    }

  onChangeId(){
    this.route.params.subscribe(params => {
        this.id = params['id'];
        this.getCollab(this.id);
    });
  }

  

  loadChart(){
    // console.log(data.p1+'does he got in chart ?')
    this

    this.Piechart = new Chart('canvas', {  
      type: 'pie',  
      data: {  
        labels: [
          'p1',
          'p2',
          'p3',
          'p4',
          'p5'
        ],  

        datasets: [  
          {  
             data: [this.collab.p1,this.collab.p2,this.collab.p3,this.collab.p4,this.collab.p5],  
            // data: [3,6,2,5,6],
            // data : this.pieData,
            // borderColor: '#3cba9f',  
              backgroundColor: [    
                "#4b5e15",  
                "#ff4b44",  
                "#760007",
                "#e8ba53",
                "#fff5a5"   
              ]  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: true  
        },  
        scales: {  
          xAxes: [{  
            display: false  
          }],  
          yAxes: [{  
            display: false  
          }],  
        }  
      }  
    });

    this.Piechart1 = new Chart('canvas1', {  
      type: 'pie',  
      data: {  
        labels: [
          'OK',
          'KO'
        ],  

        datasets: [  
          {  
             data: [this.collab.slaOK,this.collab.slaKO],  
            // data: [3,6,2,5,6],
            // data : this.pieData,
            // borderColor: '#3cba9f',  
              backgroundColor: [    
                "#4b5e15",  
                "#ff4b44",  
                "#760007",
                "#e8ba53",
                "#fff5a5"   
              ]  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: true  
        },  
        scales: {  
          xAxes: [{  
            display: false  
          }],  
          yAxes: [{  
            display: false  
          }],  
        }  
      }  
    });

    // console.log(data.p1+'does he got in chart ?')
    this
    this.Piechart2 = new Chart('canvas2', {  
      type: 'pie',  
      data: {  
        labels: [
          'OK',
          'KO'
        ],  

        datasets: [  
          {  
             data: [this.collab.slaCorrOK,this.collab.slaCorrKO],  
            // data: [3,6,2,5,6],
            // data : this.pieData1,
            // borderColor: '#3cba9f',  
              backgroundColor: [    
                "#4b5e15",  
                "#ff4b44",  
                "#760007",
                "#e8ba53",
                "#fff5a5"  
              ]  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: true  
        },  
        scales: {  
          xAxes: [{  
            display: false  
          }],  
          yAxes: [{  
            display: false  
          }],  
        }  
      }  
    });




    this.Linechart = new Chart('canvas3', {  
      type: 'line',  
      data: {  
        labels: ['05/02','13/02','18/02','22/02','23/02','27/02'],  

        datasets: [  
          {  
            data: [1,2,0,2,3,2],  
            borderColor: '#ff4b44',  
            backgroundColor: "#ff4b44",  
          }  
        ]  
      },  
      options: {  
        legend: {  
          display: false  
        },  
        scales: {  
          xAxes: [{  
            display: true  
          }],  
          yAxes: [{  
            display: true  
          }],  
        }  
      }  
    }); 
      
       
  }  



  




  getCollab(id:number): void {
        
    // this.id = this.route.snapshot.params["id"];
    // console.log(this.route.snapshot.params["id"]);
    this._collabService.getCollaborateur(id)
      .subscribe(data=>{
            // console.log(data)
            this.collab=data;
            this.pieData1.push([this.collab.p1,this.collab.p2,this.collab.p3,this.collab.p4,this.collab.p5])
            // this.pieData.push[data.p1,data.p2,data.p3,data.p4,data.p5];
      });
      
  }

  getCollabs(): void {
        
    // this.id = this.route.snapshot.params["id"];
    // console.log(this.route.snapshot.params["id"]);
    this._collabService.getAllCollaborateurs()
      .subscribe(data=>{
            // console.log(data)
            this.wip_limit=data.length;
            // this.pieData1.push([this.collab.p1,this.collab.p2,this.collab.p3,this.collab.p4,this.collab.p5])
            // this.pieData.push[data.p1,data.p2,data.p3,data.p4,data.p5];
      });
      
  }

}
