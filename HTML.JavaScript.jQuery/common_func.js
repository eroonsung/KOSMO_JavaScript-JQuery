//매개 변수로 들어온 데이터가 비어있거나 공백으로 구성되어 있으면 true를 리턴, 아니면 false를 리턴하는 함수 선언
function isEmpty(str) {
  var flag = false; // true/false 변수 -> flag 사용
  if (str.split(" ").join("") == "") {
    flag = true;
  }
  return flag;
}

//이메일 체크 함수 선언
//매개변수로 들어온 이메일 문자가 이메일 문자패턴에 맞으면 true 기턴하기, 틀리면 false 리턴하기
function isValidEmail(email) {
  // 검사할 문자열이 저장되는 매개변수, 즉 이메일 문자열이 저장되는 매개변수
  var regExp = new RegExp(
    /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
  );
  //만약에 입력한 이메일이 이메일 문자패턴이 아니면 false 맞으면 true
  return regExp.test(email);
}

//문자열의 패턴 체크 함수 선언
//매개변수롤 들어온 RegExp 객체와 검사 문자열을 이용하여 검사문자열이 RegExp 객체가 관리하는 문자 패턴에 맞으면 true 리턴하기, 틀리면 false리턴하기
function isValidPattern(
  regExpObj, //RegExp 객체의 메모리 위치 주소값이 저장되는 매개변수
  targetStr // 패턴을 검사할 문자열이 저장되는 매개 변수
) {
  // 패턴을 검사할 문자열이 저장되는 매개변수
  // 문자 패턴에 맞으면 true, 틀리면 false
  return regExpObj.test(targetStr);
}

// radio 버튼과 checkbox 버튼의 체크 개수를 구해서 리턴하는 함수선언
function getCheckedCnt(
  arrObj // Array 객체의 메위주가 저장되는 매개변수 선언, Array 객체 안의 배열 변수 안에는 Radio 객체 또는 checkbox 객체가 들어있음
) {
  try {
    //len 변수 선언하고 매개변수로 들어온 Array 객체의 배열 변수 개수를 구해 저장하기
    var len = arrObj.length;

    //len 변수가 undefined이면
    // 즉, 매개변수로 Array객체가 아니라 다른 객체(checkbox 객체/radio객체)가 바로 들어온다면 존재하지 않는 length라는 속성변수에는 undefined가 들어있음
    // Radio 객체 또는 checkbox 객체의 메위주 상상도를 살펴봐야 함
    if (len == undefined) {
      if (arrObj.checked == false) {
        return 0;
      } else {
        return 1;
      }
    }

    // radio 객체 또는 체크박스 객체의 체크 개수가 저장되는 변수 선언 0 저장
    var checkedCnt = 0;
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
    //checkedCnt 변수 안의 데이터를 리턴하기
    // 즉 Radio 또는 checkbox 입력 양식에 체크 개수 리턴하기
    return checkedCnt;
  } catch (e) {
    alert("getCheckedCnt 함수 호출 시 에러가 발생했음");
  }
}
