import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilService } from '../../services/util.service';
import { Pais } from '../../models/pais.model';
import { Ejemplo } from '../../models/ejemplo.model';
import { EjemploService } from '../../services/ejemplo.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-ejemplo',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './add-ejemplo.component.html',
  styleUrl: './add-ejemplo.component.css'
})
export class AddEjemploComponent {

  lstPais: Pais[] = [];

  objEjemplo: Ejemplo = {
      descripcion: '',
      pais: {
        idPais: -1,
      }
  };


  constructor(private utilService:UtilService, private ejemploService:EjemploService) { }

  ngOnInit(): void {
      this.utilService.listaPais().subscribe(data => {
        this.lstPais = data;
      });
  }

  registraEjemplo(){
      this.ejemploService.registraEjemplo(this.objEjemplo).subscribe(data => {
        console.log(data);
        Swal.fire({
          title: "Resultado",
          text: data.mensaje,
          icon: "info"
        });
      });
  }
}