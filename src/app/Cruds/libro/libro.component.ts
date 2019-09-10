import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroServiceService } from '../../Services/libro-service.service';
import { Libro } from './libro';
import { AutorServiceService } from '../../Services/autor-service.service';
import { Autor } from './../autor/autor';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libros: Libro[];
  autores: Autor[];

  constructor(private servi_a:AutorServiceService ,private service:LibroServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getLibros().subscribe(libros=>this.libros = libros);
    this.servi_a.getAutores().subscribe(autores=>this.autores = autores);
  }

  eliminar(libro: Libro): void{
    this.service.eliminar(libro.idlibro).subscribe(
      response => {
        this.libros = this.libros.filter(lib => lib !== libro)
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
