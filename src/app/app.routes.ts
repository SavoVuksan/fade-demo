import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { dataResolver } from './resolvers/data.resolver';
import { ScenarioSelectPageComponent } from './pages/scenario-select-page/scenario-select-page.component';

export const routes: Routes = [
    {
        path: '',
        component: ScenarioSelectPageComponent,
        resolve: { data: dataResolver }
    }
];
