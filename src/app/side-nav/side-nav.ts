import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink]
})
export class SideNav {
  toggleNavbar() {
    const navbar = document.getElementById('navbarResponsive');
    if (navbar) {
      navbar.classList.toggle('show');  
    }
  }
}