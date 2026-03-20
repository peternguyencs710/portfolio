import { Component, OnInit  } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { signal } from '@angular/core';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink]
})
export class SideNav {
  public navProjectToggle = signal(false);

  constructor(private route: ActivatedRoute, private location: Location) {
    console.log('localtion::' + this.location.path());
  }

  toggleNavbar() {
    const navbar = document.getElementById('navbarResponsive');
    if (navbar) {
      navbar.classList.toggle('show');  
    }
  }

  toggleProjectNav(){
    this.navProjectToggle.update(value => !value);
  }
  
}