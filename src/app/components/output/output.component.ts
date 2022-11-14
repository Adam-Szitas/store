import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserState } from 'src/app/store/reducers/user/user.reducer';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent {
  @Input()
  public formValues: UserState | undefined = undefined;
}
