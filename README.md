#Samartha Nauyana

Samartha Nauyana is a simple and elegant js library, it is used to retain the state in the navigation bar. The name is derived from sanskrit "Samartha" - powerful, "Nauyana" - navigation, corresponding the "Powerful Navigation" scheme implemented in the library. 

Samartha Nauyana is built on top of "[JQuery UI Accordion](http://jqueryui.com/accordion/)" widget, and uses "[BootMetro](http://aozora.github.io/bootmetro/)" api style in the demo pages. 

###Usage

The library is very sensibly designed, so that the users can easily customize the behavior using simple JSON objects, and all the hard work is done automatically by the library. The JSON object will be created as shown below.


#### User Configuration Properties
```
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
```

#### User Navigation Object
```
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
	
/* Assigning the Navigation Object to the Navbar Object in the library */
navbar.navigation = navigation;	

```

> Suggested way of defining these navigation object and configuration is in a simple javascript file as shown [here](demo/navigationob.js). 

Once after creating the user configuration in a seperate js file, the only thing left for you to do is to add the library and the user configuration file in all the pages where you want to add the navigation menu. 

The Menu will loaded in the container specified in the configuration "navbar.locationId". 

> OOPLA! thats it, the navigation bar will be loaded, and will retain its state in every page.

*For working prototype please visit the [demo](demo/sample1.html) application*

If you like, and want to use this library in any of you application, its our pleasure. Only request was to give credits by mentioning that you liked, and used in so and so application in the comments.

###### Samartha Nauyana is a product of novicehacks.com 
