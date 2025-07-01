import { inject } from "@angular/core";
import { DemoData, Label, Neuron, Scenario } from "../models/models";
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'
import { DemoDataService } from "../services/demo-data.service";
import { lastValueFrom } from "rxjs";

type DemoRuntimeData = {
    isLoadingDemoData: boolean;
    selectedScenario?: Scenario;
    selectedNeuron?: Neuron;
    highlightedLabel?: Label;
}

const initialState: DemoData & DemoRuntimeData = {
    isLoadingDemoData: true,
    neurons: [],
    scenarios: [],
    selectedScenario: {
        description: '',
        iconUrl: '',
        id: 0,
        modelName: '',
        name: 'test',
        neuronIds: []
    },
    highlightedLabel: undefined,
    selectedNeuron: undefined,
}

export const DemoDataStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, demoDataService = inject(DemoDataService)) => ({
        async loadDemoData(): Promise<void> {
            patchState(store, { isLoadingDemoData: true });
            const demoData = await lastValueFrom(demoDataService.loadDemoData());
            patchState(store, { ...demoData, isLoadingDemoData: false });
        },
        changeScenario(newScenarioId?: number) {
            if (!newScenarioId) {
                patchState(store, { selectedScenario: undefined });
            } else {
                // Todo: the parseInt is only here because i could not get the transform for input signals to work. Might be worth to have a further look into that.
                const newScenario = store.scenarios().find((s) => s.id === parseInt(newScenarioId.toString()));

                patchState(store, { selectedScenario: newScenario });
            }
        },
        setSelectedNeuron(neuron?: Neuron) {
            patchState(store, { selectedNeuron: neuron })
        },
        changeHighlightedLabel(label?: Label) {
            patchState(store, { highlightedLabel: label });
        }
    }))
)