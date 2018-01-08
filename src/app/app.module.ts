import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { ApiService } from './shared/api.service';
import { FilmsListResolver } from './shared/films-list-resolver.service';
import { FormatUrlPipe } from './shared/format-url.pipe';
import { PeopleComponent } from './people/people.component';

/*PreloadAllModules - this means if multiple modules are used in the App, 
then the main one is loaded first followed by all subsequent ones. 
Otherwise they will just be loaded as requested. 
Alternatively you can load specific ones eagerly and lazily.*/
import { RouterModule, PreloadAllModules } from '@angular/router';
import { appRoutes } from './routes';
import { CollapsibleCharacters } from './common/collapsible-section.component';




@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    CollapsibleCharacters,
    PeopleComponent,
    FormatUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [ApiService, FilmsListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
