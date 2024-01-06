<template>
  <footer class="footer-block">
    <div class="container">
      <div id="footer-phrase">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="connect-wrapper">
              <div class="connect-title">Оставить заявку на <br> поддержку сайта </div>
              <div class="connect-description">Срочно нужна поддержка сайта? Ваша команда не умпевает справиться
                самостоятельно или предыдущий подрядчик не справился
                с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
              </div>
              <div class="connect-contacts">
                <ul>
                  <li class="contacts-phone"><a href="">8 800 222-26-73</a></li>
                  <li class="contacts-email"><a href="">info@drupal-coder.ru</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-block">
              <form id="footer-form" action="https://formcarry.com/s/adu1AdDRs76" method="POST">
                <input name="name" id="footer-name" type="text" class="footer-block-input" placeholder="Ваше имя"
                       required />
                <input name="number" id="footer-number" type="text" class="footer-block-input" placeholder="Телефон"
                       required />
                <input name="email" id="footer-email" type="email" class="footer-block-input" placeholder="E-mail"
                       required />
                <textarea name="message" id="footer-message" placeholder="Ваш комментарий"
                          class="footer-block-input"></textarea>
                <label for="footer-policy" class="chb-block">
                  <input name="footer-policy" type="checkbox" class="chb" id="footer-policy" />
                  <span class="chb-place"></span>
                  <span>
                        <span class="footer-checkbox-text">Отправляя заявку, я даю согласие на
                          <a href="">обработку своих персональных данных</a>.
                        </span>
                      </span>
                </label>

                <input id="sendButton" type="submit" class="footer-contact-button" value="СВЯЖИТЕСЬ С НАМИ"
                       disabled />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="socialnetwork-block-wrapper">
        <div class="socialnetwork-block">
          <div class="footer-links-wrapper">
            <ul class="footer-links">
              <li class="footer-pic facebook"><a href=""><img src="./../assets/img/facebook_icon.png" alt="Facebook" /></a>
              </li>
              <li class="footer-pic vkontakte"><a href=""><img src="./../assets/img/vk_icon.png" alt="VK" /></a></li>
              <li class="footer-pic telegram"><a href=""><img src="./../assets/img/telegram_icon.png" alt="Telegram" /></a>
              </li>
              <li class="footer-pic youtube"><a href=""><img src="./../assets/img/youtube_icon.png" alt="Youtube" /></a></li>
            </ul>
          </div>
          <p>Проект ООО &#171; Инитлаб &#187;, г.Краснодар, Россия.
            <br>
            Drupal является зарегестрированной торговой маркой Dries Buytaert.

          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import $ from 'jquery';
export default {
  mounted() {
    function saveLocalStorage() {
      localStorage.setItem("footer-name", $("#footer-name").val());
      localStorage.setItem("footer-number", $("#footer-number").val());
      localStorage.setItem("footer-email", $("#footer-email").val());
      localStorage.setItem("footer-message", $("#footer-message").val());
      localStorage.setItem("footer-policy", $("#footer-policy").prop("checked"));
    }

    function loadLocalStorage() {
      if (localStorage.getItem("name") !== null)
        $("#footer-name").val(localStorage.getItem("footer-name"));
      if (localStorage.getItem("number") !== null)
        $("#footer-number").val(localStorage.getItem("footer-number"));
      if (localStorage.getItem("email") !== null)
        $("#footer-email").val(localStorage.getItem("footer-email"));
      if (localStorage.getItem("message") !== null)
        $("#footer-message").val(localStorage.getItem("footer-message"));
      if (localStorage.getItem("policy") !== null) {
        $("#footer-policy").prop("checked", localStorage.getItem("footer-policy") === "true");
        if ($("#footer-policy").prop("checked"))
          $("#sendButton").removeAttr("disabled");
      }
    }
    function clear() {
      localStorage.clear()
      $("#footer-name").val("");
      $("#footer-number").val("");
      $("#footer-email").val("");
      $("#footer-message").val("");
      $("#footer-policy").val(false);
    }
    $(document).ready(function(){



        loadLocalStorage();
        $("#footer-form").submit(function (e) {
          e.preventDefault();
          let data = $(this).serialize();

          $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://formcarry.com/s/DuS_CasfnL",
            data: data,
            success: function (response) {
              if (response.status == "success") {
                alert("form send");
                clear();
              } else {
                alert("error: " + response.message);
              }
            }
          });
        });

        $("#footer-policy").change(function () {
          if ((!this.checked))
            $("#sendButton").attr("disabled", "");
          else
            $("#sendButton").removeAttr("disabled");
        })

        $("#footer-form").change(saveLocalStorage);

    })
  }
}
</script>
<style>
/* footer */

footer {
  padding: 117px 0 54px;
  color: #fff;

  background: linear-gradient(254.72deg,rgba(255,255,255,.276) -114.85%,rgba(255,255,255,0) 69.04%),url(./../assets/img/D-flying.svg) no-repeat top center,url(./../assets/img/D-footer.svg) no-repeat bottom right,#040613;
}

.footer-block {
  border-top: 1px solid #e5e5e5;
  padding-top: 35px;
  padding-bottom: 36px;
  margin-top: 52px;
  background-size: cover,165px,140px;
}

.connect-wrapper {
  max-width: 100%;
  width: 480px;
  margin: 0 auto 30px;
  text-align: justify;
}

.connect-title {
  margin-bottom: 20px;
  margin-top: initial;
  font-weight: bold;
  font-size: 22px;
  line-height: 1.215;
  text-align: center;
  min-width: 345px;
}

.connect-description {
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.55;
  color: rgba(256,256,256,.7);
}

.connect-contacts ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.connect-contacts ul li {
  margin-bottom: 12px;
}

.connect-contacts ul li a {
  position: relative;
  padding-left: 40px;
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  line-height: 1.1;
}

.contacts-phone a:before {
  position: absolute;
  content: "";
  display: block;
  width: 18px;
  height: 18px;
  left: 3px;
  bottom: 4px;
  background: url(./../assets/img/phone.svg) no-repeat center;
  background-size: contain;
  opacity: 80%;
}

.connect-contacts .contacts-email a {
  text-decoration: underline;
}

.connect-contacts .contacts-phone a {
  font-size: 24px;
}

.contacts-email a:before {
  position: absolute;
  content: "";
  display: block;
  width: 24px;
  height: 18px;
  left: 0;
  bottom: 0;
  background: url(./../assets/img/mail.svg) no-repeat center;
  background-size: contain;
  opacity: 80%;
}


#socialnetwork-block-wrapper {
  position: static;
  padding: 0;
  margin-top: 71px;
}

#socialnetwork-block-wrapper:before {
  position: absolute;
  content: "";
  display: block;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(256,256,256,.3);
}

.socialnetwork-block {
  padding-top: 56px;
}

.socialnetwork-block-wrapper p {
  font-weight: 400;
  margin-bottom: 0;
}

.footer-links-wrapper {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-links {
  margin-bottom: 15px;
}

.footer-pic {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border: 2px solid #f14d34;
  border-radius: 5px;
  color: #fff;
  width: 30px;
  height: 30px;
  background: #f14d34;
  text-align: center;
}

.facebook img {
  position: absolute;
  max-height: 17px;
  margin: 4px -4px;
}

.vkontakte img {
  position: absolute;
  margin: 7px -11px;
  max-height: 12px;
}

.telegram img {
  position: absolute;
  margin: 1px -13px;
  max-height: 25px;
}

.youtube img {
  position: absolute;
  margin: 2px -11px;
  max-height: 22px;
}

@media screen and (min-width: 601px) {
  .connect-wrapper {
    text-align: center;
  }

  .connect-title {
    font-size: 24px;
    text-align: unset;
  }
}

@media screen and (min-width: 768px) {
  .footer-block {
    margin-top: 45px;
    background-size: cover, 235px, 230px;
  }

  .connect-wrapper {
    text-align: unset;
    margin-right: 100px;
  }

  .connect-title {
    margin-top: initial;
    font-size: 32px;
  }

  .connect-contacts ul li a {
    font-size: 18px;
  }

  .connect-contacts .contacts-phone a {
    font-size: 32px;
  }
}

@media (min-width: 992px){
  .footer-block {
    background-size: auto;
  }

  .connect-title {
    font-size: 42px;
    min-width: auto;
  }

  .connect-description {
    margin-bottom: 140px;
  }
}

@media screen and (min-width: 1200px) {
  .footer-block .container {
    padding-left: 0;
  }
}

/* interactive form */

#captured-overlay {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 100;
}

