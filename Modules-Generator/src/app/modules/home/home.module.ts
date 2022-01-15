import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeGeneratorContainerComponent } from './container/home-generator-container/home-generator-container.component';
import { HomeGeneratorPresenterComponent } from './presenter/home-generator-presenter/home-generator-presenter.component';

@NgModule({
  declarations: [
    HomeGeneratorContainerComponent,
    HomeGeneratorPresenterComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
