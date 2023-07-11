// JavaScript Document
var chap2  = new Array();  // This is for the Chap2 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap2[0]   = '<div id="chap2">';
chap2[1]   = '<button class="dropdown-btn">2 Vector Operators <i class="fa fa-caret-down"></i></button>';
chap2[2]   = '<div class="dropdown-container">';
chap2[3]   = '<a href="#">2.1 Intro</a>';
chap2[4]   = '<a href="#">2.2 Infinitesimal Vector Generators</a>';
chap2[5]   = '<a href="#">2.3 Induced Flow - Exponentiation</a>';
chap2[6]   = '<a href="#">2.4 Invariance Condition</a>';
chap2[7]   = '</div>';
chap2[8]   = '</div><!-- Close chap2 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }

// CREATED FROM:
//	<button class="dropdown-btn">2 Vector Operators <i class="fa fa-caret-down"></i></button>
//	<div class="dropdown-container">
//		<a href="#">2.1 Intro</a>
//		<a href="#">2.2 Infinitesimal Vector Generators</a>
//		<a href="#">2.3 Induced Flow - Exponentiation</a>
//		<a href="#">2.4 Invariance Condition</a>
//	</div>