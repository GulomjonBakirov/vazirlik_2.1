import React from "react";

export default function SiteMap() {
  return (
    <div class="container-fluid footer_bg">
      <section class="footer_block">
        <div class="col-md-4 col-sm-6 col-xs-6 float-start">
          <form>
            <div class="form-group send_email_box">
              <input
                type="email"
                class="form-control send_email"
                placeholder="Email"
              />
              <button type="button">
                <img src="/img/send.png" />
              </button>
            </div>
          </form>
          <span class="no_name_text">
            Янги хабарлар учун биз билан алоқада қолинг
          </span>
          <ul class="social_network">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/yumom_info/"
                title="Instagram"
              >
                <img src="/uploads/2019/12/instagram.png" alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://t.me/yumom_news"
                title="Telegram"
              >
                <img src="/uploads/2019/12/tg.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://ru-ru.facebook.com/adminFozil"
                title="Facebook"
              >
                <img src="/uploads/2019/12/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC0sX4UxohrK4yG8KoxsTgOQ"
                title="YouTube"
              >
                <img src="/uploads/2019/12/yt.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-6 float-start">
          <span class="contact_title">АЛОҚАЛАР</span>
          <p>
            <span class="address_box">
              Тошкент ш. Мирзо Улуғбек тумани, Катта Дархон 6
            </span>
          </p>
          <p>
            <span class="address_box">
              (Мўлжал: Экскаватор заводи, 2-автобус йўналиши охирги бекати)
            </span>
          </p>
          <p>
            <span class="address_box">Қабул телефони: 71-200-02-35</span>
          </p>
        </div>
        <div class="col-md-5 col-sm-12 float-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47772.4686301268!2d60.588054262927955!3d41.552375837722984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9284eafb523%3A0xffaf4382f65d7b61!2z0KPRgNCz0LXQvdGHLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1637001341937!5m2!1sru!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
