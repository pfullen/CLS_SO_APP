$(document).ready(function() {
	
	
	
		

	
	


 $('#tablebody').on('mouseenter','li', function () {
	  
	   
	   
	$(this).parent().toggleClass("backgroundcolor");
	//	},function () {
	//$(this).parent().css("background-color","");		
		});

$('#tablebody').on('mouseleave','li', function () {
	  
	   
	   
	$(this).parent().toggleClass("backgroundcolor");
	//	},function () {
	//$(this).parent().css("background-color","");		
		});





/*
	$('#tablebody li').hover(function(){ 
	   
		
		$(this).parent().css("background-color","#b8c6df");
		},function () {
		$(this).parent().css("background-color","");		
		});
  
*/  


   
   $('button').hover(function () {
		
		$(this).css("background-color","#b8c6df");
		},function () {
		$(this).css("background-color","");		
		});
	
	$('#addButton').hover(function () {
		
		$(this).css("background-color","grey");
		},function () {
		$(this).css("background-color","");		
		});
	
	
	//$('td').hover(function () {
	//$(this).addClass('linethrough');
	
	//  click + to show form   reset form values to null
	
    $('#addButton').click(function () {
    	
    	var itemValue =
				$('input[name="customer"').val("");
			var qtyValue = 
				$('input[name="qty"').val("");
				var notes =
					$('input[name="notes"').val("");
							
		$('.form').show();
    
    
    });
    
   
    //  Prevent default refresh  
    
 $('form').submit(function(event){ 
  			 event.preventDefault(); 
  });
   
   
   
   
   
  // add function
		$('#form1').submit(function () {
		var formData = $(this).serialize();
		
		console.log(formData);
	   $.post('createSO.php',formData, processData );
						$('.form').hide();	
				//		alert ('Entry Added');
					})
						 
		 /* require form input values	
			$('#formadd').validate({
				rules:{
					name:	'required',
					item: {
						required:true,					
					   item:true
					},
					qty: {
						required:true,
						qty:true
						
										
					}
				}
		})	 
		*/
				
	function processData(data) {
							
							
				$('#main').append ('<p> You entry was sucessfully updated </p>');
				
													
							
							
							}  // end of process data
		
			 $('.form').hide();
			
						
				
				
    // form cancel
    
    $('#cancel').click(function () {
    	
    	$('.form').hide();
    	});				
				
			/*	
   // edit function
   
   $('#tblData').on('click', '.editButton', function () {
   
      $('#tbleData tbody tr').map(function() {
      
		var par = $(this).parent().parent(); //tr      
      var tdItem = par.childern("td:nth-child(1)");
     var tdQty = par.children("td:nth-child(2)");
      
      	tdItem.html("<input type='text' id='item' value='"+tdName.html()+"'/>");
      	 tdQty.html("<input type='text' id='qty' value='"+tdPhone.html()+"'/>");

     	
      	
      	
	
	   //});	
	
    	$('.form').show();
 });
   	
   	
   
   */
   // delete function
   
   $('#tablebody').on('click', '#deleteButton', function(){ 
   $(this).parent().remove();
    });	
				
	
	
	
	// delete all function 
	
		
		$('.main').on('click', '#deleteAll', function(){ 
				
			confirm('Are you sure you want to delete all items?');
				$('#tablebody').children().remove();
				
				});	
			
									   
   });
   
    
    
    
	
    
    
    
 
 

	
	
  
	 


	
	
    
    
    
    
  