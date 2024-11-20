import { Component } from '@angular/core';
import { ContratosService } from '../../services/contratos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContratoDTO } from '../../model/contrato-dto';

@Component({
  selector: 'app-crear-actualizar',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ContratosService],
  templateUrl: './contratos-actualizar.component.html',
  styleUrl: './contratos-actualizar.component.css'
})
export class ContratosActualizarComponent {
  contrato: ContratoDTO = new ContratoDTO();
    isUpdating: boolean = false;
    id: number | null = null;
    isLoading: boolean = false;
    error: string | null = null;
    success: string | null = null;
  
    constructor(private readonly contratosService: ContratosService) {}
  
    toggleUpdateMode(): void {
      this.isUpdating = !this.isUpdating;
      this.id = null;
    }
  
    submit(): void {
      this.error = null;
      this.success = null;
  
      if (this.id !== null) {
        this.contratosService.updateContrato(this.id, this.contrato).subscribe({
          next: () => {
            this.success = 'Contrato updated successfully';
            this.isLoading = false;
          },
          error: (err) => {
            this.error = 'Failed to update contrato: ' + (err.error || err.message);
            this.isLoading = false;
            console.error(err);
          }
        });
      } else {
        this.error = 'Por favor ingrese un ID';
      }
    }
}
