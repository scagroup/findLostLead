//Поиск потерянных заявок
function findLostLead(counter){
	this.select = function(){
		return document.querySelectorAll("input");
	};
	this.sendMetrikaData = function(){
		ym(counter, 'params', {"inputData" : true});
	};
	this.setEvent = function(element){
		element.addEventListener("keyup", this.sendMetrikaData.bind(this));
	};
	this.constructor = function(){
		var mass = this.select();
		if (mass.length > 0){
			for (var i = 0; i < mass.length; i++){ 
				this.setEvent(mass[i]);
			}
		}
	};

	this.constructor();
	return this;
}
var FLL = new findLostLead(12345678);
//Конец поиска потерянных заявок