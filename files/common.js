   var $els = $('.menu a, .menu header');
var count = $els.length;
var grouplength = Math.ceil(count/3);
var groupNumber = 0;
var i = 1;
var t=0;
$('.menu').css('--count',count+'');
$els.each(function(j){
    if ( i > grouplength ) {
        groupNumber++;
        i=1;
    }
    $(this).attr('data-group',groupNumber);
    i++;
});
$(document).ready(function(){
   $els.each(function(j){
	$('a').css('transition','0s');
	$('header').css('transition','0s');
	$('header').css('opacity',1);
	$('ol').css('opacity',1);
        $(this).css('--delay-in',0+'s');
        $(this).css('--delay-out',0+'s');
        $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 20);
    });
    $('.menu').toggleClass('closed');
setTimeout(function(){	$('a').css('transition','transform var(--duration) var(--easing), color var(--duration) var(--easing)');
	$('header').css('transition','transform var(--duration) var(--easing), color var(--duration) var(--easing)');

},100);
});
$('.menu footer button').on('click',function(e){
    e.preventDefault();
    $els.each(function(j){

if(t%2==0){
$('.menu a, .menu header').css('transition-delay','var(--delay-in)');
}else{$('.menu a, .menu header').css('transition-delay','var(--delay-out)');}


        $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 20);
	t++;
	$(this).css('--delay-in',j*.1+'s');
        $(this).css('--delay-out',(count-j)*.1+'s');
    });
    $('.menu').toggleClass('closed');
    e.stopPropagation();
});