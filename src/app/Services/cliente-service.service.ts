import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../Cruds/cliente/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http:HttpClient) { }

  private Url = 'http://localhost:8998/clientes/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getClientes(){
    return this.http.get<Cliente[]>(this.Url)
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.Url+"/add", cliente, {headers: this.httpHeaders});
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.Url}/${id}`)
  }

  actualizar(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.Url}/${cliente.idcliente}`, cliente, {headers: this.httpHeaders})
  }

  eliminar(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.Url}/${id}`, {headers: this.httpHeaders})
  }

}
