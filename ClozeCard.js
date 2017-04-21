'use strict';

module.exports = function (full, cloze){

	if(full.indexOf(cloze) > -1){
		this.fullText = full; //only the full text
		this.cloze = cloze; //only the cloze-deleted text
		this.partial = this.fullText.replace(cloze, '...'); //only the partial text
	} else {
		console.error(`ERROR! "${cloze}" is not part of "${full}"`);
	}

};