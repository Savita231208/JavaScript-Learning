import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    // Trigger a custom behavior here when the element is clicked
    console.log('Button clicked!');
    
    // You can also manipulate the DOM, styles, etc.
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
  }
}
<button appClick>Click Me</button>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClickDirective } from './click.directive';  // Import your directive

@NgModule({
  declarations: [
    AppComponent,
    ClickDirective   // Declare the directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
