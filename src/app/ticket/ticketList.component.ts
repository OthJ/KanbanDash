import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TicketService } from './ticket.service';
import { Ticket } from './ticket';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'ticket-list',
    templateUrl: './ticketList.component.html',
    styleUrls: ['./ticketList.component.css']
})
export class TicketListComponent implements OnInit{
    ticket = new Ticket();
    statusMessage: string;
    tickets: Ticket[];
    name: string;
    i = 0;
    constructor(private _ticketService: TicketService,private route: ActivatedRoute,
        private location: Location){}
    
    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        //this.getTickets();
        this.onChangeId();
    }


    onChangeId(){
        this.route.params.subscribe(params => {
            this.name = params['name'];
            this.getTicketsbyCollab(this.name);
        });
      }
    getTickets(): void{
        console.log("Inside getTickets():::::")
        this._ticketService.getAllTickets()
            .subscribe((ticketData) =>{ console.log(ticketData); this.tickets=ticketData },
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );

        
       // console.log(this.tickets);
        console.log("end of getTickets():::::");
    }

    getTicketsbyCollab(name: string): void{
        console.log("Inside getTickets():::::")
        this._ticketService.getTicketsFor(name)
            .subscribe((ticketData) =>{ console.log(ticketData); this.tickets=ticketData },
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );
    }
}