import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    console.log("cancel the crisis");
    // this.gotoCrisis();
  }

  save() {
    // this.crisis.name = this.editName;
    // this.gotoCrisis();
  }

}
