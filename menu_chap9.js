// JavaScript Document

var chap9  = new Array();  // This is for the Chap9 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap9[0]   = '<div id="chap9">';
chap9[1]   = '<button class="dropdown-btn">9 General Relativity <i class="fa fa-caret-down"></i></button>';
chap9[2]   = '<div class="dropdown-container">';
chap9[3]   = '<a href="#">9.1</a>';
chap9[4]   = '<a href="#">9.2</a>';
chap9[5]   = '<a href="#">9.3</a>';
chap9[6]   = '</div>';
chap9[7]   = '</div><!-- Close chap9 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }
