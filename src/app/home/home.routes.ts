import { Routes, RouterModule } from '@angular/router';

// component
import { HomeComponent } from 'app/home/home.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent}
];

export const HOME_ROUTES = RouterModule.forChild(ROUTES);
