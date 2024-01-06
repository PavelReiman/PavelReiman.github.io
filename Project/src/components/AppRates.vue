<template>
  <div class="rates">
    <h2 id="rates">Тарифы</h2>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 order-1 rate-column">
          <div class="rate-block">
            <div class="rate-title">Стартовый</div>
            <ul>
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
              <li>Предоплата от 6 000 рублей в месяц</li>
            </ul>
            <button class="btn-contact">СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>
        <div class="col-12 col-md-4 order-3 rate-column">
          <div class="rate-block">
            <div class="rate-title">VIP</div>
            <ul>
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Максимальное время реакции - в день обращения</li>
              <li>Неиспользованные оплаченные часы не переносятся</li>
              <li>Предоплата от 270 000 рублей в месяц</li>
            </ul>
            <button class="btn-contact">СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>
        <div class="col-12 col-md-4 order-2 rate-column main-rate">
          <div class="rate-block">
            <div class="rate-title">Бизнес</div>
            <ul>
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Высокое время реакции - до 2 рабочих дней</li>
              <li>Неиспользованные оплаченные часы не переносятся</li>
              <li>Предоплата от 30 000 рублей в месяц</li>
            </ul>
            <button class="btn-contact">СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>
      </div>
    </div>
    <div class="rate-special-block text-center">
      Вам не подходят наши тарифы? Оставьте заявку и мы <br> предложим вам индивидуальные условия!<br>
      <a class="call-form" href="#">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
    </div>
  </div>
</template>
<script>
export default {
  name:'AppRates',
}
</script>
<style>
.rates {
  background: white url("../assets/img/D-background-opacity.svg") no-repeat right top;
  background-size: cover;
  padding-bottom: 50px;
}

.rates .container {
  margin-bottom: 30px;
}

.rates .container .row {
  align-items: flex-start;
}

.rates h2 {
  font-size: 24px;
  padding-top: 105px;
  text-align: center;
  color: black;
  margin-bottom: 40px
}

.rate-column {
  margin-bottom: 15px;
}

.rate-block {
  border-radius: 5px;
  border: 1px solid white;
  padding: 30px 15px;
  background: white;
  margin: 0 auto;
  transition: all 500ms;
  transform-origin: center;
  width: 420px;
  max-width: 100%;
}

.rate-column:hover .rate-block,
.main-rate .rate-block {
  transform: none;
  z-index: 15;
  box-shadow: 0 4px 60px rgba(150, 150, 150, .3);
}

.rate-column:hover~.main-rate .rate-block {
  transform: none;
  z-index: 0;
  box-shadow: none;
}

.rate-column:hover~.main-rate .btn-contact {
  color: #d82626;
  background: rgba(0, 0, 0, 0);
}

.rate-block:hover .btn-contact,
.main-rate .btn-contact {
  color: white;
  background: #d82626;
}

.rate-title {
  border-bottom: 2px solid white;
  margin-bottom: 50px;
  font-size: 22px;
  font-weight: bold;
  color: #d82626;
  line-height: 1.3;
  padding-bottom: 29px;
}

.rates ul {
  padding-left: 15px;
  list-style-image: url("../assets/img/checkmark.svg");
}

.rates li {
  position: relative;
  margin-bottom: 20px;
  line-height: 1.2;
  font-size: 14px;
  font-weight: 100;
  color: #788ab2;
  padding-left: 15px;
}

.btn-contact {
  display: block;
  text-decoration: none;
  text-align: center;
  margin-top: 0;
  margin-right: 0;
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #d82626;
  border: 1px solid #d82626;
  border-radius: 5px;
  letter-spacing: 0.07em;
  transition: background 300ms;
  width: 100%;
}

.rate-special-block {
  color: #788ab2;
}

.rate-special-block a {
  color: black;
  font-size: 12px;
  text-decoration: underline;
  transition: color 300ms;
}

.rate-special-block a:hover {
  color: #d82626;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .rates {
    padding-bottom: 100px;
    background-size: 55%;
  }

  .rates h2 {
    font-size: 42px;
    padding-top: 160px;
    margin-bottom: 65px
  }

  .rate-block {
    max-width: 500px;
    width: auto;
  }
}

@media screen and (min-width: 992px) {
  .rates li {
    font-size: 16px;
  }

  .rate-block {
    padding: 70px 20px 60px ;
  }

  .rate-column:hover .rate-block {
    transform: scale(1.1);
  }

  .main-rate .rate-block {
    transform: scale(1.1);
  }
}
</style>