// JavaScript Document

var chap4  = new Array();  // This is for the Chap4 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap4[0]   = '<div id="chap4">';
chap4[1]   = '<button class="dropdown-btn">4 Vectors vs Forms <i class="fa fa-caret-down"></i></button>';
chap4[2]   = '<div class="dropdown-container">';
chap4[3]   = '<a href="#">4.1 Advantages of Vectors</a>';
chap4[4]   = '<a href="#">4.2 Disadvantages of Vectors</a>';
chap4[5]   = '<a href="#">4.3 Advantages of Forms</a>';
chap4[6]   = '<a href="#">4.4 Disadvantages of Forms</a>';
chap4[7]   = '<a href="#">4.5 Compare and Contrast</a>';
chap4[8]   = '</div>';
chap4[9]   = '</div><!-- Close chap4 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }

// CREATED FROM:
//<button class="dropdown-btn">4 Vectors vs Forms <i class="fa fa-caret-down"></i></button>
//	<div class="dropdown-container">
//		<a href="#">4.1 Advantages of Vectors</a>
//		<a href="#">4.2 Disadvantages of Vectors</a>
//		<a href="#">4.3 Advantages of Forms</a>
//		<a href="#">4.4 Disadvantages of Forms</a>
//		<a href="#">4.5 Compare and Contrast</a>
//	</div>