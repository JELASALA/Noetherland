// JavaScript Document

var chap0  = new Array();  // This is for the Chap1 Dropdown Menu lists.

// ==================== These HTML lines will be written ==================== //
chap0[0]   = '<div id="chap0">';
chap0[1]   = '<button class="dropdown-btn">  HOME <i class="fa fa-caret-down"></i></button>';
chap0[2]   = '<div class="dropdown-container">';
chap0[3]   = '<a href="#"><pre style="font-family: Helvetica; font-size: 16px; margin: 0px; padding: 0px;">  0.1 Intro  </pre></a>';
chap0[4]   = '<a href="#">0.2 Teaching Philosophies</a>';
chap0[5]   = '<button class="dropdown-btn">0.3 Math You Need to Know<i class="fa fa-caret-down"></i></button>';
chap0[6]   = '<div class="dropdown-container">';
chap0[7]   = '<a href="#">0.3.1 Calculus of Variations</a>';
chap0[8]   = '<a href="#">0.3.2 Ordinary and Partial Differetial Equations</a>';
chap0[9]   = '<a href="#">0.3.3 Method of Characteristics</a>';
chap0[10]   = '</div>';
chap0[11]   = '<a href="#">0.3 How to Study this E-torial</a>';
chap0[12]   = '<a href="#">0.4 Sources and References</a></a>';
chap0[13]   = '</div>';
chap0[14]   = '</div><!-- Close CHAP0 -->';

function show(i)
 {
  for (x in i)
  {
   document.write(i[x]+'\n')
  }
 }

// CREATED FROM:
//<button class="dropdown-btn">0 HOME <i class="fa fa-caret-down"></i></button>
//	<div class="dropdown-container">
//		<a href="#">0.1 Intro</a>
//		<a href="#">0.2 Teaching Philosophies</a>
//		<button class="dropdown-btn">0.3 Math You Need to Know<i class="fa fa-caret-down"></i></button>
//		<div class="dropdown-container">
//				<a href="#">0.3.1 Calculus of Variations</a>
//				<a href="#">0.3.2 Ordinary and Partial Differetial Equations</a>
//				<a href="#">0.3.3 Method of Characteristics</a>
//		</div>
//		<a href="#">0.3 How to Study this E-torial</a>
//		<a href="#">0.4 Sources and References</a>
//	</div>
