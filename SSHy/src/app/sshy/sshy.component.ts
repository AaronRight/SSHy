import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

declare const window_onload: any;

@Component({
  selector: "sshy",
  templateUrl: "./sshy.component.html",
  styleUrls: ["./sshy.component.css"],
})
export class SshyComponent implements OnInit {
  wsproxyURL = "ec2-3-19-142-178.us-east-2.compute.amazonaws.com";
  wsproxyPorts = { ws: 5999, wss: 6001 };
  wsproxyProto = "ws";

  ws = null;
  transport = null;
  settings = null;
  term = null;

  resizeInterval = null;

  constructor() {}
  ngOnInit() {}
}
