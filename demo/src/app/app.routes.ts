import { Routes } from '@angular/router';
import {HomeComponent} from "./content/home/home.component";
import {EditorComponent} from "./content/editor/editor.component";
import {DetailsComponent} from "./content/details/details.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'editor', component: EditorComponent },
];
