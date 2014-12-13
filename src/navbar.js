/**
 * Custom Navigation Bar. Distributed with MIT License.
 * 
 * Product of NoviceHacks.com. Shared for Reuse without any restrictions.
 * 
 * @author Sharath Chand Bhaskara
 */
var navbar = new Object();

navbar = {
	navigation : null,
}

/**
 * Menu Object
 */
var navigation = [ {
	id : "0",
	name : "Home",
	style : "active",
	list : [ {
		id : "0_0",
		name : "Home",
		link : "sample1.html",
	/* Adding Any Sub Menus at level 2 will add it back to Level 1 main menu */
	}, {
		id : "0_1",
		name : "Clients",
		link : "sample2.html",
	}, {
		id : "0_2",
		name : "Contact",
		link : "sample3.html",
	} ]
}, {
	id : "1",
	name : "Projects",
	style : "active",
	list : [ {
		id : "1_0",
		name : "Products",
		link : "sample2.html",
	}, {
		id : "1_1",
		name : "Services",
		link : "sample3.html",
	}, {
		id : "1_2",
		name : "Frameworks",
		link : "sample4.html",
	} ]
} ];
/*
 * User Configurable keys on NavBar object.
 */

navbar = {
	navigation : null,
	navIdDelimeter : null,
	locationId : null,
	accordionId : "accordion",
	navIdPrefix : "nav_",
	selectedStyle : "customnav-selected",
	storagekey : {
		level1 : {
			name : "customnav.submenu",
			defaultvalue : "0"
		},
		level2 : {
			name : "customnav.mainmenu",
			defaultvalue : "0_0"
		}
	},

}

navbar.navigation = navigation;

navbar.storagekey.level1.name = "customnav.mainmenu";
navbar.storagekey.level2.name = "customnav.submenu";
/*
 * Defaults for User Parameters.
 */
navbar.storagekey.level1.defaultvalue = "0";
navbar.storagekey.level2.defaultvalue = "0_0";
navbar.locationId = "custom-nav";
navbar.navIdDelimeter = "_";
navbar.selectedStyle = "customnav-selected";
/*
 * Application specific keys on NavBar object.
 */
navbar.accordionId = "accordion";
navbar.navIdPrefix = "nav_";

/*
 * On Document Ready, Menu will be created from the navbar.navigation object and
 * loaded in the navbar.locaion.id.
 */
$(document).ready(
		function() {
			/*
			 * Setting the default value, when no value is there in local
			 * storage
			 */
			var level1_value = localStorage
					.getItem(navbar.storagekey.level1.name);
			var level2_value = localStorage
					.getItem(navbar.storagekey.level2.name);
			/* Checking the value is initialized or not */
			if (level1_value == undefined || level1_value == null
					|| level1_value == "" || level2_value == undefined
					|| level2_value == null || level2_value == "") {
				/* Set Default Values */
				level1_value = navbar.storagekey.level1.defaultvalue;
				level2_value = navbar.storagekey.level2.defaultvalue;
				/* Assign Default values in storage */
				localStorage.setItem(navbar.storagekey.level1.name,
						navbar.storagekey.level1.defaultvalue);
				localStorage.setItem(navbar.storagekey.level2.name,
						navbar.storagekey.level2.defaultvalue);

			}

			/*
			 * Creating and loading the menu from navigation object to the
			 * location given, and assigning the accordion feature.
			 */
			var menuContent = defineMenuHirearchy();
			
			this.getElementById(navbar.locationId).innerHTML = menuContent;

			$("#" + navbar.accordionId).accordion();

			/*
			 * Read data from local storage and set the status to menu.
			 */
			var mainMenu = localStorage.getItem(navbar.storagekey.level1.name);
			var subMenu = localStorage.getItem(navbar.storagekey.level2.name);
			/*
			 * Retaining the state of navigation bar.
			 */
			$("#" + navbar.navIdPrefix + subMenu)
					.addClass(navbar.selectedStyle);
			/* Bug fixed by casting the mainMenu variable to Number explicitly */
			$("#" + navbar.accordionId).accordion("option", "active",
					Number(mainMenu));
		});

/**
 * Create the inner HTML for navbar and wrap it with accordion features.
 */
function defineMenuHirearchy() {
	var innerHtml;
	var menuList = "";
	for (var i = 0; i < navbar.navigation.length; i++) {
		menu = navbar.navigation[i];
		menuList += create(menu);
	}
	innerHtml = "<div id='" + navbar.accordionId + "'>" + menuList + "</div>"
	return innerHtml;
}

/**
 * Recursive method to create Sub Menus if exist for the Top Level Menus.
 * 
 * @param menu
 * @returns {String}
 */
function create(menu) {
	var content = "";
	if (valid(menu)) {
		var menuDef;
		/*
		 * If submenu present, then will be added as element in accordion
		 * otherwise will append to the list item of its parent
		 */
		if (containsSubMenu(menu)) {
			var menuList = "";
			for (i = 0; i < menu.list.length; i++) {
				/* Recursive call to create submenu */
				menuList += create(menu.list[i]);
			}
			subListId = navbar.navIdPrefix + menu.id;
			menuDef = "<h3>" + menu.name + "</h3><div><ul id='" + subListId
					+ "' class='nav nav-tabs nav-stacked'>" + menuList
					+ "</ul></div>";
		} else {
			elementId = navbar.navIdPrefix + menu.id;
			menuDef = "<li id='" + elementId
					+ "' onclick='navigate(this)'> <a href='" + menu.link
					+ "'>" + menu.name + "</a></li>"
		}
		content = menuDef;
	}
	return content;
}

function navigate(element) {
	console.log(element.id)
	var id = element.id;
	var split = id.split(navbar.navIdDelimeter);
	console.log(split);
	localStorage.setItem(navbar.storagekey.level1.name, split[1]);
	localStorage.setItem(navbar.storagekey.level2.name, split[1]
			+ navbar.navIdDelimeter + split[2]);
	return true;
}

function valid(menu) {
	return true;
}

function containsSubMenu(menu) {
	if (valid(menu)) {
		var list = menu.list;
		if (list == null || list.length == 0) {
			return false;
		} else {
			return true;
		}
	}
	return false;
}
