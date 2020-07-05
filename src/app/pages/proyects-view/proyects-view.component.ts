import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyects-view',
  templateUrl: './proyects-view.component.html',
  styleUrls: ['./proyects-view.component.scss']
})
export class ProyectsViewComponent implements OnInit {

  proyects: any[] = [{
    name: 'Desarrollo de Sistema',
    stages: [{
      name: 'Por Hacer',
      taks: [{
        name: 'Lorem ipsum dolor sit amet.'
      },
      {
        name: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
      }
      ]
    },
    {
      name: 'Haciendo',
      taks: [{
        name: 'Lorem ipsum dolor sit amet.'
      },
      {
        name: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
      },
      {
        name: 'Lorem ipsum dolor sit.'
      }
      ]
    },
    {
      name: 'En revisión',
      taks: [{
        name: 'Lorem ipsum dolor sit amet.'
      }]
    },
    {
      name: 'Realizado',
      taks: [{
        name: 'Lorem ipsum dolor sit amet.'
      }]
    }]
  }]

  constructor(private router: Router, private ngZone: NgZone) { }

  ngOnInit() {
    console.log(this.proyects);
  }

  select(proyect: any) {
    window.localStorage.setItem('proyect', JSON.stringify(proyect));
    this.ngZone.run(()=> this.router.navigate(['/board']).then());
  }

}

