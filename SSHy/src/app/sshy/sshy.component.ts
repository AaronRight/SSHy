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
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "sshy",
  templateUrl: "./sshy.component.html",
  styleUrls: ["./sshy.component.css"],
})
export class SshyComponent implements OnInit, AfterViewInit {
  meedToLogin = true;
  gameName: string;

  @ViewChild("sshy", { static: true }) sshy: ElementRef;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document
  ) {}

  ngOnInit() {
    this.gameName = this.route.snapshot.queryParams["game"];
  }

  ngAfterViewInit() {
    let scripts = [
      "./sshy/defines.js",
      "./sshy/aes.min.js",
      "./sshy/BigInteger.min.js",
      "./sshy/randomart.js",
      "./sshy/struct.min.js",
      "./sshy/utilities.min.js",
      "./sshy/terminal_settings.js",
      "./sshy/SSHyClient.js",
      "./sshy/message.js",
      "./sshy/parceler.js",
      "./sshy/crypto.js",
      "./sshy/auth_handler.js",
      "./sshy/rsaKey.js",
      "./sshy/Hash.min.js",
      "./sshy/transport.js",
      "./sshy/dhKex.js",
      "./sshy/settings.js",
    ];

    scripts.forEach((el) =>
      this.renderer.appendChild(this.sshy.nativeElement, this.createScript(el))
    );

    let prch = this.sshy;

    let element = this.createScript("./sshy/terminal_window.js");
    element.onload = function () {
      var evt = document.createEvent("Event");
      evt.initEvent("load", false, false);
      prch.nativeElement.dispatchEvent(evt);

      eval("baseStartSSHy()");
    };
    this.renderer.appendChild(this.sshy.nativeElement, element);
  }

  createScript(src) {
    let element = document.createElement("script");
    element.src = src;
    element.type = "text/javascript";
    return element;
  }
}
