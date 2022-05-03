import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRootComponent } from './components/layout-root/layout-root.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      {
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
        path: '',
      },
      {
        loadChildren: () =>
          import('../planner/planner.module').then((m) => m.PlannerModule),
        path: 'planner',
      },
      {
        loadChildren: () =>
          import('../my-data/my-data.module').then((m) => m.MyDataModule),
        path: 'my-data',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
