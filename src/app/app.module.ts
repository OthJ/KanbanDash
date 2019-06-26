import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { TicketService } from './ticket/ticket.service';
import { CollabService } from './collaborator/Collab.service';
import { TicketComponent } from './ticket/ticket.component';
//import { AppChildComponent } from './appchild.component';
import { TicketListComponent } from './ticket/ticketList.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { HomeComponent } from './ticket/home.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { ListCollabComponent } from './list-collab/list-collab.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';

registerLocaleData(en);


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tickets/:name', component: TicketListComponent },
  { path: 'ticket', component: TicketComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
  {path: 'detail'   , component: TicketComponent},
  {path: 'detail/:id'   , component: TicketComponent},
  {path: 'Collab/:id'   , component: CollaboratorComponent},
  {path: 'Collabs'   , component: ListCollabComponent}
];

@NgModule({
  declarations: [
    AppComponent, TicketComponent,  TicketListComponent, HomeComponent, PageNotFoundComponent, CollaboratorComponent, ListCollabComponent, PiechartComponent, LinechartComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,  RouterModule.forRoot(appRoutes), NgZorroAntdModule, BrowserAnimationsModule
  ],
  providers: [TicketService, CollabService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}