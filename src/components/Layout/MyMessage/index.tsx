import React from 'react';
import styles from "./styles.module.scss";

const MyMessage: React.FC = () => {
  return (
    <section className={styles.myMessage} aria-labelledby="main-heading">
      <h1 id="main-heading" className={styles.myMessage__heading}>
        Привет, марсиане!
      </h1>

      <p id="intro-1" className={styles.myMessage__text}>
        Рад снова встретиться с вами. У вас все еще отличная вакансия и отличный тест.
      </p>
      <p id="intro-2" className={styles.myMessage__text}>
        Очень круто, что вы в первую очередь обращаете внимание на доступность, пользовательский опыт и то, как интерфейсы помогают бизнесу. Всегда считал это главной задачей фронтенда.
      </p>

      <h3 id="about-me" className={styles.myMessage__subheading}>
        Теперь немного о себе:
      </h3>

      <ul id="skills-list" className={styles.myMessage__list} role="list">
        <li className={styles.myMessage__listItem} aria-setsize={6} aria-posinset={1}>
          <span className={styles.myMessage__listMarker} aria-hidden="true">•</span>
          <span>В последние полгода больше пишу на Vue. Сейчас занимаюсь разработкой и поддержкой платформ для русскоязычных стартапов.</span>
        </li>
        <li className={styles.myMessage__listItem} aria-setsize={6} aria-posinset={2}>
          <span className={styles.myMessage__listMarker} aria-hidden="true">•</span>
          <span>Еще больше я люблю верстку. Начиная лет 15 назад с фреймов и таблиц, через flex и grid до tailwind, sass, bem и современных библиотек.</span>
        </li>
        <li className={styles.myMessage__listItem} aria-setsize={6} aria-posinset={3}>
          <span className={styles.myMessage__listMarker} aria-hidden="true">•</span>
          <span>Мой основной стек: Vue/Nuxt/Pinia, React/Next/Redux, TypeScript, HTML, CSS, Sass, BEM, Tailwind, Webpack, Vite, Jest, Cypress, Git, Bash, Linux</span>
        </li>
        <li className={styles.myMessage__listItem} aria-setsize={6} aria-posinset={4}>
          <span className={styles.myMessage__listMarker} aria-hidden="true">•</span>
          <span>У меня за плечами 10 лет управления клиентским сервисом в топовых рекламных агентствах, поэтому я знаю, что такое менеджмент себя и своего времени.</span>
        </li>
        <li className={styles.myMessage__listItem} aria-setsize={6} aria-posinset={5}>
          <span className={styles.myMessage__listMarker} aria-hidden="true">•</span>
          <span>Я всю жизнь работал с клиентами, от Coca Cola до Nestle. Понимаю, как с ними говорить, как узнать, что они хотят на самом деле.</span>
        </li>
        <li className={styles.myMessage__listItem} aria-setsize={6} aria-posinset={6}>
          <span className={styles.myMessage__listMarker} aria-hidden="true">•</span>
          <span>Но я переехал в Португалию после начала войны, оставил свою карьеру в маркетинге и с головой погрузился во фронтенд</span>
        </li>
      </ul>

      <p id="motivation" className={styles.myMessage__text}>
        Я очень хочу стать отличным разработчиком и с каждым днем приближаюсь к этому, у меня все хорошо с софтами, а если я и не дотягиваю по хардам, то в моем мире дотянуть значительно проще, если работать в отличной открытой команде, у которой есть чему поучиться.
      </p>

      <h3 id="therefore" className={styles.myMessage__subheading}>
        Поэтому:
      </h3>

      <ul id="position-list" className={styles.myMessage__list} role="list">
        <li className={styles.myMessage__listItem} aria-setsize={2} aria-posinset={1}>
          <span className={styles.myMessage__listMarker} aria-hidden="true">•</span>
          <span>Я счастлив рассмотреть вариант, когда я иду не на эту позицию, а на вырост.</span>
        </li>
        <li className={styles.myMessage__listItem} aria-setsize={2} aria-posinset={2}>
          <span className={styles.myMessage__listMarker} aria-hidden="true">•</span>
          <span>Меня не надо специально ничему учить, я и сам научусь, видя, как работают профи.</span>
        </li>
      </ul>

      <h3 id="conclusion" className={styles.myMessage__subheading}>
        И вообще:
      </h3>

      <p id="thanks" className={styles.myMessage__text}>
        В любом случае спасибо за уделенное время. Буду страшно благодарен за обратную связь по коду и вообще.
      </p>

      <p id="credentials" className={styles.myMessage__text}>
        Креды для формы: admin@admin.com, Password123. Но там и так все понятно.
      </p>
    </section>
  );
};

export default React.memo(MyMessage);
