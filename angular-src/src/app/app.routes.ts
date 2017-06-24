import { Routes, RouterModule } from "@angular/router"

// site specific
import { SiteViewComponent, SiteHomeComponent} from "./site/components/site-components-barrel"

// dashboard specific
import { DashboardViewComponent } from "./dashboard/components/dashboard-components-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: SiteViewComponent, children: [
    {path: "", component: SiteHomeComponent, outlet: "siteOutlet"}
  ]},
  {path: "dashboard", component: DashboardViewComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
