import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from './empleados.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class AppDashboardComponent {
  empleado: Empleado = {nombre:'', apellido:'', edad:'', departamento:'', correo:''};
  empleado$!: Observable<Empleado[]>;

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  onSubmit(): void {
    this.empleadosService.agregarEmpleado(this.empleado).subscribe(response => {
      this.getEmpleados(); 
    });
  }

  getEmpleados() {
    this.empleado$ = this.empleadosService.getEmpleados();
  }
}
