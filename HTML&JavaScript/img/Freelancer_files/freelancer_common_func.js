//매개 변수로 들어온 데이터가 비어있거나 공백으로 구성되어 있으면 true를 리턴, 아니면 false를 리턴하는 함수 선언
function isEmpty(str) {
  var flag = false;
  if (str.split(" ").join("") == "") {
    flag = true;
  }
  return flag;
}

//이메일 체크 함수 선언
//매개변수로 들어온 이메일 문자가 이메일 문자패턴에 맞으면 true 기턴하기, 틀리면 false 리턴하기
function isValidEmail(email) {
  var regExp = new RegExp(
    /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
  );
  return regExp.test(email);
}

//문자열의 패턴 체크 함수 선언
function isValidPattern(regExpObj, targetStr) {
  return regExpObj.test(targetStr);
}

// radio 버튼과 checkbox 버튼의 체크 개수를 구해서 리턴하는 함수선언
function getCheckedCnt(arrObj) {
  try {
    var len = arrObj.length;
    if (len == undefined) {
      if (arrObj.checked == false) {
        return 0;
      } else {
        return 1;
      }
    }
    var checkedCnt = 0;
    for (var i = 0; i < len; i++) {
      if (arrObj[i].checked) {
        checkedCnt++;
      }
    }
    return checkedCnt;
  } catch (e) {
    alert("getCheckedCnt 함수 호출 시 에러가 발생했음");
  }
}
