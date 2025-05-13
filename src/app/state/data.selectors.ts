import { createFeatureSelector } from "@ngrx/store";
import { DemoData } from "../models/models";

export const selectDemoData = createFeatureSelector<Readonly<DemoData>>('data');