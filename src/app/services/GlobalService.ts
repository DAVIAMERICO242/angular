import { HttpClient, HttpHeaders } from "@angular/common/http";
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
        
        const headers = new HttpHeaders({
            'Cache-Control': 'no-cache, no-store, must-revalidate',  // Desativa o cache
            'Pragma': 'no-cache',  // Para compatibilidade com navegadores antigos
            'Expires': '0'  // Expira imediatamente
        });

        this.http.get<City[]>(this.api,{headers}).subscribe({
            next:(cities)=>{
                this.citySubject.next(cities)
            },
            error:(error)=>{//403,401,500,404
                console.error("ERRO NA REQUISIÇÃO:" + error)
            }
        }
        )
    }

    public deleteCity(id:number){
        const buffer = this.citySubject.getValue();
        this.citySubject.next(buffer.filter((e)=>e.id!==id))
    }


}