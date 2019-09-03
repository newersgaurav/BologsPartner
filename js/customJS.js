// js used in header

function changeHamburger(x) {
    x.classList.toggle("change");
    $('.menu-list-sm').toggleClass("animated-dropdown");
}

// end of js used in header

// js used in page-1

function changeTab(id){
    $('.triangle').addClass("display-none");
    if(id==="Bologsbestallningar"){
        $('#Bologsbestallningar').removeClass("display-none");
    }
    if(id==="Aktiebocker"){
        $("#Aktiebocker").removeClass("display-none");
    }
}

// end of js used in page-1