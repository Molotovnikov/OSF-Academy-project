import './scss/app.scss';


let year = new Date().getFullYear();

$(".burger-icon").on("click", function () {
    $(".header-nav").slideToggle();
    $(".burger-menu").toggleClass("burger-menu--opened")
});

$('.first-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});

$('.carousel-wrapper-second').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

$(".current-year").text(year);


// ajax call to Products

$(".Loadmore").on("click", function () {
 
    $.ajax({
        url: './data.json',
        dataType: 'json',
        crossDomain: true,
        method: 'GET',
        success: function(data) {
            for (let i=0; i<data.length; i++) {
                let card = `<div class="card">
                    <img src="${data[i].image}">
                    <div class="card-details">
                        <div class="card-name">${data[i].name}</div>
                        <div class="card-price">${data[i].price}</div>
                    </div>
                    <div class="buttons-wrapper">
                            <div class="bottoms-hovers">
                            <a><img src="../images/homepage/Plus (24x24).svg" alt="" class="img_bottom_hover"></a>
                            <a><img src="../images/homepage/Heart (24x24).svg" alt="" class="img_bottom_hover"></a>
                            </div>
                        </div>
                </div>`;
                
                $(".popular-items-wrapper").append(card);
            }
        }
    });

});