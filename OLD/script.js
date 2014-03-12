// JavaScript Docum
$(document).ready(function() {
    
	$('#btnSubmit').click(function (){
			
		$.ajax({
  			url: 'http://www.whoisxmlapi.com/whoisserver/WhoisService',
			dataType: 'jsonp',
  			data: {
				username: "jorgriffin",
				password: "ibanez88",
    			domainName: document.getElementById('dn').value,
    			outputFormat: "JSON"
  			},
 		 success: function(data) {
    		
    		if(document.getElementById('all').checked){		
				$('#myInfo').append("All Data: " + JSON.stringify(data.WhoisRecord));
			}else if(document.getElementById('name').checked){
				$('#myInfo').append("Domain Registrant Name: " + JSON.stringify(data.WhoisRecord.registrant.name));
			}else if(document.getElementById('organization').checked){
				$('#myInfo').append("Domain Organzation: " + JSON.stringify(data.WhoisRecord.registrant.organization));
			}else if(document.getElementById('expiresDate').checked){
				$('#myInfo').append("Domain Expiration Date: " + JSON.stringify(data.WhoisRecord.registryData.expiresDate));
			}else if(document.getElementById('reatedDate').checked){
				$('#myInfo').append("Domain Creation Date: " + JSON.stringify(data.WhoisRecord.registryDate.creationDate));
			}
   		 }
	  });		
	});
	
});