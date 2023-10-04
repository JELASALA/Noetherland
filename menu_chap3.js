// JavaScript Document

var chap3  = new Array();  // This is for the Chap3 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap3[0] = '<div id="chap3">';
chap3[1] = '<button class="dropdown-btn">3 Exterior Differential Systems <i class="fa fa-caret-down"></i></button>';
chap3[2] = '<div class="dropdown-container">';
chap3[3] = '<a href="#">3.1 Introduction</a>';
chap3[4] = '<a href="https://noetherland.org/Chapter3/3-2 Final Template.html">3.2 The Ideal</a>';
chap3[5] = '<button class="dropdown-btn">3.3 Lie Derivatives<i class="fa fa-caret-down"></i></button>';
chap3[6] = '<div class="dropdown-container">';
chap3[7] = '<a href="#">3.3.1 Definition</a>';
chap3[8] = '<a href="#">3.3.2 Geometrical Picture</a>';
chap3[9] = '<a href="#">3.3.3 Examples</a>';
chap3[10] = '</div>';
chap3[11] = '<button class="dropdown-btn">3.4 Isovectors<i class="fa fa-caret-down"></i></button>';// begin 3.4
chap3[12] = '<div class="dropdown-container">';
chap3[13] = '<a href="#">3.4.1 Definition</a>';
chap3[14] = '<a href="#">3.4.2 Contact Manifold</a>';
chap3[15] = '<a href="#">3.4.3 Fundamental Ideal</a>';
chap3[16] = '<a href="#">3.4.4 PDE Balance Form</a>';
chap3[17] = '</div>'; // end 3.4
chap3[18] = '<a href="#">3.5 Similarity Solutions</a>';
chap3[19] = '</div>';
chap3[20] = '</div><!-- Close chap3 -->'


function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }
// [OBE] CREATED FROM:
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
