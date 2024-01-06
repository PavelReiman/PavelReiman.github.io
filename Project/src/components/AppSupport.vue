<template>
  <div class="support">
    <h2 class="text-center text-dark">
      Поддержка<br>от Drupal-coder
    </h2>
    <div class="container">
      <div class="row mx-0">
        <div class="col-12 col-md-6 col-lg-3 support-item">
          <div class="support-block">
            <div class="support-counter">01.</div>
            <div class="support-title">Постановка задачи по Email</div>
            <div class="text">
              Удобная и привычная модель постановки задач, при которой задачи фокусируются и никогда не
              теряются.
            </div>
            <div class="icon-support">
              <img src="../assets/img/support1.svg"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 support-item">
          <div class="support-block">
            <div class="support-counter">02.</div>
            <div class="support-title">Система Helpdesk – отчетность, прозрачность</div>
            <div class="text">
              Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через
              браузер.
            </div>
            <div class="icon-support">
              <img src="../assets/img/support2.svg"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 support-item">
          <div class="support-block">
            <div class="support-counter">03.</div>
            <div class="support-title">Расширенная техническая поддержка</div>
            <div class="text">
              Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.
            </div>
            <div class="icon-support">
              <img src="../assets/img/support3.svg"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 support-item">
          <div class="support-block">
            <div class="support-counter">04.</div>
            <div class="support-title">Персональный менеджер проекта</div>
            <div class="text">
              Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов
              ответить на любые
              вопросы.
            </div>
            <div class="icon-support">
              <img src="../assets/img/support4.svg"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 support-item">
          <div class="support-block">
            <div class="support-counter">05.</div>
            <div class="support-title">Удобные способы оплаты</div>
            <div class="text">
              Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
            </div>
            <div class="icon-support">
              <img src="../assets/img/support5.svg"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 support-item">
          <div class="support-block">
            <div class="support-counter">06.</div>
            <div class="support-title">Работаем с SLA и NDA</div>
            <div class="text">
              Работа в рамках соглашений о конфиденциальности и об уровне качества работ.
            </div>
            <div class="icon-support">
              <img src="../assets/img/support6.svg"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 support-item">
          <div class="support-block">
            <div class="support-counter">07.</div>
            <div class="support-title">Штатные специалисты</div>
            <div class="text">
              Надежные штатные специалисты, никаких фрилансеров.
            </div>
            <div class="icon-support">
              <img src="../assets/img/support7.svg"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 support-item">
          <div class="support-block">
            <div class="support-counter">08.</div>
            <div class="support-title">Удобные каналы связи</div>
            <div class="text">
              Консультации по телефону, скайпу, в месенджерах .
            </div>
            <div class="icon-support">
              <img src="../assets/img/support8.svg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AppSupport',
}
</script>
<style>
.support h2 {
  margin-bottom: 20px;
  margin-top: 22px;
}

.support-block {
  background: white;
  border-radius: 5px;
  box-shadow: 15px 15px 30px rgba(6, 14, 45, .075);
  height: 100%;
  position: relative;
  padding: 25px 25px 45px 0;
  margin: 0 -12px 10px -12px;
  min-height: 220px;
  z-index: 4;
}

.support-block .text {
  position: relative;
  z-index: 5;
}

.support-item {
  margin-bottom: 5px;
}

.support-counter {
  font-weight: bold;
  font-size: 12px;
  color: #788ab2;
  margin-bottom: 20px;
}

.support-title {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 18px;
  color: black;
  line-height: 1.2;
}

.icon-support {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}

@media screen and (min-width: 768px) {
  .support h2 {
    margin-bottom: 55px;
  }

  .support-block {
    min-height: 292px;
  }
}

</style>