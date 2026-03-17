import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  imports: [RouterModule, CommonModule]
})
export class SideNav {
  toggleNavbar() {
    const navbar = document.getElementById('navbarResponsive');
    if (navbar) {
      navbar.classList.toggle('show');  
    }
  }
}