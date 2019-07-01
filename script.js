function copyFunction() {
    var copyText = document.getElementById("urlGenerated");
    copyText.select();
    document.execCommand("copy");
    copyText.innerHTML=" ";
  } 