#moving-overlay {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  bottom: 49px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

}


label.chb-block input[type='checkbox'] {
  display: none;
}

label.chb-block {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 3px;
  margin-bottom: 10px;
}

.chb-place {
  content: "";
  min-width: 25px;
  position: relative;
  background: transparent;
  display: inline-block;
  margin-right: .5em;
  min-height: 25px;
  border: 2px solid rgba(256,256,256,.5);
  border-radius: 5px;
}

.chb-place:after {
  left: 35%;
  top: 5%;
  width: 30%;
  height: 70%;
  border: solid rgba(256, 256, 256, 0.0);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0.0);
  display: block;
  position: absolute;
  opacity: 0;
  transition: 250ms cubic-bezier(.4, .0, .23, 2);
  content: "";
  cursor: pointer;
}

span.chb-place:hover::after {
  border: solid rgba(256, 256, 256, 0.5);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(1.0);
  opacity: 1;
}

label.chb-block input[type='checkbox']:checked~span:after {
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(1.0);
  opacity: 1;
}

label.chb-block div {
  font-size: 12px;
  color: #fff;
  padding-left: 6px;
  max-width: 480px;
  font-weight: 400;
}

.chb-block a {
  color: #f14d34;
}

label.chb-block div:after {
  -webkit-background-size: 7px 7px;
  background-size: 7px 7px;
  width: 7px;
  vertical-align: text-top;
  margin-left: 2px;
}

label.chb-block div:after {

  -webkit-background-size: 10px 7px;
  background-size: 7px 7px;
  content: "";
  display: inline-block;
  line-height: 1;
  height: 7px;
  width: 7px;
}

@media screen and (min-width: 768px) {
  #captured-overlay {
    z-index: 1000;
  }

  #moving-overlay {
    bottom: 0;
  }
}

/* form footer with info */

.form-block {
  width: 480px;
  max-width: 100%;
  margin-left: auto;
}

#footer-form input {
  margin-bottom: 7px;
}

.footer-block-input::placeholder, .form-item textarea::placeholder {
  color: #fff;
  font-size: 14px;
}

.footer-form-label {
  display:none;
}

.footer-block-input {
  width: 480px;
  max-width: 100%;
  margin-bottom: 7px;
  background: transparent;
  border: 1px solid rgba(256,256,256,.3);
  border-radius: 5px;
  line-height: 1.2;
  font-weight: 500;
  font-size: 14px;
  padding: 18px 24px;
  color: #fff;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

#footer-form textarea {
  height: 134px;
}

.footer-contact-button {
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-decoration: none;
  padding: 20px 10px;
  width: 100%;
  text-align: center;
  border: 1px solid #f14d34;
  border-radius: 5px;
  letter-spacing: 0.06em;
  color: #fff;
  background: #f14d34;
  margin: 0 0;
  margin-top: 7px;
}

.footer-checkbox-text {
  font-size: 12px;
}

.footer-checkbox-text a {
  color: #f14e34;
}

.footer-block-input:focus {
  border-color: #f14d34;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #f14d34;
}

.footer-chb-block {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 3px;
  margin-bottom: 10px;
}

.footer-chb-place {
  content: "";
  min-width: 25px;
  min-height: 25px;
  position: relative;
  background: transparent;
  display: inline-block;
  margin-right: .5em;
  border: 2px solid rgba(256,256,256,.5);
  border-radius: 5px;
}

.footer-chb-place::after {
  left: 35%;
  top: 5%;
  width: 30%;
  height: 70%;
  border: solid rgba(256,256,256,0);
  border-width: 0 2px 2px 0;
  display: block;
  position: absolute;
  opacity: 0;
  transition: 250ms;
  content: "";
  cursor: pointer;
}

.footer-chb-block input {
  display: none;
}

label.footer-chb-block input[type='checkbox']:checked~span {
  opacity: 1;
  background: url(./../assets/img/checked-icon.svg) no-repeat center;
  background-size: 25px 25px;
  border-color: #f14d34;
  outline: 0;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #f44336;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

#sendButton:disabled {
  background-color: transparent;
}

.footer-checkbox-text::after {
  background-image: url(./../assets/img/required.svg);
  content: "";
  display: inline-block;
  line-height: 1;
  height: 7px;
  width: 7px;
  vertical-align: text-top;
  background-size: 7px 7px ;
}
</style>