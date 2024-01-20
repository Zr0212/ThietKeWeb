function validateForm() {
    var x;
    var y;
    var z;
    x = document.forms["Form"]["txtho"].value;
    y = document.forms["Form"]["txtten"].value;
    z = document.getElementById("txtdienthoai").value;
    if (x == "") {
    alert("Vui lòng nhập họ");
    return false;
    } else if (y == "") {
    alert("Vui lòng nhập tên");
    return false;
    } else if (z == "") {
        alert("Vui lòng nhập số điện thoại");
        return false;
    } else if(isNaN(z) || z.length>10 || z.length<10){
        alert("Số điện thoại không hợp lệ, mời nhập lại");
        return false;
    } else {
        alert("Nộp thành công");
    }
 }
const daySelect = document.querySelector("#ngay")
for (let i = 1; i <= 31; i ++) {
    const option = document.createElement("option")
    option.value=i
    option.innerHTML = i
    if (i == 1) {
        option.selected = true
    }
    daySelect.appendChild(option)
}
const monthSelect = document.querySelector("#thang")
for (let i = 1; i <= 12; i ++) {
    const option = document.createElement("option")
    option.value=i
    option.innerHTML = i
    if (i == 1) {
        option.selected = true
    }
    monthSelect.appendChild(option)
}
const yearSelect = document.querySelector("#nam")
for (let i = 1980; i <= 2024; i ++) {
    const option = document.createElement("option")
    option.value=i
    option.innerHTML = i
    if (i == 1) {
        option.selected = true
    }
    yearSelect.appendChild(option)
}