import { Component, Inject, Injectable, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  template: "",
})
export class DialogEntrySSHyComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewSSHy, {
      width: "250px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(["../"], { relativeTo: this.route });
    });
  }
}

@Component({
  template: "",
})
export class DialogEntryParchmentComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewParchment, {});
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(["../"], { relativeTo: this.route });
    });
  }
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: "dialog-overview",
  templateUrl: "dialog-overview.html",
  styleUrls: ["dialog-overview.css"],
})
export class DialogOverview {
  sshy_games;
  parchment_games;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      this.sshy_games = data.sshy_games;
      this.parchment_games = data.parchment_games;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/games.json");
  }
}

@Component({
  selector: "dialog-overview-sshy",
  templateUrl: "dialog-overview-sshy.html",
})
export class DialogOverviewSSHy implements OnInit {
  url: string;
  login: string;
  pass: string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewSSHy>,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {}

  ngOnInit() {
    this.login = this.route.queryParams["value"]["game"];
    this.url = "ws://localhost:5999/18.218.9.36:22";
    this.pass = "123";
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: "dialog-overview-parchment",
  templateUrl: "dialog-overview-parchment.html",
})
export class DialogOverviewParchment {
  animal: string;
  name: string;

  constructor(public dialogRef: MatDialogRef<DialogOverviewParchment>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
