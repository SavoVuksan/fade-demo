import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DemoDataService } from "../services/demo-data.service";
import { DemoDataActions } from "./demo-data.actions";
import { catchError, delay, exhaustMap, map, of } from "rxjs";
import { ZodError } from "zod";

export const loadDemoDataEffect = createEffect((actions$ = inject(Actions), dataService = inject(DemoDataService)) => {
    return actions$.pipe(
        ofType(DemoDataActions.loadDemoData),
        exhaustMap(() => dataService.loadDemoData().pipe(
            map((demoData) => DemoDataActions.demoDataLoadedSuccessfully({ demoData })),
            catchError((error) => {
                console.error(error);
                let errorMessge = '';
                if (error instanceof ZodError) {
                    errorMessge = 'Failed parsing demo data. Data not in correct format'
                } else {
                    errorMessge = 'Failed loading demo data.'
                }
                return of(DemoDataActions.demoDataLoadFailure({ errorMsg: errorMessge }))
            }
            )
        )))
}, { functional: true });