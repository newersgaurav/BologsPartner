// js used in header

function changeHamburger(x) {
    x.classList.toggle("change");
    $('.menu-list-sm').toggleClass("animated-dropdown");
}

// end of js used in header

// js used in page-1

function changeTab(id){
    $('.aktiebocker-border-bottom').css("border-bottom","0px");
    $('.bologsbestallningar-border-bottom').css("border-bottom","0px");
    $('.triangle').addClass("display-none");
    if(id==="Bologsbestallningar"){
        $('#Bologsbestallningar').removeClass("display-none");
        $('.bologsbestallningar-border-bottom').css("border-bottom","5px solid #fb6a3f");
    }
    if(id==="Aktiebocker"){
        $("#Aktiebocker").removeClass("display-none");
        $('.aktiebocker-border-bottom').css("border-bottom","5px solid #fb6a3f");
    }
}

console.log(screen.width);
if(screen.width < 768){
    console.log(screen.width);
    function expandSearchBar(){
        $('btn-div').addClass("display-none");
        $('search-div').css("flex-basis","100%");
    }
}

// end of js used in page-1