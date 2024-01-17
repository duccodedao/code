// script.js
var bankData = {
  vietcombank: {
    accountNumber: "0891 00065 0891",
    accountName: "SON LY HONG DUC"
  },
  techcombank: {
    accountNumber: "2345 86868686",
    accountName: "SON LY HONG DUC"
  },
  mbbank: {
    accountNumber: "00 0103 02003",
    accountName: "SON LY HONG DUC"
  },
  sacombank: {
    accountNumber: "Đang cập nhật...",
    accountName: "Đang cập nhật..."
  },
  vpbank: {
    accountNumber: "0939 262 443",
    accountName: "SON LY HONG DUC"
  },
  momo: {
    accountNumber: "0939 262 443",
    accountName: "SON LY HONG DUC"
  }
};

var bankImages = {
  vietcombank: "vcb.jpg",
  techcombank: "tcb.jpg",
  mbbank: "mb.jpg",
  sacombank: "update.jpg",
  vpbank: "vp.jpg",
  momo: "mm.jpg",
};

function showAccountInfo() {
  var bankSelect = document.getElementById("bankSelect");
  var selectedBank = bankSelect.options[bankSelect.selectedIndex].value;

  var accountInfo = document.getElementById("accountInfo");
  accountInfo.innerHTML = `Số tài khoản: ${bankData[selectedBank].accountNumber}<br>Tên: ${bankData[selectedBank].accountName}`;

  var havanaImage = document.getElementById("havanaImage");
  havanaImage.src = bankImages[selectedBank];
  havanaImage.classList.remove("hidden");
  havanaImage.classList.add("visible");

  document.getElementById("showButton").style.display = "none";
  document.getElementById("showAgainButton").style.display = "block";
  document.getElementById("copyButton").style.display = "block";
}

function showAgain() {
  var havanaImage = document.getElementById("havanaImage");
  havanaImage.classList.remove("visible");
  havanaImage.classList.add("hidden");

  document.getElementById("showButton").style.display = "block";
  document.getElementById
