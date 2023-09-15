fetch(`https://randomuser.me/api`).then((responce)=>{
            let data = responce.json();
            return data;
        }).then((data)=>{
            console.log(data);
           
            let display 
            let pic = data.results[0].picture.large;
            let name=  data.results[0].name.title+". "+ data.results[0].name.first+" "+data.results[0].name.last;
            let email= data.results[0].email;
            let dobs = data.results[0].dob.date;
            let dob = dobs.slice(0,10);
            let contact= data.results[0].phone;
            let pass=data.results[0].login.password;
            console.log(pass);
           
           
            document.querySelector('.image').innerHTML=`<img  class='img' src="${pic}">`;

           
            display= document.querySelector('.name');
            
            display.innerHTML= "<div class='header'> Hii my name is,</div><div class='head'>"+name+"</div>";
        
           document.querySelector('.nam').addEventListener('mouseover', function(){
            display.innerHTML= "<div class='header'> Hii my name is,</div><div class='head'>"+name+"</div>";
            
           })
           document.querySelector('.email').addEventListener('mouseover', function(){
            display.innerHTML="<div class='header'> My e-mail is,</div><div class='head'>"+email+"</div>";
           
           })

           document.querySelector('.dob').addEventListener('mouseover', function(){
             display.innerHTML="<div class='header'> My dob is,</div><div class='head'>"+dob+"</div>";
             
           })

           document.querySelector('.phoneno').addEventListener('mouseover', function(){
             display.innerHTML="<div class='header'> My contact is,</div><div class='head'>"+contact+"</div>";
             
           })

           document.querySelector('.pass').addEventListener('mouseover', function(){
             display.innerHTML="<div class='header'> My password is,</div><div class='head'>"+pass+"</div>";
             
           })
        })