<template>
  <div class="container faq">
    <h2>FAQ</h2>
    <div class="faq-num">
      <div>
        <h3>
          <span class="faq-item">1.</span>Кто непосредственно занимается поддержкой?
        </h3>
        <p>Сайты поддерживают штатные сотрудники ООО &#171; Инитлаб &#187;, г.Краснодар, прошедшие специальное
          обучение и имеющие опыт работы с Друпал от 4 до 15 лет:
          8 web-разработчиков, 2 специалиста по SEO, 4 системных администратора.
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">2.</span>Как организована работа поддержки?
        </h3>
        <p>Работы поддержки организована в виде предоставления технической помощи,
          исправления ошибок, обновления контента и модулей, а также
          обеспечения безопасности сайта
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">3.</span>Что происходит, когда отработаны все предоплаченные часы за месяц?
        </h3>
        <p>Если отработаны все предоплаченные часы за месяц, дополнительные часы могут быть оплачены дополнительно
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">4.</span>Что происходит, когда не отработаны все предоплаченные часы за
          месяц?
        </h3>
        <p>Если не отработаны все предоплаченные часы за месяц, то они переносятся на следующий месяц
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">5.</span>Как происходит оценка и согласование планируемого времени на
          выполнение
          заявок?
        </h3>
        <p>Оценка и согласование планируемого времени на выполнение заявок обычно происходит через общение с менеджером проекта
          или ответственным за поддержку специалистом
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">6.</span>Сколько программистов выделяется за проект?
        </h3>
        <p>Количество программистов, выделенных на проект, также
          может различаться в зависимости от сложности и объема работ
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">7.</span>Как подать заявку на внесение изменений на сайте?
        </h3>
        <p>Заявку на внесение изменений на сайте обычно можно подать через специальную форму на сайте или через
          электронную почту
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">8.</span>Как подать заявку на добавление пользователя, изменение настроек
          веб-сервиса и других задач по администрированию?
        </h3>
        <p>Заявку на добавление пользователя, изменение настроек веб-сервера и другие задачи по администрированию можно подать через форму на сайте
          или по электронной почте
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">9.</span>В течении какого времени начинается работа по заявке?
        </h3>
        <p>Время начала работы по заявке обычно зависит от ее приоритета и загруженности команды по поддержке
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">10.</span>В какое время работает поддержка?
        </h3>
        <p>Время работы поддержки также может различаться, но обычно это стандартный рабочий день с возможностью круглосуточной
          поддержки в случае чрезвычайных ситуаций
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">11.</span>Подходят ли услуги поддержки, если необходимо произвести обновление
          ядра
          Drupal или модулей?
        </h3>
        <p>Услуги поддержки обычно включают в себя и обновление ядра Drupal и модулей
        </p>
      </div>
      <div>
        <h3>
          <span class="faq-item">12.</span>Можно ли пообщаться со специалистом голосом или в мессенджере?
        </h3>
        <p>Да, можно пообщаться со специалистом голосом или в мессенджере. Обычно для этого используются телефонные звонки, а также
          мессенджеры, такие как WhatsApp, Telegram, Skype и другие. Это позволяет заказчикам быстро и удобно общаться с командой
          поддержки для обсуждения вопросов и уточнения деталей
        </p>
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
      $(".faq-num div:first").addClass("active");
      $(".faq-num p:not(:first)").hide();
      $(".faq-num h3").click(function () {
        if (!$(this).parent().hasClass("active")) {
          $(".faq-num p:visible").slideUp("fast");
          $(this).next("p").slideToggle("fast");
          $(".faq-num div").removeClass("active");
          $(this).parent().toggleClass("active");
        }
        else {
          $(".faq-num p:visible").slideUp("fast");
          $(".faq-num div").removeClass("active");
        }
      });
    });
  }
}
</script>
<style>
/* FAQ */

.faq h2 {
  padding-top: 68px;
  padding-bottom: 20px;
}

.faq-num h3 {
  position: relative;
  cursor: pointer;
}

.faq-num p {
  font-weight: 500;
  font-size: 16px;
  color: #4e5a73;
  line-height: 1.37;
  margin-top: 10px;
}

.faq-num div {
  border: 3px solid transparent;
  padding: 10px 12px 10px 30px;
  transition: border-color .25s;
}

.faq-num div.active {
  border-color: #f14e3b;
}

.faq-item {
  position: absolute;
  left: -35px;
  width: 25px;
  text-align: right;
  font-weight: bold;
  font-size: 12px;
  color: #828a9b;
  margin-top: 4px;
}

.active h3 {
  color: #f14e3b;
}

@media screen and (min-width: 768px) {
  .faq h2 {
    padding-top: 132px;
    padding-bottom: 80px;
  }
}
</style>