import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  Inject,
  Renderer2,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

declare function window_onload(url: string, login: string, pass: string): any;

@Component({
  selector: "sshy-silent",
  templateUrl: "./wrapper.html",
  styleUrls: ["./css/xterm.css"],
})
export class SshySilentComponent implements AfterViewInit {
  @Input() public url: string;
  @Input() public login: string;
  @Input() public pass: string;

  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit() {
    if (!this.url) {
      this.login = this.route.queryParams["value"]["game"];
      this.url = "ws://localhost:5999/18.218.9.36:22";
      this.pass = "123";
    }
    window_onload(this.url, this.login, this.pass);
  }
}

@Component({
  selector: "sshy",
  templateUrl: "./index.html",
  styleUrls: ["./css/xterm.css", "./css/main.css", "./css/fonts.css"],
})
export class SshyComponent implements OnInit {
  @ViewChild("sshy", { static: true }) sshy: ElementRef;
  constructor() {}
  ngOnInit() {}
}
