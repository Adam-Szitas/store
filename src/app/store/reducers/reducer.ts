import { userCredentialsReducer, UserState } from "./user/user.reducer";
import { combineReducers } from '@ngrx/store'


export interface State{
  user: UserState;
}

export const FORM_FEATURE_NAME = 'formStore';

export const Reducer = combineReducers<State>({
  user: userCredentialsReducer
})
