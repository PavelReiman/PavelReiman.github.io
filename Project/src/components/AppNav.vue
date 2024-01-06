<template>
  <div class="navbar-main container-md">
    <nav class="navbar navbar-expand-md">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="navigation-item">
            <a class="nav-link" href="">ПОДДЕРЖКА DRUPAL</a>
          </li>
          <li class="navigation-item dropdown">
            <a class="nav-link dropdown-toggle" href="">
              АДМИНИСТРИРОВАНИЕ
            </a>
            <div class="dropdown-menu dropdown-menu-1">
              <a class="dropdown-item" href="">МИГРАЦИЯ</a>
              <a class="dropdown-item" href="">БЭКАПЫ</a>
              <a class="dropdown-item" href="">АУДИТ БЕЗОПАСНОСТИ</a>
              <a class="dropdown-item" href="">ОПТИМИЗАЦИЯ СКОРОСТИ</a>
              <a class="dropdown-item" href="">ПЕРЕЕЗД НА HTTPS</a>
            </div>
          </li>
          <li class="navigation-item">
            <a class="nav-link" href="">ПРОДВИЖЕНИЕ</a>
          </li>
          <li class="navigation-item">
            <a class="nav-link" href="">РЕКЛАМА</a>
          </li>
          <li class="navigation-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">О НАС</a>
            <div class="dropdown-menu dropdown-menu-2">
              <a class="dropdown-item" href="">КОМАНДА</a>
              <a class="dropdown-item" href="">DRUPALGIVE</a>
              <a class="dropdown-item" href="">БЛОГ</a>
              <a class="dropdown-item" href="">КУРСЫ DRUPAL</a>
            </div>
          </li>
          <li class="navigation-item">
            <a class="nav-link" href="">ПРОЕКТЫ</a>
          </li>
          <li class="navigation-item">
            <a class="nav-link" href="">КОНТАКТЫ</a>
          </li>
        </ul>
      </div>
      <a class="navbar-brand" href="">
        <img class="nav-icon" src="../assets/img/drupal-coder.svg" alt="navigation"/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
  <div>
    <header>
      <div id="video-block">
        <div id="video-filter"></div>
        <video class="video-background" src="../assets/img/video.mp4" playsinline="" autoplay="autoplay" loop=""
               preload="auto" muted="">
        </video>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 class="bars-title">
              Поддержка<br>сайтов на Drupal
            </h1>
            <div class="sub-title">
              Сопровождение и поддержка сайтов<br>
              на CMS Drupal любых версий и запущенности
              <a href="#rates" class="mt-4 rate-button">ТАРИФЫ</a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row achievement-block">
              <div class="col-6 col-sm-4 achievements-place">
                <div class="achievements">
                  <div class="achievement-title">
                    #1
                  </div>
                  <img class="mx-5" src="../assets/img/cup.png"/>
                  <div class="achievement-content">
                    Drupal-разработчик <br> в России по версии <br> Рейтинга Рунета
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 achievements-place">
                <div class="achievements">
                  <div class="achievement-title">3+</div>
                  <div class="achievement-content">
                    средний опыт <br> специалистов более <br> 3 лет
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 achievements-place">
                <div class="achievements">
                  <div class="achievement-title">14</div>
                  <div class="achievement-content">
                    лет опыта в сфере Drupal
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 achievements-place">
                <div class="achievements">
                  <div class="achievement-title">50+</div>
                  <div class="achievement-content">
                    модулей и тем <br> в формате DrupalGive
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 achievements-place">
                <div class="achievements">
                  <div class="achievement-title">90 000</div>
                  <div class="achievement-content">
                    часов поддержки <br> сайтов на Drupal
                  </div>
                </div>
              </div>
              <div class="col-sm-4 col-6 achievements-place">
                <div class="achievements">
                  <div class="achievement-title">300+</div>
                  <div class="achievement-content">
                    Проектов <br> на поддержке
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name:'AppNav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* nav */

.navbar-main {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  background-color: black;
  z-index: 1000;
}

.navbar {
  padding: 2px 0 6px;
  margin-left: -15px;
  margin-right: -15px;
  flex-wrap: wrap;
}

.collapse {
  border-bottom: solid 1px white;
  overflow-y: auto;
  max-height: calc(100vh - 50px);
}

.navbar-nav {
  flex-wrap: wrap;
}

.navbar li {
  border: none;
  transition: border-color 400ms;
  margin-right: 27px;
}

.navbar li:hover {
  border: none;
}

.navbar li.navigation-item a.nav-link {
  padding: 8px 20px;
  border-bottom: 1px solid #312a2a;
  line-height: 22px;
  font-size: 12px;
  font-style: normal;
  color: white;
}

nav .dropdown-menu {
  display: block;
  position: static;
  background-color: inherit;
  padding: 0;
  font-size: 12px;
  border-radius: 0;
  border: none;
  margin-top: 0;
}

