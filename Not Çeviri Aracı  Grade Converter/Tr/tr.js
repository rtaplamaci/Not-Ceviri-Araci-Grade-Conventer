	function hesapla(){
			grd=document.getElementById("inpt").value;

			var grade= parseInt(grd);
			if (grade>100) {
				rslt.value=("Lütfen 100'den küçük bir sayı giriniz!");
			}
			else if (grade>=90) {
				rslt.value=("Notunuz AA , Tebrikler");
			}else if (grade>=85) {
				rslt.value=("Notunuz BA , Tebrikler");
			}
			else if (grade>=80) {
				rslt.value=("Notunuz BB , Tebrikler");
			}
			else if (grade>=70) {
				rslt.value=("Notunuz CB , Tebrikler");
			}
			else if (grade>=60) {
				rslt.value=("Notunuz CC , Tebrikler");
			}
			else if (grade>=55) {
				rslt.value=("Notunuz DC , Tebrikler");
			}
			else if (grade>=50) {
				rslt.value=("Notunuz DD , Tebrikler");
			}
			else if (grade>=40) {
				rslt.value=("Notunuz FD , Tebrikler");
			}
			else if (grade<=39) {
				rslt.value=("Notunuz FF");
			}
			else{
				rslt.value=("Hata")}
		}