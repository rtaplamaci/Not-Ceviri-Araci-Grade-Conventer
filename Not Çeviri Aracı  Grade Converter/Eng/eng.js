		function hesapla(){
			grd=document.getElementById("inpt").value;

			var grade= parseInt(grd);
			if (grade>100) {
				rslt.value=("Please enter a number less than 100!");
			}
			else if (grade>=90) {
				rslt.value=("Your grade AA, Congratulations");
			}else if (grade>=85) {
				rslt.value=("Your grade BA, Congratulations");
			}
			else if (grade>=80) {
				rslt.value=("Your grade BB, Congratulations");
			}
			else if (grade>=70) {
				rslt.value=("Your grade CB, Congratulations");
			}
			else if (grade>=60) {
				rslt.value=("Your grade CC, Congratulations");
			}
			else if (grade>=55) {
				rslt.value=("Your grade DC, Congratulations");
			}
			else if (grade>=50) {
				rslt.value=("Your grade DD, Congratulations");
			}
			else if (grade>=40) {
				rslt.value=("Your grade FD, Congratulations");
			}
			else if (grade<=39) {
				rslt.value=("Your grade FF");
			}
			else{
				rslt.value=("Eror")}
		}