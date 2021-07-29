/**************************************************/
//매개 변수로 들어온 데이터가 비어있거나 공백으로 구성되어 있으면 true를 리턴, 아니면 false를 리턴하는 함수 선언
/**************************************************/
/*
function isEmpty(str) {
  try {
    var flag = false; // true/false 변수 -> flag 사용
    if (str.split(" ").join("") == "") {
      flag = true;
    }
    return flag;
  } catch (e) {
    alert("isEmpty 함수 호출 시 예외 발생!" + e.message);
    return false;
  }*/
//아래 방법이 가독성이나 프로그램의 운영에 있어서 훨씬 좋은 방법
//위에 코드는 return이 두번이나 나옴(try/catch 구문이 독단적으로 돌아감)
function isEmpty(str) {
  //try 구문 선언
  // try 구문 안에는 예외 발생 가능성이 있는 코드가 삽입됨
  var flag = false; // true/false 변수 -> flag 사용
  try {
    //매개 변수로 들어온 문자가 길이가 없거나 공백으로 이루어져 있으면 flag 변수에 true 저장
    if (str.split(" ").join("") == "") {
      flag = true;
    }
  } catch (e) {
    //catch 구문 선언
    //catch 구문 안에는 예외발생시 실행할 코드가 삽입됨
    //catch 구문의 매개변수 e에는 예외를 관리하는 객체의 메위주가 들어옴
    // catch(~){~}구문은 try 구문에서 예외 발생시 호출하는 일종의 함수와 비슷하다
    alert("isEmpty 함수 호출 시 예외 발생! " + e.message);
    flag = false; // 데이터를 한번 더 초기화해주는 것이 좋음 -> 코드가 길어지면 헷갈림. 확실하게 하기 위함
  }
  return flag;
}

/**************************************************/
//이메일 체크 함수 선언
/**************************************************/
//매개변수로 들어온 이메일 문자가 이메일 문자패턴에 맞으면 true 기턴하기, 틀리면 false 리턴하기
/*
function isValidEmail(email) {
  // 검사할 문자열이 저장되는 매개변수, 즉 이메일 문자열이 저장되는 매개변수
  var regExp = new RegExp(
    /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
  );
  //만약에 입력한 이메일이 이메일 문자패턴이 아니면 false 맞으면 true
  return regExp.test(email);
  */
function isValidEmail(email) {
  var flag = false;
  try {
    // 이메일 문자의 패턴을 관리하는 RegExp 객체 생성하기
    // RegExp 객체의 test 메소드를 호출하여 매개변수로 들어온 문자의 이메일 문자 패턴에 맞는지 여부를 구해 flag 변수에 저장하기
    var regExp = new RegExp(
      /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
    );
    flag = regExp.test(email);
  } catch (e) {
    alert("isValidEmail 함수 호출 시 예외 발생! " + e.message);
    flag = false;
  }
  return flag;
}

/**************************************************/
//문자열의 패턴 체크 함수 선언
/**************************************************/
//매개변수롤 들어온 RegExp 객체와 검사 문자열을 이용하여 검사문자열이 RegExp 객체가 관리하는 문자 패턴에 맞으면 true 리턴하기, 틀리면 false리턴하기
/*
function isValidPattern(
  regExpObj, //RegExp 객체의 메모리 위치 주소값이 저장되는 매개변수
  targetStr // 패턴을 검사할 문자열이 저장되는 매개 변수
) {
  // 패턴을 검사할 문자열이 저장되는 매개변수
  // 문자 패턴에 맞으면 true, 틀리면 false
  return regExpObj.test(targetStr);
}
*/
function isValidPattern(
  regExpObj, //RegExp 객체의 메모리 위치 주소값이 저장되는 매개변수
  targetStr // 패턴을 검사할 문자열이 저장되는 매개 변수
) {
  var flag = false;
  try {
    // 패턴을 검사할 문자열이 저장되는 매개변수
    // 문자 패턴에 맞으면 true, 틀리면 false
    flag = regExpObj.test(targetStr);
  } catch (e) {
    alert("isValidPattern 함수 호출 시 예외 발생! " + e.message);
    flag = false;
  }
  return flag;
}

