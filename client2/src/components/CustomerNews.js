import React from "react";

export default function CustomerNews() {
  return (
    <div class="container-fluid bg_image">
      <img src="/assets/images/header.jpg" id="blurredImg" />
      <div class="image-blurred"></div>
      <section class="app_and_students_block">
        <div class="col-md-6  col-6 float-start">
          <div class="title">Тингловчилар учун</div>
          <ul class="lists_group">
            <li>
              <div class="list_img">
                <img src="/img/icon_1.png" />
              </div>
              <div class="list_text">
                <a href="">ЭЪЛОНЛАР</a>
                <span>Марказ фаолиятига оид эълонлар</span>
              </div>
            </li>
            <li>
              <div class="list_img">
                <img src="/img/icon_2.png" />
              </div>
              <div class="list_text">
                <a href="">МАСОФАВИЙ ТАЪЛИМ</a>
                <span>Масофавий таълим усуллари ҳақида</span>
              </div>
            </li>
            <li>
              <div class="list_img">
                <img src="/img/icon_3.png" />
              </div>
              <div class="list_text">
                <a href="">ШАРТНОМА</a>
                <span>Шартнома нусхалари</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6  col-6 float-end">
          <div class="title">Фойдаланувчилар учун</div>
          <ul class="lists_group">
            <li>
              <div class="list_img">
                <img src="/img/icon_4.png" />
              </div>
              <div class="list_text">
                <a href="">ХАЛҚАРО МУНОСАБАТЛАР</a>
                <span>Халқаро муносабатлар</span>
              </div>
            </li>
            <li>
              <div class="list_img">
                <img src="/img/icon_5.png" />
              </div>
              <div class="list_text">
                <a href="">БЎШ ИШ ЎРИНЛАРИ</a>
                <span>Марказда мавжуд иш ўринлари</span>
              </div>
            </li>
            <li>
              <div class="list_img">
                <img src="/img/icon_1.png" />
              </div>
              <div class="list_text">
                <a href="">ҚАЙТА АЛОҚА</a>
                <span>Марказ билан алоқа</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
