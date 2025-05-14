import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { demoDataResolver } from './resolvers/demo-data.resolver';
import { ScenarioSelectPageComponent } from './pages/scenario-select-page/scenario-select-page.component';

export const routes: Routes = [
    {
        path: '',
        component: ScenarioSelectPageComponent,
        resolve: { data: demoDataResolver }
    }
];
