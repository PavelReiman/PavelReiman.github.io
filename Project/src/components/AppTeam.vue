<template>
  <div class="team">
    <div class="container">
      <div class="team-unit">
        <div class="row">
          <h2 class="col-12">
            Команда
          </h2>
          <div class="col-6 col-sm-6 col-md-4 members-unit">
            <div class="members-panel">
              <div class="members-picture">
                <img src="./../assets/img/IMG_2472_0.jpg?itok=Fyg_7Erv" alt="Фото члена команды" width="280" height="280"
                     class="pic-adaptive" />
              </div>
              <div class="members-name">Сергей Синица</div>
              <div class="members-function">Руководитель отдела веб-разработки, канд.техн. наук, заместитель
                директора</div>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 members-unit">
            <div class="members-panel">
              <div class="members-picture">

                <img src="./../assets/img/IMG_2539_0.jpg?itok=UIjLIj5Z" alt="Фото члена команды" width="280" height="280"
                     class="pic-adaptive" />

              </div>
              <div class="members-name">Роман Агабеков</div>
              <div class="members-function">Руководитель отдела DevOPS, директор</div>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 members-unit">
            <div class="members-panel">
              <div class="members-picture">
                <img src="./../assets/img/IMG_2474_1.jpg?itok=wEUr4Wxc" alt="Фото члена команды" width="280" height="280"
                     class="pic-adaptive" />
              </div>
              <div class="members-name">Алексей Синица</div>
              <div class="members-function">Руководитель отдела поддержки сайтов</div>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 members-unit">
            <div class="members-panel">
              <div class="members-picture">
                <img src="./../assets/img/IMG_2522_0.jpg?itok=R9PN9U4d" alt="Фото члена команды" width="280" height="280"
                     class="pic-adaptive" />
              </div>
              <div class="members-name">Дарья Бочкарёва</div>
              <div class="members-function">Руководитель отдела продвижения, контекстной рекламы и контент-поддержки
                сайтов</div>
            </div>
          </div>
          <div class="col-6 col-sm-6 col-md-4 members-unit">
            <div class="members-panel">
              <div class="members-picture">
                <img src="./../assets/img/IMG_9971_16.jpg?itok=rH-9-ZmI" alt="Фото члена команды" width="280" height="280"
                     class="pic-adaptive" />
              </div>
              <div class="members-name">Ирина Торкунова</div>
              <div class="members-function">Менеджер по работе с клиентами</div>
            </div>
          </div>
        </div>
        <div class="all-team"><a href="">ВСЯ КОМАНДА</a></div>
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
/* team */

.team {
  padding: 50px 30px 0;
}

.team h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.members-unit {
  padding: 0 15px;
}

.members-panel {
  margin-bottom: 20px;
  font-size: 12px;
}

.members-picture {
  border-radius: 0;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 15px;
}

.pic-adaptive {
  display: block;
  max-width: 100%;
  height: auto;
}

.members-name {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  color: #050c33;
  line-height: 1.35;
}

.members-function {
  padding: 0;
  color: #505570;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 5px;
  font-size: 12px;
}

.all-team {
  text-align: center;
  margin-top: 45px;
  margin-bottom: 30px;
}

.all-team a {
  padding: 10px 30px;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  color: #050c33;
  border: 1px solid #cccdd5;
  border-radius: 5px;
  text-decoration: none;
  margin-bottom: 20px;
}

@media screen and (min-width: 768px) {
  .team h2 {
    font-size: 42px;
    margin: 130px 0 80px 0;
  }

  .members-unit {
    padding: 0 50px;
  }

  .members-panel {
    text-align: left;
    margin-bottom: 70px;
  }

  .members-picture {
    margin-bottom: 25px;
  }

  .members-function {
    font-size: 16px;
    margin-top: 0px;
  }

  .all-team a {
    padding: 24px 75px;
  }
}
</style>