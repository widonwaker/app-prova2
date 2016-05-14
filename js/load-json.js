$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

	var output = $('#output');

	$.ajax({
		url: 'http://gameshift.net/app_test/a.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = '<h1>'+item.nome+'</h1>'
				+ item.eta+'</p>';
			
				output.append(landmark);
			});
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});
});