// 매개변수로 들어온 데이터가 비어있거나 공백으로 구성되어 있으면
// true 리턴, 아니면 false 리턴하는 함수 선언
// str = 입력한 아이디
function isEmpty(str) {
  // str의 의미 -> 문자열이 저장되는 매개변수
  var flag = false;
  // try구문 선언. try구문 안에는 예외발생 가능성이 있는 코드가 삽입된다.
  try {
    // 매개변수로 들어온 문자가 길이가 없거나 공백으로 이루어져 있으면
    // flag 변수에 true 저장
    if (str.split(" ").join("") == "") {
      flag = true;
    }
    // catch구문 선언. catch구문 안에는 try구문에서 예외발생 시 실행할 코드가 삽입된다.
    // catch구문 매개변수 e 에는 예외를 관리하는 객체의 메위주가 들어온다.
    // catch(~){~} 구문은 try 구문에서 예외발생 시 호출하는 일종의 함수와 비슷하다.
  } catch (e) {
    alert("isEmpty 함수 호출 시 예외 발생!" + e.message);
    flag = false;
  }
  return flag; // flag 변수안의 데이터를 리턴
}
/* 
  try{
		var flag = false;   // true/false 변수로 많이 사용한다.
		if( str.split(" ").join("") == "" ) {
			flag = true;
		} 
		return flag; // flag 안의 데이터를 리턴한다
  }catch(e){
	alert("isEmpty 함수 호출 시 예외 발생" + e.message);
	return false;
  }
}
*/

// 한글 이름 유효성 체크
// 한글 2자 ~ 20자 입력
// 유효성 체크 통과 시 true, 아니면 false 리턴
function isMem_name(str) {
  var flag = false;
  var regExp = new RegExp(/^[가-힣]{2,20}$/);

  // 유효성 체크 통과 시
  if (regExp.test(str)) {
    flag = true;
  }

  return flag;
}

// 아이디 유효성 체크
// 첫글자는 영소문자 입력하고, 이후 영소문자 숫자 _ 만 입력가능. 5자~10자 입력
// 유효성 체크 통과 시 true, 아니면 false 리턴
function isUid(str) {
  var flag = false;
  var regExp = new RegExp(/^[a-z][a-z0-9_]{4,9}$/);

  // 유효성 체크 통과 시
  if (regExp.test(str)) {
    flag = true;
  }

  return flag;
}

// 비밀번호 유효성 체크
// 영소문자, 숫자, _ 만 입력, 5 ~ 8자 입력
// 유효성 체크 통과 시 true, 아니면 false 리턴
function isPwd(str) {
  var flag = false;
  var regExp = new RegExp(/^[a-z0-9_]{5,8}$/);

  //유효성 체크 통과 시
  if (regExp.test(str)) {
    flag = true;
  }

  return flag;
}

// 이메일 체크 함수 선언
// str = 입력한 이메일
// 매개변수로 들어온 이메일 문자가 이메일 문자 패턴에 맞으면 true 리턴
// 틀리면 false 리턴
function isValidEmail(email) {
  // 검사할 문자열, 즉 이메일 문자열이 저장되는 매개변수
  var flag = false;
  try {
    var regExp = new RegExp(
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
    );
    flag = regExp.test(email);
  } catch (e) {
    alert("isValidEmail 함수 호출 시 예외 발생" + e.message);
    flag = false;
  }
  return flag;
}

/*
// 문자열의 패턴 체크 함수 선언 
// 매개변수로 들어온 RegExp 객체와 검사 문자열을 이용하여
// 이메일 문자 패턴에 맞으면 true 리턴
// 틀리면 false 리턴
function isValidPattern(
				regExpObj  // RegExp 객체의 메모리 위치 주소값이 저장되는 매개변수
		   	, targetStr ){ // 패턴을 검사할 문자열이 저장되는 매개변수 
    return regExpObj.test(targetStr);
}
*/
function isValidPattern(regExpObj, targetStr) {
  var flag = false;
  try {
    flag = regExpObj.test(targetStr);
  } catch (e) {
    alert("isValidPattern 함수 호출 시 예외 발생" + e.message);
    flag = false;
  }
  return flag;
}

