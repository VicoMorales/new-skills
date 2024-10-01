import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './user.component.html',
    styleUrl: './user.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user: any;
}
