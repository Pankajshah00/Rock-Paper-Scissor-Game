

    function rock(){
        let value=(Math.floor(Math.random()*3));
        let r=0;
        if(value==r){
            alert("Tie");
            console.log("you choose rock and computer choose rock");
        }
        else if(value==1){
            alert("you won");
            console.log("you choose rock and computer choose scissor");
        }
        else{
            alert("computer won");
            console.log("you choose rock and computer choose paper"); 
        } 
    }      
        function scissor(){            
            let value=(Math.floor(Math.random()*3));
            let s=1;
            if(value==s){
                alert("Tie");
                console.log("you choose scissor and computer choose scissor");  
                
            }
            else if(value==0){
                alert("computer won");
                console.log("you choose scissor and computer choose rock");  
            }else
            { alert("you won");
             console.log("you choose scissor and computer choose paper");}  

        }
    function paper(){
        let value=(Math.floor(Math.random()*3));
        let p=2;
        if(value==p){
            alert("Tie");
            console.log("you choose paper and computer choose paper");  
        }
        else if(value==1){
            alert("computer won");
            console.log("you choose paper and computer choose scissor");  
        }
        else{
            alert("you won");
            console.log("you choose paper and computer choose rock");

        }
    }  
       