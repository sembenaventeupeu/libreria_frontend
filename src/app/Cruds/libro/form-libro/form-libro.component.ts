import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroServiceService } from 'src/app/Services/libro-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AutorServiceService } from 'src/app/Services/autor-service.service';
import { Autor } from '../../autor/autor';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {

  private libro: Libro = new Libro();
  private autores: Autor[];

  constructor( private autorService:AutorServiceService,private libroService:LibroServiceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.autorService.getAutores().subscribe(autores=>this.autores = autores);
    this.cargarLibro();
  }

  public  create(): void{
    this.libroService.create(this.libro).subscribe(
      response => this.router.navigate(['/libros'])
    )
  }

  cargarLibro(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.libroService.getLibro(id).subscribe((libro)=>this.libro=libro);
      }
    })
  }

  actualizar(): void{
    this.libroService.actualizar(this.libro).subscribe(libro => {
      this.router.navigate(['/libros'])
    })
  }

  resp:string;
  
  nomAutor(idaut:number){
    for (let i = 0; i < this.autores.length; i++) {
      const element = this.autores[i];
      if (element.idautor==idaut) {
        this.resp = "" + element.apellidos + ", " + element.nombres;
        return this.resp;
      }
    }
  }

}
