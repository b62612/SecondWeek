window.addEventListener("DOMContentLoaded", function(){


			function $(x){
					var theElement = document.getElementById(x);
					return theElement
			}
			
			// create select field elements and populate with options
			function makeCart(){
					var formTag = document.getElementsByTagName("form"),
						selectLi = $("select"),
						makeSelect = document.createElement("select");
						makeSelect.setAttribute("id", "agegrades");
						
					for(var i=0, j=ageGrades.length; i<j; i++){
					var makeOption = document.createElement("option");
					var optText = ageGrades[i];
					makeOption.setAttribute("value", optText);
					makeOption.innerHTML = optText;
					makeSelect.appendChild(makeOption);
					}
					selectLi.appendChild(makeSelect);
			}
			function getRadioActive(){
					var radios = document.forms[0].position;
					for(var i=0; i<radios.length; i++){
						if(radios[i].checked){
						positionValue = radios[i].value;
						}
					}
			}
			function getCheckboxActive(){
					if($("urgency").checked){
					urgencyValue = $("urgency").value;
					}else{
						urgencyValue = "No"
						}
			
			
			}
			
			function submitData(){
					var id = Math.floor(Math.random()*10000000001);
					
				getRadioActive();
				getCheckboxActive();
					
					var item 			= {};
						item.agegrade	= ["Age Category:", $("agegrades").value];
						item.firstname	= ["First Name:", $("first-name").value];
						item.lastname	= ["Last Name:", $("last-name").value]; 
						item.email		= ["Agent Email:", $("email").value];  
						item.phone		= ["Agent Phone:", $("phone").value];
						item.email		= ["Agent Email:", $("email").value];
						item.position 	= ["Field Position:", positionValue];
						item.urgency 	= ["Urgent:", urgencyValue];
						item.rating 	= ["Player Rating:", $("rating").value];
						item.date 		= ["Observation Date:", $("date").value];
						item.notes 		= ["Notes:", $("notes").value];
				
				localStorage.setItem(id, JSON.stringify(item));	
				alert("Player Saved!");
			}
			
			var ageGrades = ["-- Age Category --", "U-17", "U-23", "Over 23"];
			makeCart();
			alert(localStorage.value(0));

			/*var showAll = $("showAll");
			showAll.addEventLister("click", getData);
			var clearAll = $("clearAll");
			clearAll.addEventLister("click", clearLocal);*/
			var submit = $("submit");
			submit.addEventListener("click", submitData);


});