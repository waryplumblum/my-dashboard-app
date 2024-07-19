import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()"/>
    <pre> {{ frameworkasSignal() | json }} </pre>
    <pre> {{ frameworkasProperty | json }} </pre>
  `,
})
export default class ChangeDetectionComponent {

  public frameworkasSignal   = signal  ({ name: 'Angular',releaseDate: 2016 }                         );
  public frameworkasProperty =         { name: 'Angular',releaseDate: 2016  }                          ;
  public currentFramework    = computed( () => `Change Detection - ${ this.frameworkasSignal().name }`);

  constructor(){
    setTimeout(()=> {
      // this.frameworkasProperty.name = 'React';
      this.frameworkasSignal.update( value => ({ ...value,name: 'React' }))
      console.log('Hecho');
    },3000);
  }
}
