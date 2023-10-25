
		//makeHead()
		function makeHead() {
			let day = '';
			day += "<table border = '1'><thead><tr>";
			let week = ['일', '월', '화', '수', '목', '금', '토'];
			
			week.forEach(item => {day += "<th>" + item + "</th>"});
			
			day += "</tr></thead>";

			//makeBody()
			//function makeBody() {
			day += "<tbody><tr>";
			for (let i = 1; i <= 31; i++) {
				day += '<td>' + i + '</td>'
				if (i % 7 == 0) {
					day += '<tr></tr>'
				}
				
			}
			day += '</tbody></table>';
			return day;
		}

		//makeCalendar()
		
			document.getElementById('show').innerHTML = makeHead();
	
		//위 두 함수 조합하여 적절하게 써서
		//makeCalendar();
	