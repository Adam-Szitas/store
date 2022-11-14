import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../store/reducers/user/user.reducer';
import { UserActions } from '../store/actions/user/user.action';
import { UserSelectors } from '../store/selectors/user/user.selector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreFacadeService {

  constructor(private store$: Store){}

  public get userData(){
    return {
      userCredentials: {
        getUserCredentials$: ((): Observable<UserState> => this.store$.select(UserSelectors.getUserCredentials))(),
        setUserCredentials: (userCredentials: UserState) => this.store$.dispatch(UserActions.setCredentials({ userCredentials }))
      }
    }
  }

}
