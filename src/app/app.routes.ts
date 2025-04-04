import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {ProjectPageComponent} from './pages/project-page/project-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {DataComponent} from './admin/pages/data/data.component';
import {DashboardComponent} from './admin/pages/dashboard/dashboard.component';
import {ServicesComponent} from './pages/services/services.component';
import {PostsComponent} from './pages/posts/posts.component';
import {ReactiveFormsComponent} from './pages/reactive-forms/reactive-forms.component';
import {LoginComponent} from './pages/login/login.component';
import {UserProfilComponent} from './pages/user-profil/user-profil.component';
import {authGuard} from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectPageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path : 'contact/:name', component: ContactPageComponent },
  { path : 'admin' , component : AdminLayoutComponent, children :
      [
        {path : 'data', component: DataComponent},
        {path : 'dashboard', component : DashboardComponent}
      ]
  },
  { path: 'services', component: ServicesComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profil',canActivate: [authGuard],  component: UserProfilComponent },

];
