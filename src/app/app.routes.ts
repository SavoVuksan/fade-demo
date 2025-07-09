import { Routes } from '@angular/router';
import { ScenarioSelectPageComponent } from './pages/scenario-select-page/scenario-select-page.component';
import { NeuronSelectPageComponent } from './pages/neuron-select-page/neuron-select-page.component';
import { LabelDetailsPageComponent } from './pages/label-details-page/label-details-page.component';
import { LegalInfoPageComponent } from './pages/legal-info-page/legal-info-page.component';

export const routes: Routes = [
    {
        path: 'scenario-select',
        data: {
            id: 0
        },
        title: 'Scenario',
        component: ScenarioSelectPageComponent,
    },
    {
        path: 'scenario-select/:scenario-id/neuron-select',
        redirectTo: 'scenario-select'

    },
    {
        path: 'scenario-select/:scenario-id/neuron-select/:neuron-id',
        title: 'Neuron Select',
        data: {
            id: 1
        },
        component: NeuronSelectPageComponent
    },
    {
        path: 'scenario-select/:scenario-id',
        redirectTo: 'scenario-select'
    },
    {
        path: 'scenario-select/:scenario-id/neuron-select/:neuron-id/label-details/:label-id',
        title: 'Label Details',
        data: {
            id: 2
        },
        component: LabelDetailsPageComponent
    },
    {
        component: LegalInfoPageComponent,
        path: 'legal-info',
        title: 'Legal Info',
        data: {
            id: 3
        },
    },
    {
        path: 'scenario-select/:scenario-id/neuron-select/:neuron-id/label-details',
        redirectTo: 'scenario-select/:scenario-id/neuron-select/:neuron-id'
    },
    {
        path: '**',
        redirectTo: 'scenario-select'
    }
];

