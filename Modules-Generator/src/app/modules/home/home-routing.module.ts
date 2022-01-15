import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeGeneratorContainerComponent } from './container/home-generator-container/home-generator-container.component';


const routes: Routes = [
  {
    path: '',
    component: HomeGeneratorContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
