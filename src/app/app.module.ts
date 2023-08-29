import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { EditableElementComponent } from './editable-element/editable-element.component';
import { ListRoutingComponent } from './list-routing/list-routing.component';
import { AboutRoutingComponent } from './about-routing/about-routing.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailsRoutingComponent } from './details-routing/details-routing.component';
import { NotFoundRoutingComponent } from './not-found-routing/not-found-routing.component';
import { CreateRoutingComponent } from './create-routing/create-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    EditableElementComponent,
    ListRoutingComponent,
    AboutRoutingComponent,
    NavigationComponent,
    DetailsRoutingComponent,
    NotFoundRoutingComponent,
    CreateRoutingComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
