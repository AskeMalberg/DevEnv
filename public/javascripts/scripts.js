
//Return to homepage
function returnHome(){
    var containerHeader = document.getElementById("container").querySelectorAll("h4")[0];
    var containerPara = document.getElementById("container").querySelectorAll("p")[0];

    containerHeader.innerHTML = "Placeholder";
    containerPara.innerHTML ="Lorem ipsudm dolor sit amet consectetur adipisicing elit. Laboriosam quos, quis laudantium natus fugiat eveniet blanditiis nemo amet possimus. Eum, libero. Mollitia, explicabo rem dolorum eligendi consectetur voluptate voluptatem consequuntur ipsam quidem dolorem eius itaque aut alias dolores voluptates nisi sed magnam sequi maxime fuga reiciendis enim impedit doloribus? Animi.";
}


//Change content on page
function changeContent(thisButton){
    var buttonText = thisButton.innerHTML;
    var containerHeader = document.getElementById("container").querySelectorAll("h4")[0];
    var containerPara = document.getElementById("container").querySelectorAll("p")[0];

    containerHeader.innerHTML = buttonText;


    if(buttonText === "Site01"){
        containerPara.innerHTML ="SiteOne random placeholder text";
    }else if(buttonText === "Site02"){
        containerPara.innerHTML ="SiteTwo random placeholder text";
    }else{
        containerPara.innerHTML ="SiteThree random placeholder text";
    }
}