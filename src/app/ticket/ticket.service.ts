import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Ticket } from './ticket';
import {Observable, observable, of} from 'rxjs';
//import {MessagesService} from './messages.service';
import {HttpHeaders} from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/operators';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class TicketService{


    private Url = 'http://localhost:8080/KanbanDash/ticket';
    
    constructor(private http: HttpClient){}

    getAllTickets() {
    
    return this.http.get<Ticket[]>('http://localhost:8080/KanbanDash/ticket/tickets');
    
    }
/*
    getTicketById(ticketId: string): Observable<Ticket>{
        return this._httpService.get("http://localhost:8037/spring-mvc-restfull-crud-example/ticket/"+ticketId)
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }
*/
    addTickets(tickets: Ticket[]){
        let body = JSON.parse(JSON.stringify(tickets));
            return this.http.post("http://localhost:8080/KanbanDash/ticket/tickets", body);
    }

    //--list des collaborateurs 
    getCollabs(): Observable<string[]> {
        const url = `${this.Url}/collabs`;
        return this.http.get<string[]>(url);
      }

    getTicket(id: string): Observable<Ticket> {
        const url = `${this.Url}/ticket/${id}`;
        //const url = `http://localhost:8080/KanbanDash/ticket/I190228_000402`;
        return this.http.get<Ticket>(url);

      }


    getTicketsForbyPriority(name: string, priorite: string): Observable<Ticket[]>{
        const url = `${this.Url}/ticketsbyPriorityAndCollaborateur/${priorite}/${name}`;
        return this.http.get<Ticket[]>(url);
    }

    getTicketsFor(name: string): Observable<Ticket[]>{
        const url = `${this.Url}/ticketsForEach/${name}`;
        return this.http.get<Ticket[]>(url);
    }

/*
    deleteTicket(ticketId: string){
        return this._httpService.delete("http://localhost:8037/spring-mvc-restfull-crud-example/ticket/"+ticketId);
    }
    */

    private handleError(error: Response){
        return Observable.throw(error);
    }
}