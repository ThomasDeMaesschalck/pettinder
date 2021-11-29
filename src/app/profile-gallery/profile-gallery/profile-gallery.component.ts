import {Component, OnInit} from '@angular/core';
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = [];
  name: string;
  selectedPet: Pet | any;

  constructor(private _petService: PetService) {
    this.name = '';
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this._petService.getPets().subscribe(pet => this.pets = pet);
  }

  selectPet(selected: Pet, event: Event): void {
    if (selected === this.selectedPet) {
      this.deselectPet();
    } else {
      this.selectedPet = selected;
    }
    event.stopPropagation();
  }

  deselectPet(): void{
    this.selectedPet = null;
  }
}
