import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContratosService } from '../../services/contratos.service';

@Component({
  selector: 'app-contratos-eliminar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContratosService],
  templateUrl: './contratos-eliminar.component.html',
  styleUrls: ['./contratos-eliminar.component.css']
})
export class ContratosEliminarComponent {
  deleteId: number | undefined;
  error: string | null = null;
  success: string | null = null;

  constructor(private readonly contratosService: ContratosService) {}

  eliminarContrato() {
    if (!this.deleteId) {
      this.error = 'Por favor ingrese un ID';
      return;
    }

    this.contratosService.deleteContrato(this.deleteId).subscribe({
      next: () => {
        this.success = 'Contrato eliminado exitosamente';
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error al eliminar el contrato: ' + (err.error || err.message);
        this.success = null;
      }
    });
  }
}