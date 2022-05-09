/*
Doing this with vanilla js because jquery feels slow at some places.

example handle touch controls with javaScript
https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Mobile_touch

*/


//This code block is for automaticly starting the javascript when page is loaded.
//It is not needed in our case when using Ionic
const runAutomaticly = false
document.addEventListener("DOMContentLoaded",function(){
	if(runAutomaticly == true) {
		document.querySelector("head").innerHTML += `
			<style>
				canvas {
					border: 2px solid black;
					width: 100%;
					height: 100%;
				}
			</style>
		`
		let st = new SkillTree()
	}
})

//This is a class to represent a course
class StudyBox {
	constructor(id,name,teacher,info,connections) {
		this.id = id
		this.courseName = name
		this.teacher = teacher
		this.connections = connections
		this.info = info
		this.x = 0
		this.y = 0
	}
}

export class SkillTree {
	constructor(anchor="#skilltree",renderType="canvas",courseData) {
		console.log("Loading skilltree")
		this.anchor = anchor
		this.renderType = renderType
		this.studyBoxses = []
		this.nodeStart = []
		/*
		this.courseData = {
			0: {name:"Tutustuminen",teacher:"Topi-Veikko Tuusa",info:"This is the schools introduction course",connections:[]},
			1: {name:"Ohjelmointi perusteet 1",teacher:"Jaska Jokunen",info:"This course is about basics of programming.",connections:[0]},
			2: {name:"Jodlauksen alkeistuokio",teacher:"Jaska Jokunen",info:"This course goes through the basics of signing.",connections:[0]},
			3: {name:"Miedot alkoholijuomat",teacher:"Esko Perkko",info:"In this course we take a deep dive into alcohol!",connections:[0]},
			4: {name:"Python perusteet",teacher:"Kim Jägermalm",info:"This course is about basics of programming.",connections:[0]},
			5: {name:"Python jatkokurssi",teacher:"Jaska Jokunen",info:"This course continues learning about python programming lanquage.",connections:[4]},
			6: {name:"Web development with css",teacher:"Jani Eriksson",info:"This course is about basics of programming.",connections:[5]},
			7: {name:"Ohjelmointi perusteet 6",teacher:"Jaska Jokunen",info:"This course is about basics of programming.",connections:[5]},
			8: {name:"Ohjelmointi jarkokurssi",teacher:"Jaska Jokunen",info:"This course is about basics of programming.",connections:[1]},
			9: {name:"Rakenteet ja algorytmit",teacher:"Jaska Jokunen",info:"In this course we will learn more about algorithms.",connections:[8]},
			10: {name:"Diskriitti matematiikka",teacher:"Jaska Jokunen",info:"This course is about basics of programming.",connections:[9]},
			11: {name:"Rekursiivisuutta ja rakkautta",teacher:"Jaska Jokunen",info:"This course is about basics of programming.",connections:[9]}
		}
		*/
		this.courseData = courseData


	  



		//Convert course data into StudyBox objects.
		for (const [key1, value1] of Object.entries(this.courseData)) {
			this.studyBoxses.push(new StudyBox(key1,value1['name'],value1['teacher'],value1['info'],value1['connections']))
		}

		for (let i = 0; i < this.studyBoxses.length; i++) {
			const element = this.studyBoxses[i];
			if (element.connections.length == 0) {
				this.nodeStart.push(element)
			}
		}

		this.storedX = 0
		this.storedY = 0
		if(this.renderType == "canvas") {
			this.rend = new CanvasRender(anchor)
		} else {
			this.rend = new DivRender(anchor)
		}
		this.generateTree(this.nodeStart[0],true)
	}

	generateTree(node,isRoot=false) {
		//console.log("node: "+node.id+" | has connections: "+node.connections)
		let connections = []
		for (let i = 0; i < this.studyBoxses.length; i++) {
			const ielement = this.studyBoxses[i];
			if(ielement.connections[0] == node.id) {
				connections.push(ielement)
			}
		}
		
		this.rend.drawStudyBox(node,(275*node.x),(200*node.y),isRoot)
		for (let b = 0; b < this.studyBoxses.length; b++) {
			let element = this.studyBoxses[b]
			
			//FIXME: Only first item is checked from the connections This is not a problem for demo purposes.
			//But it will add extra complexity to the code
			if (node.id == element.connections[0]) {
				this.storedX += 1
				if(connections.length > 1) {
					element.y = this.storedY
					this.storedY += 1

					element.x = node.x+1
				} else {
					element.x = node.x+1
					element.y = node.y
				}
				this.generateTree(element)
			}
		}
	}
}

/*Rendering login for displaying courses in javascript canvas*/
class CanvasRender {
	constructor(canvas) {
		console.log("Preparing canvas rendering for skilltree")
		this.canvas = document.querySelector(canvas).getContext("2d");
		this.baseColor = "#000000"
	}

	drawRect(x,y,width=200,height=150,filled=false,color="#fcf3d9") {
		this.canvas.fillStyle = this.baseColor
		this.canvas.fillStyle = color
		this.canvas.beginPath()

		if(filled==false) {
			this.canvas.rect(x, y-15, width, height)
		} else {
			this.canvas.fillRect(x, y-15, width, height)
		}
		this.canvas.stroke()
		this.canvas.closePath()
	}

	drawText(text,x,y,fontSize=48) {
		this.canvas.fillStyle = this.baseColor
		this.canvas.font = fontSize+'px serif';
		this.canvas.fillText(text, x, y);
	}

	drawStudyBox(box,x,y,isRoot=false) {
		this.canvas.fillStyle = this.baseColor
		let padding = 20
		this.drawRect(x-padding,y-padding,220+padding,100+padding,false,"#000000")

		if(isRoot) {
			this.drawRect(x-padding,y-padding,220+padding,100+padding,true,"#32a852")
		} else {
			this.drawRect(x-padding,y-padding,220+padding,100+padding,true)
		}
		
		this.drawText(box.courseName,x,y,20)
		this.drawText(box.teacher,x,y+20,10)
		this.drawText(box.info,x,y+40,10)
		this.drawText(box.id,x,y+60,10)
		this.drawText("Connection ids: "+box.connections,x,y+80,10)
	}
}



//This class is rendering the skilltree in normal div instead of canvas
class DivRender {
	constructor(canvas) {
		console.log("Preparing div rendering for skilltree")
		this.canvas = document.querySelector(canvas)
		this.html = this.canvas.innerHTML
		this.offsetX = 25
		this.offsetY = 25
	}

	//Render a box which has all the study information,
	drawStudyBox(box,x,y,isRoot=false) {
		let template = `
			<ion-card style="top:${y}px;left:${x}px; width:250px; position:absolute;" button data-iscourse='true' data-teatcher='${box.teacher}' data-coursename='${box.courseName}'data-info='${box.info}')" >
				<ion-card-header>
					<ion-card-subtitle>${box.teacher}</ion-card-subtitle>
					<ion-card-title>${box.courseName}</ion-card-title>
				</ion-card-header>

				<ion-card-content>${box.info}</ion-card-content>
			</ion-card>
			`
		this.html += template
		this.canvas.innerHTML = this.html
	}
}
