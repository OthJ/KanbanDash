import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {TicketService} from './ticket.service';
import {Ticket} from './ticket';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

    
    
    @Input() ticket : Ticket;

    id : string;
    
    constructor(private _ticketService: TicketService,private route: ActivatedRoute,
        private location: Location){}


    ngOnInit() {
        this.getTicket();
        this.onChangeId();
      }
      onChangeId(){
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getTicket();
        });
      }

    getTicket(): void {
        
        // this.id = this.route.snapshot.params["id"];
        // console.log(this.route.snapshot.params["id"]);
        this._ticketService.getTicket(this.id)
          .subscribe(data=>{
                console.log(data)
                this.ticket=data;
          });
          
      }
    
      goBack(): void {
        this.location.back();
      }
    
    

   /* addTickets(): void{
        this._ticketService.addTickets(this.tickets)
            .subscribe((response) => {console.log(response); this.getTickets();this.reset();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );   
        
    }*/ 

    private reset(){
        this.ticket.id = null;
        this.ticket.dateEnregistrement = null;
        this.ticket.origine= null;
        this.ticket.demandeur= null;
        this.ticket.beneficiaire= null;
        this.ticket.groupeResolu= null;
        this.ticket.metaStatu= null;
        this.ticket.statu= null;
        this.ticket.sujet= null;
       //skip 1 fileds in the csv file
       this.ticket.localisation= null;
       this.ticket.dateResolution= null;
       this.ticket.dateMax= null;
       this.ticket.priorite= null;
       this.ticket.saisiPar= null;
       this.ticket.causeRéelle= null;
       this.ticket.resoluPar= null;
       this.ticket.delai= null;
       this.ticket.groupeCloturant= null;
       this.ticket.ticketParent= null;
       this.ticket.resolutionImmediate= null;
       //skip 4 entries
       this.ticket.sla= null;
       this.ticket.slaCorrige= null
    }
/*
    deleteTicket(ticketId= null){
        console.log("Inside the deleteTicket()::::Ticket id::::"+ticketId);
        this._ticketService.deleteTicket(ticketId)
            .subscribe((response) => {console.log(response); this.getTickets();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            });
            this.reset();
            console.log("end of deleteTicket():::::::");
    }

    getTicket(ticketId= null){
        this._ticketService.getTicketById(ticketId)
            .subscribe((ticketData) => {this.ticket = ticketData; this.getTickets(); }),
            (error) => {
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        this.reset();    
 
    }
    */
}