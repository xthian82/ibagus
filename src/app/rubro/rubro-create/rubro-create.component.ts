import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Rubro} from "../rubro";
import {RubroService} from '../rubro.service';

@Component({
  selector: 'app-rubro-create',
  templateUrl: './rubro-create.component.html',
  providers: [RubroService]
})
export class RubroCreateComponent implements OnInit, OnDestroy {
  rubro: Rubro;
  id: number;
  private sub: any;

  rubroForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rubroService: RubroService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.rubroForm = new FormGroup({
      descripcion: new FormControl('', Validators.required)
    });

    if (this.id) {
      this.rubroService.findById('rubros', this.id).subscribe(
        data => {
          this.id = data.id;
          this.rubroForm.patchValue({
            descripcion: data.descripcion
          });
        }, error => {
          console.log(error);
        }
      );

    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.rubroForm.valid) {
      const rubro: Rubro = new Rubro(this.id, this.rubroForm.controls['descripcion'].value);
      this.rubroService.save(rubro, 'rubros').subscribe();
    }

    this.rubroForm.reset();
    this.router.navigate(['/rubros']);
  }

  redirectPage() {
    this.router.navigate(['/rubros']);

  }

}
