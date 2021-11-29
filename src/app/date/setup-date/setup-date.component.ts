import { Component, OnInit } from '@angular/core';
import {Pet} from "../../model/Pet";
import {ActivatedRoute, Router} from "@angular/router";
import {PetService} from "../../service/pet.service";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  private _pet!: Pet;

  constructor(private route: ActivatedRoute,
              private petService: PetService) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];
    this.petService.getByName(name)
      .subscribe(pet => this._pet = pet);
  }

  get pet(){
    return this._pet;
  }

}
