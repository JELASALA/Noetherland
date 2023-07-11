// JavaScript Document

var chap6  = new Array();  // This is for the Chap6 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap6[0]   = '<div id="chap6">';
chap6[1]   = '<button class="dropdown-btn">6 Noethers Theorem <i class="fa fa-caret-down"></i></button>';
chap6[2]   = '<div class="dropdown-container">';
chap6[3]   = '<a href="#">6.1</a>';
chap6[4]   = '<a href="#">6.2</a>';
chap6[5]   = '<a href="#">6.3</a>';
chap6[6]   = '</div>';
chap6[7]   = '</div><!-- Close chap6 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }

// CREATED FROM:
//	<button class="dropdown-btn">6 Noethers Theorem <i class="fa fa-caret-down"></i></button>
//	<div class="dropdown-container">
//		<a href="#">6.1</a>
//		<a href="#">6.2</a>
//		<a href="#">6.3</a>
//	</div>

//  NOTE WARNING NOTE:  Putting an apostrophe in Noether's screws up the write command single quote
// marks that enclose what is to be written!!!!!!!!!!