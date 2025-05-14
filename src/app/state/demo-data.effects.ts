import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataLoadingService } from "../services/data-loading.service";
import { DemoDataActions } from "./demo-data.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

export const loadDemoDataEffect = createEffect((actions$ = inject(Actions), dataService = inject(DataLoadingService)) => {
    return actions$.pipe(
        ofType(DemoDataActions.loadDemoData),
        exhaustMap(() => dataService.getData().pipe(
            map((demoData) => DemoDataActions.demoDataLoadedSuccessfully({ demoData })),
            catchError((error: { message: string }) => of(DemoDataActions.demoDataLoadFailure({ errorMsg: error.message })))
        )))
}, { functional: true });