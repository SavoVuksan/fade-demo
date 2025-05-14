import { Routes } from '@angular/router';
import { demoDataResolver } from './resolvers/demo-data.resolver';
import { ScenarioSelectPageComponent } from './pages/scenario-select-page/scenario-select-page.component';
import { NeuronSelectPageComponent } from './pages/neuron-select-page/neuron-select-page.component';
import { LabelDetailsPageComponent } from './pages/label-details-page/label-details-page.component';

export const routes: Routes = [
    {
        path: 'app',
        resolve: { data: demoDataResolver },
        children: [
            {
                path: 'scenario-select',
                data: {
                    id: 0
                },
                title: 'Scenario',
                component: ScenarioSelectPageComponent,
                resolve: { data: demoDataResolver },
            },
            {
                path: 'scenario-select/:scenario-id/neuron-select',
                data: {
                    id: 1
                },
                title: 'Neuron Select',
                component: NeuronSelectPageComponent,
            },
            {
                path: 'scenario-select/:scenario-id',
                redirectTo: 'scenario-select/:scenario-id/neuron-select'
            },
            {
                path: 'scenario-select/:scenario-id/neuron-select/:neuron-id',
                title: 'Label Details',
                data: {
                    id: 2
                },
                component: NeuronSelectPageComponent
            },
            {
                path: 'scenario-select/:scenario-id/neuron-select/:neuron-id/label-details',
                title: 'Label Details',
                data: {
                    id: 2
                },
                component: LabelDetailsPageComponent
            }
        ]
    }

];

