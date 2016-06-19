"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Slimscroll = (function () {
    function Slimscroll(elem) {
        this.wheelStep = 10;
        this.height = "100%";
        this.elem = elem;
    }
    Slimscroll.prototype.ngAfterContentInit = function () {
        $(this.elem.nativeElement).slimScroll({
            height: this.height,
            wheelStep: this.wheelStep
        });
        $(this.elem.nativeElement).parent().addClass("flex-item flex-container-column");
    };
    __decorate([
        core_1.Input("wheel-step"), 
        __metadata('design:type', Object)
    ], Slimscroll.prototype, "wheelStep", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Slimscroll.prototype, "height", void 0);
    Slimscroll = __decorate([
        core_1.Directive({
            selector: '[slimscroll]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Slimscroll);
    return Slimscroll;
}());
exports.Slimscroll = Slimscroll;
//# sourceMappingURL=slimscroll.js.map