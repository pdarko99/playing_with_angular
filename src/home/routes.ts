import {Route} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';

export const admin_routes:Route[] = [
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: '', component: HomeComponent
  }
]

