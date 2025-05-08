import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  visibilidadeSenha = false;
  visibilidadeSenha2 = false;
  mostrarSenha(): void{
    this.visibilidadeSenha = !this.visibilidadeSenha;
  }
  
  mostrarSenha2(): void{
    this.visibilidadeSenha2 = !this.visibilidadeSenha2;
  }
}
