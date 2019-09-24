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
    $('.Aktieagare-border').css("border-bottom","0px");
    $('.Handelser-border').css("border-bottom","0px");
    $('.Rapporter-border').css("border-bottom","0px");
    $('.Administration-border').css("border-bottom","0px");
    $(".Aktietyper-border").css("border-right","4px solid transparent");
    $(".filter-Aktieagare-border").css("border-right","4px solid transparent");
    $('.vertical-triangle').addClass("display-none");
    $('.triangle').addClass("display-none");
    if(id==="Bologsbestallningar"){
        $('#Bologsbestallningar').removeClass("display-none");
        $('.bologsbestallningar-border-bottom').css("border-bottom","5px solid #fb6a3f");
    }
    if(id==="Aktiebocker"){
        $("#Aktiebocker").removeClass("display-none");
        $('.aktiebocker-border-bottom').css("border-bottom","5px solid #fb6a3f");
    }
    if(id==="Aktieagare"){
        $("#Aktieagare").removeClass("display-none");
        $('.Aktieagare-border').css("border-bottom","5px solid #fb6a3f");
        $('.Aktieagare-border').css("border-right","0px");
        $('.Handelser-border').css("border-right","2px solid #e0e0e0");
        $('.Rapporter-border').css("border-right","2px solid #e0e0e0");
        $('.Administration-border').css("border-right","2px solid #e0e0e0");
    }
    if(id==="Handelser"){
        $("#Handelser").removeClass("display-none");
        $('.Handelser-border').css("border-bottom","5px solid #fb6a3f");
        $('.Rapporter-border').css("border-right","2px solid #e0e0e0");
        $('.Administration-border').css("border-right","2px solid #e0e0e0");
        $('.Aktieagare-border').css("border-right","0px");
        $('.Handelser-border').css("border-right","0px");
    }
    if(id==="Rapporter"){
        $("#Rapporter").removeClass("display-none");
        $('.Rapporter-border').css("border-bottom","5px solid #fb6a3f");
        $('.Aktieagare-border').css("border-right","2px solid #e0e0e0");
        $('.Handelser-border').css("border-right","0px");
        $('.Rapporter-border').css("border-right","0px");
        $('.Administration-border').css("border-right","2px solid #e0e0e0");
    }
    if(id==="Administration"){
        $("#Administration").removeClass("display-none");
        $('.Administration-border').css("border-bottom","5px solid #fb6a3f");
        $('.Aktieagare-border').css("border-right","2px solid #e0e0e0");
        $('.Handelser-border').css("border-right","2px solid #e0e0e0");
        $('.Rapporter-border').css("border-right","0px");
        $('.Administration-border').css("border-right","0px");
    }
    if(id==="Aktietyper"){
        $("#Aktietyper").removeClass("display-none");
        $(".Aktietyper-border").css("border-right","4px solid #fb6a3f");
    }
    if(id==="filter-Aktieagare"){
        $("#filter-Aktieagare").removeClass("display-none");
        $(".filter-Aktieagare-border").css("border-right","4px solid #fb6a3f");
    }
}



// end of js used in page-1


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

// $('.mySelectTabs').on('load', function (e) {
//     var $optionSelected = $("option:selected", this);
//     $optionSelected.tab('show')
//   });

//   $('.mySelectTabs').on('change', function (e) {
//     var $optionSelected = $("option:selected", this);
//     $optionSelected.tab('show')
//   });


$('#tab-Administration .dropdown-div').on('click', function(e){
    $('#tab-Administration .dropdown-div .nav-tabs').css("display","block");
});

$('#tab-Handelser .dropdown-div').on('click', function(e){
    $('#tab-Handelser .dropdown-div .nav-tabs').css("display","block");
});

$('#tab-Administration .dropdown-div .nav-item').on('click', function(event){
    console.log($(this));
    event.stopPropagation();
    $('#tab-Administration .dropdown-div .nav-tabs').css("display","none");
    var id = $(this).attr("id");
    console.log(id);
    $('#tab-Administration .tab-pane').removeClass('active');
    var val = $('#tab-Administration .dropdown-div .nav-item a[href="#tab-'+ id+'"]').attr("value");
    console.log(val);
    $('#tab-Administration .dropdown-div .nav-item a').removeClass('active');
    $('#tab-' + id).addClass('active');
    $('#' + id +' a').addClass('active');
    $('#tab-Administration .dropdown-div span strong').html(val);
});

$('#tab-Handelser .dropdown-div .nav-item').on('click', function(event){
    console.log($(this));
    event.stopPropagation();
    $('#tab-Handelser .dropdown-div .nav-tabs').css("display","none");
    var id = $(this).attr("id");
    console.log(id);
    $('#tab-Handelser .tab-pane').removeClass('active');
    var val = $('#tab-Handelser .dropdown-div .nav-item a[href="#tab-'+ id+'"]').attr("value");
    console.log(val);
    $('#tab-Handelser .dropdown-div .nav-item a').removeClass('active');
    $('#tab-' + id).addClass('active');
    $('#' + id +' a').addClass('active');
    $('#tab-Handelser .dropdown-div span strong').html(val);
});

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
    });
});

$('.close').click(function() {
    $('#myFilterModal .modal-content').animate({
        height: '0'
        }, 500, function() {
    });
});

