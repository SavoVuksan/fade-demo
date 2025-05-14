import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataLoadingService } from "../services/data-loading.service";
import { DataApiActions } from "./data.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

export const loadDataEffect = createEffect((actions$ = inject(Actions), dataService = inject(DataLoadingService)) => {
    return actions$.pipe(
        ofType(DataApiActions.loadData),
        exhaustMap(() => dataService.getData().pipe(
            map((data) => DataApiActions.dataLoadedSuccessfully({ data })),
            catchError((error: { message: string }) => of(DataApiActions.dataLoadFailure({ errorMsg: error.message })))
        )))
}, { functional: true });