import { createReducer, on, Action } from '@ngrx/store'
import { UserActions } from '../../actions/user/user.action';

export interface UserState{
  firstName: string | null;
  lastName: string | null;
  age: number | null;
}

const initialState: UserState = {
  firstName: 'Alladin',
  lastName: 'Genie',
  age: 10000,
}

const reducer = createReducer(
  initialState,
  on(UserActions.setCredentials, (state: UserState, { userCredentials }): UserState => {
    return {
      ...state,
      firstName: userCredentials.firstName,
      lastName: userCredentials.lastName,
      age: userCredentials.age
    }
  })
)

export function userCredentialsReducer(state: UserState | undefined, action: Action): UserState{
  return reducer(state, action)
}
