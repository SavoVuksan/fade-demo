import { createAction, createActionGroup, props } from "@ngrx/store";
import { DemoData } from "../models/models";

export const DataApiActions = createActionGroup({
    source: 'Data Api',
    events: {
        'Load Data': props<any>(),
        'Data Loaded Successfully': props<{ data: Readonly<DemoData> }>(),
        'Data Load Failure': props<{ errorMsg: string }>()
    },
});