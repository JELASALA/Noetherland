// JavaScript Document

var chap8  = new Array();  // This is for the Chap8 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap8[0]   = '<div id="chap6">';
chap8[1]   = '<button class="dropdown-btn">6 Noethers Theorem <i class="fa fa-caret-down"></i></button>';
chap8[2]   = '<div class="dropdown-container">';
chap8[3]   = '<a href="#">8.1</a>';
chap8[4]   = '<a href="#">8.2</a>';
chap8[5]   = '<a href="#">8.3</a>';
chap8[6]   = '</div>';
chap8[7]   = '</div><!-- Close chap6 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }
