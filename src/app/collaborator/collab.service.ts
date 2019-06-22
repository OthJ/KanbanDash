import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { Collaborateur } from './Collaborateur';
import {Observable, observable, of} from 'rxjs';
//import {MessagesService} from './messages.service';
import {HttpHeaders} from '@angular/common/http';
import {catchError, map, tap } from 'rxjs/operators';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})
export class CollabService{


    private Url = 'http://localhost:8080/KanbanDash/collaborateur';
    
    constructor(private http: HttpClient){}

    getAllCollaborateurs() :Observable<Collaborateur[]>{
        const url=`${this.Url}/collabs`;
    
    return this.http.get<Collaborateur[]>(url);
    
    }

    getCollaborateur(id:number) :Observable<Collaborateur>{
    //    const idstr = id+''
        console.log('id est :'+id)
        const url=`${this.Url}/collab/${id}`;
    
    return this.http.get<Collaborateur>(url);
    
    }
/*
    getCollaborateurById(ticketId: string): Observable<Collaborateur>{
        return this._httpService.get("http://localhost:8037/spring-mvc-restfull-crud-example/Collaborateur/"+ticketId)
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }
*/
    // addCollaborateurscollabscollaborateurs: Collaborateur[]){
    //     let body = JSON.parse(JSON.stringify(collaborateurs));
    //         return this.http.post("http://localhost:8080/KanbanDash/collaborateurs", body);
    // }

    // //--list des collaborateurs 
    // getCollabs(): Observable<string[]> {
    //     const url = `${this.Url}/collabs`;
    //     return this.http.get<string[]>(url);
    //   }

    // getCollaborateur(id: string): Observable<Collaborateur> {
    //     const url = `${this.Url}/Collaborateur/${id}`;
    //     //const url = `http://localhost:8080/KanbanDash/Collaborateur/I190228_000402`;
    //     return this.http.get<Collaborateur>(url);

    //   }


    // getCollaborateursFor(name: string, priorite: string): Observable<Collaborateur[]>{
    //     const url = `${this.Url}/collaborateursbyPriorityAndCollaborateur/${priorite}/${name}`;
    //     return this.http.get<Collaborateur[]>(url);
    // }

/*
    deleteCollaborateur(ticketId: string){
        return this._httpService.delete("http://localhost:8037/spring-mvc-restfull-crud-example/Collaborateur/"+ticketId);
    }
    */

    // private handleError(error: Response){
    //     return Observable.throw(error);
    // }

    private handleError(error: Response){
        return Observable.throw(error);
    }
}