nav .dropdown-item {
  color: white;
  transition: all 400ms;
  padding: 8px 20px 8px 35px;
  font-weight: 500;
  border-bottom: 1px solid #312a2a;
  line-height: 22px;
}

nav .dropdown-item:hover,
nav .dropdown-item:focus {
  color: #f14e3b;
  background-color: inherit;
}

.navbar a {
  text-decoration: none;
}

.navbar-toggler-icon {
  background: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(136,136,136,1.00)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") no-repeat;
}

.navbar-toggler {
  margin-top: 1px;
}

.navbar li.navigation-item a.nav-link:hover,
.navbar li.navigation-item a.nav-link:focus {
  color: #f14e3b;
  background-color: inherit;
}

.nav-icon {
  width: 160px;
  margin-right: 60px;
  margin-left: 15px;
}

.navbar-brand {
  margin-right: 0;
}

@media screen and (min-width: 768px) {
  .navbar-main {
    position: absolute;
    bottom: auto;
    left: 0;
    right: 0;
    top: 30px;
    background-color: unset;
  }

  .nav-logo {
    width: 175px;
    margin-left: auto;
  }

  .navbar {
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: auto;
    margin-right: auto;
  }

  .navbar li.navigation-item a.nav-link {
    padding: 0;
    border-bottom: unset;
    line-height: unset;
  }

  .navbar li {
    border-top: 8px solid transparent;
    border-bottom: 3px solid transparent;
  }

  .navbar li:hover {
    border-top: 8px solid transparent;
    border-bottom: 3px solid #f14e3b;
  }

  .collapse {
    order: 1;
    border-bottom: unset;
    max-height: unset;
    overflow-y: unset;
  }

  nav .dropdown-menu {
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s;
    position: unset;
    background-color: #f14e3b;
    padding: unset;
  }

  nav .dropdown-menu-2 {
    min-width: 120px;
  }

  nav .dropdown-item {
    padding: 3px 20px;
    border-bottom: unset;
    line-height: unset;
  }

  .dropdown-menu-2 .dropdown-item {
    width: 135px;
    padding-right: initial;
  }

  nav .dropdown-item:hover,
  nav .dropdown-item:focus {
    color: white;
    background-color: #d13018;
  }

  nav .navigation-item.dropdown:hover .dropdown-menu {
    max-height: 150px;
  }

  .navbar li.navigation-item a.nav-link:hover,
  .navbar li.navigation-item a.nav-link:focus {
    color: white;
  }
}

@media screen and (min-width: 992px) {
  nav .dropdown-menu-2 {
    min-width: 10rem;
  }

  .dropdown-menu-2 .dropdown-item {
    padding-right: 20px;
    width: 100%;
  }
}

/* header */

header {
  width: 100%;
  position: relative;
  color: white;
  padding: 40px 0 0 0;
}

header .container:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(../assets/img/druplicon.svg) no-repeat center top;
  background-size: contain;
}

#video-block {
  z-index: -10;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#video-filter {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
}

#video-block video {
  min-height: 100%;
  min-width: 100%;
  filter: blur(2px);
}

.sub-title {
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 55px;
  opacity: 70%;
}

.rate-button {
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: white;
  text-decoration: none;
  padding: 22px 20px;
  width: 220px;
  max-width: 100%;
  text-align: center;
  border: 2px solid #f14e3b;
  border-radius: 5px;
  letter-spacing: 0.06em;
  transition: background 300ms;
  margin: 0 auto 55px;
}

.rate-button:hover {
  color: white;
  text-decoration: none;
  background: #f14e3b;
}

.achievements-place {
  margin-bottom: 30px;
}

.achievements-place img {
  position: absolute;
  margin-top: -65px;
}

.achievements-place:first-of-type .achievement-title {
  font-size: 48px;
  margin-top: -22px;
}

.achievements {
  border-left: 3px solid #f14e3b;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
  min-height: 80px;
  height: 100%;
}

.achievement-title {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 5px;
}

.achievement-content {
  font-size: 12px;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.7);
}

.achievements a {
  color: #f14e3b;
}

.achievement-block {
  margin-top: 50px;
}

.navbar-toggler-icon {
  background: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(136,136,136,1.00)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") no-repeat;
}

.navbar-toggler {
  margin-top: 1px;
}

@media screen and (min-width: 768px) {
  header {
    padding-top: 170px;
  }

  header .container:before {
    background-size: inherit;
    background-position: left top;
  }

  h1 {
    font-weight: bold;
    font-size: 52px;
    line-height: 60px;
    text-align: left;
  }

  h2 {
    font-size: 42px;
  }

  .title {
    font-size: 18px;
    text-align: left;
  }

  .rate-button {
    margin-left: 0;
    margin-bottom: 155px;
  }

  .sub-title {
    text-align: left;
    font-size: 18px;
  }

  .achievements-place {
    margin-bottom: 96px;
  }
}
</style>
