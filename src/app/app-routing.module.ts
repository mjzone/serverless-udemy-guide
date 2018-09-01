import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferManageComponent } from './offer-manage/offer-manage.component';

const routes: Routes = [
{
  path: "auth",
  component: AuthComponent
},
{
  path: "offers",
  component: OfferListComponent
},
{
  path: "offers/:id",
  component: OfferDetailComponent
},
{
  path: "manage",
  component: OfferManageComponent
},
{
  path: "",
  redirectTo: "/offers",
  pathMatch: "full"
},
{
  path: "**",
  component: OfferListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
