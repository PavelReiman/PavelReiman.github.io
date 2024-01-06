<template>
  <div class="cases" >
    <div class="container">
      <h2>
        Последние кейсы
      </h2>
      <div class="last-cases-table">
        <a class="case-block" href="">
          <div class="case-pic" style="background-image: url(./../assets/img/laptop_case_1.jpg)"></div>
          <h3>
            Настройка кэширования данных. Апгрейд сервера. Ускорение работы сайта в 30 раз!
          </h3>
          <div class="case-post-date">04.05.2020</div>
          <div class="case-text">Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...
          </div>
        </a>
        <a class="case-block fullscreen-case" href="">
          <div class="case-pic" style="background-image: url(./../assets/img/laptop_case_2.jpg)"></div>
          <h3>
            Использование отчетов Ecommerce в Яндекс.Метрике
          </h3>
        </a>
        <a class="case-block fullscreen-case" href="">
          <div class="case-pic" style="background-image: url(./../assets/img/stat_case.jpg)"></div>
          <h3>
            Повышение конверсии страницы с формой заявки с применением AB-тестирования
          </h3>
          <div class="case-post-date">24.01.2020</div>
        </a>
        <a class="case-block fullscreen-case" href="">
          <div class="case-pic" style="background-image: url(./../assets/img/speed_case.jpg)"></div>
          <h3>
            Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%
          </h3>
          <div class="case-post-date">23.09.2019</div>
        </a>
        <a class="case-block" href="">
          <div class="case-pic" style="background-image: url(./../assets/img/monitor_case.png)"></div>
          <h3>
            Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1C: Предприятие, МойСклад, Класс365
          </h3>
          <div class="case-post-date">22.08.2019</div>
          <div class="case-text">Опубликован <span class="case-href"> релиз модуля...</span></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AppTeam',
}
</script>
<style>
/* last cases  */

.last-cases-table {
  display: flex;
  flex-wrap: wrap;
}

.case-block {
  min-height: 240px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  color: #4e5a73;
  position: relative;
  cursor: pointer;
  margin: 0;
}

.case-block:hover {
  text-decoration: none;
  color: #4e5a73;
}

.case-block h3 {
  margin-top: 20px;
}

.case-block h3:hover {
  text-decoration: underline;
}

.case-pic {
  min-height: 175px;
  width: 100%;
  height: 40%;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
}

.case-post-date {
  opacity: 50%;
  line-height: 1.5;
}

.case-text {
  margin-top: 20px;
}

.last-cases h2,
.reviews h2,
.faq h2{
  text-align: center;
}

.case-block h3,
.case-post-date,
.case-text {
  margin-left: 40px;
  margin-right: 40px;
  z-index: 5;
}

.case-href {
  color: #337ab7;
}

.case-href:hover {
  color: #23527c;
  text-decoration: underline;
}

.fullscreen-case {
  position: relative;
  color: #fff;
  padding: 40px;
}

.fullscreen-case::before {
  content: "";
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  background: linear-gradient(360deg, rgba(0, 0, 0, .5) 0, rgba(0, 0, 0, 0) 50%);
  z-index: 5;
  border-radius: 5px;
}

.fullscreen-case h3 {
  color: #fff;
  margin-top: 170px;
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;
}

.fullscreen-case .case-post-date {
  margin-left: 0;
  margin-right: 0;
}

.fullscreen-case:hover {
  color: #fff;
}

.fullscreen-case .case-pic {
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  height: auto;
  width: auto
}


@media screen and (min-width: 768px) {
  .case-block {
    min-height: 460px;
    width: 33.3%;
  }

  .case-block:nth-child(2) {
    min-height: 460px;
    width: 66.6%;
  }

  .case-block h3 {
    font-size: 14px;
    margin-top: 40px;
  }

  .case-block {
    font-size: 12px;
  }

  .case-block h3,
  .case-post-date,
  .case-text {
    margin-left: 15px;
    margin-right: 15px;
  }

  .fullscreen-case h3 {
    width: 320px;
    margin-top: auto;
  }
}

@media screen and (min-width: 1200px) {
  .case-pic {
    height: 50%;
  }
}
</style>