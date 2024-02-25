import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true 
})
export class HoverDirective {
  @Input() appHover!: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverAffect(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverAffect(false);
  }

  private hoverAffect(isHovering: boolean): void {
    if (isHovering) {
      if (this.appHover === 'underline') {
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
      } else if (this.appHover === 'bold') {
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'border', '3px solid blue');
      }
    } else {
      if (this.appHover === 'underline') {
        this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
      } else if (this.appHover === 'bold') {
        this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
      } else {
        this.renderer.removeStyle(this.el.nativeElement, 'border');
      }
    }
  }
}