import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginEmpleadosComponent } from './components/login-empleados/login-empleados.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RecolectoresComponent } from './components/recolectores/recolectores.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RecolectorHomeComponent } from './components/recolector-home/recolector-home.component';
import { RecolectorArchivoComponent } from './components/recolector-archivo/recolector-archivo.component';
import { RecolectorRutaComponent } from './components/recolector-ruta/recolector-ruta.component';
import { AsignarRutasComponent } from './components/asignar-rutas/asignar-rutas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { UsuariohomeComponent } from './components/usuariohome/usuariohome.component';
import { UsuarioordenComponent } from './components/usuarioorden/usuarioorden.component';
import { UsuarioperfilComponent } from './components/usuarioperfil/usuarioperfil.component';


export const routes: Routes = [

    { path: 'login', component: LoginComponent },  // Ruta para login
    { path: 'admin', component: AdminComponent },  // Ruta para admin
    { path: 'LoginEmpleado', component: LoginEmpleadosComponent },  // Ruta para admin
    { path: 'LoginAdmin', component: LoginAdminComponent},
    { path: 'QuienesSomos', component: QuienesSomosComponent },
    { path: 'Beneficios', component: BeneficiosComponent },
    { path: 'Servicios', component: ServiciosComponent },
    { path: 'Ubicacion', component: UbicacionComponent },
    { path: 'Principal', component: PrincipalComponent},
    { path: 'Usuarios', component: UsuariosComponent},
    { path: 'Recolectores', component: RecolectoresComponent},
    { path: 'Rutas', component: RutasComponent},
    { path: 'Productos', component: ProductosComponent},
    { path: 'Catalogo', component: CatalogoComponent},
    { path: 'AsignarRutas', component: AsignarRutasComponent},
    { path: 'Estadisticas', component:EstadisticasComponent },
    { path: 'Registro', component:RegistroComponent},
    { path: 'RecolectorHome', component:RecolectorHomeComponent},
    { path: 'RecolectorRuta', component:RecolectorRutaComponent},
    { path: 'RecolectorArchivo', component:RecolectorArchivoComponent},
    { path: 'Usuariohome', component:UsuariohomeComponent},
    { path: 'Usuarioorden', component:UsuarioordenComponent},
    { path: 'Usuarioperfil',component:UsuarioperfilComponent}
    


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
