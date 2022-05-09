import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SkillTree } from 'src/assets/skilltree.js';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.page.html',
  styleUrls: ['./studies.page.scss'],
})
export class StudiesPage implements OnInit {

	constructor(private menuCtrl: MenuController) {
		this.menuCtrl.swipeGesture(false);
	  }

	ngOnInit() {}
	
	//This triggers after html content is loaded on the page.
	ngAfterViewInit() {
		let st = new SkillTree("#skilltree","div")

		//This is a work around for connecting eventlistner to the studyboxses.
		//Find all images with data-loadimage = "true"
		let elements = document.querySelectorAll("[data-iscourse='true']")
		console.log(elements)

		//Loop through alll elements and make their src item 0 from the imgs array.
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];

			//TypeScript needs extra check that we can easily get data atributs from elements.
			if (element instanceof HTMLElement) {
				element.addEventListener("click",function(){
					let cname = element.dataset.coursename
					let teatcher = element.dataset.teatcher
					let info = element.dataset.info

					/*
					let modal = document.querySelector("#courseDisplayModal")
					console.log(cname)
					console.log(teatcher)
					console.log(info)
					*/
				})
			}
		}

	}






	openCourseModal(teatcher,name,info) {
		console.log("Opening course modal")
	}
}
