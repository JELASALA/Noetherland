// JavaScript Document
var chap1  = new Array();  // This is for the Chap1 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap1[0]   = '<div id="chap1">';
chap1[1]   = '<button class="dropdown-btn">1 The Model <i class="fa fa-caret-down"></i></button>';
chap1[2]   = '<div class="dropdown-container">';
chap1[3]   = '<a href="#">1.1 Intro</a>';
chap1[4]   = '<a href="#">1.2 Manifolds and Maps</a>';
chap1[5]   = '<a href="#">1.3 Composition Maps</a>';
chap1[6]   = '<a href="#">1.4 Local Linear Approximations</a>';
chap1[7]   = '</div>';
chap1[8]   = '</div><!-- Close chap1 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }

// CREATED FROM:
//<button class="dropdown-btn">1 The Model <i class="fa fa-caret-down"></i></button>
//	<div class="dropdown-container">
//		<a href="#">1.1 Intro</a>
//		<a href="#">1.2 Manifolds and Maps</a>
//		<a href="#">1.3 Composition Maps</a>
//		<a href="#">1.4 Local Linear Approximations</a>
//	</div>