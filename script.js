

async function kural(){
    var number = document.getElementById('kural').value
     var result = await fetch(`https://bible-api.com/john%20${number}`);
      var datas = await result.json()
      // console.log(datas)
    var result=document.querySelector('.container-fluid')
    
      result.innerHTML=`
      <div class="section"><h2> ${datas.text}</h2></div>
      
      

   
     
      `
      
     }
  
  kural()
  
  var button = document.querySelector('.btn')
  button.addEventListener('click',kural)