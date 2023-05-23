if (window.location.host === "rewards.bing.com")
{setTimeout(function(){
    window.location.reload(1);
 }, 40000);
}
 

if (window.location.host === "www.bing.com" || "www.microsoft.com") {
    setTimeout(function() {
        window.close(1)
    }, 50000)
}
 


 var plus10 = document.getElementsByClassName("mee-icon mee-icon-AddMedium")
    if (plus10){
      var plus10Length = plus10.length

      for (let i = 0; i < plus10Length; i++) {
          console.log(plus10[i])
          plus10[i].parentNode.parentNode.parentNode.parentNode.click()
      }
    }
