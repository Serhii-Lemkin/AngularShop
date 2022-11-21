import { Routes,RouterModule } from "@angular/router"
import { AboutComponent } from "./components/about/about.component"
import { AddnewComponent } from "./components/addnew/addnew.component"
import { DetailsComponent } from "./components/details/details.component"
import { ItemlistComponent } from "./components/itemlist/itemlist.component"

const appRoutes: Routes =[
    {path: '', component: ItemlistComponent},
    {path: 'addnew', component: AddnewComponent },
    {path: 'about', component: AboutComponent},
    {path: 'details/:id', component: DetailsComponent},
    
]

export const routing = RouterModule.forRoot(appRoutes)