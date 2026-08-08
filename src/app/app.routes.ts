import { Component } from '@angular/compiler';
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './component/pages/dashboard/dashboard';
import { EsqueceuSeDaSenha } from './esqueceu-se-da-senha/esqueceu-se-da-senha';
import { Sabermais } from './sabermais/sabermais';
import { Contador } from './contador/contador';
import { Heroi } from './heroi/heroi';
import { Sobre } from './sobre/sobre';

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
        component: Sobre
    }
];
