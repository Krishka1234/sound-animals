function start(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9MIwrQv8Q/model.json",modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML="I can hear - " +results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy - " +(results[0].confidence * 100).toFixed(2)+ "%";
        img1=document.getElementById("animalimg");
      
        if(results[0].label=="Meowing"){
            img1.src="https://th.bing.com/th/id/R.7108a2f673008800f16a7efe41bed2fe?rik=175RaIHD25zzGw&riu=http%3a%2f%2fnamegif.com%2fwp-content%2fuploads%2f2016%2f04%2fmy-cat.gif&ehk=sLU1To0MDBfOYLTu0j20B2NQQYMs0hDn%2fJA6gBWDlEI%3d&risl=&pid=ImgRaw&r=0";
         
        }
        else if(results[0].label=="Woofing"){
            img1.src="https://i.imgur.com/m2zSKKv.gif";
        
        }
   
       else{
            img1.src="https://i.gifer.com/9j6o.gif";
       
        }
    }
}