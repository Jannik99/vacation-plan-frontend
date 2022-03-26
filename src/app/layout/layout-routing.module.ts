import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authguard.guard';
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
          import('../questionnaire/questionnaire.module').then(
            (m) => m.QuestionnaireModule
          ),
        path: 'questionnaire',
      },
      {
        canActivate: [AuthGuard],
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
