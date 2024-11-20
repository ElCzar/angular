import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContratosService } from '../../services/contratos.service';
import { ContratoDTO } from '../../model/contrato-dto';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crear-actualizar',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ContratosService],
  templateUrl: './contratos-cu.component.html',
  styleUrls: ['./contratos-cu.component.css']
})
export class ContratosCuComponent {
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

    this.contratosService.createContrato(this.contrato).subscribe({
      next: () => {
        this.success = 'Contrato created successfully';
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to create contrato: ' + (err.error || err.message);
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}