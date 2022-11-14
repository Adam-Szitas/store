import { createFeatureSelector } from '@ngrx/store';
import { FORM_FEATURE_NAME, State } from '../reducers/reducer';

export const getState = createFeatureSelector<State>(FORM_FEATURE_NAME)
