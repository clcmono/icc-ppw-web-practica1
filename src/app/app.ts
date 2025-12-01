import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from "./features/components/login-page/login-page";
import { Navbar } from "./features/components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPage, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('icc-ppw-web-practica1');
}
