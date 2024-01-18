function validateForm(){
    var x;
    x = document.forms["dieukien"]["textho"].value;
    if(x == " "){
        alert("Bạn chưa nhập họ");
        return false;
    }
    x = document.getElementById("textten").value;
    if(x == " "){
        alert("Bạn chưa nhập tên");
        return false;
    }
    x = document.getElementById("dienthoai").value;
    if(isNaN(x) || length(x) == 0 || length(x) > 10){
        alert("Điện thoại phải là số, mời nhạp lại");
        return false;
    }
}
function populateDropdown(select, start, end) {
    for (let i = start; i <= end; i++) {
      const option = document.createElement("option");
      option.text = i;
      option.value = i;
      select.add(option);
    }
}
const dobDaySelect = document.getElementById("dobDay");
const dobMonthSelect = document.getElementById("dobMonth");
const dobYearSelect = document.getElementById("dobYear");
populateDropdown(dobDaySelect, 1, 31);
populateDropdown(dobMonthSelect, 1, 12);
populateDropdown(dobYearSelect, 1900, new Date().getFullYear());

