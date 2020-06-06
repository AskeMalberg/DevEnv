
//Change content on page
function changeContent(thisButton){
    var buttonText = thisButton.innerHTML;
    var containerHeader = document.getElementById("container").querySelectorAll("h4")[0];
    var containerPara = document.getElementById("container").querySelectorAll("p")[0];

    containerHeader.innerHTML = buttonText;


    if(buttonText === "Site01"){
        containerPara.innerHTML ="SiteOne random placeholder text";
    }else if(buttonText === "Site02"){
        containerPara.innerHTML ="SiteTwotwotwo random placeholder text";
    }else{
        containerPara.innerHTML ="SiteTreeeee random placeholder text";
    }
}