import { Routes } from '@angular/router';
import { pageGuardGuard } from './page-guard-guard';


export const routes: Routes = [
    { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
    {
        path: 'portfolio',
        loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent),
        
    },
    {
        path: 'projects',
        loadComponent: () => import('./sideproject/sideproject.component').then(m => m.SideProjectComponent),
    }

];
