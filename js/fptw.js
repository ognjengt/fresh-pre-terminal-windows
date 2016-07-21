"use strict";
function customStyle(properties,terminal,header){
  terminal.className = 'fptw';
  header.className = 'fptw-header';
  terminal.style.fontFamily = properties.font_family;
  terminal.style.fontSize = properties.font_size;
  terminal.style.width = properties.frame_width;
  terminal.style.minHeight = properties.frame_height;
  terminal.style.background = properties.background_color;
  terminal.style.color = properties.text_color;
  terminal.style.border = properties.border;
  header.style.height = properties.header_height;
  header.style.background = properties.header_background;
  header.style.borderBottom = properties.border_bottom;
  header.style.textShadow = properties.header_text_shadow;
  header.style.color = properties.header_text_color;
  header.innerHTML = properties.header_caption;
  terminal.innerHTML = properties.terminal_content;

}

function builtIn(properties,terminal,header) {
  terminal.className = 'fptw-'+properties.className;
  header.className = 'fptw-header-'+properties.className;
  header.innerHTML = properties.header_caption;
  terminal.innerHTML = properties.terminal_content;
}
function createFPTW(properties, parent) {
  var terminal = document.createElement('pre');
  var header = document.createElement('div');

  var propertyLength = Object.keys(properties).length
  if(propertyLength > 4)
    customStyle(properties,terminal,header);
  else
    builtIn(properties,terminal,header);

  terminal.appendChild(header);

  if(parent === document.body)
    parent.appendChild(terminal);
  else if(document.getElementById(parent) != null) {
    document.getElementById(parent).appendChild(terminal);
  }
  else if(document.getElementsByClassName(parent)[0] != null) {
    document.getElementsByClassName(parent)[0].appendChild(terminal);
  }
  else{
    alert('Property with the value of '+parent+' does not exist.');
  }
}
