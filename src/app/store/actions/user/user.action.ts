import { createAction, props } from '@ngrx/store';
import { UserState } from '../../reducers/user/user.reducer';

export const UserActions = {
  setCredentials: createAction('[user: credentials] setting user credentials', props<{ userCredentials: UserState }>())
}
