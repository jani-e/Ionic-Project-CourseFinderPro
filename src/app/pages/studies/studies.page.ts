import { Component, OnInit } from '@angular/core';
import { SkillTree } from 'src/assets/skilltree.js';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.page.html',
  styleUrls: ['./studies.page.scss'],
})
export class StudiesPage implements OnInit {

	constructor() {}

	ngOnInit() {}
	
	//This triggers after html content is loaded on the page.
	ngAfterViewInit() {
		
		let st = new SkillTree("#skilltree","div")
	}
}
