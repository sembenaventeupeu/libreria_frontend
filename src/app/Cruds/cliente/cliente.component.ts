import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../../Services/cliente-service.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private service:ClienteServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getClientes().subscribe(clientes=>this.clientes = clientes);
  }

  eliminar(cliente: Cliente): void{
    this.service.eliminar(cliente.idcliente).subscribe(
      response => {
        this.clientes = this.clientes.filter(cli => cli !== cliente)
      })
  }

}
