import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
 //creación de menus por nfor    
  menu: any[] = [{

    submenu: [
      { titulo: 'Dashboard', url: 'dashboard',icono:'nav-icon fas fa-tachometer-alt' },
      { titulo: 'Personas', url: 'persons',icono:'nav-icon fas fa-user-friends'},
      { titulo: 'Autos', url: 'cars',icono:'nav-icon fas fa-car'},
      { titulo: 'Registros', url: 'register',icono:'fas fa-calendar-alt nav-icon' },
      
      // { titulo: 'Mis datos personales', url: '',icono:'fas fa-user-circle nav-icon' },
      // { titulo: 'Preguntas Frecuentes', url: '',icono:'fas fa-question-circle nav-icon' }
    ]

  }];
  
    

  

  constructor() { }
}
