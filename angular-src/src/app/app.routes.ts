import { Routes, RouterModule } from "@angular/router"

// site specific
import { SiteViewComponent, SiteHomeComponent, SiteRegisterComponent, SiteLoginComponent} from "./site/components/site-components-barrel"

// dashboard specific
import { DashboardViewComponent, DashboardHomeComponent } from "./dashboard/components/dashboard-components-barrel"

// data generator specific
import { ObjectDataGeneratorComponent, ArrayDataGeneratorComponent} from "./dashboard/data-generators/components/data-generators-components-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: SiteViewComponent, children: [
    {path: "", component: SiteHomeComponent, outlet: "siteOutlet"},
    {path: "login", component: SiteLoginComponent, outlet: "siteOutlet"},
    {path: "register", component: SiteRegisterComponent, outlet: "siteOutlet"},
  ]},
  {path: "dashboard", component: DashboardViewComponent, children: [
    {path: "home", component: DashboardHomeComponent, outlet: "dashboardOutlet"},
    {path: "data-generators", children: [
      {path: "object", component: ObjectDataGeneratorComponent, outlet: "dashboardOutlet"},
      {path: "array", component: ArrayDataGeneratorComponent, outlet: "dashboardOutlet"},
    ]}
  ]}
]

export const router = RouterModule.forRoot(APP_ROUTES)
