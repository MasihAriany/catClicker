var selectedCat= 0;
var flag = false;
var model = {
		
	catCounter: [0, 0, 0, 0, 0],
	cats: ["steffan", "Sebastian", "Memol", "MoonEye", "sonny"],
	adminMode: false
};

var octopus = {
		
	getCats: function() {
		return model.cats;
	},
		
	getCount: function(index) {
		return model.catCounter[index];
	},
		
	toggleAdminMode: function() {
		if(!model.adminMode) { model.adminMode = true; }
		else { model.adminMode = false; }
	},
	
	getAdminMode: function() {
		if( model.adminMode ) return true;
		else return false;
	
	},
	
	setNewValues: function(index) {
		var name = $('#newName').val();
		var URL = $('#newURL').val();
		var click = $('#newClick').val();
		if( $('#newName').val() ) model.cats[index] = name;
		if( $('#newClick').val() ) model.catCounter[index] = parseInt(click);
		//octopus.init();
	},
	
	init: function() {
		var catNames = this.getCats();
		catView.init();
		catViewList.init(catNames);
	},
	clickCount: function(catId) {
		model.catCounter[catId]++;
		console.log(model.catCounter);
	}

}

var catViewList = {
	init: function(names) {
		var cats = octopus.getCats();
		this.render(cats);
	},
		
	render: function(names) {
		for( var i=0; i<names.length; i++){
			console.log(i);
			$("span.name"+i).html(names[i]);
			if( !flag ){
				$('#'+i).click((function(iCopy) {
					return function() {
					//octopus.setCurrentCat(catCopy);
						selectedCat = iCopy;
						octopus.clickCount(selectedCat);
						catView.render(iCopy);
					};
				})(i));
			}else{
				catView.render(selectedCat);
				//flag = false;
				$('#newName').val('');
				$('#newURL').val('');
				$('#newClick').val('');
			};
		};
	}
}
		
var catView = {
	init: function() {
		$("#adminButton").click(function() {
			if(octopus.getAdminMode()){
				$(".form").addClass("hidden");
				octopus.toggleAdminMode();
			}else{
				$(".form").removeClass("hidden");
				octopus.toggleAdminMode();
			};
		});
		$("#cancel").click(function(){
			console.log("cancel detected");
			$(".form").addClass("hidden");
			octopus.toggleAdminMode();
		});
		$("#save").click(function(){
			flag = true;
			octopus.setNewValues(selectedCat);
			$(".form").addClass("hidden");
			octopus.toggleAdminMode();
			catViewList.init();
			//$("#catCounter").html("<strong>"+octopus.getCats()[selectedCat]+"</strong> clicked "+octopus.getCount(selectedCat)+" times.");
		});
	},
	render: function(index){
		var imgSrc = $('#'+index).attr("src");
		var catId = index;
		var bigImg = document.createElement('img');
		$(bigImg).addClass('img-responsive selected');
		$(bigImg).attr('src',imgSrc);
		catId = parseInt(catId);
		$('img.selected').remove();
		$(".selected").append(bigImg);
		$("#catCounter").html("<strong>"+octopus.getCats()[index]+"</strong> clicked "+octopus.getCount(index)+" times.");
	}
}	
		
		
		
		
		
/*		
		click: function(){
			$("img").click(function() {
				console.log("Mifahme");
				
				octopus.click(imgSrc, catId);
				
			})
		},
		
		render: function(imgSrc, catId) {
			
		}
	};
*/

octopus.init();


//displayCounter(clickCounter);