/**************************************************/
// radio 버튼과 checkbox 버튼의 체크 개수를 구해서 리턴하는 함수선언
/**************************************************/
function getCheckedCnt(
  arrObj // Array 객체의 메위주가 저장되는 매개변수 선언, Array 객체 안의 배열 변수 안에는 Radio 객체 또는 checkbox 객체가 들어있음
) {
  // radio 객체 또는 체크박스 객체의 체크 개수가 저장되는 변수 선언 0 저장
  var checkedCnt = 0;
  //alert(1)l
  try {
    //len 변수 선언하고 매개변수로 들어온 Array 객체의 배열 변수 개수를 구해 저장하기
    var len = arrObj.length;

    //len 변수가 undefined이면
    // 즉, 매개변수로 Array객체가 아니라 다른 객체(checkbox 객체/radio객체)가 바로 들어온다면 존재하지 않는 length라는 속성변수에는 undefined가 들어있음
    // Radio 객체 또는 checkbox 객체의 메위주 상상도를 살펴봐야 함
    if (len == undefined) {
      if (arrObj.checked == false) {
        return 0;
        //alert(2)
      } else {
        return 1;
      }
    }
    //반복문 선언. 반복문은 0~len변수 안의 배열변수 개수 미만만큼 반복
    //반복문을 돌려서 Array 객체의 배열 변수 안에 저장된 Radio 객체 또는 checkbox 객체에 접근하기 위함
    for (var i = 0; i < len; i++) {
      //만약 i 번째 배열변수 안의 Radio 객체 또는 checkbox 객체의 속성변수 checked에 true가 저장되어 있으면
      // checkedCnt 변수 안의 숫자를 1 업데이트 하기
      // 즉 i번째 Radio또는 checkbox 입력 양식에 체크가 되어있으면 checkedCnt 변수 안의 숫자를 1 업데이트 하기
      if (arrObj[i].checked) {
        checkedCnt++;
      }
    }
  } catch (e) {
    alert("getCheckedCnt 함수 호출 시 에러가 발생! " + e.message);
    checkedCnt = 0;
  }
  //checkedCnt 변수 안의 데이터를 리턴하기
  // 즉 Radio 또는 checkbox 입력 양식에 체크 개수 리턴하기
  return checkedCnt;
}

/**************************************************/
// 현재 시각의 요일을 리턴하는 함수 선언
/**************************************************/
function getTodayWeek() {
  // today 변수 선언. 현재 날짜를 관리하는 Date 객체 생성
  // Date 객체의 메위주를 today 변수에 저장
  var today = new Date();
  // weekNo 변수 선언. Date 객체의 getDay 메소드를 호출하여 현재 요일 번호를 얻어 weekNo 변수에 저장하기
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
  //오늘 요일 문자 리턴하기
  return week;
}
// 위에 함수와 똑같은 함수
function getTodayWeek() {
  return ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"][
    new Date().getDay()
  ]; //[일월화수목금토][1] //월요일
}

//현재 시각의 년-월-일(요일)을 문자로 리턴하는 함수 선언
function getTodayYMDW() {
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var date = today.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  var week = getTodayWeek().replace("요일", "");
  //  "요일"을 길이가 없는 문자열로 바꿔서 화면에 출력
  //  "월요일"->"월"

  return year + "-" + month + "-" + date + "(" + week + ")";
}

/**************************************************/
//매개변수로 날짜 문자형이 들어오는 함수 isToday
/**************************************************/
// 매개변수로 들어온 날짜문자가 오늘날짜와 동일하면 true를 리턴하는 함수, 아니면 false를 리턴
function isToday(dateStr) {
  try {
    //----------------------------------------
    //변수 arr 선언. dateStr 매개변수 안의 날짜문자를
    var arr = dateStr.split("-"); //"-"로 쪼개서 Array 객체안에 담기

    //----------------------------------------
    //Array 객체 안에 배열 변수 안의 데이터 꺼내어 year, month, date변수에 저장하기
    //String 객체의 trim 메소드 호출로 앞 뒤 공백 제거하기

    var year = arr[0];
    //year = year.trim();
    var month = arr[1];
    //month = month.trim();
    var date = arr[2];
    //date = date.trim();

    //----------------------------------------
    //parseInt라는 내장함수를 호출하여 모든 숫자 문자열을 정수형으로 바꿈(10진수) -> 날짜 앞에 쓰는 0이 날라감
    year = parseInt(year, 10);
    month = parseInt(month, 10);
    date = parseInt(date, 10);

    //오늘 날짜 꺼내기
    //변수 today 선언. 오늘 날짜를 관리하는 Date 객체를 생성하고 메위주를 today에 저장하기
    //Date 객체의 getFullYear,getMonth,getDate메소드 호출로 년,월,일 얻어 변수에 저장하기
    var today = new Date();
    var today_year = today.getFullYear();
    var today_month = today.getMonth() + 1;
    var today_date = today.getDate();

    //매개변수로 들어온 년월일이 오늘 날짜의 년월일과 동일하면 true리턴 아니면 false를 리턴
    return year == today_year && month == today_month && date == today_date;
  } catch (e) {
    alert("isToday에서 에러발생!");
    return false;
  }
}
/**************************************************/
//공백을 없애주는 함수 만들기
/**************************************************/
//매개변수로 들어온 문자에서 모든 공백을 제거하고 난 후의 문자 리턴하기
/*
function deleteBlank(str) {
  var arr = str.split(" ");
  return arr.join("");
}
*/

