// JavaScript Document
var navigation  = new Array();  // This is for the navigation.

// ==================== Navigation ==================== //
navigation[0]   = '<div id="tab_navigation">';
navigation[1]   = '<ul id="dropline">';
navigation[2]   = '<li><a href="#"><b>1. The Model</b></a></li>';
navigation[3]   = '<li><a href="#"><b><pre>  1.1 Introduction</pre></b></a></li>';
navigation[4]   = '<li><a href="#"><b>2. Vector Operators</b></a></li>';
navigation[5]   = '<li><a href="#"><b>3. Differential Forms</b></a></li>';
navigation[6]   = '</ul>';
navigation[7]   = '<ul id="dropline">';
navigation[8]   = '<li><a href="#"><b>1. The Model</b></a></li>';
navigation[9]   = '<li><a href="#"><b><pre>  1.1 Introduction</pre></b></a></li>';
navigation[10]   = '<li><a href="#"><b>2. Vector Operators</b></a></li>';
navigation[11]   = '<li><a href="#"><b>3. Differential Forms</b></a></li>';
navigation[12]   = '</ul>';
navigation[13]   = '<ul id="dropline">';
navigation[14]   = '<li><a href="#"><b>1. The Model</b></a></li>';
navigation[15]   = '<li><a href="#"><b><pre>  1.1 Introduction</pre></b></a></li>';
navigation[16]   = '<li><a href="#"><b>2. Vector Operators</b></a></li>';
navigation[17]   = '<li><a href="#"><b>3. Differential Forms</b></a></li>';
navigation[18]   = '</ul>';
navigation[19]   = '<ul id="dropline">';
navigation[20]   = '<li><a href="#"><b>1. The Model</b></a></li>';
navigation[21]   = '<li><a href="#"><b><pre>  1.1 Introduction</pre></b></a></li>';
navigation[22]   = '<li><a href="#"><b>2. Vector Operators</b></a></li>';
navigation[23]   = '<li><a href="#"><b>3. Differential Forms</b></a></li>';
navigation[24]   = '</ul>';
navigation[25]   = '</div><!-- Close TAB NAVIGATION -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }
