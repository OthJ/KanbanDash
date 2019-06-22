import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TicketService} from './ticket/ticket.service';
import {Ticket} from './ticket/ticket';
import {Collaborateur} from './collaborator/Collaborateur';
import {CollabService} from './collaborator/collab.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    tickets: Ticket[];
    tickets2: Ticket[];
    collabs: Collaborateur[];
    statusMessage= null;
    ticket : Ticket;
    data: any;

  constructor(private _ticketService: TicketService,private _collabService: CollabService,private _router: Router){}


  ngOnInit(): void {
   // this.getTickets();
   // this.getCollabs();
}

getTickets(): void{
    this._ticketService.getAllTickets()
        .subscribe((ticketData) => this.tickets = ticketData,
        (error) =>{
            console.log(error);
            this.statusMessage = "Problem with service. Please try again later!";
        }
    );
    
}

getCollabs(): void{
  this._collabService.getAllCollaborateurs()
      .subscribe((collabData) => this.collabs = collabData,
      (error) =>{
          console.log(error);
          this.statusMessage = "Problem with service. Please try again later!";
      }
  );
  
}

fileUpload(files) {
    if (files && files.length > 0) {
      const file: File = files.item(0);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const res = reader.result as string; // This variable contains your file as text
        const lines = res.split('\n'); // Splits you file into lines
        const ids = [];
        lines.forEach((line) => {
          ids.push(line.split(';')[0]); // Get first item of line
          //console.log((line.split(';')[i]));

        });
        //console.log(ids);
        this.data = lines;
        
        this.storeData();
        
        //this.addTickets();
      };
    }
  }

  storeData() {
    // tslint:disable-next-line:forin

    //const tickets = [];
    this.data.forEach((line) => {
      this.ticket = new Ticket();
      const ticketElements = line.split(';'); // Get first item of line
      this.ticket.id =  ticketElements[0];
      this.ticket.dateEnregistrement =  ticketElements[1];
      this.ticket.origine=  ticketElements[2];
      this.ticket.demandeur=  ticketElements[3];
      this.ticket.beneficiaire=  ticketElements[4];
      this.ticket.groupeResolu=  ticketElements[5];
      this.ticket.metaStatu=  ticketElements[6];
      this.ticket.statu=  ticketElements[7];
      this.ticket.sujet=  ticketElements[8];
     //skip 1 fileds in the csv file
     this.ticket.localisation=  ticketElements[11];
     this.ticket.dateResolution=  ticketElements[12];
     this.ticket.dateMax=  ticketElements[13];
     this.ticket.priorite=  ticketElements[14];
     this.ticket.saisiPar=  ticketElements[15];
     this.ticket.causeRéelle=  ticketElements[16];
     this.ticket.resoluPar=  ticketElements[17];
     this.ticket.delai=  ticketElements[18];
     this.ticket.groupeCloturant=  ticketElements[19];
     this.ticket.ticketParent=  ticketElements[20];
     this.ticket.resolutionImmediate=  ticketElements[25];
     //skip 4 entries
     this.ticket.sla=  ticketElements[26];
     this.ticket.slaCorrige=  ticketElements[27];


     const labels= [0,1,2,3,4,5,6,7,8]
     labels.map((label)=>{
        label
     })

     this.tickets.push(this.ticket);
      

    });
}

}

