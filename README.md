# Fresh Pre Terminal Windows (FPTW)
Lightweight javascript/sass library for styling components on the page to look like terminals.<br>
Make custom terminals, or use built-ins.<br>
Quick navigation:<br>
<a href="#setupSASS">Setting up using SASS</a> <br>
<a href="#setupJS">Setting up using Javascript</a> <br>
<a href="#stylingSASS">Styling using SASS</a> <br>
<a href="#stylingJS">Styling using Javascript</a> <br>
<h3>Setting up</h3>
<h3 id="setupSASS">Using SASS</h3>
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

<h4>If everything went good, the basic terminal template should appear in the area you pasted the code above. To style the terminal, check the <a href="#styling">Styling the terminal</a></h4>
<br>
<h3 id="setupJS">Using Javascript</h3>
<hr>
Not using SASS is ok.
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
