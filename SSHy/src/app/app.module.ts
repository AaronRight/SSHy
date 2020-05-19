import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module";
import { RouterModule } from "@angular/router";
import {
  DialogOverview,
  DialogOverviewSSHy,
  DialogOverviewParchment,
  DialogEntrySSHyComponent,
  DialogEntryParchmentComponent,
  DataService,
} from "./dialog-overview/dialog-overview";

import { AppComponent } from "./app.component";
import { SshyComponent } from "./sshy/sshy.component";
import { ParchmentComponent } from "./parchment/parchment.component";

@NgModule({
  declarations: [
    AppComponent,
    SshyComponent,
    ParchmentComponent,
    DialogOverview,
    DialogOverviewSSHy,
    DialogOverviewParchment,
    DialogEntrySSHyComponent,
    DialogEntryParchmentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "games",
        component: DialogOverview,
        children: [
          {
            path: "sshy",
            component: DialogEntrySSHyComponent,
          },
          {
            path: "parchment",
            component: DialogEntryParchmentComponent,
          },
        ],
      },
      {
        path: "sshy",
        component: SshyComponent,
      },
      {
        path: "parchment",
        component: ParchmentComponent,
      },
    ]),
  ],
  entryComponents: [
    DialogOverview,
    DialogOverviewSSHy,
    DialogOverviewParchment,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
