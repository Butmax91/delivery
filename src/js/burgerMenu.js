
let arrow = document.getElementById('arrow');
$('#burger').on('click',()=>{
    $('#burger').css('display', 'none');
    $('.overlay').animate({'right':'0px'},500);
});
$('#cross').on('click',()=>{
   $('.overlay').animate({'right':'-300px'},500);
    $('#burger').css('display', 'block');
});


// Add smooth scrolling on all links inside the navbar
$(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash ='';
        });
    }
    $('.overlay').animate({'right':'-300px'},500);
    $('#burger').css('display', 'block');
});
$(arrow).on('click',()=>{
    $('html, body').animate({
        scrollTop: 0
    }, 800 );
});

window.onscroll = (e)=>{
    if(window.pageYOffset>600){
        arrow.style.display = 'block';
    }else{
        arrow.style.display = 'none'
    }
}