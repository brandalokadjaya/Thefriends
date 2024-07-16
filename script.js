// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();


    //logika tulisan berjalan
document.addEventListener("DOMContentLoaded", function () {
	 const text = "🗣️ ; Ngab, TheFriends itu apa ?\n\n🦉 ; Thefriends adalah komunitas yang didirikan oleh santri. Tujuan dari komunitas ini adalah sebagai sarana atau wadah untuk belajar, berkarya, dan berdakwah. Bersifat open source (terbuka untuk siapa saja), dengan kata lain komunitas ini sangat terbuka untuk umum, pemuda yang ingin hijrah ke arah lebih baik, pemuda yang ingin berkarya, pemuda yang ingin belajar.\n\nKenapa fokus pada pemuda ? Karena kami Yaqin bahwa masa depan bangsa ini ada di tangan mereka.\n\nKami berharap komunitas ini bisa menjadi salah satu jalan untuk mengembangkan apa yang ingin di capai.\n\nSebuah komunitas yg didirkan oleh santri untuk umum, bertujuan sebagai saranan dakwah/mengajak ke kebaikan dalam segi online.\n\nDengan slogan \"Dhemit ora ndulit Setan ora doyan\" yang maknanya adalah sebuah doa sekaligus permintaan kepada Allah agar selalu diberi kemudahan dan pertolongan saat berjuang, kami selalu mengharap agar Allah selalu memberi kemudahan, Aminnn..";

		const typewriterText = document.getElementById("typewriter-text");
		let i = 0;

		function typeWriter() {
				if (i < text.length) {
						typewriterText.textContent += text.charAt(i);
						i++;
						setTimeout(typeWriter, 20); // Kecepatan mengetik
				} else {
						typewriterText.classList.remove('typing-cursor'); // Menghilangkan kursor setelah selesai mengetik
				}
		}

		typeWriter();
});