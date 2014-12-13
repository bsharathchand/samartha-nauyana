/**
 * Custom Navigation Object
 */

$(function() {
	var navigation = [ {
		id : "0",
		name : "Home",
		style : "active",
		list : [ {
			id : "0_0",
			name : "A",
			link : "sample1.html",
		/* Adding Any Sub Menus at level 2 will add it back to Level 1 main menu */
		}, {
			id : "0_1",
			name : "B",
			link : "sample2.html",
		}, {
			id : "0_2",
			name : "C",
			link : "sample3.html",
		} ]
	}, {
		id : "1",
		name : "Projects",
		style : "active",
		list : [ {
			id : "1_0",
			name : "D",
			link : "sample2.html",
		}, {
			id : "1_1",
			name : "E",
			link : "sample3.html",
		}, {
			id : "1_2",
			name : "F",
			link : "sample4.html",
		} ]
	} ];

	navbar.navigation = navigation;
	/* Default value for the level1 menu */
	navbar.storagekey.level1.defaultvalue = "0";
	/* Default value for the level1 menu */
	navbar.storagekey.level2.defaultvalue = "0_0";
	/* Location of the ID where the navigation bar has to be inserted */
	navbar.locationId = "custom-nav";
	/* The delimeter token used in the navigation object for the link ID values */
	navbar.navIdDelimeter = "_";
	/* Class name to be added to identify an element when activated */
	navbar.selectedStyle = "active";
});