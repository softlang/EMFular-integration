import { Routes } from '@angular/router';
import {HomeComponent} from "./content/home/home.component";
import {EditorComponent} from "./content/editor/editor.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'editor', component: EditorComponent },
];
