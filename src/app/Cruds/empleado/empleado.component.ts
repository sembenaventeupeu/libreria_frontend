import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoServiceService } from '../../Services/empleado-service.service';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleados: Empleado[];

  constructor(private service:EmpleadoServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getEmpleados().subscribe(empleados=>this.empleados = empleados);
  }

  eliminar(empleado: Empleado): void{
    this.service.eliminar(empleado.idempleado).subscribe(
      response => {
        this.empleados = this.empleados.filter(aut => aut !== empleado)
      })
  }

}
