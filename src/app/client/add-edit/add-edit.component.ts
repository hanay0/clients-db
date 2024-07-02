import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../core/models/client';
import { ClientServiceService } from '../../core/services/client-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent implements OnInit {
  clientForm: FormGroup;
  client!: Client;
  clientID!: string;

  constructor(private fb: FormBuilder, private clientService: ClientServiceService, private activatedRoute: ActivatedRoute) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(22), Validators.max(100)]],
      children: this.fb.array([])
   });

  //  get current client ID from the activate Route (URL)
   this.clientID = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if(this.clientID) {
      this.getClientByID(this.clientID);
    }
  }

  get children() {
    return this.clientForm.get('children') as FormArray;
  }

  addChild() {
    const childForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]]
    });
    this.children.push(childForm);
  }

  removeChild(index: number) {
    this.children.removeAt(index);
  }

  // on submit method
  save(): void {
    if (this.clientForm.valid) {
      let formData = this.clientForm.value;
      this.client = formData; // Assign the value of the form to the 'client' property
      console.log(this.client);

      if (this.clientID) {
        // Update existing client
        this.clientService.addClient(this.client, this.clientID).subscribe(response => {
          console.log(response);
          // this.clientForm.reset(); // Reset the form after submission
        });
      } else {
        // Add new client
        this.clientService.addClient(this.client).subscribe(response => {
          console.log(response);
          this.clientForm.reset(); // Reset the form after submission
        });
      }
    }
  }
  

  getClientByID(id: string) {
    this.clientService.getSingleClient(id).subscribe(response => {
      console.log(response);
      
      this.client = response
        // Patch the form with the received data
        this.clientForm.patchValue({
          name: this.client.name,
          age: this.client.age,
          children: this.client.children
        });
  
        // Log the form value after patching
        console.log('Form after patching value:', this.clientForm.value);
  
        // Clear existing children form array and repopulate it
        this.children.clear();
        if (this.client.children) {
          this.client.children.forEach(child => {
            this.children.push(this.fb.group({
              name: child.name,
              age: child.age
            }));
          });
        }
    })
  }
}
