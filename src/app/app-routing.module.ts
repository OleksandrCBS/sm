import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:"shop", component: ShopComponent},
  {path:"movie", component: MovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
