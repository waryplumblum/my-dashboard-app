import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal<boolean>(false);
  public grade       = signal<Grade>  ( 'A' );
  public frameworks  = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal([]);

  public toogleContent(){
    this.showContent.update(value => !value);
  }

}
