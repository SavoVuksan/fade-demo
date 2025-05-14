import { createAction, createActionGroup, props } from "@ngrx/store";
import { DemoData } from "../models/models";

export const DemoDataActions = createActionGroup({
    source: 'Demo Data',
    events: {
        'Load Demo Data': props<any>(),
        'Demo Data Loaded Successfully': props<{ demoData: Readonly<DemoData> }>(),
        'Demo Data Load Failure': props<{ errorMsg: string }>()
    },
});