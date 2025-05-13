import { createAction, createActionGroup, props } from "@ngrx/store";
import { DemoData } from "../models/models";

export const DataApiActions = createActionGroup({
    source: 'Data Api',
    events: {
        'Load Data': props<{ data: Readonly<DemoData> }>(),
    },
});