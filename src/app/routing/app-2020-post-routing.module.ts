import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { subroutes2020 } from './app.sub-routes-2020';

@NgModule({
  imports: [RouterModule.forChild(subroutes2020)],
  exports: [RouterModule]
})
export class Posts2020RoutingModule { }
