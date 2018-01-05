import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { ApiService } from './shared/api.service';
import { FilmsListResolver } from './shared/films-list-resolver.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ApiService, FilmsListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
