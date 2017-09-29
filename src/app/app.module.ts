import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieFormComponent } from './movie/movie.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
