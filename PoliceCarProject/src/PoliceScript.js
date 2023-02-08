function carLightOn(){
      var element = document.getElementById('light');
      element.classList.toggle("active");

      if(element.classList.contains('active')){
      document.getElementById('light').src = "Politibil2.gif";
      }
      else{
      document.getElementById('light').src = "Politibil.png";
      }
    }

    function thiefRun(){
          var element = document.getElementById('thief');
          element.classList.toggle("activeTwo");

          if(element.classList.contains('activeTwo')){
          document.getElementById('thief').src = "Tyve.gif";
          }
          else{
          document.getElementById('thief').src = "TyveBillede.png";
          }
        }

    function catchThem(){
        var element = document.getElementById('catchBtn');
        element.classList.toggle("activeThree");

        if(element.classList.contains("activeThree")){
        document.getElementById("thief").src = "InPrison.png"
        document.getElementById("light").src = "Politibil.png"
        }
        else{
        document.getElementById("thief").src = "Tyve.gif"
        }
     }

