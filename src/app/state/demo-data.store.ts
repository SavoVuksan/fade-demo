import { inject } from "@angular/core";
import { DemoData } from "../models/models";
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'
import { DemoDataService } from "../services/demo-data.service";
import { lastValueFrom } from "rxjs";

const initialState: DemoData = {
    isLoadingDemoData: true,
    neurons: [],
    scenarios: [],
}

export const DemoDataStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, demoDataService = inject(DemoDataService)) => ({
        async loadDemoData(): Promise<void> {
            patchState(store, { isLoadingDemoData: true });
            const demoData = await lastValueFrom(demoDataService.loadDemoData());
            patchState(store, { ...demoData, isLoadingDemoData: false });
        }
    }))
)