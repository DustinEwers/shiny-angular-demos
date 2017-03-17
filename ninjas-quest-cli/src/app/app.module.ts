import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';
import { EncounterComponent } from './encounter/encounter.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';

import { GameService } from './game.service';

import { InputTextModule, DropdownModule, PanelModule, ButtonModule, MenubarModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    CharacterBuilderComponent,
    EncounterComponent,
    StatsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    MenubarModule,
    DropdownModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'encounter', component: EncounterComponent },
      { path: 'start', component: CharacterBuilderComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
