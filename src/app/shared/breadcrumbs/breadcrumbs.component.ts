import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  
  menuItems?:any[];
  constructor(private sidebarService:SidebarService) { 
    this.menuItems=sidebarService.menu;
  }
  
  ngOnInit(): void {
  }

}
