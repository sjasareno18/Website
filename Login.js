jQuery('#registration').validate({
			rules:{	
				name: "required",
				password: {
					required: true,
					minlength: 6

				},
				clearancebranchname: "required",
				date: "required",
				validid: "required",
				completename: "required",
				husbandssurnameformarriedwoman: "required",
				nickname: "required",
				othername: "required",
				presentaddress: "required",
				dateofbirth: "required",
				highesteducationalattainment: "required",
				contactnumbers: "required",
				emailaddress: "required",
				citizenship: "required",
				complexion: "required",
				scarsmarkspeculiarities: "required",
				religion: "required",
				gender: "required",
				nameforhusbandorwifeformarriedapplicants: "required",
				nameoffather: "required",
				placeofbirth1: "required",
				nameofmother: "required",
				placeofbirth2: "required"


		},
		errorplacement: function(error, element){
			if (element.is(":radio")) {
				error.appendTo(element.parents(".gender"));
			}else{
				error.insertAfter(element);
			}
		}	
});
