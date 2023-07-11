// JavaScript Document

var chap3  = new Array();  // This is for the Chap3 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap3[0]   = '<div id="chap3">';
chap3[1]   = '<button class="dropdown-btn">3 Differential Forms <i class="fa fa-caret-down"></i></button>';
chap3[2]   = '<div class="dropdown-container">';
chap3[3]   = '<a href="#">3.1 Intro</a>';
chap3[4]   = '<a href="#">3.2 The Ideal</a>';
chap3[5]   = '<button class="dropdown-btn">3.3 Lie Derivatives<i class="fa fa-caret-down"></i></button>';
chap3[6]   = '<div class="dropdown-container">';
chap3[7]   = '<a href="#">3.3.1 Definition</a>';
chap3[8]   = '<a href="#">3.3.2 Geometrical Picture</a>';
chap3[9]   = '<a href="#">3.3.3 Examples</a>';
chap3[10]   = '</div>';
chap3[11]   = '</div>';
chap3[12]   = '</div><!-- Close chap3 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }
// CREATED FROM:
//	<button class="dropdown-btn">3 Differential Forms <i class="fa fa-caret-down"></i></button>
//	<div class="dropdown-container">
//		<a href="#">3.1 Intro</a>
//		<a href="#">3.2 The Ideal</a>
//		<button class="dropdown-btn">3.3 Lie Derivatives<i class="fa fa-caret-down"></i></button>
//		<div class="dropdown-container">
//				<a href="#">3.3.1 Defintion</a>
//				<a href="#">3.3.2 Geometrical Picture</a>
//				<a href="#">3.3.3 Examples</a>
//		</div>
//	</div>
