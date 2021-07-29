function checkForm() {
  $(".mem_id,.mem_name,.addr").each(function (i) {
    var value = $(this).val();
    var name = $(this).attr("name");
    if (value.split(" ").join("") == "") {
      alert(name + "데이터가 비었습니다. 입력 또는 선택해주세요.");
    }
  });
}
$(".save_btn").click(function () {
  checkForm();
});
