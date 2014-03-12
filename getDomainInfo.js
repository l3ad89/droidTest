/**
 * @author JORGRIFFIN
 */
$(document).ready(function(){
	
	$('#btnSubmit').click(function(){
		
		var domainName = document.getElementById('domainName').value;
		var selectionRequest = "whois";
		var apikey = "463f58354f20a4cc2f0c836bbd5043f2";
		var requestedObject;
				
		if(document.getElementById('chkExpired').checked){
			requestedObject = "date_expires";
		}else if(document.getElementById('chkCreated').checked){
			requestedObject = "date_created";
		}else if(document.getElementById('chkRegistered').checked){
			requestedObject = "registered";
		}else if(document.getElementById('chkTransfer').checked){
			requestedObject = "date_transferred";
		}else if(document.getElementById('chkNameservers').checked){
			requestedObject = "nameservers";
		}else if(document.getElementById('chkName').checked){
			requestedObject = "contacts.name";
		}
		
		$.getJSON('http://api.whoapi.com/?domain='+domainName+'&r='+selectionRequest+'&apikey='+apikey,
			function(retrievedInfo){
				if(retrievedInfo.status == 0){
					alert(requestedObject);
					// show the result
					console.log(retrievedInfo);
					alert(requestedObject);
					$('#requestedInfo').append('<div style="color:white">' + JSON.stringify(retrievedInfo.date_expires)) + "</div>";
				}else{
			// show error
					$('#requestedInfo').append(retrievedInfo.status_desc);
				}
		});
		
	});
});
