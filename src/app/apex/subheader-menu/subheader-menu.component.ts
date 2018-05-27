import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-subheader-menu',
  templateUrl: './subheader-menu.component.html',
  styleUrls: ['./subheader-menu.component.scss']
})
export class SubheaderMenuComponent implements OnInit {
  menuList: any[];
  activeMenuObject: any;
  isActive:boolean = false;
  states:any = {};
  @Input() inputData;
  
  constructor() { 
    this.states.activeItem = 'ADMIN_DASHBOARD';
    this.roleMenuAccess1()
  }

  ngOnInit() {
  }
  menus() {
    return [
      {
        "id": 'DASHBOARD',
        "name": "Dashboard",
        "link": "/dashboard/admindashboard",
        "icon": "admin_dashboard"
       },
      // {
      //   "id": 'STUDENT',
      //   "name": "All Student List",
      //   "link": "/student-list",
      //   "icon": "user_management"
      // },
      {
        "id": 'PROFILES',
        "name": "Profile",
        "link": "/profile/search",
        "icon": "profile"
      },
      {
        "id": 'EMPLOYEE',
        "name": "Registration",
        "link": "/internalregistration",
        "icon": "profile"
      },
      {
        "id": 'WALKIN',
        "name": "All Walkin List",
        "link": "/walkin-list",
        "icon": "reports"
      }
    ]
  }
  
  roleMenuAccess1() {
    this.menuList = [];
      this.menus().forEach( (item) => {
            this.menuList.push(item);
      })
  }
}
