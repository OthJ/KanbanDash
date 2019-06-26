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
  Piechart1 = [];
  Piechart2 = [];
  
  Linechart = []; 
  pieData = [];
  // data=[''];
  constructor(private _collabService: CollabService,private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // console.log('he got in collab with the id : '+this.id)
    this.onChangeId();
    // console.log('somthing wrong ?with the id : '+this.id)
    // this.loadChart(this.collab);
     
    
            
    }

  onChangeId(){
    this.route.params.subscribe(params => {
        this.id = params['id'];
        this.getCollab(this.id);
         this.loadChart()
        
    });
  }

  loadChart(){
    // console.log(data.p1+'does he got in chart ?')
    this
    this.Piechart1 = new Chart('canvas1', {  
      type: 'pie',  
      data: {  
        labels: [
          'Priorité 1',
          'Priorité 2',
          'Priorité 3',
          'Priorité 4',
          'Priorité 5',
        ],  

        datasets: [  
          {  
            //  data: [this.collab.p1,this.collab.p2,this.collab.p3,this.collab.p4,this.collab.p5],  
            data: [3,6,2,5,6],
            // data : this.pieData,
            // borderColor: '#3cba9f',  
              backgroundColor: [    
                "#ffffff",  
                "#ddd9d6",  
                "#c7bdb1",
                "#5a473a",
                "#161412"  
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
          'Priorité 1',
          'Priorité 2',
          'Priorité 3',
          'Priorité 4',
          'Priorité 5',
        ],  

        datasets: [  
          {  
            //  data: [this.collab.p1,this.collab.p2,this.collab.p3,this.collab.p4,this.collab.p5],  
            data: [3,6,2,5,6],
            // data : this.pieData,
            // borderColor: '#3cba9f',  
              backgroundColor: [    
                "#ffffff",  
                "#ddd9d6",  
                "#c7bdb1",
                "#5a473a",
                "#161412"  
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




    // this.Linechart = new Chart('canvas', {  
    //   type: 'line',  
    //   data: {  
    //     labels: ['fev','mar','avr'],  

    //     datasets: [  
    //       {  
    //         data: [5,9,3],  
    //         borderColor: '#3cb371',  
    //         backgroundColor: "#0000FF",  
    //       }  
    //     ]  
    //   },  
    //   options: {  
    //     legend: {  
    //       display: false  
    //     },  
    //     scales: {  
    //       xAxes: [{  
    //         display: true  
    //       }],  
    //       yAxes: [{  
    //         display: true  
    //       }],  
    //     }  
    //   }  
    // }); 
      
       
  }  



  




  getCollab(id:number): void {
        
    // this.id = this.route.snapshot.params["id"];
    // console.log(this.route.snapshot.params["id"]);
    this._collabService.getCollaborateur(id)
      .subscribe(data=>{
            console.log(data)
            this.collab=data;
            // this.pieData.push[data.p1,data.p2,data.p3,data.p4,data.p5];
      });
      
  }

}
