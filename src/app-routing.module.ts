import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutRoutingComponent } from "./app/about-routing/about-routing.component";
import { CreateRoutingComponent } from "./app/create-routing/create-routing.component";
import { DetailsRoutingComponent } from "./app/details-routing/details-routing.component";
import { ListRoutingComponent } from "./app/list-routing/list-routing.component";
import { NotFoundRoutingComponent } from "./app/not-found-routing/not-found-routing.component";

const routes =[
  {
    path : '',
    component : ListRoutingComponent,
  },
  {
    path : 'about',
    component : AboutRoutingComponent,
  },
  {path : 'details/:id',
  component : DetailsRoutingComponent,
  },
  {path : 'create',
  component : CreateRoutingComponent,
  },
  {path : 'not-found',
  component : NotFoundRoutingComponent,
  },
  {path : '**',
  component : NotFoundRoutingComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule{}
