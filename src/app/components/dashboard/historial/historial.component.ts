import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styles: []
})
export class HistorialComponent implements OnInit {

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
    this.contactoService.getHistorial().subscribe();
  }

}
