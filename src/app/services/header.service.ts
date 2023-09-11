import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {retry, catchError} from 'rxjs/operators';
import { GeneralService } from "./general.service";

@Injectable({
    providedIn: 'root'
  })
export class HeaderServices{
    constructor(private cliente: HttpClient, private service:GeneralService){};
    
    getHeaderInfo():Observable<any>{
        return this.cliente.get<any>(this.service.apiURL+"header", this.service.httpOptions)
        .pipe(
            retry(1), //Volver a intentar
            catchError(this.service.handleError)
        )

        
    }
    
}
