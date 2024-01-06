<template>
  <div class="competency">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="text-dark">
            13 лет совершенствуем <br> компетенции в Drupal <br> поддержке!
          </h2>
          <div class="competencies-top-text">
            Разрабатываем и оптимизируем модули, расширяем <br> функциональность сайтов, обновляем дизайн
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-md-3 competency-block">
          <div class="competency-pic">
            <img src="../assets/img/competency-1.svg"/>
          </div>
          <div class="competency-text">
            Добавление <br> информации на сайт,<br> создание новых <br> разделов
          </div>
        </div>
        <div class="col-6 col-md-3 competency-block">
          <div class="competency-pic">
            <img src="../assets/img/competency-2.svg"/>
          </div>
          <div class="competency-text">
            Разработка <br> и оптимизация <br> модулей сайта
          </div>
        </div>
        <div class="col-6 col-md-3 competency-block">
          <div class="competency-pic">
            <img src="../assets/img/competency-3.svg"/>
          </div>
          <div class="competency-text">
            Интеграция с CRM, <br> 1C, платежными <br> системами, любыми <br> веб-сервисами
          </div>
        </div>
        <div class="col-6 col-md-3 competency-block">
          <div class="competency-pic">
            <img src="../assets/img/competency-4.svg"/>
          </div>
          <div class="competency-text">
            Любые доработки <br> функционала <br> и дизайна
          </div>
        </div>
        <div class="col-6 col-md-3 competency-block">
          <div class="competency-pic">
            <img src="../assets/img/competency-5.svg"/>
          </div>
          <div class="competency-text">
            Аудит и мониторинг <br> безопасности Drupal <br> сайтов
          </div>
        </div>
        <div class="col-6 col-md-3 competency-block">
          <div class="competency-pic">
            <img src="../assets/img/competency-6.svg"/>
          </div>
          <div class="competency-text">
            Миграция, импорт <br> контента и апгрейд <br> Drupal
          </div>
        </div>
        <div class="col-6 col-md-3 competency-block">
          <div class="competency-pic">
            <img src="../assets/img/competency-7.svg"/>
          </div>
          <div class="competency-text">
            Оптимизация <br> и ускорение <br> Drupal-сайтов
          </div>
        </div>
        <div class="col-6 col-md-3 competency-block">
          <div class="competency-pic">
            <img src="../assets/img/competency-8.svg"/>
          </div>
          <div class="competency-text">
            Веб-маркетинг, <br> консультации <br> и работы по SEO
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AppComp',
}
</script>
<style>
.competency {
  margin: 50px 0 0 0;
}

.competency h2 {
  margin: 0 0 20px 0;
}

.competency-block .competency-text {
  font-size: 14px;
  width: 200px;
  margin: auto;
}

.competency-text, .competencies-top-text {
  color: #404c65;
  font-weight: 500;
  font-size: 16px;
}

.competencies-top-text {
  margin-bottom: 55px;
}

.competency-pic {
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0 0 15px 50px;
}

@media screen and (min-width: 1081px) {
  .competency-pic {
    margin-left: 0;
  }
}

.competency-pic:before {
  background: url(../assets/img/iconspec.svg) no-repeat center;
  background-size: contain;
  content: "";
  display: block;
  width: 120px;
  height: 70px;
  position: absolute;
  left: -50px;
  bottom: -5px;
}

@media screen and (min-width: 768px) {
  .competency-block .competency-text {
    font-size: 16px;
    width: auto;
    max-width: none;
    margin: 0;
  }

  .competency-pic {
    margin-bottom: 30px;
  }
}
</style>