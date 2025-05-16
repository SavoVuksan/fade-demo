import { getRouterSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

export const selectTitle = getRouterSelectors().selectTitle;
export const selectIsOnRootPage = createSelector(getRouterSelectors().selectRouteData, (data) => data['id'] === 0); // Todo: Add a check to see if the route actually provides the id