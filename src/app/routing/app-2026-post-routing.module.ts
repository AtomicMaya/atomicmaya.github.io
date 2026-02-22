import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const subroutes2026: Routes = [
]
subroutes2026.map((r) => r.data.path = r.path)

@NgModule({
  imports: [RouterModule.forChild(subroutes2026)],
  exports: [RouterModule]
})
export class Posts2025RoutingModule { }
