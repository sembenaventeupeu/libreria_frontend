import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoServiceService } from 'src/app/Services/empleado-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  private empleado: Empleado = new Empleado();

  constructor(private empleadoService:EmpleadoServiceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarEmpleado()
  }

  public  create(): void{
    this.empleadoService.create(this.empleado).subscribe(
      response => this.router.navigate(['/empleados'])
    )
  }

  cargarEmpleado(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.empleadoService.getEmpleado(id).subscribe((empleado)=>this.empleado=empleado)
      }
    })
  }

  actualizar(): void{
    this.empleadoService.actualizar(this.empleado).subscribe(cliente => {
      this.router.navigate(['/empleados'])
    })
  }

}
