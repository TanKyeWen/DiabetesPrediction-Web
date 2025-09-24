import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { PredictPage } from './predict-page/predict-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'predict', component: PredictPage },
    { path: '**', redirectTo: '' }
];
