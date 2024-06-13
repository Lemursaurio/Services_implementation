import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Empleado } from '../pages/dashboard/empleados.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  agregarEmpleado(em: Empleado): Observable<any> {  

    let params_em = new HttpParams()
      .set('nombre', em.nombre.toString())
      .set('apellido', em.apellido.toString())
      .set('edad', em.edad.toString())
      .set('departamento', em.departamento.toString())
      .set('correo', em.correo.toString());

    return this.http.get<any>('http://localhost:3003/empleados/addEmpleado', { params : params_em });
  }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`http://localhost:3003/empleados/getEmpleados`);
  }
}
