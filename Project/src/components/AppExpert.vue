<template>
  <div class="expert">
    <div class="row container">
      <div class="col-lg-6"></div>
      <div class="achievement-block col-lg-6 ">
        <div class="row mt-5">
          <div class="col-12">
            <h2>
              Экспертиза в Drupal,<br> опыт 14 лет!
            </h2>
          </div>
          <div class="col-md-6 col-12 achievement-box">
            <div class="achievements">
              <div class="achievement-content">
                Только системный подход - контроль версий, резервирование и тестирование!
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12 achievement-box">
            <div class="achievements">
              <div class="achievement-content">
                Только Drupal сайты, не берем на поддержку сайты других CMS!
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12 achievement-box">
            <div class="achievements">
              <div class="achievement-content">
                Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем
                <a href="">свои модули Drupal</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-12 achievement-box">
            <div class="achievements">
              <div class="achievement-content">
                Поддерживаем сайты на Drupal 5, 6, 7 and 8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="laptop-picture">
      <img class="" src="../assets/img/laptop.png"/>
    </div>
  </div>
</template>
<script>
export default {
  name:'AppExpert',
}
</script>
<style>
.expert {
  position: relative;
  background: linear-gradient(261.2deg, rgba(255, 255, 255, 0.19) -114.85%, rgba(255, 255, 255, 0) 69.04%), #090a13;
  color: white;
  margin-top: -200px;
  padding-top: 180px;
  z-index: 1;
}

.expert::before {
  display: block;
  position: absolute;
  content: "";
  background: url(../assets/img/drupal-logo-2.svg) no-repeat right bottom;
  background-size: contain;
}

.expert h2 {
  color: white;
  margin-bottom: 20px;
}
.laptop-picture {
  position: relative;
  width: 85%;
  max-width: 650px;
  left: 0;
  bottom: 0;
  z-index: 2;
}

.laptop-picture img {
  width: 100%;
  margin-bottom: -15%;
  margin-top: 15%;
}

.expert .achievement-box {
  margin-bottom: 30px;
}

.expert .achievement-content {
  color: white;
  line-height: 1.1;
  font-size: 16px;
  max-width: 260px;
}

@media screen and (min-width: 768px) {
  .expert {
    padding-top: 230px;
  }

  .expert h2 {
    margin: 22px 0 65px 0;
  }

  .laptop-picture {
    width: 70%;
  }
}

@media screen and (min-width: 992px) {
  .laptop-picture {
    position: absolute;
    width: 50%;
  }
}

@media screen and (min-width: 1081px) {
  .expert {
    padding-top: 325px;
  }
}

@media screen and (min-width: 1200px) {
  .expert .achievement-block {
    margin-bottom: 125px;
  }
}

</style>