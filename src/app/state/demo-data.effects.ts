import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DemoDataService } from "../services/demo-data.service";
import { DemoDataActions } from "./demo-data.actions";
import { catchError, delay, exhaustMap, map, of } from "rxjs";

export const loadDemoDataEffect = createEffect((actions$ = inject(Actions), dataService = inject(DemoDataService)) => {
    return actions$.pipe(
        ofType(DemoDataActions.loadDemoData),
        exhaustMap(() => dataService.loadDemoData().pipe(
            map((demoData) => DemoDataActions.demoDataLoadedSuccessfully({ demoData })),
            catchError((error: { message: string }) => of(DemoDataActions.demoDataLoadFailure({ errorMsg: 'Failed loading demo data.' })))
        )))
}, { functional: true });