import { Component, Inject, Injectable } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

export interface DialogData {
  animal: string;
  name: string;
}

@Injectable()
export class DataService {
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
  sshy_games = [
    { name: "DoomRL", path: "doomrl", icon: "games" },
    { name: "Dungeon Crawl", path: "qwerty", icon: "games" },
    { name: "NetHack", path: "nethack", icon: "games" },
    { name: "Angband", path: "angband", icon: "games" },
  ];

  parchment_games = [
    { name: "Curses", path: "/stories/curses.z5", icon: "menu_book" },
    {
      name: "Act Of Murder",
      path: "/stories/ActofMurder.z8",
      icon: "menu_book",
    },
    { name: "Advent", path: "/stories/Advent.z5", icon: "menu_book" },
    {
      name: "Misdirection",
      path: "/stories/Misdirection.z5",
      icon: "menu_book",
    },
    { name: "Troll", path: "/stories/troll.z5.js", icon: "menu_book" },
  ];
  constructor(public dataService: DataService) {}
}

@Component({
  selector: "dialog-overview-sshy",
  templateUrl: "dialog-overview-sshy.html",
})
export class DialogOverviewSSHy {
  animal: string;
  name: string;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewSSHy>,
    private dataService: DataService
  ) {
    this.animal = dataService.animal;
    this.name = dataService.name;
  }

  onClose(): void {
    this.dataService.animal = undefined;
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

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewParchment>,
    private dataService: DataService
  ) {
    this.animal = dataService.animal;
    this.name = dataService.name;
  }

  onClose(): void {
    this.dataService.animal = undefined;
    this.dialogRef.close();
  }
}
