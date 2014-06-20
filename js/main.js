$(document).ready(function() {
	
	
	
		$('#tablebody ').on('click', 'ul', function(){ 
		
		
		$(this).children().toggleClass("linethrough")
		});
		

	
	/*$('#deleteAll').hover(function () {
		alert('hello';)
		$(this).css("background-color","#b8c6df");
		},function () {
		$(this).css("background-color","lightgrey");		
		})
	
*/
	


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
				$('input[name="item"').val("");
			var qtyValue = 
				$('input[name="qty"').val("");
							
		$('.form').show();
    
    
    });
    
   
    //  Prevent default refresh  
    
   $('form').submit(function(event){ 
  			 event.preventDefault(); 
   });
   
   
   
   
   
   // add function
		$('#formadd').click(function () {
		
			var itemValue =
				$(':selected').val();
			var qtyValue = 
				$('input[name="qty"').val();
							
					
					
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
							
					// append list with new items
			$('.main #tablebody').append(
			'<div class="row">'+
			'<ul >'+
				'<li  >'+ itemValue +
				'</li>'+
				'<li  >'+ qtyValue +
				'</li>' +
					
				'</ul>' +
				'<button class="button" id="editButton">' +
				'</button>' +
			
				'<button class="button" id="deleteButton">' +
				'</button>' +
				'</div>' +
				'<br>'
			
				 
			);
			 $('.form').hide();
			
			});				
				
				
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
   
    
    
    
	
    
    
    
 
 

	
	
  
	 


	
	
    
    
    
    
  