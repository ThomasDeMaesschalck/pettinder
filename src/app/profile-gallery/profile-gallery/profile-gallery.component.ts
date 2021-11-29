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

  constructor(private _petService: PetService) {
    this.name = '';
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
  this._petService.getPets().subscribe(pet => this.pets = pet);
  }
}
