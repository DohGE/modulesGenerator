import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Generate } from 'src/app/shared/models/generate.model';

@Component({
  selector: 'app-home-generator-presenter',
  templateUrl: './home-generator-presenter.component.html',
  styleUrls: ['./home-generator-presenter.component.scss'],
})
export class HomeGeneratorPresenterComponent implements OnInit {
  @Output() generate = new EventEmitter<Generate>();
  form: FormGroup;
  errorMessage: string;
  check: boolean;

  ngOnInit(): void {
    this.form = new FormGroup({
      module: new FormControl(null, [Validators.required]),
      component: new FormControl(null, [Validators.required]),
      model: new FormControl(null, [Validators.required]),
    });
  }

  generateModule(): void {
    if (this.form.controls.module.valid && this.form.controls.component.valid) {
      if (!this.check) {
        this.generate.emit({ ...this.form.value, check: this.check });
        this.form.reset();
      } else if (this.check && this.form.valid) {
        this.generate.emit({ ...this.form.value, check: this.check });
        this.form.reset();
      } else {
        this.errorMessage = 'Nie podałeś nazwy modelu!';
      }
    } else {
      this.errorMessage = 'Formularze zostały wypełnione nieprawidłowo!';
    }
    if(!this.errorMessage) {

    }
  }
}
