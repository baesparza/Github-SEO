import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', loadChildren: './../home/home.module#HomeModule'}
];

// tslint:disable-next-line:eofline
export const CORE_ROUTES = RouterModule.forRoot(ROUTES);