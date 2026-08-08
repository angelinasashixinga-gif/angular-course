import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './component/pages/dashboard/dashboard';
import { EsqueceuSeDaSenha } from './esqueceu-se-da-senha/esqueceu-se-da-senha';
import { Sabermais } from './sabermais/sabermais';
import { Navbar } from './navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('condition');
  
  constructor(public router: Router) {}

}
