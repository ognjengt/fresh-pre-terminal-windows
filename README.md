# :computer: Fresh Pre Terminal Windows (FPTW) :computer:
Lightweight javascript/sass library for styling components on the page to look like terminals.<br>
Make custom terminals, or use built-ins.<br>
Quick navigation:<br>
<a href="#setupSASS">Setting up using SASS</a> <br>
<a href="#setupJS">Setting up using Javascript</a> <br>
<a href="#styling-with-scss">Styling using SASS</a> <br>
<a href="#styling-with-js">Styling using Javascript</a> <br>
<h3>Setting up :wrench:</h3>
<h3 id="setupSASS">Using SASS/SCSS</h3>
<hr>
<h4>Step 1</h4>
Download or clone the scss folder to your local machine
<h4>Step 2</h4>
Fire up the terminal and start the watch process
```
sass --watch scss/fptw.scss:css/fptw.css
```
<h4>Step 3</h4>
Ok so we have our .css file ready to go, link it to the .html page
```html
<link rel="stylesheet" href="css/fptw.css" media="screen">
```
<h4>Step 4</h4>
Copy the code below to create your first terminal window. (Copy the code in the area you want the terminal to appear)
```html
<pre class="fptw">
	<div class="fptw-header">
	  Your header here
	</div>
	~ Hello world
	~ some code instruction here
</pre>
```

<h4>If everything went good, the basic terminal template should appear in the area you pasted the code above. To style the terminal, check the <a href="#styling-with-scss">Styling the terminal with SCSS</a></h4>
<br>
<h3 id="setupJS">Using Javascript</h3>
<hr>
<h4>Step 1</h4>
Download the fptw.js and fptw.css located in the css and js folders.
<h4>Step 2</h4>
Link them to your .html
```html
<link rel="stylesheet" href="css/fptw.css" media="screen">
```
```html
<script src="js/fptw.js"></script>
```
<h4>Step 3</h4>
Create the basic properties of a window by using this code
```javascript
<script>
var properties = {
        "className": "classic",
        "header_caption": "Hello world!",
        "terminal_content": "<p>~ Hello world\n~ Second comand</p>"
      }
</script>
```
- className: represents the styling for a particular window (check the stylings in index.html or database.md file, to see the examples)
- header_caption: represents the caption of the header or simply said the header text
- terminal_content: Represents the content in the terminal (use \n for new lines)

Now that you have the properties created, just call createFPTW(); function which takes 2 parameters.
```javascript
createFPTW(properties,'createHere');
```
The createHere is the id or a class of an element in which you want to create your window. So for example a basic html layout with one fptw window will look something like this
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/fptw.css" media="screen" title="no title" charset="utf-8">
    <title>test fptw</title>
  </head>
  <body>
    <div id="area">
    </div>

    <script src="js/fptw.js"></script>
    <script type="text/javascript">
      var properties = {
        "className": "mac-dark",
        "header_caption": "Hello world!",
        "terminal_content": "<p>~ Hello world\n~ Second comand</p>"
      }
      createFPTW(properties,'area');
    </script>
  </body>
</html>
```
So, this code added the terminal with the styling mac-dark in the div with the id area.
<h4>If everything went good, the basic terminal template should appear in the area you passed as a second argument. To style the terminal, check the <a href="#styling-with-js">Styling the terminal with Javascript</a></h4>

<h3>Styling :barber:</h3>
<h3 id="styling-with-scss">Using SASS/SCSS</h3>
<hr>
To style a terminal with the built-in style classes just add some of the classes from database.md. You can see the examples on the index.html also. So let's say you want to create terminal which is similar to a terminal on a mac computers. Just add the mac-light or mac-dark class to id. The code is this
```html
<pre class="fptw-mac-light">
	<div class="fptw-header-mac-light">
	  Your header here
	</div>
	~ Hello world
	~ some code instruction here
</pre>
```

If you on the other hand want to create fully custom terminal window, there is also a solution!
<h4>Step 1</h4>
Open up the fptw_variables.scss file
<h4>Step 2</h4>
As you can see there are some variables that can help you style your window to your needs, every variable has a understandable name, so you won't have any problem styling it. Feel free to experiment!

<h3 id="styling-with-js">Using Javascript</h3>
<hr>
As we said, to create a built-in style terminal with javascript, just edit the className parameter in the properties object. Look up to <a href="#setupJS">Setting up using Javascript</a> for a basic example.

Dont panic! You can also create fully custom JS terminal. Here's how:
When we created basic terminal window we just passed 3 properties
```javascript
<script>
var properties = {
        "className": "classic",
        "header_caption": "Hello world!",
        "terminal_content": "<p>~ Hello world\n~ Second comand</p>"
      }
createFPTW(properties,'area');
</script>
```
To create a fully custom terminal, just pass, all of these properties
```javascript
<script>
var properties = {
      "font_family": "Consolas",
      "font_size": "13px",
      "frame_width": "500px",
      "frame_height": "250px",
      "background_color": "#2c3e50",
      "text_color": "#fff",
      "border": "none",
      "header_height": "27px",
      "header_background": "#2ecc71",
      "border_bottom": "none",
      "header_text_shadow": "1px 1px #7C7C7C",
      "header_text_color": "inherit",
      "header_caption": "Hello world!",
      "terminal_content": "<p>~ "+
      "neki content"+
      "</p>"
      }
createFPTW(properties,'area');
</script>
```
So as you can see the properties are all named so you can understand what they are for.

<h3>Feel free to experiment with all of this, and let me know if there are some issues, I will gladly help. :relaxed:</h3>
