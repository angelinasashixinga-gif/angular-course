import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './component/pages/dashboard/dashboard';
import { EsqueceuSeDaSenha } from './esqueceu-se-da-senha/esqueceu-se-da-senha';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login, Dashboard, EsqueceuSeDaSenha],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('condition');
}
