<template>
  <div class="wwu">
    <h2>С нами работают</h2>
    <div class="wwu-title">
      Десятки компаний доверяют нам самое ценное, что у них есть в интернете - свои <br> сайты. Мы делаем всё,
      чтобы
      наше сотрудничество было долгим
    </div>
    <div class="wwu-slider-1" id="wwu-slider-1" style="width: 100%">
      <div class="wwu-slide">
        <div><img src="./../assets/img/ciel.png" alt="Ciel"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/kubsu.png" alt="Kubsu"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/rosatom.png" alt="Росатом"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/serebro.png" alt="Serebro.Ag"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/ciel.png" alt="Ciel"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/kubsu.png" alt="Kubsu"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/rosatom.png" alt="Росатом"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/serebro.png" alt="Serebro.Ag"/></div>
      </div>
    </div>
    <div class="wwu-slider-2" id="wwu-slider-2" style="width: 100%">
      <div class="wwu-slide">
        <div><img src="./../assets/img/nashagazeta_ch.png" alt="Наша газета"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/cableman_ru.png" alt="Кабельщик"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/estee.png" alt="Estee"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/lpcma_rus_v4.jpg" alt="Лаборатория"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/nashagazeta_ch.png" alt="Наша газета"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/cableman_ru.png" alt="Кабельщик"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/estee.png" alt="Estee"/></div>
      </div>
      <div class="wwu-slide">
        <div><img src="./../assets/img/lpcma_rus_v4.jpg" alt="Лаборатория"/></div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
export default {
  mounted() {
    $(document).ready(function(){
      //First slider
      $("#wwu-slider-1").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {slidesToShow: 3}
          },
          {
            breakpoint: 600,
            settings: {slidesToShow: 2}
          }
        ]
      });

      //Second slider
      $("#wwu-slider-2").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {slidesToShow: 3}
          },
          {
            breakpoint:600,
            settings: {slidesToShow: 2}
          }
        ]
      });
    });
  }
}
</script>
<style>
/* work with us */

.wwu h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.wwu-title {
  width: 740px;
  max-width: 100%;
  font-size: 16px;
  padding: 0 15px;
  margin: 0 auto 20px;
  color: #505570;
  font-weight: 500;
  line-height: 1.37;
  text-align: center;
}

.wwu-slide {
  padding: 5px;
}

.wwu-slide div {
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
}

.wwu-slide img {
  margin: auto;
  max-width: 100%;
  height: auto;
  width: 100%;
}

#wwu-slider-2 .wwu-slide {
  transform: translateX(50%);
}

@media screen and (min-width: 768px) {
  .wwu h2 {
    font-size: 42px;
    margin-bottom: 10px;
  }

  .wwu-title {
    margin-bottom: 40px;
  }
}
</style>