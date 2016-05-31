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
			sn.css("display", "block");
			setTimeout(function() {
				sn.addClass("visible");
				tn.css("display", "none");
			}, 0);
		} else {
			sn.removeClass("visible");
			setTimeout(function() {
				sn.css("display", "none");
				tn.css("display", "block");
			}, 260);

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

	$(window).on("scroll", _.throttle(scrollNav, 500, {'leading': true, 'trailing': true }));


	///////////////////////////////////////
	///// GLOSSARY BUILDOUT ///////////////
	///////////////////////////////////////

	var glossaryEntries = [
		{
			name: "Virginia Murchison",
			definition: "Virginia “Ginny” Murchsion (maiden name: Long) was Clint Murchison’s second wife. The couple married in 1943. (Courtesy the Murchison Family)",
			image: "images/_virginia.jpg",
			imageAlt: "Virginia Murchison"
		},
		{
			name: "Clint Jr. and John Murchison",
			definition: "Murchison’s sons, also known as Clint’s Whiz Kids. After serving in World War II, the brothers formed a partnership called Murchison Brothers, financed by their father. They would eventually own the Dallas Cowboys. (Courtesy the Murchison Family)",
			image: "images/_glossBrothers.jpg",
			imageAlt: "Clint Murchison Jr and his older brother, John"
		},
		{
			name: "The Duke of Windsor",
			definition: "Formerly King Edward VIII of England, the Duke of Windsor abdicated the crown in 1936 to marry American Wallis Simpson. The couple visited Murchison’s Hacienda Acuna ranch in 1950. (The Associated Press)",
			image: "images/_glossDuke.jpg",
			imageAlt: "The Duke of Windsor"
		},
		{
			name: "Wallis Simpson",
			definition: "The Duchess of Windsor, Wallis Simpson was twice divorced before marrying the Duke of Windsor. Simpson refused to fly, so the couple traveled by train and truck to Murchison’s Hacienda Acuna. (The Associated Press)",
			image: "images/_glossSimpson.jpg",
			imageAlt: "Wallis Simpson"
		},
		{
			name: "Hacienda Acuna",
			definition: "Murchison’s 100,000-acre ranch, nestled deep within Mexico’s Sierra de Tamaulipas mountain range, 70 miles northwest of Tampico and 700 miles south of Dallas. (Courtesy the Murchison Family)",
			image: "images/_glossAcuna.jpg",
			imageAlt: "The ranch house at Hacienda Acuna."
		},
		{
			name: "Isla del Toro",
			definition: "Murchison’s private island off the coast of Tampico, Mexico."
		},
		{
			name: "Sid Richardson",
			definition: "Murchison’s boyhood best friend. Richardson and Murchison owned Matagorda and San Jose islands on the Texas Gulf Coast, where they played hosts to friends and politicians, including President Franklin Roosevelt. (The Associated Press)",
			image: "images/_glossRichardson.jpg",
			imageAlt: "Sid Richardson"
		},
		{
			name: "Olin Lancaster",
			definition: "Lancaster was a friend of Murchison’s and was traveling with him when the pair discovered Hacienda Acuna."
		},
		{
			name: "Bob Young",
			definition: "Young became chairman of Chesapeake and Ohio Railway in 1942 and hosted the Duke and Duchess of Windsor in his private railway cars as the couple traveled from New York to Mexico."
		},
		{
			name: "The Flying Ginny",
			definition: "Murchison’s private DC-3 plane, named after his wife, Virginia “Ginny” Murchison.",
			image: "images/_glossGinny.jpg",
			imageAlt: "Clint Murchison’s private DC-3 plane, The Flying Ginny, was one of the main means of travel to Hacienda Acuna."
		}
	];

	$("#part1glossary").need2know({
		glossary: glossaryEntries
	});

});
