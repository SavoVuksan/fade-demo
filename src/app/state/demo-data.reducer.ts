import { createReducer, on } from "@ngrx/store";
import { DemoData } from "../models/models";
import { DemoDataActions } from "./demo-data.actions";

export const initialState: Readonly<DemoData> = {
    scenarios: [],
    neurons: []
};

export const dataReducer = createReducer(
    initialState,
    on(DemoDataActions.demoDataLoadedSuccessfully, (_state, { demoData }) => demoData)
)