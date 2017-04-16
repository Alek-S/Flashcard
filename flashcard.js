'use strict';

//Basic constructor
function BasicCard(front, back){
	this.front = front;
	this.back = back;
}


//ClozeCard Constructor
function ClozeCard(full, cloze){

	if(full.indexOf(cloze) > -1){
		this.fullText = full; //only the full text
		this.cloze = cloze; //only the cloze-deleted text
		this.partial = this.fullText.replace(cloze, '...'); //only the partial text
	} else {
		console.error(`Error! ${cloze} is not part of ${full}`);
	}

}