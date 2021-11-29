import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
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
  searchText: string;

  savePetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  });

  constructor(private _petService: PetService,
              private formBuilder: FormBuilder) {
    this.name = '';
    this.searchText = '';
    this.selectedPet = undefined;
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

  deselectPet(): void {
    this.selectedPet = null;
  }

  savePet(): void {
    this._petService.savePet(this.savePetForm.value).subscribe(result => {
      console.log('Your pet has been submitted', this.savePetForm.value);
      this.savePetForm.reset();
      this.getPets();
    });

  }
}