/*
function deleteBlank(dateStr) {
  return dateStr.replace("-", " ").join();
}
*/

function deleteBlank(str) {
  try {
    //----------------------------------------
    //공백 제거한 문자를 저장할 변수 reseult 선언
    var result = "";
    //----------------------------------------
    //반복문 돌리면서 매개변수로 들어온 문자열 중 한개씩 접근해서
    //공백이 아닌 경우 문자만 result 변수에 누적시키기
    for (var i = 0; i < str.length; i++) {
      //만약 i번째 문자가 공백이 아니면 i번째 문자를 result 변수에 누적시키기
      if (str.charAt(i) != " ") {
        //----------------------------------------
        //변수 result 안의 데이터 리턴하기
        result = result + str.charAt(i);
      }
    }
    return result;
  } catch (e) {
    alert("deleteBlank 함수에서 에러 발생!");
    return str;
  }
}

/**************************************************/
// dateStr을 매개변수로 받아 오늘 날짜부터 특정 날짜가지 남은 기간을 리턴하는 함수get_dDay
/**************************************************/
/* 이현 코드
function get_dDay(dateStr) {
  try {
    var today = new Date(); // 오늘 날짜
    var arr = dateStr.split("-");
    var dyear = arr[0]; // 특정날짜 년도
    dyear = parseInt(dyear, 10);
    var dmonth = arr[1]; // 특정날짜 월
    dmonth = parseInt(dmonth, 10);
    var ddate = arr[2]; // 특정날짜 일
    ddate = parseInt(ddate, 10);
    var dday = new Date(dyear, dmonth - 1, ddate);
    var interval = Math.ceil(
      (dday.getTime() - today.getTime()) / (60 * 60 * 24 * 1000)
    ); //오늘 날짜부터 특정 날짜까지 남은 기간을 계산
    return interval;
  } catch (e) {
    alert("get_dDay에서 에러발생!" + e.message);
    return dateStr;
  }
}
*/

function get_dDay(dateStr) {
  try {
    // 변수 arr 선언. dateStr 매개 변수 안의 날짜 문자를 -기준으로 토막내어 Array 객체 안에 담기
    var arr = dateStr.split("-");
    //Array 객체 안의 배열변수 안의 데이터를 꺼내어 year, month, date 변수에 저장하기
    var year = arr[0];
    var month = arr[1];
    var date = arr[2];
    //parseInt라는 내장함수를 호출하여 y, m, d변수 안의 숫자 문자를 정수 숫자로 바꾸기
    year = parseInt(year, 10);
    month = parseInt(month, 10);
    date = parseInt(date, 10);
    //임의의 날짜를 관리하는 Date 객체를 생성하고 변수 xDay에 저장하기
    //오늘 날짜를 관리하는 Date 객체를 생성하고 변수 today에 저장하기
    var xDay = new Date(year, month - 1, date);
    var today = new Date();
    // 오늘 날짜와 임의의 날짜의 차이를 일수로 얻고 소수점 올린 후 변수 interval에 저장하기

    /*
    var xDay = new Date(dateStr);
    var today = new Date();
    */
    var interval = (xDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    return Math.ceil(interval);
  } catch (e) {
    alert("get_Dday 함수에서 에러 발생" + e.message);
    return -1; // 0 이상의 숫자를 리턴하면 dday가 있다는 말 음수를 리턴하면 비정상적인 경우이기 때문에 에러가 발생하면 음수를 발생!
  }
}
/*
function get_dDay(str) {
  var today = new Date();
  var xDay = new Date(str.split("-"));
  var dDay = Math.ceil(
    (xDay.getTime() - today.getTime()) / (60 * 60 * 24 * 1000)
  );
  return dDay;
}

// var dtest = new Date("2021,12,25"); // 2021년 12월 25일
// var dtest = new Date("2021","12","25"); // 2022년 1월 25일

*/

/**************************************************/
//한글이름 검사
//매개 변수로 들어온 한글 이름이 한글이면서 2자~20자 사이면 true 리턴, 아니면 false 리턴하기
/**************************************************/
function isHangeulName(hangeulName) {
  return isValidPattern(/^[가-힣]{2,20}$/, hangeulName);
}

/**************************************************/
//아이디 검사
//매개 변수로 들어온 아이디가 영소문자로 시작하고, 영소문자, 숫자 또는_로 5~10자로 구성되면 true 리턴, 아니면 false 리턴하기
/**************************************************/
function isMemID(id) {
  return isValidPattern(/^[a-z][a-z0-9_]{4,9}$/, id);
}

/**************************************************/
//암호 검사
//매개 변수로 들어온 아이디가 영소문자 또는 숫자로 5~8자로 구성되면 true 리턴, 아니면 false 리턴하기
/**************************************************/
function isMemPwd(pwd) {
  return isValidPattern(/^[a-z0-9_]{5,8}$/, pwd);
}
