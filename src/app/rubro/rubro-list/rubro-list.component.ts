import { Component, OnInit } from '@angular/core';
import {Rubro} from '../rubro';
import {RubroService} from '../rubro.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rubro-list',
  templateUrl: './rubro-list.component.html',
  providers: [RubroService]
})
export class RubroListComponent implements OnInit {

  private rubros: Rubro[];

  constructor(private router: Router, private rubroService: RubroService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.rubroService.findAll('rubros').subscribe(
      rubros => {
        this.rubros = rubros;
      },
      err => {
        console.log(err);
      }
    );
  }

  redirectNewPage() {
    this.router.navigate(['/rubro/create']);
  }

  edit(data: Rubro) {
    if (data) {
      this.router.navigate(['/rubro/edit', data.id]);
    }
  }

  delete(data: Rubro) {
    if (data) {
      this.rubroService.deleteById(data.id, 'rubros').subscribe(
        res => {
          this.getAll();
          this.router.navigate(['/rubros']);
        }
      );
    }
  }

}
