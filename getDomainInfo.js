/**
 * @author JORGRIFFIN
 */

$(document).ready(function(){	
	
	$('#btnSubmit').click(function(){
		
		var domainName = document.getElementById('domainName').value;
		var selectionRequest = "whois";
		var apikey = "463f58354f20a4cc2f0c836bbd5043f2";		
		var selectionChoice = document.getElementById('selectBox').value;		
		
		$.getJSON('http://api.whoapi.com/?domain='+domainName+'&r='+selectionRequest+'&apikey='+apikey,
		function(dataObj){
			if(dataObj.status == 0){
				
				var jsonData = dataObj;
				
				$('#home #requestedInfo').append("<h2><center>" + "Requested Info" + "</center></h2>");							
				//checks for the data that user wants displayed
				switch(selectionChoice){
					
					case "everything":
						$('#home #requestedInfo').append("<pre><center>" + jsonData.whois_raw + jsonData.whois_raw_parent + "</center></pre>");
						break;
					case "expirationDate":
						$('#home #requestedInfo').append("<center>Domain Expiration Date: " + JSON.stringify(dataObj.date_expires) + "</center> <br />");
						break;
					case "creationDate"	:
						$('#home #requestedInfo').append("<center>Domain Creation Date: " + JSON.stringify(dataObj.date_created) + "</center> <br />");
						break;
					case "registered":
						$('#home #requestedInfo').append("<center>Domain Registered: " + JSON.stringify(dataObj.registered) + "</center> <br />");
						break;
					case "transferDate":
						$('#home #requestedInfo').append("<center>Domain Transfer Date: " + JSON.stringify(dataObj.date_transferred) + "</center> <br />");
						break;
					case "nameserver":
						$('#home #requestedInfo').append("<center>Domain Nameservers: " + JSON.stringify(dataObj.nameservers) + "</center> <br />");
						break;
					case "name":
						$('#home #requestedInfo').append("<center>Domain Contacts Name: " + JSON.stringify(dataObj.name) + "</center> <br />");
						break;
					case "organization":
						$('#home #requestedInfo').append("<center>Domain Contact Organization: " + JSON.stringify(dataObj.organization) + "</center> <br />");
						break;
					case "address":
						$('#home #requestedInfo').append("<center>Domain Contact Address: " + JSON.stringify(dataObj.full_address) + "</center> <br />");
						break;
					case "phone":	
						$('#home #requestedInfo').append("<center>Domain Contact Phone: " + JSON.stringify(dataObj.phone) + "</center> <br />");
						break;
					case "email":
						$('#home #requestedInfo').append("<center>Domain Contact Email: " + JSON.stringify(dataObj.phone) + "</center> <br />");
						break;
				}	
				
				console.log(dataObj);	
				
			}else{
			// show error
				console.log(dataObj.status);
				$('#requestedInfo').html(dataObj.status_desc);
			}
		});				
	});
});
