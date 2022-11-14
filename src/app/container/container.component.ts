import { Component } from '@angular/core'
import { Observable } from 'rxjs';
import { StoreFacadeService } from '../services/store-facade.service';
import { UserState } from '../store/reducers/user/user.reducer';

@Component({
  selector: 'container-comp',
  templateUrl: './container.component.html',
})
export class ContainerComponent{
  constructor(private storeFacadeService: StoreFacadeService){}

  public userCredentials$: Observable<UserState> = this.storeFacadeService.userData.userCredentials.getUserCredentials$;

  public formValueChanges(credentialsForm: UserState): void{
    this.storeFacadeService.userData.userCredentials.setUserCredentials(credentialsForm);
  }
}
