import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  Renderer2,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "parchment",
  templateUrl: "./parchment.component.html",
  styleUrls: ["./parchment.component.css"],
})
export class ParchmentComponent implements OnInit, AfterViewInit {
  @ViewChild("parchment", { static: true }) parchment: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    let rndr = this.renderer;
    let prch = this.parchment;
    let crtscr = this.createScript;

    let element = this.createScript("./lib/jquery.min.js");
    element.onload = function () {
      rndr.appendChild(prch.nativeElement, crtscr("./lib/parchment.min.js"));
    };

    this.renderer.appendChild(this.parchment.nativeElement, element);
  }

  createScript(src) {
    let element = document.createElement("script");
    element.src = src;
    element.type = "text/javascript";
    return element;
  }
}
