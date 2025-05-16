import { createReducer, on } from "@ngrx/store";
import { DemoData } from "../models/models";
import { DemoDataActions } from "./demo-data.actions";

export const initialState: Readonly<DemoData> = {
    scenarios: [],
    neurons: [],
    loadingDemoData: true
};

export const dataReducer = createReducer(
    initialState,
    on(DemoDataActions.demoDataLoadedSuccessfully,
        (_state, { demoData }) => ({
            ...demoData,
            loadingDemoData: false
        })),
    on(DemoDataActions.demoDataLoadFailure,
        (_state, { errorMsg }) => ({
            scenarios: [],
            neurons: [],
            loadingDemoData: false,
            failedLoadingDemoData: errorMsg
        })
    )
)