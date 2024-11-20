import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContratoDTO } from '../model/contrato-dto';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  private readonly apiUrl = 'http://localhost:8080/contratos';

  constructor(private readonly http: HttpClient) {}

  getAllContratos(): Observable<ContratoDTO[]> {
    return this.http.get<ContratoDTO[]>(this.apiUrl);
  }

  getContratoById(id: number): Observable<ContratoDTO> {
    return this.http.get<ContratoDTO>(`${this.apiUrl}/${id}`);
  }

  createContrato(contratoDTO: ContratoDTO): Observable<void> {
    return this.http.post<void>(this.apiUrl, contratoDTO);
  }

  updateContrato(id: number, contratoDTO: ContratoDTO): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, contratoDTO);
  }

  deleteContrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}