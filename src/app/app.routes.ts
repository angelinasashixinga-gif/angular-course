import { Component } from '@angular/compiler';
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './component/pages/dashboard/dashboard';
import { EsqueceuSeDaSenha } from './esqueceu-se-da-senha/esqueceu-se-da-senha';

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
    }
];
