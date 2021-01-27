import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ChildComponent } from './child/child.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [AppComponent, HeroesComponent, ChildComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
