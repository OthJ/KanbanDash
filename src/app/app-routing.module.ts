import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketListComponent} from './ticket/ticketList.component'
import {TicketComponent} from './ticket/ticket.component'


const routes: Routes = [
    // {path: 'tickets' , component: TicketListComponent},
    // {path: 'detail'   , component: TicketComponent},
    // {path: 'detail/:id'   , component: TicketComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
