import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContratosService } from '../../services/contratos.service';
import { ContratoDTO } from '../../model/contrato-dto';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contratos-ver',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ContratosService],
  templateUrl: './contratos-ver.component.html',
  styleUrls: ['./contratos-ver.component.css']
})
export class ContratosVerComponent {
  contratos: ContratoDTO[] = [];
  contrato: ContratoDTO | null = null;
  id: number | null = null;
  isLoading: boolean = false;
  error: string | null = null;
deleteId: any;
success: any;

  constructor(private readonly contratosService: ContratosService) {}

  obtenerTodos(): void {
    this.isLoading = true;
    this.error = null;
    this.success = null;
    this.contratosService.getAllContratos().subscribe({
      next: (data) => {
        this.contratos = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load contracts ' + (err.error || err.message);
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  obtenerPorId(): void {
    if (this.id === null) {
      this.error = 'Please enter a valid ID';
      return;
    }
    this.isLoading = true;
    this.error = null;
    this.success = null;
    this.contratosService.getContratoById(this.id).subscribe({
      next: (data) => {
        this.contrato = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar contrato: ' + (err.error || err.message);
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  eliminarContrato() {
    this.isLoading = true;
    this.error = null;
    this.success = null;
    this.contratosService.deleteContrato(this.deleteId).subscribe({
      next: () => {
        this.success = 'Contrato eliminado exitosamente';
        this.isLoading = false;
        this.contrato = null;
        this.contratos = this.contratos.filter(c => c.id !== this.deleteId);
      },
      error: (err) => {
        this.error = 'Error al eliminar el contrato: ' + (err.error || err.message);
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}