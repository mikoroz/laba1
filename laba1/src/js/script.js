function quad(a, b , c){
	if(a == 0) {
		return "Ошибка, A=0 недопустимое значение!";
	}
	else if(isNaN(a)){
		return "Коэффициент A должен быть числом 0, 1 ...";	
	}
	else if(isNaN(b)){
		return "Коэффициент B должен быть числом 0, 1 ...";	
	}
	else if (isNaN(c)){
		return "Коэффициент C должен быть числом 0, 1 ...";	
	}
	else if (c == 0){
		x1 = 0;
		x2 = (-b/a);
		return "Коэффициенты: A=" +a+", B=" +b+", C=" +c+"\nКорни уравнения: X1 = "+ x1.toFixed(2) + ", X2 = " + x2.toFixed(2) + "";
	}
	var D = b*b-4*a*c;
	var x1, x2;
	if(D > 0){
		x1 = (-b+Math.sqrt(D))/(2*a);
		x2 = (-b-Math.sqrt(D))/(2*a);
		console.log(D);
		console.log(x1);
		console.log(x2);
		return "Коэффициенты: A=" +a+", B=" +b+", C=" +c+"\nКорни уравнения: X1 = "+ x1.toFixed(2) + ", X2 = " + x2.toFixed(2) + " \nДискриминант(D)= " + D.toFixed(2);
	} 
	else if (D==0){
		x1 = -b/(2*a);
		console.log(x1);
		return "Коэффициенты: A="  +a+", B=" +b+", C=" +c+"\nКорни уравнения: X1 = "+ x1.toFixed(2) + "\nДискриминант(D)= " + D.toFixed(2);
	} else if (D < 0)
		D = D*(-1);
		D1 = Math.sqrt(D);
		D1 = (D1)/(2*a);
		D1 = D1.toFixed(2);
		x1 = (-b)/(2*a);
		x2 = (-b)/(2*a);
		D = D*(-1);
		return "Коэффициенты: A=" +a+", B=" +b+", C=" +c+"\nКорни уравнения: X1 = " + `${x1}+${D1}i` +  ", X2 = " + `${x2}-${D1}i` + "\nДискриминант(D)= " + D.toFixed(2);
}
function prog(){

var a = document.getElementById('A').value;
var b = document.getElementById('B').value;
var c = document.getElementById('C').value;
a = parseFloat(a.replace(',', '.'));
b = parseFloat(b.replace(',', '.'));
c = parseFloat(c.replace(',', '.'));
var result = quad(a, b, c);
document.getElementById('result').textContent = result;
document.getElementById('Otv').style.display = 'block';
}