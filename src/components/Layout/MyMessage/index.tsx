import React from 'react';
import styles from "./styles.module.scss";

const MyMessage: React.FC = () => {
  return (
    <section className={styles.myMessage} aria-labelledby="main-heading">
      <h2 className={styles.myMessage__heading}>
        Привет, марсиане!
      </h2>

      <p className={styles.myMessage__text}>
        Рад снова встретиться с вами. У вас все еще отличная вакансия и отличный тест.
      </p>
      <p className={styles.myMessage__text}>
        Очень круто, что вы в первую очередь обращаете внимание на доступность, пользовательский опыт и то, как интерфейсы помогают бизнесу. Всегда считал это главной задачей фронтенда.
      </p>

      <h3 className={styles.myMessage__subheading}>
        Теперь немного о себе:
      </h3>

      <ul className={styles.myMessage__list} role="list">
        <li className={styles.myMessage__listItem}>
         В последние полгода больше пишу на Vue. Сейчас занимаюсь разработкой и поддержкой платформ для русскоязычных стартапов. И мне это нравится.
        </li>
        <li className={styles.myMessage__listItem}>
          Еще больше я люблю верстку. Начиная лет 15 назад с фреймов и таблиц, через flex и grid до tailwind, sass, bem и современных библиотек.
        </li>
        <li className={styles.myMessage__listItem}>
          Мой основной стек: Vue/Nuxt/Pinia, React/Next/Redux, TypeScript, HTML, CSS, Sass, BEM, Tailwind
        </li>
        <li className={styles.myMessage__listItem}>
          У меня за плечами 10 лет управления клиентским сервисом в топовых рекламных агентствах, поэтому я знаю, что такое менеджмент себя и своего времени. Я всю жизнь работал с клиентами, от Coca Cola до Nestle. Понимаю, как с ними говорить, как узнать, что они хотят на самом деле.
        </li>
        <li className={styles.myMessage__listItem}>
          Но я переехал в Португалию после начала войны, оставил свою карьеру в маркетинге и с головой погрузился во фронтенд
        </li>
      </ul>

      <p className={styles.myMessage__text}>
        Я очень хочу стать отличным разработчиком и с каждым днем приближаюсь к этому, у меня все хорошо с софтами, а если я и не дотягиваю по хардам, то в моем мире дотянуть значительно проще, если работать в отличной открытой команде, у которой есть чему поучиться.
      </p>

      <p className={styles.myMessage__text}>
        Я свободно говорю на русском и английском и не очень свободно на португальском, но я работаю над этим.
      </p>

      <h3 className={styles.myMessage__subheading}>
        И вообще:
      </h3>

      <p className={styles.myMessage__text}>
        Cпасибо за уделенное время. Буду страшно благодарен за обратную связь.
      </p>

      <h3 className={styles.myMessage__subheading}>
        Креды для формы: admin@admin.com, Password123. Но там и так все понятно.
      </h3>
    </section>
  );
};

export default React.memo(MyMessage);
