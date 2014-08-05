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
		$('div.main').hide();					
		$('.form').show();
      
    
    });
    
   
    //  Prevent default refresh  
    
 $('form').submit(function(event){ 
  			 event.preventDefault(); 
  });
   
   
   
   
   
  // add function
  $('#submit').click (function () {
  $('#submit').on()
		$('form').submit (function () {
		var formData = $(this).serialize();
		
     console.log(formData);		
		
		
	   $.post('createSO.php',formData, processData ); 
						$('.form').hide();
						$('.main').show();	
				//		alert ('Entry Added');
					})
					});						 
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
		
//  add a new product and Qty line funcution		
		$('#newline').on('click', function () {
			
			
	
			
 			
			$('.input').append('<br>' + '<select align= "center" name="product" >'+ 
												 '<option value="" disabled selected>' + 'Products' + '</option>'+
								'<option value="FLAT SHEET">' + 'FLAT SHEET' + '</option>' +
  '<option value="FITTED SHEET">' + 'FITTED SHEET' + '</option>' +
  '<option value="XL FITTED SHEET">' + 'XL FITTED SHEET' + ' </option>' +
  '<option value="1/2 SHEET">' + '1/2SHEET' + '</option>' +
  '<option value="GOWN">' + 'GOWN' + '</option>'+
  '<option value="3X GOWN">' + '3X GOWN' + '</option>' +
  '<option value="PEDIATRIC GOWN">' + 'PEDIATRIC GOWN' + '</option>' +
  '<option value="SURGICAL GOWN">' + 'SURGICAL GOWN' + '</option>' +
  '<option value="BATH BLANKET">' + 'BATH BLANKET' + '</option>' +
  '<option value="THERMAL BLANKET">' + 'THERMAL BLANKET' + '</option>'+
  '<option value="PEDIATRIC BLANKET">' + 'PEDIATRIC BLANKET' + '</option>'+
  '<option value="PILLOW CASE">' + 'PILLOW CASE' + '</option>'+
  '<option value="WASH CLOTH">' + 'WASH CLOTH' + '</option>'+
  '<option value="HAND TOWEL">' + 'HAND TOWEL' + '</option>' +
  '<option value="BATH TOWEL">' + 'BATH TOWEL' + '</option>' +
  '<option value="OR TOWEL">' + 'OR TOWEL' + '</option>' +
  '<option value="MOPS ">' + 'MOPS' + '</option>' +
  '<option value="OR CURTAINS">' + 'OR CURTAINS' + '</option>' +
  '<option value="SCRUB TOP">' + 'SCRUB TOP' + '</option>'+
  '<option value="SCRUB BOTTOM">' + 'SCRUB BOTTOM' + '</option>'+
  '<option value="LAB COATS">' + 'LAB COATS' + '</option>'+
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
											'<input id="qty" type = "number" name="qty" align = "center" min="1" max="100" placeholder="QTY">'
			
			);
			
			
		
			
			
			
			
			});
			
			
			
			
			
			
			
				
	function processData(data) {
							
							
				$('#main     ').append ('<p> You entry was sucessfully updated </p>');
				
													
							
							
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
   
    
    
    
	
    
    
    
 
 

	
	
  
	 


	
	
    
    
    
    
  