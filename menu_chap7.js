// JavaScript Document

var chap6  = new Array();  // This is for the Chap6 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap7[0]   = '<div id="chap6">';
chap7[1]   = '<button class="dropdown-btn">6 Noethers Theorem <i class="fa fa-caret-down"></i></button>';
chap7[2]   = '<div class="dropdown-container">';
chap7[3]   = '<a href="#">7.1</a>';
chap7[4]   = '<a href="#">7.2</a>';
chap7[5]   = '<a href="#">7.3</a>';
chap7[6]   = '</div>';
chap7[7]   = '</div><!-- Close chap6 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }
