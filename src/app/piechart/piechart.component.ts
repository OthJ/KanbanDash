import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {


  // data: Data[];  
    url = 'http://localhost:58617/API/Charts/GetCharts';  
    Player = [];  
    Run = [];  
    chart = [];  


  constructor() { }

  ngOnInit() {
    console.log('piechart component')
    this  
    this.chart = new Chart('canvas', {  
          type: 'pie',  
          data: {  
            labels: ['1','7','7','4'],  
            datasets: [  
              {  
                data: [2,5,5,6],  
                borderColor: '#3cba9f',  
                backgroundColor: [  
                  "#3cb371",  
                  "#0000FF",  
                  "#9966FF",  
                  "#4C4CFF",  
                  "#00FFFF",  
                  "#f990a7",  
                  "#aad2ed",  
                  "#FF00FF",  
                  "Blue",  
                  "Red",  
                  "Blue"  
                ],  
                fill: true  
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
  }

  
}
