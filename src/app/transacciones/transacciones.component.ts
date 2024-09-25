import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service'; 

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {
  transacciones: any[] = [];

  constructor(private clientService: ClientService, private http: HttpClient) { }

  ngOnInit() {
    const identificacion = this.clientService.identificacion;
    this.obtenerTransacciones(identificacion);
  }

  obtenerTransacciones(clienteId: string) {
    const url = `http://localhost:8080/api/transaccion/cliente/${clienteId}/history-transacciones`;
    this.http.get(url).subscribe(
      (response: any) => {
        if (response.status === 200) {
          this.transacciones = response.data;
        }
      },
      (error: any) => {
      }
    );
  }
}
