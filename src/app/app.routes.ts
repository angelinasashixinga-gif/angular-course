import { Component } from '@angular/compiler';
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './component/pages/dashboard/dashboard';
import { EsqueceuSeDaSenha } from './esqueceu-se-da-senha/esqueceu-se-da-senha';
import { Sabermais } from './Hero1/DragonBallPage';
import { Contador } from './contador/contador';
import { Heroi } from './heroi/heroi';
import { dragonballPage } from './dragonBall/dragonball-page';
import { Tick } from './tick/tick';
import { dragonballSuperPageComponent } from './DragonBall-super copy/dragonball-super-page.component';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'esqueceu-se-da-senha',
        component: EsqueceuSeDaSenha
    },
    {
        path: 'sabermais',
        component: Sabermais
    },
    {
        path: 'contador',
        component: Contador
    },
    {
        path: 'heroi',
        component: Heroi 
    },
    {
        path: 'sobre',
        component: dragonballPage
    },
     {
        path: 'dragonball-super',
        component: dragonballSuperPageComponent
    },
    {
        path: 'tick',
        component: Tick
    }
];
