import { Routes } from '@angular/router';
import {HomeComponent} from "./content/home/home.component";
import {EditorComponent} from "./content/editor/editor.component";
import {DetailsComponent} from "./content/details/details.component";
import {GraphicalComponent} from "./content/graphical/graphical.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'graphical', component: GraphicalComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'editor', component: EditorComponent },
];
