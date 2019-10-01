function changeHamburger(x) {
    x.classList.toggle("change");
    $('.menu-list-sm').toggleClass("animated-dropdown");
}

function changeTabs1(id){
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

function changeTabs2(id){
    $('.Aktieagare-border').removeClass("active-border-bottom");
    $('.Handelser-border').removeClass("active-border-bottom");
    $('.Rapporter-border').removeClass("active-border-bottom");
    $('.Administration-border').removeClass("active-border-bottom");
    $('.triangle').addClass("display-none");
    if(id==="Aktieagare"){
        $("#Aktieagare").removeClass("display-none");
        $('.Aktieagare-border').addClass("active-border-bottom");
        $('.Aktieagare-border').css("border-right","0px");
        $('.Handelser-border').css("border-right","2px solid #e0e0e0");
        $('.Rapporter-border').css("border-right","2px solid #e0e0e0");
        $('.Administration-border').css("border-right","2px solid #e0e0e0");
    }
    if(id==="Handelser"){
        $("#Handelser").removeClass("display-none");
        $('.Handelser-border').addClass("active-border-bottom");
        $('.Rapporter-border').css("border-right","2px solid #e0e0e0");
        $('.Administration-border').css("border-right","2px solid #e0e0e0");
        $('.Aktieagare-border').css("border-right","0px");
        $('.Handelser-border').css("border-right","0px");
    }
    if(id==="Rapporter"){
        $("#Rapporter").removeClass("display-none");
        $('.Rapporter-border').addClass("active-border-bottom");
        $('.Aktieagare-border').css("border-right","2px solid #e0e0e0");
        $('.Handelser-border').css("border-right","0px");
        $('.Rapporter-border').css("border-right","0px");
        $('.Administration-border').css("border-right","2px solid #e0e0e0");
    }
    if(id==="Administration"){
        $("#Administration").removeClass("display-none");
        $('.Administration-border').addClass("active-border-bottom");
        $('.Aktieagare-border').css("border-right","2px solid #e0e0e0");
        $('.Handelser-border').css("border-right","2px solid #e0e0e0");
        $('.Rapporter-border').css("border-right","0px");
        $('.Administration-border').css("border-right","0px");
    }
}

function changeVerticalTabs(id){
    $(".Aktietyper-border").css("border-right","4px solid transparent");
    $(".filter-Aktieagare-border").css("border-right","4px solid transparent");
    $('.vertical-triangle').addClass("display-none");
    if(id==="Aktietyper"){
        $("#Aktietyper").removeClass("display-none");
        $(".Aktietyper-border").css("border-right","4px solid #fb6a3f");
    }
    if(id==="filter-Aktieagare"){
        $("#filter-Aktieagare").removeClass("display-none");
        $(".filter-Aktieagare-border").css("border-right","4px solid #fb6a3f");
    }
}

function showSpanMessage(){
    if($('#radio-btn-2').prop('checked') || $('.radio-btn-2').prop('checked')){
        $('#myEditModal .span-message').css("visibility","visible");
        $('#myButtonModal .span-message').css("visibility","visible");
    }
    else{
        $('#myEditModal .span-message').css("visibility","hidden");
        $('#myButtonModal .span-message').css("visibility","hidden");
    }
}

function toggleDropdown(id){
    $('#'+ id + ' .dropdown-div .nav-tabs').toggleClass("display-none");
    $('#' + id + ' .dropdown-div .dropdown-icon').toggleClass('rotate');
}

function dropdownAction(id, event, ele_id){
    event.stopPropagation();
    $('#' + id + ' .dropdown-div .nav-tabs').addClass("display-none");
    $('#' + id + ' .tab-pane').removeClass('active');
    var val = $('#' + id + ' .dropdown-div .nav-item a[href="#tab-'+ ele_id +'"]').attr("value");
    $('#' + id + ' .dropdown-div .nav-item a').removeClass('active');
    $('#tab-' + ele_id).addClass('active');
    $('#' + ele_id +' a').addClass('active');
    $('#' + id + ' .dropdown-div span strong').html(val);
    $('#' + id + ' .dropdown-div .dropdown-icon').removeClass('rotate');
}

function openFilterDropdown(id){
    $('#'+ id + ' .filter-dropdown').removeClass('display-none');
    $('#'+ id + ' .dropdown-icon').addClass('rotate');
    $('#'+ id + ' .triangle-dropdown').removeClass('display-none');
    $('.popup').fadeIn(500).removeClass("display-none");
}

$('.popup').click(function(){
    $('.popup').fadeOut(500).addClass('display-none');
    $('.filter-dropdown').addClass('display-none');
    $('.dropdown-icon').removeClass('rotate');
    $('.triangle-dropdown').addClass('display-none');
})

$(function(){
    $("#datepicker-from").datepicker();
    $("#datepicker-to").datepicker();
});

$('#filter-btn').click(function() {
    $('#myFilterModal .modal-content').animate({
        height: '100%'
        }, 500, function() {
            $('#myFilterModal .filter-tab-headers-value').css("height","-webkit-fill-available");
    });
});

$('.close').click(function() {
    $('#myFilterModal .modal-content').animate({
        height: '0'
        }, 0, function() {
            $('#myFilterModal .filter-tab-headers-value').css("height","auto");
    });
    
});


