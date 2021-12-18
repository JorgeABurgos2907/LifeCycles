import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log('constructor')
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnit')
  }

  

}
