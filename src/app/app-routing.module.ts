import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mini-mapa/:folio', component: MiniMapaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

class CustomReuseStrategy implements RouteReuseStrategy {
  shouldReuseRoute(future: any, curr: any): boolean {
    return false;
  }

  retrieve(route: any): any {
    return null;
  }

  shouldAttach(route: any): boolean {
    return false;
  }

  store(route: any, detachedTree: any): void {}

  shouldDetach(route: any): boolean {
    return false;
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }]
})

export class AppRoutingModule { }
