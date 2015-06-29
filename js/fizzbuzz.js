/*
 Yuri Van Steenburg, FizzBuzz practice 6/29/2015
*/

var main = function (){

	var $i, $fizbuz_num, $content;

	/* function to check %3, %5, or both */
	$fizbuz_num = function (number){
		if (number % 3 === 0 && number % 5 === 0){
			return "FizzBuzz";
		}else if (number % 3 === 0){
			return "Fizz";
		}else if (number % 5 === 0){
			return "Buzz";
		}else{
			return number;
		}
	};


	/* this fcn goes 1 through 100, then call fizbuz_num fcn*/
	function fizzbuzz_1(){
		//write subject for this function directly to .fizzbuzz_body
		$(".fizzbuzz_body").append("<h3>1. fizzbuzz_1() - calls with no args");
		//define $content is <p>
		$content = $("<p>");

		for (i = 1; i <= 100; i++){
			//paste onto result of $fizbuz_num
			$content.append( $fizbuz_num(i) );
			$content.append(" ");
		}
		//now paste content onto .fizzbuzz_body
		$(".fizzbuzz_body").append($content);

	} /* end of fizzbuzz1() */

	/* this fcn takes two params, starting and ending numbers */
	function fizzbuzz_2(start, end){
		$(".fizzbuzz_body").append("<h3>2. fizzbuzz_2(start, end) - calls with two args, ex: fizzbuzz_2(200, 300)</h3>");
		$content = $("<p>");
		for (i = start; i <= end; i++){
			$content.append( $fizbuz_num(i) );
			$content.append(" ");
		}
		$(".fizzbuzz_body").append($content);

	}

	/* this fcn takes an array of numbers */
	function fizzbuzz_3(arr){
		$(".fizzbuzz_body").append("<h3>3. fizzbuzz_3(arr) - calls with an arg of array of nums, ex: fizzbuzz_3([101, 102, ..., 115])</h3>")
		$content = $("<p>");
		arr.forEach(function (value) {
			$content.append( $fizbuz_num(value) );
			$content.append(" ");
		});
		$(".fizzbuzz_body").append($content);

	}

	function fizzbuzz_4(obj){
		$(".fizzbuzz_body").append("<h3>4. fizzbuzz_4(obj) - takes an object, ex: fizzbuzz_4({ divisibleByThree: 'foo', divisibleByFive: 'bar'})</h3>")
		$content = $("<p>");
		for (i = 1; i <= 100; i++){
			if (i % 3 === 0 && i % 5 === 0){
				$content.append( obj.divisibleByThree + obj.divisibleByFive + " ");
			}else if (i % 3 === 0){
				$content.append( obj.divisibleByThree + " ");
			}else if (i % 5 === 0){
				$content.append ( obj.divisibleByFive + " ");
			}else{
				$content.append( i + " ");
			}
		}
		$(".fizzbuzz_body").append($content);
	}

	function fizzbuzz_5(arr, obj){
		$(".fizzbuzz_body").append("<h3>5. fizzbuzz_5(arr,obj) - combine 3&4 together, ex: fizzbuzz_5([101, ..], {divisibleByThree:'foo', div..})</h3>")
		$content = $("<p>");
		for (i=0; i<arr.length; i++){
			if (arr[i] % 3 === 0 && arr[i] % 5 === 0){
				$content.append( obj.divisibleByThree + obj.divisibleByFive + " ");
			}else if (arr[i] % 3 === 0){
				$content.append( obj.divisibleByThree + " ");
			}else if (arr[i] % 5 === 0){
				$content.append ( obj.divisibleByFive + " ");
			}else{
				$content.append(arr[i]+" ");
			}
		}
		$(".fizzbuzz_body").append($content);
		$(".fizzbuzz_body").append("</p>");
	}

	fizzbuzz_1();
	fizzbuzz_2(200, 300);
	fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
	fizzbuzz_4({ divisibleByThree: "foo", divisibleByFive: "bar"});
	fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], { divisibleByThree: "foo", divisibleByFive: "bar"});
};
$(document).ready(main);