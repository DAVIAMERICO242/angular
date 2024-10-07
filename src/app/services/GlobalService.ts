import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { env } from "../../../env";

export interface City{
    id:number,
    nome:string,
    municipio: {
        nome:string
    }
}

@Injectable()
export class GlobalService{
    private api = env.api ;
    private citySubject = new BehaviorSubject<City[]>([]);//sera usado para mudaro estado do service
    public city$ = this.citySubject.asObservable();//notificara a mudança do estado do serviço para mudar o estado privado dos componente
    constructor(private http: HttpClient) {}

    public changeCity(value:City[]){
        this.citySubject.next(value)
    }

    public getCities(){
        this.http.get<City[]>(this.api).subscribe((cities)=>{
            this.citySubject.next(cities)
        })
    }


}