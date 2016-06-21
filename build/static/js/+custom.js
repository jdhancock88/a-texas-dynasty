$(document).ready(function() {

	//custom scripting goes here

	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);


	function scrollNav(message) {
		var sn = $("#scrollNav");
		var tn = $("#topNav");

		if (($(window).scrollTop() + 100) > $("#wrapper").offset().top ) {
			setTimeout(function() {
				sn.addClass("visible");
				tn.css("display", "none");
			}, 0);
		} else {
			sn.removeClass("visible");
			setTimeout(function() {
				tn.css("display", "block");
			}, 250);
		}
	}

	var windowHeight = $(window).height();

	$(window).scroll(function() {
		var scrollHeight = $(window).scrollTop();

		$.each($(".sliderImage"), function(k,v) {

			var that = $(this);
			var imageTop = $(this).offset().top;

			if (scrollHeight + windowHeight - 300 > imageTop ) {

				$(this).removeClass("unslid");
				setTimeout(function() {
					that.children(".cutline").css("opacity", 1);
				}, 500);
			}
		});

	});

	$(window).on("scroll", _.throttle(scrollNav, 200, {'leading': true, 'trailing': true }));



	///////////////////////////////////////
	///// GLOSSARY BUILDOUT ///////////////
	///////////////////////////////////////

	var glossaryEntries = [
		{
			name: "Virginia Murchison",
			definition: "Virginia “Ginny” Murchison (maiden name: Long) was Clint Murchison’s second wife. The couple married in 1943. (Courtesy the Murchison family)",
			image: "images/_virginia.jpg",
			imageAlt: "Virginia Murchison"
		},
		{
			name: "Clint Jr. and John Murchison",
			definition: "For four decades, they ran Murchison Brothers, a partnership created by their father. Their most famous asset was the Dallas Cowboys. (Courtesy the Murchison family)",
			image: "images/_glossBrothers.jpg",
			imageAlt: "Clint Murchison Jr and his older brother, John"
		},
		{
			name: "The Duke of Windsor",
			definition: "Formerly King Edward VIII of England, the Duke of Windsor abdicated the crown in 1936 to marry American Wallis Simpson. The couple visited Murchison’s Hacienda Acuña ranch in 1950. (The Associated Press)",
			image: "images/_glossDuke.jpg",
			imageAlt: "The Duke of Windsor"
		},
		{
			name: "Wallis Simpson",
			definition: "The Duchess of Windsor, Wallis Simpson was twice divorced before marrying the Duke of Windsor. She refused to fly, so the couple traveled by train and car to Murchison’s Hacienda Acuña. (The Associated Press)",
			image: "images/_glossSimpson.jpg",
			imageAlt: "Wallis Simpson"
		},
		{
			name: "Acuña",
			definition: "Murchison’s 100,000-acre ranch, nestled deep within Mexico’s Sierra de Tamaulipas mountain range, 70 miles northwest of Tampico and 700 miles south of Dallas. (Courtesy the Murchison family)",
			image: "images/_glossAcuna.jpg",
			imageAlt: "The ranch house at Hacienda Acuña."
		},
		{
			name: "Isla del Toro",
			definition: "Murchison’s private island near Tampico, Mexico."
		},
		{
			name: "Sid Richardson",
			definition: "Murchison’s boyhood best friend. Murchison and Richardson owned Matagorda and San Jose islands on the Texas Gulf Coast, where they played hosts to friends and politicians, including President Franklin Roosevelt. (The Associated Press)",
			image: "images/_glossRichardson.jpg",
			imageAlt: "Sid Richardson"
		},
		{
			name: "Olin Lancaster",
			definition: "Lancaster was a friend of Murchison’s and was with him when the pair discovered Hacienda Acuña."
		},
		{
			name: "Bob Young",
			definition: "Young became chairman of Chesapeake and Ohio Railway in 1942 and hosted the Duke and Duchess of Windsor in his private railway cars as the couple traveled from New York to Mexico."
		},
		{
			name: "The Flying Ginny",
			definition: "Murchison’s private DC-3 plane, named after his wife, Virginia “Ginny” Murchison.",
			image: "images/_glossGinny.jpg",
			imageAlt: "Clint Murchison’s private DC-3, The Flying Ginny, was one of the main means of travel to Acuña."
		},
		{
			name: "Lyndon Johnson",
			definition: "Rep. Lyndon Johnson was elected to the Senate in 1948, thanks in part to financial support from Murchison and Sid Richardson. His election was key to legislation that supported the Texas oil business. He became the 36th President of the United States. (The Associated Press)",
			image: "images/_glossJohnson.jpg",
			imageAlt: "Lyndon Johnson"
		},
		{
			name: "Spanish Cay",
			definition: "Clint Murchison Jr.’s 2½-mile long private island in the Bahamas where Sen. Joe McCarthy honeymooned with his wife, Jean. (Courtesy the Murchison family)",
			image: "images/_glossSpanishCay.jpg",
			imageAlt: "Spanish Cayt"
		},
		{
			name: "Hotel del Charro",
			definition: "The Hotel del Charro was a Murchison-owned hotel in La Jolla, Calif. Constructed in 1953, the hotel was frequented by many of Murchison’s political connections, including FBI director J. Edgar Hoover, Richard Nixon and Joe McCarthy. (Courtesy the Murchison family)",
			image: "images/_glossCharro.jpg",
			imageAlt: "The entrance to the Hotel del Charro."
		},
		{
			name: "John Connally",
			definition: "Future Gov. John Connally was an aide to Lyndon Johnson and Sid Richardson’s lawyer."
		},
		{
			name: "J. Edgar Hoover",
			definition: "Director of the FBI from 1935 to 1972, Hoover was a frequent guest at Murchison’s Hotel del Charro. (The Associated Press)",
			image: "images/_glossHoover.jpg",
			imageAlt: "J. Edgar Hoover"
		},
		{
			name: "Clyde Tolson",
			definition: "Associate Director of the FBI from 1930 to 1972, Tolson was a friend of FBI director J. Edgar Hoover and was a frequent guest at Murchison’s Hotel del Charro with Hoover. (The Associated Press)",
			image: "images/_glossTolson.jpg",
			imageAlt: "Clyde Tolson"
		},
		{
			name: "Gil Brandt",
			definition: "The Cowboys director of player personnel from 1989 to 1989.",
			image: "images/_glossBrandt.jpg",
			imageAlt: "Gil Brandt (left) and Cowboys quarterback Roger Staubach. (File photo)"
		},
		{
			name: "Tex Schramm",
			definition: "Dallas Cowboys general manager and Clint Murchison Jr.’s first football employee. (File photo)",
			image: "images/_glossSchramm.jpg",
			imageAlt: "Tex Schramm"
		},
		{
			name: "Emanuel Celler",
			definition: "A member of the U.S. House of Representatives from 1923 to 1973, Celler introduced a bill to exempt some pro sports television broadcasts from anti-trust laws."
		},
		{
			name: "Barbara Murchison",
			definition: "John Murchison’s youngest daughter."
		},
		{
			name: "John Coffman",
			definition: "Barbara Murchison’s fiancé."
		}
	];

	$("#part1glossary").need2know({
		glossary: glossaryEntries
	});


	///////////////////////////////////////
	///// HOTEL GRAPHIC ///////////////////
	///////////////////////////////////////


	$(".imageLabel").on("click", function() {
		var width = $(window).width();

		var graphicHeight = $(".photoGraphic").outerHeight();
		$("#graphicImage").css("height", graphicHeight);

		var image = $(this).attr("data-image");
		var alt = $(this).attr("data-alt");

		$("#graphicImage img").attr({
			"src": image,
			"alt": alt
		});

		$("#graphicImage .cutline").text(alt);

		setTimeout(function() {
			$("#graphicImage").fadeIn(250);
		}, 0);
	});

	$(".graphicClose").on("click", function() {
		$("#graphicImage").fadeOut(250);
	});

	$.preloadImages = function() {
    	$("<img />").attr("src", arguments[0]);
    };

	var graphicImages = [];

	if ($(".imageLabel").length > 0) {
		for (i=0; i<$("#imageLabels .imageLabel").length; i++) {
	  		var path = $("#imageLabels .imageLabel").eq(i).attr("data-image");
			$.preloadImages(path);
	  	}
	}

	if ($("#caySlideshow")) {
		$("#caySlideshow").easyslide();

	}

});
