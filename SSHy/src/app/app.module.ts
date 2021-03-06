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
} from "./dialog-overview/dialog-overview";

import { AppComponent } from "./app.component";
import { SshySilentComponent } from "./sshy/sshy.component";
import { ParchmentComponent } from "./parchment/parchment.component";

@NgModule({
  declarations: [
    AppComponent,
    SshySilentComponent,
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
        component: SshySilentComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
