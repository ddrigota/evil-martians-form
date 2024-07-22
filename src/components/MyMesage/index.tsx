import styles from "./styles.module.scss";

const TEXT_CONTENT = {
  heading: "Привет, марсиане!",
  paragraph1:
    "У вас отличная вакансия и отличный тест, я прямо порадовался, когда писал код.",
  paragraph2:
    "Очень круто, что вы в первую очередь обращаете внимание на доступность, пользовательский опыт и то, как интерфейсы помогают бизнесу. Всегда считал это главной задачей фронтенда.",
  subheading1: "Теперь немного о себе:",
  list1: [
    "Я уже второй год пишу код на React и все еще люблю это дело. Сейчас работаю pro bono над платформой для европейских художников и организаторов выставок.",
    "Еще больше я люблю верстку. Начиная лет 15 назад с фреймов и таблиц, через flex и grid до tailwind, sass, bem и современных библиотек.",
    "Мой основной стек: React, Redux, JavaScript, TypeScript HTML, CSS, Sass, BEM, Tailwind, Webpack, Vite Jest, Cypress Git, Bash, Linux",
    "У меня за плечами 10 лет управления клиентским сервисом в топовых рекламных агентствах, поэтому я знаю, что такое менеджмент себя и своего времени, иначе я просто не дожил бы до 2024.",
    "Я всю жизнь работал с клиентами, от Coca Cola до Nestle. Понимаю, как с ними говорить, как узнать, что они хотят на самом деле.",
    "Но я переехал в Португалию после начала войны, оставил свою карьеру в маркетинге и с головой погрузился во фронт.",
  ],
  paragraph3:
    "Я очень хочу стать отличным разработчиком, у меня все хорошо с софтами, а если я и не дотягиваю по хардам, то в моем мире дотянуть значительно проще, если работать в отличной открытой команде, у которой есть чему поучиться.",
  subheading2: "Поэтому:",
  list2: [
    "Я счастлив рассмотреть вариант, когда я иду не на эту позицию, а на вырост.",
    "Меня не надо специально ничему учить, я и сам научусь, видя, как работают профи.",
  ],
  subheading3: "И вообще:",
  paragraph4:
    "В любом случае спасибо за уделенное время. Буду страшно благодарен за обратную связь по коду и вообще.",
  paragraph5:
    "Креды для формы: admin@admin.com, Password123. Но там и так все понятно.",
};

function MyMessage() {
  return (
    <section className={styles.myMessage}>
      <h1 className={styles.myMessage__heading}>{TEXT_CONTENT.heading}</h1>
      <p className={styles.myMessage__text}>{TEXT_CONTENT.paragraph1}</p>
      <p className={styles.myMessage__text}>{TEXT_CONTENT.paragraph2}</p>
      <h3 className={styles.myMessage__subheading}>
        {TEXT_CONTENT.subheading1}
      </h3>
      <ul className={styles.myMessage__list}>
        {TEXT_CONTENT.list1.map((item, index) => (
          <li
            key={index}
            className={styles.myMessage__listItem}>
            {item}
          </li>
        ))}
      </ul>
      <p className={styles.myMessage__text}>{TEXT_CONTENT.paragraph3}</p>
      <h3 className={styles.myMessage__subheading}>
        {TEXT_CONTENT.subheading2}
      </h3>
      <ul className={styles.myMessage__list}>
        {TEXT_CONTENT.list2.map((item, index) => (
          <li
            key={index}
            className={styles.myMessage__listItem}>
            {item}
          </li>
        ))}
      </ul>
      <h3 className={styles.myMessage__subheading}>
        {TEXT_CONTENT.subheading3}
      </h3>
      <p className={styles.myMessage__text}>{TEXT_CONTENT.paragraph4}</p>
      <p className={styles.myMessage__text}>{TEXT_CONTENT.paragraph5}</p>
    </section>
  );
}

export default MyMessage;
