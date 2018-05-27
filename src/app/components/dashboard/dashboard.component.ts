import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TableDataService } from '../../shared/services/tableData.service';
import { User } from '../../apex/entities/tableData.model'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User = new User();
  users: any;
  currentDate:any;
  types = [
    { value: 'email', modal: 'Email' },
    { value: 'sms', modal: 'SMS' },
  ];
  status = [
    { value: 'active', modal: 'Active' },
    { value: 'inactive', modal: 'Inactive' },
  ];
  constructor(private tableService: TableDataService) {
  }

  ngOnInit() {
    this.users = this.tableService.getRecipes();
  }
  addUser(userData) {
    if (this.user) {
      this.users = userData;
      this.tableService.addIngredient(this.users)
      this.users = this.tableService.getRecipes();
      this.user.date = Date.now();
     this.currentDate  = this.user.date
      this.user = new User();
    }
    else{
      console.log('dsa')
    }
  }

}
