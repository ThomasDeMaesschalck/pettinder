import {Component, OnInit} from '@angular/core';
import {Pet} from "../../model/Pet";
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../service/pet.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  private _pet!: Pet;

  sendTextForm = this.formBuilder.group({
    name: ''
  });

  constructor(private route: ActivatedRoute,
              private petService: PetService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];
    this.petService.getByName(name)
      .subscribe(pet => this._pet = pet);
  }

  get pet() {
    return this._pet;
  }

  onSubmit(): void {
    this.petService.sendText(this.sendTextForm.value)
      .subscribe(result => {
          this.sendTextForm.reset();
        }
      );
  }

}
