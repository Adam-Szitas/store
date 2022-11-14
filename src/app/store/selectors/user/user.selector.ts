import { createSelector } from '@ngrx/store'
import { State } from '../../reducers/reducer'
import { UserState } from '../../reducers/user/user.reducer'
import { getState } from '../selector'

const userState = createSelector(getState, (state: State): UserState => state['user']);

const getUserCredentials = createSelector(userState, (state: UserState): UserState => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    age: state.age
  }
})

export const UserSelectors = {
  getUserCredentials
}
