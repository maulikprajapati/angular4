import { Directive, ElementRef, Renderer } from '@angular/core';
@Directive({
    selector: '[my-dir]'
})
export class DemoDirective {
    constructor(private el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(this.el.nativeElement, "color", "green");
    }
}