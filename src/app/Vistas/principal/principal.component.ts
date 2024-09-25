import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  currentView: string = ''; // Inicialmente vacío

  mostrarFondos() {
    this.currentView = 'fondos'; // Cambia la vista a fondos
  }

  mostrarTransacciones() {
    this.currentView = 'transacciones'; // Cambia la vista a transacciones
  }
}
