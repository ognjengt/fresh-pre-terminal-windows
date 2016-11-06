# Fresh Pre Terminal Windows (FPTW)
Lightweight javascript/sass library for styling components on the page to look like terminals.<br>
Make custom terminals, or use built-ins.<br>
Quick navigation:<br>
<a href="#setupSASS">Setting up using SASS</a> <br>
<a href="#setupJS">Setting up using Javascript</a> <br>
<a href="#styling-with-scss">Styling using SASS</a> <br>
<a href="#styling-with-js">Styling using Javascript</a> <br>
<h3>Setting up</h3>
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
	~ terminal 1
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
