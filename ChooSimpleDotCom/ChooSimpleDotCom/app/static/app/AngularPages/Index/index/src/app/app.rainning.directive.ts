import {Directive,ElementRef,Input,Renderer} from '@angular/core'

@Directive ({selector:'[rainning]'})





export class RainningDirective {
    renderer:Renderer;
    el:ElementRef;
    constructor (el:ElementRef,renderer:Renderer) {
        this.renderer = renderer;
        this.el = el;
        this.init();
    }
    init() {
        let child = this.renderer.createElement(this.el.nativeElement,"p");
        this.renderer.setElementClass(child,"123",true);
        child.innerText = "123";

        this.renderer.setElementStyle(this.el.nativeElement,"background-image","url(assets/backimage.jpg)");
        this.renderer.setElementStyle(this.el.nativeElement,"background-position","center");
        this.renderer.setElementStyle(this.el.nativeElement,"width","100%"); 
        this.renderer.setElementStyle(this.el.nativeElement,"height","100%");     
        this.renderer.setElementStyle(this.el.nativeElement,"background-repeat","no-repeat");   
    }
    getRainningBackImage() {
        return "backimage.jpg";
    }
}

