
	function findRoots(a, b, c)
	{

		if (a == 0) {
			document.write("Invalid");
			return;
		}

		let d = b * b - 4 * a * c;
		let sqrt_val = Math.sqrt(Math.abs(d));

		if (d > 0) {
			document.write(
				"Roots are real and different \n" + "<br/>");

			document.write(
				(-b + sqrt_val) / (2 * a) + "<br/>"
				+ (-b - sqrt_val) / (2 * a));
		}
		else if (d == 0) {
			document.write(
				"Roots are real and same \n" + "<br/>");

			document.write(-b / (2 * a) + "<br/>"
							+ -b / (2 * a)) ;
		}
		else // d < 0
		{
			document.write("Roots are complex \n");

			document.write(-b / (2 * a) + " + i"
							+ sqrt_val + "<br/>"
							+ -b / (2 * a)
							+ " - i" + sqrt_val);
		}
	}



		let a = 1, b = 5, c = 6;
		
		document.write(findRoots(a,b,c));
