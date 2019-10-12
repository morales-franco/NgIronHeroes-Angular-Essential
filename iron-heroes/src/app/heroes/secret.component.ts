import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styles: []
})
export class SecretComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/heroes']);
  }

}
