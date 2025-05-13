import { createReducer, on } from "@ngrx/store";
import { DemoData } from "../models/models";
import { DataApiActions } from "./data.actions";

export const initialState: Readonly<DemoData> = {
    scenarios: [],
    neurons: []
};

export const dataReducer = createReducer(
    initialState,
    on(DataApiActions.loadData, (_state, { data }) => data)
)