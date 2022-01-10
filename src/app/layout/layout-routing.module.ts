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
          import('../questionnaire/questionnaire.module').then(
            (m) => m.QuestionnaireModule
          ),
        path: 'questionnaire',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
