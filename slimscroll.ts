import {Directive, ElementRef, AfterContentInit, Input} from '@angular/core';

@Directive({
	selector:		'[slimscroll]'
})

export class Slimscroll implements AfterContentInit{
	@Input("wheel-step") wheelStep = 10;
	@Input() height: string = "100%";
	constructor(elem: ElementRef) {
		this.elem = elem;
	}
	ngAfterContentInit() {
		$(this.elem.nativeElement).slimScroll({
			height:			this.height,
			wheelStep:	this.wheelStep
		});
		$(this.elem.nativeElement).parent().addClass("flex-item flex-container-column");
	}
}