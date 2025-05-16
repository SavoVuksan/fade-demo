import { createReducer, on } from "@ngrx/store";
import { DemoData, DemoDataSchema } from "../models/models";
import { DemoDataActions } from "./demo-data.actions";

export const initialState: Readonly<DemoData> = {
    scenarios: [],
    neurons: [],
    isLoadingDemoData: true
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
            isLoadingDemoData: false,
            failedLoadingDemoData: errorMsg
        })
    )
)