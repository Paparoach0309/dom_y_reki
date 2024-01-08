import { IDocumentData, IFooterData } from "@/app/types/orderTypes";

export const opportunitiesBlocks = [
  {
    id: 1,
    subtitle:
      "Своих сотрудников на удобной платформе с понятным и запоминающимся материалом",
    title: "Развивайте",
  },
  {
    id: 2,
    subtitle:
      "Курсы и шаблоны фишинговых рассылок под потребности вашей компании",
    title: "Кастомизируйте",
  },
  {
    id: 3,
    subtitle: "Результаты обучения при помощи имитированных фишинговых атак",
    title: "Проверяйте",
  },
  {
    id: 4,
    subtitle:
      "Результат и знания каждого сотрудника в режиме реального времени",
    title: "Контролируйте",
  },
];

export const advantagesData = [
  {
    id: 1,
    title: "Оперативность",
    subtitle:
      "Быстрый старт работы с платформой (до 2 дней) и получение реального результата.",
    img: "timerH",
    imgHover: "timer",
  },
  {
    id: 2,
    title: "Адаптивность",
    subtitle:
      "Возможность редактировать/создавать курсы и шаблоны фишинговых рассылок под свою компанию",
    img: "directionH",
    imgHover: "direction",
  },
  {
    id: 3,
    title: "Гибкость",
    subtitle:
      "Простота масштабирования без дополнительных затрат на серверное оборудование",
    img: "settingsH",
    imgHover: "settings",
  },
  {
    id: 4,
    title: "Конфиденциальность",
    subtitle:
      "Платформа размещена в облаке имеющем действующий аттестат ОАЦ и сертификат PCI DSS",
    img: "safetyH",
    imgHover: "safety",
  },
  {
    id: 5,
    title: "Удобство",
    subtitle: "Ежемесячная оплата по факту оказания услуги",
    img: "like1H",
    imgHover: "like1",
  },
  {
    id: 6,
    title: "Мобильность",
    subtitle:
      "Возможность пользоваться платформой с мобильных устройств сотрудников",
    img: "mobileH",
    imgHover: "mobile",
  },
];

export const reviewsBox = [
  {
    id: 1,
    icon: "/img/client.png",
    title:
      '"Обучающие курсы помогают нашим сотрудниками узнать о разных способах обмана, а регулярное дополнение материалов позволяет быть в курсе новых методов злоумышленников."',
    person: "Митюшкин Кирилл",
    position: "IT директор",
  },
  {
    id: 1,
    icon: "/img/client.png",
    title:
      '"Важным критерием выбора платформы было удобство в использовании. Нам хотелось, чтобы она была максимально простой в настройке. В результате мы остановились на Security Awareness"',
    person: "Грановский Аркадий",
    position: "Ведущий специалист информационной безопасности",
  },
  {
    id: 1,
    icon: "/img/client.png",
    title:
      '"Платформа Security Awareness Platform зарекомендовала себя как очень удобный, гибкий и надежный инструмент для проверки сотрудников на уязвимость к фишинговым атакам."',
    person: "Качалин Игорь",
    position: "IT директор",
  },
  {
    id: 1,
    icon: "/img/client.png",
    title:
      '"Обучающие курсы помогают нашим сотрудниками узнать о разных способах обмана, а регулярное дополнение материалов позволяет быть в курсе новых методов злоумышленников."',
    person: "Юдин Дмитрий",
    position: "IT директор",
  },
];

export const tariffData = [
  {
    id: 1,
    title: "Phishing Small",
    desc: "от 50 до 500 пользователей",
    price: "7.70",
    type: "руб",
    selected: false,
  },
  {
    id: 2,
    title: "Phishing Medium",
    desc: "от 501 до 1000 пользователей",
    price: "6.30",
    type: "руб",
    selected: false,
  },
  {
    id: 3,
    title: "Phishing Enterprise",
    desc: "от 1001 до 2000 пользователей",
    price: "5.60",
    type: "руб",
    selected: false,
  },
  {
    id: 4,
    title: "Phishing Enterprise +",
    desc: "от 2001 и более пользователей",
    price: "4.20",
    type: "руб",
    selected: true,
  },
  {
    id: 5,
    title: "Phishing Light",
    desc: "до 1000 E-mail",
    price: "5 420",
    type: "руб",
    selected: true,
  },
];

export const awesomeTariffData = [
  {
    id: 1,
    title: "Small",
    desc: "от 50 до 500 пользователей",
    price: "11",
    type: "руб",
    selected: false,
  },
  {
    id: 2,
    title: "Medium",
    desc: "от 501 до 1000 пользователей",
    price: "9",
    type: "руб",
    selected: false,
  },
  {
    id: 3,
    title: "Enterprise",
    desc: "от 1001 до 2000 пользователей",
    price: "8",
    type: "руб",
    selected: false,
  },
  {
    id: 4,
    title: "Enterprise +",
    desc: "от 2001 и более пользователей",
    price: "6",
    type: "руб",
    selected: true,
  },
];

export const phishingTariffData = [
  {
    id: 1,
    title: "Phishing Small",
    desc: "от 50 до 500 пользователей",
    price: "7.70",
    type: "руб",
    selected: false,
  },
  {
    id: 2,
    title: "Phishing Medium",
    desc: "от 501 до 1000 пользователей",
    price: "6.30",
    type: "руб",
    selected: false,
  },
  {
    id: 3,
    title: "Phishing Enterprise",
    desc: "от 1001 до 2000 пользователей",
    price: "5.60",
    type: "руб",
    selected: false,
  },
  {
    id: 4,
    title: "Phishing Enterprise +",
    desc: "от 2001 и более пользователей",
    price: "4.20",
    type: "руб",
    selected: true,
  },
  {
    id: 5,
    title: "Phishing Light",
    desc: "до 1000 E-mail",
    price: "5 420",
    type: "руб",
    selected: true,
  },
];

export const documentData: IDocumentData[] = [
  {
    id: 1,
    title: "Договор на оказание \nуслуги",
    count: "249 KB",
    src: "/assets/pdf/Agreement_Secure.pdf",
  },
  {
    id: 2,
    title: "Политика обработки \nперсональных данных",
    count: "174К",
    src: "/assets/pdf/Privat_policy.pdf",
  },
  {
    id: 3,
    title: "Прейскурант \nна услугу",
    count: "105 KB",
    src: "/assets/pdf/Price_Secure.pdf",
  },
  {
    id: 4,
    title: "Порядок оказания \nуслуги",
    count: "249 KB",
    src: "/assets/pdf/Order_Secure.pdf",
  },
];

export const footerData: IFooterData[] = [
  { id: 1, title: "Главная", url: "https://a1data.by/" },
  { id: 2, title: "Дата-центр", url: "https://a1data.by/data-center/" },
  { id: 3, title: "Услуги", url: "https://a1data.by/services/" },
  { id: 4, title: "Партнеры", url: "https://a1data.by/partnership/partners/" },
  { id: 5, title: "Новости", url: "https://a1data.by/news/" },
  { id: 6, title: "Документация", url: "https://a1data.by/faq/" },
  { id: 7, title: "Контакты", url: "https://a1data.by/contacts/" },
];
