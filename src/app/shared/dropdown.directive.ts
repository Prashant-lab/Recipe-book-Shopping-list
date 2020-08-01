import { Directive, OnInit, HostListener, HostBinding,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {



  ngOnInit(){

  }
  // constructor() { }
  // @HostBinding('class.open') isOpen = false;
 

  // @HostListener('click') toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }

@HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}


}