// checkbox 또는 radio의 체크 개수 구해서 리턴하는 함수 선언
function getCheckCnt(arrObj) {
  // Array객체의 메위주가 저장되는 매개변수 선언,
  // Array객체 안의 배열 변수안에는
  // Radio 객체 또는 checkbox 객체의 메위주가 들어 있다.
  // len 변수 선언하고 매개변수로 들어온 Array객체의 배열변수 개수를 구해 저장하기
  var len = arrObj.length;

  // len 변수안의 데이터가 undefined면 , 즉 매개변수로 Array객체가 안들어오고 다른 객체 ,
  // 즉 Radio 객체 또는 checkbox 객체가 들어오면 존재하지 않는 length 라는 속성변수에는 undefined가 들어 있다.
  // Radio 객체 또는 checkbox 객체의 매위주 상상도를 살펴봐야 한다.
  if (len == undefined) {
    if (arrObj.checked == false) {
      return 0;
    } else {
      return 1;
    }
  }

  // checkbox 또는 radio의 체크 개수가 저장되는 변수 선언하고 0 저장
  var checkedCnt = 0;

  // 반복문 선언. 반복문은 0~len변수안의 배열변수 개수 미만만큼 돈다.
  // 반복문을 돌려서 Array객체의 배열변수 안에 저장된 Radio 객체 또는 checkbox 객체에 접근하기 위함
  for (var i = 0; i < len; i++) {
    // 만약 i번째 배열변수 안의 Radio 객체 또는 checkbox 객체의 속성변수 checked에 true가 저장되어있으면
    // checkedCnt 변수 안의 숫자를 1 업데이트 하기
    // 즉 i 번째 checkbox 또는 radio 입력양식에 체크가 되어 있으면 checkedCnt 변수 안의 숫자를 1 업데이트 하기
    if (arrObj[i].checked) {
      checkedCnt++;
    }
  }
  // checkedCnt 변수 안의 데이터 리턴하기. 즉 checkbox 또는 radio 입력양식에 체크 개수 리턴하기
  return checkedCnt;
}

// 현재 시각의 요일을 리턴하는 함수 선언
function getTodayWeek() {
  // today 변수 선언. 현재 날짜를 관리하는 Date 객체 생성
  // Date 객체의 메위주를 today 변수에 저장
  var today = new Date();
  // weekNo 변수 선언. Date 객체의 getDay 메서드 호출하여 현재 요일 번호 얻어 weekNo 변수 저장
  var weekNo = today.getDay();
  // week 변수 선언. "일요일" 저장하기
  var week = "일요일";
  // 요일 번호에 따라 week 변수에 오늘 요일 문자 저장하기
  if (weekNo == 1) {
    week = "월요일";
  } else if (weekNo == 2) {
    week = "화요일";
  } else if (weekNo == 3) {
    week = "수요일";
  } else if (weekNo == 4) {
    week = "목요일";
  } else if (weekNo == 5) {
    week = "금요일";
  } else if (weekNo == 6) {
    week = "토요일";
  }
  // 오늘 요일 문자 리턴하기
  return week;
}
/* 
위 함수는 아래처럼도 가능하다.
function getTodayWeek() {
	return ["일요일","월요일","화요일","수요일","목요일","금요일","토요일",][new Date().getDay()]
*/

// 오늘 날짜의 년-월-일(요일)을 문자로 리턴하는 함수 선언
function getTodayYMDW() {
  // today 변수 선언. 현재 날짜를 관리하는 Date 객체 생성
  // Date 객체의 메위주를 today 변수에 저장
  var today = new Date();
  // 현재 시각의 년-월-일(요일)을 문자로 리턴
  return (
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    "(" +
    getTodayWeek().replace("요일", "") +
    ")"
  );
}

//
function isToday(dateStr) {
  try {
    var arr = dateStr.split("-");

    var year = arr[0];
    var month = arr[1];
    var date = arr[2];

    year = parseInt(year, 10);
    month = parseInt(month, 10);
    date = parseInt(date, 10);

    var today = new Date();
    var today_year = today.getFullyear();
    var today_month = today.getMonth() + 1;
    var today_date = today.getDate();

    return year == today_year && month == today_month && date == today_date;
  } catch (e) {
    alert("isToday 함수에서 에러발생!");
    return false;
  }
}
