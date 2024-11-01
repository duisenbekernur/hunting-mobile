import {
  bayterekIcon,
  botsadIcon,
  expoIcon,
  mangilikelIcon,
  museumIcon,
  naberejnayaIcon,
  qazaqeliIcon,
  sakenIcon,
  triatlonIcon,
} from "./mapIcons.js";

export const basicPoints = [
  {
    id: 1,
    title: "Национальный музей РК",
    coords: [51.11823, 71.46938],
    icon: museumIcon,
    rating: 5,
    grades: 354,
    subtitle: "Музей",
    imgs: [
      "https://www.matritca.kz/uploads/posts/2022-07/1657948385_jxbmwo0quvkvqlqngqbd8jagyz6zmznlu7q8ar6q.jpg",
    ],
    color: "red",
    workTimes: {
      startTime: "10:00",
      stopTime: "23:00",
    },
    categories: ["Искусство", "Высокая культура", "Культурные мероприятия"],
    description:
      "Қазақстан Республикасының Ұлттық музейі — Астана қаласында Тәуелсіздік алаңында орналасқан 2014 жылы 2 шілдеде ашылған мұражай. «Мәдени мұра» мемлекеттік бағдарламасы шеңберінде табылған көптеген құнды дүниелер Қазақстан Республикасы Ұлттық музейінің баға жетпес қорын құрайды.",
  },
  {
    id: 2,
    title: "Байтерек",
    coords: [51.12828, 71.43052],
    icon: bayterekIcon,
    subtitle: "Монументы",
    imgs: ["https://www.advantour.com/img/kazakhstan/astana/baiterek.jpg"],
    color: "green",
    rating: 5,
    grades: 156,
    workTimes: {
      startTime: "10:00",
      stopTime: "22:00",
    },
    categories: ["Активный отдых", "Самостоятельно", "Природа"],
    description:
      "Бәйтерек – Астана қаласындағы сәулет құрылыс кешені, сәулет өнерінің бірегей туындысы. Елорданың ең көрнекті ғимараттарының бірі.",
  },
  {
    id: 3,
    title: "Нұр Әлем",
    coords: [51.08935, 71.416],
    icon: expoIcon,
    subtitle: "Музей",
    rating: 4,
    grades: 2754,
    imgs: [
      "https://www.wernersobek.com/wp-content/uploads/resized/2021/05/EXPO-2017-Astana-1920x0-c-default.jpg",
    ],
    color: "blue",
    workTimes: {
      startTime: "10:00",
      stopTime: "21:00",
    },
    categories: ["Высокая культура", "Культурные мероприятия", "Искусство", "Технологии"],
    description:
      '"Нұр Әлем" - Астана ЭКСПО-2017 Көрмесінің архитектуралық символына айналған Көрме кешенінің орталық нысаны. Бұл диаметрі 80 метр, биіктігі 100 метр құрайтын әлемдегі ең үлкен сфералық ғимарат. Келушілер Қазақстанның тарихы, мәдениеті, салт-дәстүрі, көрікті жерлері, сонымен қатар елдің жетістіктерімен таныса алатындай, ғимараттың 1 қабатында Қазақстанның павильоны орналасқан.',
  },
  {
    id: 4,
    title: "Музей Сакен Сейфуллина",
    coords: [51.171494, 71.42349],
    icon: sakenIcon,
    rating: 4,
    grades: 68,
    subtitle: "Музей",
    imgs: [
      "https://www.astanagid.kz/thumbs/750_500_5_100/gosudarstvennyj_muzej_imeni_s_sejfullina_foto1.jpg",
    ],
    color: "yellow",
    workTimes: {
      startTime: "10:00",
      stopTime: "18:00",
    },
    categories: ["Искусство", "Высокая культура", "Культурные мероприятия"],
    description:
      "Сейфуллин мұражайы, 1988 жылы 21 ақпанда Целиноград қаласында облыстық өлкетану музейінің бір бөлімі ретінде ашылған. Мұражай Есілдің оң жағалауында, қазіргі Астана қаласының көне қапталында С.Сейфуллин мен М.Әуезов көшелерінің қиылысында, ағаштан салынған ескі үйде орын тепкен.",
  },
  {
    id: 5,
    title: "Мәңгілік Ел",
    coords: [51.104301, 71.430113],
    icon: mangilikelIcon,
    rating: 5,
    grades: 354,
    subtitle: "Монументы",
    imgs: [
      "https://wildticketasia.com/uploads/posts/2023-01/1675010829_mangilik-el-triumphal-arch-3.jpg",
    ],
    color: "purple",
    workTimes: {
      startTime: "00:00",
      stopTime: "23:59",
    },
    categories: ["Искусство", "Высокая культура", "Культурные мероприятия"],
    description:
      "Мәңгiлiк ел — Астана қаласында орналасқан сәулеттік құрылыс. Ескерткішті тұрғызу идеясының авторы – Қазақстанның тұңғыш президенті Нұрсұлтан Назарбаев. Нысан 2011 жылы ел тәуелсіздігінің 20 жылдығына орай ашылды. Құрылымның биіктігі – 20 метр, ол тәуелсіздікке 20 жыл толғандығын білідіреді.",
  },
  {
    id: 6,
    title: "Қазақ Елі монументі",
    coords: [51.121049, 71.467149],
    icon: qazaqeliIcon,
    rating: 5,
    grades: 122,
    subtitle: "Монументы",
    imgs: ["https://upload.wikimedia.org/wikipedia/ru/6/6e/Kazakh_Eli_monument.JPG"],
    color: "purple",
    workTimes: {
      startTime: "00:00",
      stopTime: "23:59",
    },
    categories: ["Искусство", "Высокая культура", "Культурные мероприятия"],
    description:
      "«Қазақ елі» монументі – халқымыздың көне тарихы, мәдениеті мен жетістіктерін әспеттейтін ауқымды кешен, Қазақстанның тәуелсіздік рәміздерінің бірі. 2009 жылы ашылған бұл мәдени-архитектуралық монумент Нұр-Сұлтан қаласында орналасқан.",
  },
  {
    id: 7,
    title: "Ботаникалық саябақ",
    coords: [51.106433, 71.416117],
    icon: botsadIcon,
    rating: 4,
    grades: 236,
    subtitle: "Парки",
    imgs: [
      "https://cdn.qazaqstan.tv/old/articles/1/article_14561.jpg?w=1200&h=630&format=jpg&resize=aspectfill&g=center",
    ],
    color: "green",
    workTimes: {
      startTime: "00:00",
      stopTime: "23:59",
    },
    categories: ["Искусство", "Высокая культура", "Культурные мероприятия"],
    description:
      "Астананың ботаникалық бағы 2018 жылы құрылды. Ботаникалық бақ ерекше қорғалатын табиғи аймақ болып саналады. Оның жалпы ауданы 89,177 гектар, соның ішінде: саябақ аймағы — 42,9 га болса, ғылыми ауданы — 46,3 га. Негізгі міндеті — сирек кездесетін және құрып кету қаупі өсімдіктерді сақтау.",
  },
  {
    id: 8,
    title: "Триатлон",
    coords: [51.136109, 71.449784],
    icon: triatlonIcon,
    subtitle: "Парки",
    imgs: ["https://m.ticketon.kz/files/media/probezhka.jpg"],
    color: "green",
    rating: 4,
    grades: 199,
    workTimes: {
      startTime: "00:00",
      stopTime: "23:59",
    },
    categories: ["Искусство", "Высокая культура", "Культурные мероприятия"],
    description:
      "Триатлон парк Астана (каз. Астана триатлон паркі) — городской парк в Астане который используется как зона отдыха для бега, катания на лыжах и езды на велосипеде. Парк открыли в июле 2016 года в качестве подарка к 18-летию столицы от крупнейшего строительного холдинга Казахстана Bi Group. Парк расположен рядом с парком имени Бауыржана Момышулы и Президентским парком на правом берегу реки Ишим.",
  },
  {
    id: 9,
    title: "Қазақ Елі монументі",
    coords: [51.161238, 71.419948],
    icon: naberejnayaIcon,
    subtitle: "Парки",
    rating: 5,
    grades: 155,
    imgs: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/de/62/b0/quay-astana.jpg?w=1200&h=1200&s=1",
    ],
    color: "purple",
    workTimes: {
      startTime: "00:00",
      stopTime: "23:59",
    },
    categories: ["Активный отдых", "Самостоятельно", "Природа"],
    description:
      "Набережная реки Ишим (Есиль) – лучшее место в городе Астана для проведения отдыха и досуга. Набережная пользуется большой популярностью, здесь можно погулять вдоль реки Ишим как на левом берегу, так и на правом. Набережная реки Ишим в городе Астана является визитной карточкой города.",
  },
];
