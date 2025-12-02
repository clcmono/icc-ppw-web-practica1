import { LoginPage } from './features/components/login-page/login-page';
import { Routes } from '@angular/router';
import { HomePage } from './features/components/pages/home-page/home-page';
import { PokemonDetailPage } from './features/components/pages/pokemon-detail-page/pokemon-detail-page';

export const routes: Routes = [
{
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },

  {
    path: "login",
    component: LoginPage
  },

  {
    path: "home",
    component: HomePage
  },

  {
    path: "pokemon/:id",
    component: PokemonDetailPage
  },
  {
    path: "**",
    redirectTo: "login"
  },
];
