den.style.backgroundColor = "white";

function kiemtra_den() {
  var status = document.getElementById('bt1')
  if(status.checked == true){      
    var result1 = confirm('Do you want turn on the light?')
    if(result1){
      document.getElementById("Den").src='https://webvn.com/wp-content/uploads/2015/08/pic_bulbon.gif?fbclid=IwAR2SuPiRVqA6vYQD0NZkQszR05-jAz7HnlI8bOnUoFrxoL8eEiltbEZQk98'
      den.style.backgroundColor = "red";
    } else {
      document.getElementById("Den").src='https://www.w3schools.com/js/pic_bulboff.gif?fbclid=IwAR0N4Ly5V_e0f-T_F9XUOP99zoqMGuy0O0l0vsw_SBfDJtpO0V5Jd7J1jsU'
      den.style.backgroundColor = "white";
      status.checked = false
    }
  }else{
    var result2 = confirm('do you want turn off the light?')
    if(result2) {
        document.getElementById("Den").src='https://www.w3schools.com/js/pic_bulboff.gif?fbclid=IwAR0N4Ly5V_e0f-T_F9XUOP99zoqMGuy0O0l0vsw_SBfDJtpO0V5Jd7J1jsU'
        den.style.backgroundColor = "white";
    }
    else {
        document.getElementById('Den').src='https://webvn.com/wp-content/uploads/2015/08/pic_bulbon.gif?fbclid=IwAR2SuPiRVqA6vYQD0NZkQszR05-jAz7HnlI8bOnUoFrxoL8eEiltbEZQk98'
        den.style.backgroundColor = "red";
        status.checked = true
    }
  }
}