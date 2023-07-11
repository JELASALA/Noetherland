// JavaScript Document

var chap5  = new Array();  // This is for the Chap5 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap5[0]   = '<div id="chap5">';
chap5[1]   = '<button class="dropdown-btn">5 Variational Principles <i class="fa fa-caret-down"></i></button>';
chap5[2]   = '<div class="dropdown-container">';
chap5[3]   = '<a href="#">5.1</a>';
chap5[4]   = '<a href="#">5.2</a>';
chap5[5]   = '<a href="#">5.3</a>';
chap5[6]   = '</div>';
chap5[7]   = '</div><!-- Close chap5 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }

// CREATED FROM:
//	<button class="dropdown-btn">5 Variational Principles <i class="fa fa-caret-down"></i></button>
//	<div class="dropdown-container">
//		<a href="#">5.1</a>
//		<a href="#">5.2</a>
//		<a href="#">5.3</a>
//	</div>
