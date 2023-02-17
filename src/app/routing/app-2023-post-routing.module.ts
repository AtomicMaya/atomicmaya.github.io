import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { subroutes2023 } from './app.sub-routes-2023';

@NgModule({
  imports: [RouterModule.forChild(subroutes2023)],
  exports: [RouterModule]
})
export class Posts2023RoutingModule { }
