(function() {
  var Sohana;

  document.createElement('SECTION');

  document.createElement('HEADER');

  document.createElement('ASIDE');

  document.createElement('NAV');

  document.createElement('MENU');

  document.createElement('VIDEO');

  document.createElement('AUDIO');

  document.createElement('PICTURE');

  document.createElement('TIME');

  document.createElement('PROGRESS');

  document.createElement('ARTICLE');

  document.createElement('FOOTER');

  Sohana = angular.module('Sohana', ['ngSanitize']);

  Sohana.config([
    '$locationProvider', function($locationProvider) {
      return $locationProvider.html5Mode(true);
    }
  ]);

  Sohana.controller('WelcomeCtrl', [
    '$scope', '$location', '$window', function($scope, $location, $window) {
      $scope.nav = {
        en: ['Home', 'About', 'Massage', 'Yoga', 'Meditation', 'Gallery', 'Testimonials', 'Contact'],
        ru: ['Главная', 'О себе', 'Массаж', 'Йога', 'Медитация', 'Галлерея', 'Отзывы', 'Контакт']
      };
      $scope.copyright = {
        en: "© Copyright – 2014 – Sohana",
        ru: "© Все права защищены – 2014 – Sohana"
      };
      $scope.promo = [
        {
          title: {
            en: 'Meditation',
            ru: 'Медитация'
          },
          img: "public/images/promo/meditation.jpg",
          description: {
            en: "<p>Kundalini, Overtone (chakra) singing, Nadabrahma, No Dimension, The reflex of orgasm, Sufi chakra breathing, Sufi Dancing.</p>",
            ru: "<p>Kundalini, Overtone (chakra) singing, Nadabrahma, No Dimension, The reflex of orgasm, Sufi chakra breathing, Sufi Dancing.</p>"
          }
        }, {
          title: {
            en: 'Massage',
            ru: 'Массаж'
          },
          img: "public/images/promo/massage.jpg",
          description: {
            en: "<p>Deep tissue physical and energy work throughout your entire body.</p>",
            ru: "<p>Deep tissue physical and energy work throughout your entire body.</p>"
          }
        }, {
          title: {
            en: 'Yoga',
            ru: 'Йога'
          },
          img: "public/images/promo/yoga.jpg",
          description: {
            en: "<p>Iyengar Yoga and Ashtanga Vinyasa Yoga. Book private or group sessions.</p>",
            ru: "<p>Iyengar Yoga and Ashtanga Vinyasa Yoga. Book private or group sessions.</p>"
          }
        }
      ];
      $scope.more = {
        en: 'Learn More»',
        ru: 'Подробнее»'
      };
      $scope.setLang = function(lang) {
        return $scope.lang = lang;
      };
      $scope.isLang = function(lang) {
        return $scope.lang === lang;
      };
      $scope.setNav = function(item) {
        return $scope.navigation = item;
      };
      $scope.isNav = function(item) {
        return $scope.navigation === item;
      };
      $scope.setLightboxImage = function(image) {
        $scope.lightboxImage = '';
        return $scope.lightboxImage = image;
      };
      $scope.getLightboxImage = function() {
        return $scope.lightboxImage;
      };
      $scope.sendEmail = function(form) {
        var action, body, subject;
        subject = $scope.isLang('en') ? 'Contact' : 'Контакт';
        body = ($scope.isLang('en') ? 'From' : 'От') + ": " + escape(form.name) + "\n\n" + ($scope.isLang('en') ? 'Question' : 'Вопрос') + ": " + escape(form.question);
        action = 'mailto:info@sohana.ru?subject=' + subject + '&body=' + encodeURIComponent(body);
        return $window.location = action;
      };
      $scope.setLang('en');
      return $scope.setNav($location.$$hash || $scope.nav.en[0]);
    }
  ]);

  Sohana.controller('HomeCtrl', [
    '$scope', function($scope) {
      return $scope.data = {
        en: {
          title: "Anna Sohana – <b>Yoga, Meditation and Massage</b> in Bali!",
          subTitle: "<p>Here you can find various types of Professional Massage and all information about Yoga and Energy practices.</p>",
          text: "<p>Finally your long-awaited vacation comes after a full on time working! Your body needs recovery, relaxation and pleasant emotions. And where, if not on the paradise island of Bali, pamper yourself with massages and practice a variety of oriental arts?</p> <p>Your health and peace is not only a physically healthy body. By filling yourself with energy and attaining a calm mind you can help eliminate from your life almost any illness, negative emotions, fatigue, and vanity.</p> <p>Getting rid of the acquired physical problems with the body, as well as filling it with vital energy and calming your restless mind can be done with the help of <b>Massage</b> (Deep body work), <b>Yoga</b> and Energy practices (<b>Meditation</b>).</p> <p>Any of these practices will lead to a peace of mind, as a consequence of the natural replenishment of emotional strength, energy recovery and rejuvenation of the body.</p> <p>Your goal: turn away from the hustle of everyday life, relax and recharge your body with health and energy.</p> <p>All massage techniques carried out by Anna Grigoryeva are certified oriental techniques for working with the body. Anna has been trained by masters in Thailand, India, Tibet, China, USA and Russia.</p> <p>Yoga and energy practices (meditation) are also under the direction of Anna.</p> <p><b>Yoga, Meditation and Massage in Bali</b> – it is possible to obtain a high-quality service in an atmosphere of Balinese beauty and comfort.</p> <p><b>Contact</b>: Anna +62–81353391982, or <a href='mailto:info@sohana.ru'>Mail me Here</a>.</p> <p><b>Location</b>: all massage sessions and lessons are held at your place of residence.</p>"
        },
        ru: {
          title: "Добро пожаловать в мир <b>Йоги, Медитации и Массажа</b> на Бали!",
          subTitle: "<p>Здесь, вы можете ознакомиться с различными видами профессионального Массажа, а так же узнать все о Йоге и Энергетических практиках.</p>",
          text: "<p>Наконец-то наступил Ваш долгожданный отпуск после тяжелых и упорных трудовых дней. И ваш организм требует восстановления, отдыха и приятных эмоций. И где, как не на райском балийском острове побаловать себя различными массажами и попрактиковать восточные техники.</p> <p>Ваше здоровье и умиротворение заключается не только в физически здоровом теле. Наполненность энергией и спокойный ум помогут исключить из вашей жизни любые заболевания, отрицательные эмоции, усталость и суету.</p> <p>Избавиться от приобретенных физических проблем с телом, а также наполнить тело жизненной энергией и успокоить свой суетливый ум можно с помощью <b>Массажа</b> (Deep body work), <b>Йоги</b> и Энергетических практик (<b>Медитации</b>).</p> <p>Любое из этих направлений приведет к спокойствию ума, как следствие естественное восполнение эмоциональных сил, энергетический подъем и омоложение тела.</p> <p>Ваша цель: отрешиться от суеты и повседневности, расслабиться, зарядить тело здоровьем и энергией.</p> <p>Все массажные техники осуществляются Сертифицированным специалистом восточных техник по работе с телом Анной Григорьевой, прошедшей обучение у мастеров Тайланда, Индии, Тибета, Китая, США и России.</p> <p>Уроки йоги и энергетические практики (медитации) проходят также под руководством Анны.</p> <p>Более подробная информация в разделе: <b>«О себе»</b>.</p> <p><b>Йога, Медитация и Массаж на Бали</b> – это получение максимально качественных услуг в атмосфере балийской красоты и уюта.</p> <p><b>Контактное лицо</b>: Анна +62–81353391982. Или напишите мне <a href='mailto:info@sohana.ru'>письмо тут</a>.</p> <p><b>Адрес</b>: все сессии массажа и уроки проходят по Вашему месту проживания.</p>"
        }
      };
    }
  ]);

  Sohana.controller('AboutCtrl', [
    '$scope', function($scope) {
      return $scope.data = {
        images: ["public/images/certificates/Chi-Nei-Tsang-massage-certificate.jpg", "public/images/certificates/Thai-massage-certificate.jpg", "public/images/certificates/Tao-practice-certificate.jpg", "public/images/certificates/prof-massage.jpg", "public/images/certificates/med-massage.jpeg"],
        en: {
          title: "<b>About Anna Sohana</b>",
          subTitle: "<p>Hello! My name is Anna. I am a certified Deep body worker (<b>massage</b>) and I own practices such as <b>Ashtanga Vinyasa Yoga</b>, <b>Iyengar Yoga</b> and <b>Osho Meditation</b>. I hold two Bachelor degrees from the School of Economics (HSE) and the Moscow State University of Economics, Statistics and Informatics (MESI) in “Finance and Credit”. I worked for such companies as OJSC “Capital Insurance” and the ”Hephaestus” insurance company. My work did not bring me much joy, and I began the search of myself in other areas. <b>Yoga</b> became the gateway to a new realm, as a good friend and a practice, which changed my life.</p>",
          text: "<p><b>Yoga</b> has become an outlet for me, a friend and a powerful practice that changed my life. My journey with yoga began in 2006. I started practicing <b>Ashtanga Vinyasa Yoga</b> with a certified teacher of Sri Patabhi Joyce in Moscow. The practice brought into my life peace, discipline and confidence. After these internal changes I had no doubt – yoga is my calling. I decided to immerse themselves in the world of this practice and went to India. There I was trained by a certified teacher of Sri Patabhi Joyce – Lino Miele (Italy), and came across the style of Iyengar Yoga from other certified masters. I studied with the following BKS Certified Iyengar teachers: Sharat Arora (Himalayas), Gabriella Dzhubilyaro (Italy), Tatiana Tolochkova (Auroville, India). After the dynamic <b>Ashtanga</b> the <b>Yoga Iyengar Yoga</b> style seemed very slow and boring, but soon understanding of this area came to me. Iyengar Yoga is rapidly transformed my body and my world.</p> <p>Along with yoga came my first introduction to <b>massage</b>, which I studied in India not knowing that I will manifest the ability to work with the body and energy. Learning massage a desire to know one more was born, and then – one more, and so on. So my hobby grew into serious work with myself and others. Now I am a certified Deep Body Worker (massage). My education took place with various masters in Thailand, India, Tibet, China, USA and Russia.</p> <p><b>Osho Meditation</b> – is another technique I began practicing in 2005. This <b>meditation</b> helped to change my life, shaped my personality, has helped in solving many of my problems and developed in me a sense of peace, happiness and love. An unusual man <b>Swami Dashi</b> – a student and the teacher Osho sannyasin – showed me a vast world of energy practices to understand the concepts of unconditional love and totality. Later I took <b>Sannyas</b> (the teachings of Osho loyalty) and received the name of <b>Sanyasin Deva Sohana</b>, which means “divine beauty.” Since the beginning of 2010 I began to conduct meditations, rejoicing with those who are willing and ready to change their life and know the true feelings of love and compassion. My path is not easy, but it leads me to the knowledge of life, and my calling gives me strength in this. I wish you love and love to live your life with ease.</p> <p><b>Anna (Deva Sohana)</b></p>"
        },
        ru: {
          title: "<b>Про Анну Сохану</b>",
          subTitle: "<p>Здравствуйте! Меня зовут Анна. Я являюсь сертифицированным специалистом Deep body work (<b>Массаж</b>), а также владею такими практиками как <b>Аштанга Виньяса Йога</b>, <b>Айенгар Йога</b> и <b>Медитации Ошо</b>. В свое время я училась в Высшей Школе Экономики (ГУ ВШЭ), и затем в Московском Государственном Университете Экономики, Статистики и Информатики (МЭСИ) по специальности «Финансы и кредит». После этого работала в таких компаниях, как ОАО «КапиталЪ Страхование» и страховая компания ОАО «Гефест». Работа моя не приносила мне радости и я стала искать себя в других областях. <b>Йога</b> стала для меня отдушиной, другом и мощной практикой, которая изменила всю мою жизнь.</p>",
          text: "<p>Мой путь в <b>йоге</b> начался с 2006 года. Я начала практиковать <b>Аштангу Виньясу Йогу</b> с Сертифицированным Шри Патабхи Джойсом преподвателем в Москве. Практика привнесла в мою жизнь спокойствие, дисциплину и уверенность в себе. После таких внутренних изменений у меня не было сомнений – <b>йога</b> это мое призвание. Затем, я решила полностью погрузиться в мир практики и уехала в Индию. Там прошла обучение у Сертифицированного Шри Патабхи Джойсом преподавателя – Лино Миэле (Италия), после чего познакомилась со стилем <b>Айенгар Йога</b> у других сертифицированных мастеров. Обучалась у Сертифицированных Б.К.С. Айенгаром преподавателей:  Шарат Арора (Гималаи), Габриэлла Джубиляро (Италия), Татьяна Толочкова (Ауровиль, Индия). После динамичной <b>Аштанги Йоги</b> стиль <b>Айенгар Йога</b> казался очень медленным и скучным, но вскоре ко мне пришло понимание данного направления. <b>Айенгар Йога</b> стремительно трансформировала как мое тело, так и мое мировоззрение.</p> <p>Параллельно с <b>йогой</b> произошло знакомство с моим первым <b>массажем</b>, который я изучила в Индии, даже не подозревая, что у меня проявятся способности к работе с телом и энергией. Узнавая один <b>массаж</b>, рождалось желание познать еще один, а затем – еще один. Так мое хобби переросло в серьезную работу.  В настоящее время являюсь сертифицированным специалистом Deep body work (<b>Массаж</b>). Обучение проходило у мастеров Тайланда, Индии, Тибета, Китая, США и России.</p> <p><b>Медитация Ошо</b> – еще одна техника, которую я практикую с 2005 года. Эти <b>медитации</b> помогли изменить мою жизнь, сформировали мою личность, помогли в решении многих моих проблем и развили во мне чувства умиротворения, счастья и любви. Необычный человек Свами Даши – ученик и саньясин самого учителя <b>Ошо</b>, – открыл мне огромный мир энергетических практик для понимания, что такое безусловная любовь и понятие тотальности. В последствии я приняла Саньясу (верность учению <b>Ошо</b>) и получила саньясинское имя Deva Sohana, что означает «божественная красота». С 2010 года начала проводить <b>медитации</b>, радуясь за тех, кто хочет и готов поменять свою жизнь и познать истинные чувства любви и сострадания. Мой путь непрост, но он ведет меня к познанию жизни, и мое призвание дает мне силы в этом. И я хочу пожелать вам любить любовь и проживать свою жизнь с легкостью.</p> <p><b>Анна (Deva Sohana)</b></p>"
        }
      };
    }
  ]);

  Sohana.controller('MassageCtrl', [
    '$scope', function($scope) {
      return $scope.data = {
        images: ["public/images/massages/Massage1.jpg", "public/images/massages/Massage2.jpg", "public/images/massages/Massage3.jpg"],
        en: {
          title: "<b>Massage in Bali</b>",
          subTitle: "<p>The island of Bali is famous for the exotic <b>balinese massage</b>. A lot has changed with the growing popularity of this destination and the influx of tourists, which has reflected on the quality of massages given.</p> <p>The Island of Gods offers plenty of massage salons and SPAs. Most massage therapies are affordable and seem exotic, but in fact they have been simplified to ‘merciful patting’ with the use of aromatic oils. The result is a number of unsatisfied and disappointed massage clients.</p>",
          text: "<p>I am certified master of traditional oriental techniques (<b>Deep Bodywork</b>).</p> <p>I studied with masters of massage in Thailand, India, Tibet, China, USA and Russia.</p> <p>I advise you to get the real experience of Deep Bodywork using various techniques through my personal touch.</p> <p>My attitude is not to <u>massage</u> as a job, but to be creative and filled with love and attention. I love to see happy and fully powered clients after their massage!</p> <p>I’ll be glad to share with you my knowledge and bring new experiences of massage into your life.</p> <ul> <li> <p><b>Thai Massage</b> – Removal of muscle spasms, headaches, spine flexibility improvement, joints and ligament mobility, internal organs blood supply enhancement, toxins cleansing, immune system strengthening. Result – complete body rejuvenation.</p> </li> <li> <p><b>Creole technique with bamboo sticks</b> – Indicated for mental and physical fatigue. It can be relaxing or invigorating.</p> </li> <li> <p><b>Osho Rebalancing</b> – Helps to improve posture, relieves the body of muscle pain, suitable for addressing issues such as: low back pain, scoliosis, herniated disc, stretching muscles and ligaments, improves mobility of joints, and enhances  the work of blood and lymph systems. The body returns to its natural grace and beauty.</p> </li> <li> <p><b>Tibetan Pulsing</b> – Exemption from pain, suffering and psychological problems. Through deep relaxation comes a feeling of bliss and joy. It’s a consciousness-activating leap from the mind into the heart. This is the most powerful work for human body transformation.</p> </li> <li> <p><b>Ayurvedic stretching</b> – Correction of posture and lifting power blocks in the heart. Opening of the chest, scapula and shoulders.</p> </li> <li> <p><b>Chi Nei Tsang</b> – A Chinese massage designed to work with internal organs. It’s useful for getting rid of intestinal obstruction, headaches, menstrual disorders, disorders of the kidneys, liver, lungs, heart and other primary organs.</p> </li> <li> <p><b>Shiatsu</b> – Perfect for those who want to improve their vitality. It’s a finger pressure massage releasing negative emotions by influencing acupuncture channels.</p> </li> </ul> <p>– The duration of one session of massage – 1.5 hours;</p> <p>– To achieve the desired results we recommend 6 – 10 sessions, depending on your problem and health;</p> <p>– Development of personalized programs.</p> <p><b>Contact</b>: Anna +62–81353391982, or <a href='mailto:info@sohana.ru'>Mail me Here</a>.</p> <p><b>Location</b>: all massage sessions and lessons are held at your place of residence.</p>"
        },
        ru: {
          title: "<b>Массаж на Бали</b>",
          subTitle: "<p>Остров Бали славится экзотическими балийскими массажами, которые действительно были когда-то таковыми. Но многое изменилось с растущей популярностью острова и ростом количества туристов, что сильно отразилось на качестве массажа.</p> <p>На райском острове много массажных салонов и SPA. Все массажи недорогие и кажутся экзотическими, но по факту оказывается обычным поглаживающим массажем с применением ароматических масел. В результате очень много разочарованных и неудовлетворенных качеством массажа людей.</p>",
          text: "<p>Я являюсь сертифицированным специалистом восточных техник по <b>работе с телом</b>. Обучалась у мастеров Тайланда, Индии, Тибета, Китая, США и России.</p> <p>Я предлагаю Вам ощутить на своем теле настоящую работу с телом с применением различных техник и индивидуальным подходом.</p> <p>Мое отношение к <u>массажу</u> не как к работе, а как к творчеству, наполненному вниманием и любовью. Всегда приятно видеть после массажа счастливых и наполненных силами людей.</p> <p>Я буду рада поделиться с вами своими знаниями и внести новый опыт от массажа в вашу жизнь.</p> <ul> <li> <p><b>Тайский массаж (йога-массаж)</b> – Cнятие мышечных спазмов, головных болей, улучшение гибкости позвоночника, подвижности суставов и связок, улучшение кровоснабжения внутренних органов, очищение организма от токсинов, укрепление иммунной системы. И, как результат, омоложение организма.</p> </li> <li> <p><b>Креольский массаж бамбуковыми палочками</b> – Показан при умственном и физическом переутомлении. Может быть расслабляющим или тонизирующим.</p> </li> <li> <p><b>Ошо-Ребалансинг</b> – Помогает улучшить осанку,освобождает тело от мышечных зажимов, решает такие проблемы как: остеохондроз, сколеоз, грыжа межпозвонкового диска, растяжение мышц и связок , улучшает подвижность суставов, кровоток, лимфоток, телу возвращается грация и красота.</p> </li> <li> <p><b>Тибетские пульсации</b> – Освобождение от боли, страдания и психологических проблем. Благодаря глубокому расслаблению рождается чувство блаженства и радости. Это прыжок в сознание – от ума – в сердце. Это наиболее сильная работа по трансформации человеческого тела.</p> </li> <li> <p><b>Аюрведический стретчинг</b> – Исправление осанки и снятие энергетического блока в области сердца. Раскрытие грудного отдела, лопаток и плечевого пояса.</p> </li> <li> <p><b>Цинейцзан</b> – Китайский массаж, направленный на работу с внутренними органами. Полезен для избавления от закупорки кишечника, головных болей, менструальных нарушений, нарушения работы почек, печени, легких, сердца и т.д.</p> </li> <li> <p><b>Шиацу</b> – Прекрасно подходит для тех, кто хочет повысить свой жизненный тонус. Точечный энергетический массаж. Высвобождение негативных эмоций, благодаря воздействию на акупунктурные точки.</p> </li> </ul> <p>– Длительность одной сессии массажа – 1,5 часа;</p> <p>– Для достижения желаемого результата рекомендуется от 6 до 10 сессий в зависимости от проблемы и состояния здоровья;</p> <p>– Разработка индивидуальной программы;</p> <p>– Хорошее соотношение цены и качества.</p> <p><b>Контактное лицо</b>: Анна +62–81353391982. Или напишите мне <a href='mailto:info@sohana.ru'>письмо тут</a>.</p> <p><b>Адрес</b>: все сессии массажа и уроки проходят по Вашему месту проживания.</p>"
        }
      };
    }
  ]);

  Sohana.controller('YogaCtrl', [
    '$scope', function($scope) {
      return $scope.data = {
        images: ["public/images/yoga/yoga1.jpg"],
        en: {
          title: "<b>Yoga in Bali</b>",
          subTitle: "<p>Each year the practice of <b>yoga</b> becomes more popular. And with the growth in demand the demand for quality teaching is rising. To obtain the desired changes through yoga it is necessary for your teacher to have teaching experience in addition to the human element of interaction. Yoga, like all oriental practices, is versatile and effective for the transformation of your body and release of negative emotions, thus for calming the mind.</p>",
          text: "<p>I teach <b>Ashtanga Vinyasa Yoga</b> and <b>Iyengar Yoga</b>.</p> <p>My journey with yoga began in 2006. I started practicing <b>Ashtanga Vinyasa Yoga</b> with a teacher certified by Sri Patabhi Joyce in Moscow.</p> <p>Then, I decided to immerse myself into the world of practice and went to India. There I was trained by a certified teacher of Sri Patabhi Joyce – Lino Miele (Italy), and later was introduced with the style of <b>Iyengar Yoga</b> by other certified masters. I studied with BKS Certified Iyengar teachers: Sharat Arora (Himalayas), Gabriella Dzhubilyaro (Italy) and Tatiana Tolochkova (Auroville, India).</p> <p><b>Iyengar Yoga</b> – static yoga. Prolonged stay in particular asanas strengthens the impact not only on muscles, joints and ligaments, but also on the internal organs, and even cells, and the emotional state of mind, which is at the basis of this method.</p> <p><b>Ashtanga Vinyasa Yoga (AVY)</b> – one of the most powerful and effective of the known systems of hatha yoga. It’s a dynamic practice that is performed in a strict sequence of asanas (poses) “flowing” into each other by means of a special dynamic progression (Vinyasa).</p> <p>All yoga classes are held individually and drawn from a special program that takes into account the structural features of your body and is aimed at achieving rapid results.</p> <p>No special physical training is required for yoga classes, and psychological and emotional problems will be corrected or eliminated.</p> <p><b>Why should you do yoga?</b></p> <p>– reduction of excess weight in a short time;</p> <p>– release of negative emotions;</p> <p>– obtaining an instant energy charge;</p> <p>– elimination of toxins from the body;</p> <p>– strong, toned body and a calm mind.</p> <p><b>Yoga</b> can rapidly transform your body and your look.</p> <p><b>Contact</b>: Anna +62–81353391982, or <a href='mailto:info@sohana.ru'>Mail me Here</a>.</p> <p><b>Location</b>: all massage sessions and lessons are held at your place of residence.</p>"
        },
        ru: {
          title: "<b>Йога на Бали</b>",
          subTitle: "<p>С каждым годом занятия <b>йогой</b> становятся все популярнее. И с ростом спроса растет спрос на качество преподавания. Для получения желаемых изменений, занимаясь йогой, необходимо, чтобы Ваш преподаватель помимо опыта преподавания имел человеческий фактор взаимодействия. Йога, как и все восточные практики многогранна и эффективна для трансформации Вашего тела и высвобождения негативных эмоций, следовательно, успокоения ума.</p>",
          text: "<p>Я владею такими практиками, как <b>Аштанга Виньяса Йога</b> и <b>Айенгар Йога</b>.</p> <p>Мой путь в <b>йоге</b> начался с 2006 года. Я начала практиковать <b>Аштангу Виньясу Йогу</b> с Сертифицированным Шри Патабхи Джойсом преподвателем в Москве.</p> <p>Затем, я решила полностью погрузиться в мир практики и уехала в Индию. Там прошла обучение у Сертифицированного Шри Патабхи Джойсом преподавателя – Лино Миэле (Италия), после чего познакомилась со стилем <b>Айенгар Йога</b> у других сертифицированных мастеров. Обучалась у Сертифицированных Б.К.С. Айенгаром преподавателей:  Шарат Арора (Гималаи), Габриэлла Джубиляро (Италия), Татьяна Толочкова (Ауровиль, Индия).</p> <p><b>Айенгар Йога</b> – это статичная йога. Длительное пребывание в позе усиливает воздействие не только на мышцы, суставы и связки, но также на внутренние органы, системы и даже клетки, эмоциональное состояние и ум, что является основой метода.</p> <p><b>Аштанга Виньяса Йога (АВЙ)</b> - одна из самых мощных и эффективных из известных на сегодняшний день систем хатха-йоги. Является динамической практикой, которая выполняется в строгой последовательности поз (асан), «перетекающих» друг в друга посредством специальных динамических связок (виньяс).</p> <p>Все уроки йоги проходят индивидуально, на которых будет составлена специальная программа, учитывающая особенности строения Вашего тела и нацеленная на <u>быстрое достижение результатов</u>.</p> <p>Для занятий йоги не нужна специальная физическая подготовка, а также любые физиологические и эмоциональные проблемы будут скорректированы или окончательно устранены.</p> <p><b>Почему вам стоит заняться йогой?</b></p> <p>– снижение лишнего веса в короткие сроки;</p> <p>– высвобождение негативных эмоций;</p> <p>– получение моментального заряда энергии;</p> <p>– выведение токсинов из организма;</p> <p>– крепкое, подтянутое тело и спокойный ум.</p> <p><b>Йога</b> стремительно трансформирует как Ваше тело, так и Ваше мировоззрение.</p> <p><b>Контактное лицо</b>: Анна +62–81353391982. Или напишите мне <a href='mailto:info@sohana.ru'>письмо тут</a>.</p> <p><b>Адрес</b>: все сессии массажа и уроки проходят по Вашему месту проживания.</p>"
        }
      };
    }
  ]);

  Sohana.controller('MeditationCtrl', [
    '$scope', function($scope) {
      return $scope.data = {
        images: ["public/images/meditation/Meditation1.jpg", "public/images/meditation/Meditation2.jpg", "public/images/meditation/Meditation3.jpg"],
        en: {
          title: "<b>Meditation in Bali</b>",
          subTitle: "<p>In our society there is a certain stereotype about <b>Meditation</b>. I want to dispel this myth: the practice of meditation can be both passive and active. Most people have heard only of passive meditation involving motionless sitting. Not every average person in the world can sink into a passive meditation. Our restless and unruly mind will not allow itself so silenced easily. Therefore, there is dynamic meditation to calm the mind through the active work with the body. These practices are also referred to as energy practices. I would like to introduce these methods to you.</p>",
          text: "<p>My name is Anna. I have been practicing various meditation techniques, especially Osho meditation since 2005. This kind of practice does not require much haste and expectations. It can simply become part of your life. It can silently change the perception of the world and your relationship with it.</p> <p>Meditation will help you disconnect for a while from the outside world and immerse you in your incredible and mysterious inner-world. You will learn how to solve your problems with ease and develop a sense of peace, happiness and love. By practicing meditation regularly you will unlock such things as a totality and unconditional love.</p> <p><b>Kundalini</b> – is a dynamic meditation technique developed by Osho Rajneesh. When you go into meditation – Kundalini shaking, let it happen rather than do it. Stand silently, feel it coming, and when your body starts to tremble a little – help it, but without strong-willed efforts. Enjoy it, feel the bliss, let it happen, welcome it and keep it. If you’re forcing it you will only exercise your physical body. The shaking will be, but only on the surface, it will unlikely penetrate into your depths. You will remain solid – stone-like inside, you’ll become a manipulator, a doer, and the body will simply follow you.</p> <p><b>Overtone (chakra) singing</b> – It may seem strange but if you try to record your singing and then listen to the recording very few of you will recognize and appreciate their own voice. And yet our voice and breath is present in our lives from birth until death. Through sounds or words our voice is always present in all the emotional moments of life – both in joy and in pain, in admiration, and in boredom. The strength of our voice penetrates into the depths by relaxing the nervous system and allowing our intuition and sensitivity to appear, thereby healing you and giving life charge in this moment. There are sounds for relaxing different parts of the body: heart, stomach, throat, emotional sounds for relaxation, the sound of pure beauty. And while there is singing fellowship and oneness with yourself and others, it’s possible to relax the nervous system deep enough to immerse yourself into the moment of NOW where time stands still, space loses all borders and the sound of silence takes over. Overtone (throat) singing is a profoundly harmonizing effect on the human body, replenishing energy, strengthening the immune system and nourishing the cerebral cortex. The vibrations of your voice are soft and have a profound impact on the emotional sphere, promoting relaxation and helping to unlock the creative potential.</p> <p><b>Nadabrahma</b> – Have you ever thought about giving your heart the time and freedom from action and breathing? With our mind and sober thoughts we are increasingly locking up one of the most important organs in the prison of fear, pain and indifference. As a result we become closed to love and indifferent to all others. I suggest you release the heart and give yourself a moment of happiness, unconditional love and divine tranquility through the “Nadabrahma” meditation. Nadabrahma – is an old Tibetan technique that had been performed in the early morning hours. It can be done anytime of the day, but on an empty stomach, which must also remain inactive for at least 15 minutes afterwards. This is a sitting meditation, in which a buzzing sound radiates from you while hand movements create an inner balance and harmony between the mind and body.</p> <p><b>The orgasm reflex</b> – is a practice of energy developed by the Austrian psychiatrist Wilhelm Reich. Aimed at the maximum voltage of the pelvic segment, followed by the release of stress and blocks leaving the body in a state of relaxation. A sexual topic provokes the full range of psycho-emotional from anticipation to reaction and joy and from aggression to fear. It is safe to say that it leaves very few people indifferent. In this world there are many taboos and one of the most powerful taboos in our society is connected with having fun. Sexuality is suppressed and “twisted inside-out” by the conditioning of our society more than any other expression of our energy. Our bodies learn to say “no” to the totality of the flow, and the minds control, suppress and destroy the greatest natural gift given by existence. But the truth is that separating from our ability to have fun we can lose the taste of life. By studying the energy processes in the body we found that most people have problems with the accumulation of charge and discharge. Interacting in society during the day we accumulate excess charge negative or positive energy. Its discharge is a natural orgasmic wave that brings a deep emotional and physical relaxation. However, due to centuries-old experience of oppression and rejection of the sexual components the Western man has developed a block for accommodating this process. At best he is able to reset the accumulated tension only on the genitals level. But the complete orgasmic reaction wave passing through the whole body gives the trainee the deepest relaxation..</p> <p><b>No Dimension</b> – “Sufi whirling” is not only one of the most ancient techniques, but also is one of the most powerful. It is so deep that even a one-time experience can make you quite different. Whirl with open eyes, as do small children, as if your inner being has become the center and the whole of your body becomes a wheel moving like potter’s wheel. You are still in the as the whole body moves. Practicing whirling can get a lot of positive effects for the soul, spirit and body. Circular rotation causes the blood to move very fast, thus improving the blood flow to the brain. The monotony, duration and a certain rhythm of dance lead to the achievement of ecstasy and the removal of blocks of consciousness. Such a process has a positive effect on the entire body – it’s rejuvenating. It is recommended not to eat or drink for three hours before whirling. It is better to be barefoot and in loose clothing. Meditation is divided into three phases – centering, whirling and resting. It has no certain duration – it can last hours, but at least one hour is required to fully experience this vortex energy.</p> <p><b>Sufi chakra breathing</b> – Sufism means wisdom, and breath for a Sufi is the source of his existence, the source of inner harmony of a human and his relationship with existence. One can only master himself by providing the opportunity for learning to breathe. Breathing controls anger and joy, sorrow and joy, jealousy and most feelings.</p> <p><b>Sufi Dancing</b> – In Osho’s meditations there is always a dance because dance is a movement, a celebration even if it’s a dance of death. Dance as if this is your last dance in this life. Express yourself through dance and lose yourself by dancing. Become the dance itself. This is a time of celebration – enjoy yourself, dancing with closed eyes. Dance is a way of relaxation – let your body move with the music. Express all that you feel through your body, and celebrate who you are!</p> <p><b>Dynamic meditation</b> – a medicine for body and soul. Some meditative techniques are designed for those who are focused on the body, others – for the heart-oriented, and third – for the mind-oriented. Dynamic meditations are designed for people of all three types. Meditations begin with the body, acting through the mind and leading you into silence, calmness, “out of mind” peace and consciousness purity.</p> <p><b>Contact</b>: Anna +62–81353391982, or <a href='mailto:info@sohana.ru'>Mail me Here</a>.</p> <p><b>Location</b>: all massage sessions and lessons are held at your place of residence.</p>"
        },
        ru: {
          title: "<b>Медитация на Бали</b>",
          subTitle: "<p>В нашем обществе сложился определенный стереотип относительно <b>Медитации</b>. Я хочу развеять этот миф: практики медитации бывают как пассивного характера, так и активного. Большинство людей слышали только о пассивных медитациях, где медитирующий сидит неподвижно. Не каждый среднестатистический житель планеты способен действительно погрузиться в пассивную медитацию. Наш беспокойный и неугомонный ум не даст себе вот так просто замолчать. Поэтому, появились динамические медитации, направленные на успокоение ума через активную работу с телом. Эти практики, также, называют энергетическими практиками. С рядом таких практик я и хочу вас ознакомить.</p>",
          text: "<p>Меня зовут Анна. Я практикую различные медитации, в частности медитации Ошо с 2005 года. Такого рода практики не требуют спешки и особых ожиданий. Они просто становятся частью вашей жизни. И незаметно происходит изменение вашего восприятия мира и отношения к нему.</p> <p>Медитация поможет Вам отключиться на время от внешнего мира и погрузиться в Ваш невероятный и загадочный внутренний мир. Вы научитесь решать ваши проблемы с легкостью и разовьете в себе чувства умиротворения, счастья и любви. Практикуя медитации регулярно вам откроются такие понятия, как тотальность и безусловная любовь.</p> <p><b>Кундалини</b> – динамическая медитация. Автор техники: Ошо Раджниш. Когда вы занимаетесь медитацией Кундалини, позвольте произойти тряске, не делайте её. Тихо стойте, чувствуйте, как она приходит, и когда ваше тело начинает немного дрожать помогите ему, но не делая этого. Наслаждайтесь ею, чувствуйте от неё блаженство, позвольте ей произойти, поддержите её, приветствуйте её, но не волевыми усилиями. Если вы её принуждаете, она станет упражнением, телесным физическим упражнением. Тогда тряска будет, но лишь на поверхности, она не проникает вглубь, вы остаетесь твердыми, камнеподобными, скалообразными внутри, вы будете манипулятором, делателем, и тело просто будет за вами следовать.</p> <p><b>Обертонное (чакровое) пениеg</b> – Это покажется странным, но если вы попытаетесь записать свое пение, а затем прослушать запись, очень немногие из вас узнают и оценят свой собственный голос, а ведь наш голос вместе с дыханием присутствует в нашей жизни с самого рождения до самой смерти. Со звуками или словами он всегда присутствует во всех эмоциональных моментах жизни, как в радости, так и в боли, как в восхищении, так и в скуке. Сила нашего голоса проникает в самую глубину, расслабляя нервную систему и позволяя проявиться нашей интуиции и восприимчивости, позволяя исцелять и проживать настоящий момент. Существуют звуки для расслабления разных частей тела: сердца, живота, горла, звуки для эмоционального расслабления, звуки чистой красоты. И во время пения возникает общение и единение с самим собой и окружающими, удается расслабить нервную систему настолько глубоко, чтобы полностью погрузиться в момент здесь и сейчас, где время замирает, пространство теряет все границы, где возникает звук молчания. Обертонное (горловое) пение оказывают глубокое гармонизирующее воздействие на организм человека, восполняют запас энергии, укрепляют иммунитет и подпитывают кору головного мозга. Вибрации собственного голоса оказывают мягкое и глубокое влияние на эмоциональную сферу, способствуя релаксации и помогая раскрыть творческий потенциал.</p> <p><b>Надабрама</b> – Вы когда-нибудь задумывались о том, что сердцу нужно время от времени давать свободу действия и дыхания. Свои умом и трезвыми размышлениями мы все чаще и чаще запираем один из самых важных органов в тюрьму из страхов, боли и безразличия. И в результате становимся закрытыми для любви и равнодушными ко всем окружающим. Я предлагаю вам освободить сердце и подарить себе моменты счастья, безусловной любви и божественного спокойствия, с помощью медитации “Надабрама”. Надабрама – старая тибетская техника, которая раньше выполнялась в ранние утренние часы. Она может выполняться в любое время дня, но на пустой желудок, и нужно оставаться бездеятельным в течение, по крайней мере, 15 минут после нее. Это сидячая медитация, в которой гудящий звук, издаваемый тобой, и движения руками создают внутренний баланс, гармонию между умом и телом.</p> <p><b>Рефлекс оргазма</b> – это энергетическая практика, разработанная австрийским психотерапевтом Вильгельмом Райхом. Нацеленна на максимальное напряжение тазового сегмента с последующим высвобождением напряжений и блоков, оставляя тело в состоянии расслабления. Тема секса провоцирует весь спектр психоэмоциональных реакций: от предвкушения и радости до агрессии и страха. Можно смело утверждать, что она мало кого оставляет равнодушным. В этом мире существует множество запретов и одно из самых сильных табу нашего общества связано с получением удовольствия. Сексуальность, больше чем любое другое выражение нашей энергии, подавлена и «вывернута на изнанку» обусловленностями социума. Наши тела учатся говорить «нет» тотальности этого потока, а умы контролируют, подавляют и разрушают величайший естественный дар, данный существованием. Но правда в том, что разъединяясь со способностью получать удовольствие мы теряем и вкус Жизни. Изучая энергетические процессы в теле, обнаружилось, что у большинства людей имеются проблемы с накоплением заряда и разрядкой. Взаимодействуя в социуме, в течение дня мы накапливаем избыточный заряд негативной или позитивной энергии. Естественной разрядкой коего является оргазмическая волна, приносящая глубокое эмоциональное и физическое расслабление. Однако из-за многовекового опыта подавления и неприятия сексуальных составляющих у западного человека заблокирована способность к полноценному проживанию этого процесса. В лучшем случае он способен сбросить накопившееся напряжение только на уровне гениталий. Полноценная же оргазмическая реакция волной проходит через всё тело, даря ему глубочайшее расслабление.</p> <p><b>No Dimension</b> – «Суфийское кружение» — одна из самых древних техник, одна из самых мощных. Она настолько глубока, что даже единовременный опыт может сделать вас совсем иным. Кружитесь с открытыми глазами, как это делают маленькие дети, как будто ваша внутренняя сущность стала центром, а все ваше тело стало колесом, движущимся гончарным кругом. Вы — в центре, но все тело движется. Практикуя кружение можно получить массу положительных эффектов для души, духа и тела. Круговое вращение заставляет кровь двигаться очень быстро, нарушает обычное кровоснабжение мозга. Монотонность, длительность происходящего и определенный ритм танца приводят к достижению экстаза и снятию блоков с сознания. Такой процесс благоприятно воздействует на весь организм – он омолаживается. Рекомендуется ничего не есть и не пить за три часа до кружения. Лучше быть босиком и в свободной одежде. Медитация делится на три стадии — центрирование, кружение и отдых. Для нее нет определенной продолжительности — она может длиться часами, но, по крайней мере, один час, чтобы полностью ощутить водоворот энергии.</p> <p><b>Суфийское чакровое дыхание</b> – Суфизм означает мудрость, а дыхание для суфи это источник его существования, источник внутренней гармонии человека и его связь с существованием. Только дав возможность и научившись дышать, можно стать хозяином самого себя. Дыхание управляет гневом и радостью, печалью и наслаждением, ревностью и другими чувствами.</p> <p><b>Суфийские танцы</b> – В медитациях Ошо всегда есть место танцу, потому, что танец это всегда движение, всегда празднование, даже если это танец смерти. Танцуйте так, как будто это ваш последний танец в этой жизни. Выразите себя через танец, потеряйтесь в танце. Станьте танцем. Это время празднования, наслаждайтесь собой, танцуя с закрытыми глазами. Танец – это путь расслабления, позвольте вашему телу двигаться с музыкой. Все, что вы чувствуете, выразите через ваше тело, и празднуйте того, кем вы являетесь. Ожидание – медитация. Ожидание с полным осознаванием. И это приходит, это нисходит на вас, это вас окружает, это играет вокруг вас, это танцует вокруг вас. Это вас очищает, преобразуслаждением, ревностью и другими чувствами. Наслаждайтесь ею, чувствуйте от неё блаженство, позвольте ей произойти, поддержите её, приветствуйте её, но не волевыми усилиями. Если вы её принуждаете, она станет упражнением, телесным физическим упражнением. Тогда тряска будет, но лишь на поверхности, она не проникает вглубь, вы остаетесь твердыми, камнеподобными, скалообразными внутри, вы будете манипулятором, делателем, и тело просто будет за вами следовать.</p> <p><b>Динамические медитации</b> – лекарство для души и тела. Некоторые из медитативных техник предназначены для тех, кто ориентирован на тело, другие – для ориентированных на сердце, третьи – для ориентированных на ум. Динамические медитаций предназначены для людей всех трех типов. Они начинают с тела, действуют через ум и уводят вас к молчанию, тишине, покою “вне ума”, чистому сознанию.</p> <p><b>Контактное лицо</b>: Анна +62–81353391982. Или напишите мне <a href='mailto:info@sohana.ru'>письмо тут</a>.</p> <p><b>Адрес</b>: все сессии массажа и уроки проходят по Вашему месту проживания.</p>"
        }
      };
    }
  ]);

  Sohana.controller('GalleryCtrl', [
    '$scope', function($scope) {
      return $scope.data = {
        images: ["public/images/gallery/Astavakrasana-Аштавакрасана.jpeg", "public/images/gallery/Bhujangasana1-Бхуджангасана1.jpeg", "public/images/gallery/Marichyasana2-Маричиасана2.jpeg", "public/images/gallery/Matsyasana-Матсиасана.jpeg", "public/images/gallery/Nataradjasana-natarajasana.jpeg", "public/images/gallery/Padmasana-Падмасана.jpeg", "public/images/gallery/Padmasana1-Падмасана1.jpeg", "public/images/gallery/Padmasana2-Падмасана2.jpeg", "public/images/gallery/Parijasana-Париджмасана.jpeg", "public/images/gallery/Parivrtta-Parsvakonasana-Паривритта-Паршваконасана.jpeg", "public/images/gallery/Pashchimottanasana-Пашчимоттасана.jpeg", "public/images/gallery/Shanmukhi-Mudra-Шанмукхи-Мудра.jpeg", "public/images/gallery/Simhasana2-Симхасана2.jpeg", "public/images/gallery/sohana-Baddha-Konasana-in-Shirshasana.jpg", "public/images/gallery/sohana-urdhva-dhanurasana.jpg", "public/images/gallery/sohana-urdhva-mukha-pashchimottanasana.jpg", "public/images/gallery/sohana-utthita-trikonasana.jpg", "public/images/gallery/sohana-vatayanasana.jpg", "public/images/gallery/sohana.ru_.jpeg", "public/images/gallery/sohana.ru-Eka-Pada-Shirshasana_sm.jpg", "public/images/gallery/sohana.ru-Sukhasana_sm.jpg", "public/images/gallery/Upavishtha-Konasana-Упавишта-канасана.jpeg", "public/images/gallery/Urdhva-Dandasana-Урдхва-Дандасана.jpeg"],
        imagesThumbs: ["public/images/gallery/Astavakrasana-Аштавакрасана-150x150.jpeg", "public/images/gallery/Bhujangasana1-Бхуджангасана1-150x150.jpeg", "public/images/gallery/Marichyasana2-Маричиасана2-150x150.jpeg", "public/images/gallery/Matsyasana-Матсиасана-150x150.jpeg", "public/images/gallery/Nataradjasana-natarajasana-150x150.jpeg", "public/images/gallery/Padmasana-Падмасана-150x150.jpeg", "public/images/gallery/Padmasana1-Падмасана1-150x150.jpeg", "public/images/gallery/Padmasana2-Падмасана2-150x150.jpeg", "public/images/gallery/Parijasana-Париджмасана-150x150.jpeg", "public/images/gallery/Parivrtta-Parsvakonasana-Паривритта-Паршваконасана-150x150.jpeg", "public/images/gallery/Pashchimottanasana-Пашчимоттасана-150x150.jpeg", "public/images/gallery/Shanmukhi-Mudra-Шанмукхи-Мудра-150x150.jpeg", "public/images/gallery/Simhasana2-Симхасана2-150x150.jpeg", "public/images/gallery/sohana-Baddha-Konasana-in-Shirshasana-150x150.jpg", "public/images/gallery/sohana-urdhva-dhanurasana-150x150.jpg", "public/images/gallery/sohana-urdhva-mukha-pashchimottanasana-150x150.jpg", "public/images/gallery/sohana-utthita-trikonasana-150x150.jpg", "public/images/gallery/sohana-vatayanasana-150x150.jpg", "public/images/gallery/sohana.ru_-150x150.jpeg", "public/images/gallery/sohana.ru-Eka-Pada-Shirshasana_sm-150x150.jpg", "public/images/gallery/sohana.ru-Sukhasana_sm-150x150.jpg", "public/images/gallery/Upavishtha-Konasana-Упавишта-канасана-150x150.jpeg", "public/images/gallery/Urdhva-Dandasana-Урдхва-Дандасана-150x150.jpeg"]
      };
    }
  ]);

  Sohana.controller('TestimonialsCtrl', [
    '$scope', function($scope) {
      return $scope.data = {
        en: {
          title: "<b>Testimonials</b>",
          testimonials: [
            {
              text: "Anna has a great energy and is fun to work with.",
              author: "Arron Selby, Life Empowerment Coach, <a href='www.empoweredinlife.com'>www.empoweredinlife.com</a>"
            }, {
              text: "Anna, thank you for your work, for your return, for your individual approach to each. I was pleasantly surprised by how sincere and responsive do you teach when I first came to you to practice. Every time I did not want to end with your yoga class))) Thank you for your massage session. It really works. Everyone should try your massage and feel the wonders of massage thanks to your work. Thank you so much, you helped me a lot!!",
              author: "Ksenia Malchenko, Designer/Owner of Ma:k"
            }, {
              text: "I was very impressed with the real Thai massage from Anna … I’m so sorry I’m so late to know it … But next year I will make arrangements in advance for a full course!))",
              author: "Dmitry Moshkov, Owner/Partner of AIESEC"
            }, {
              text: "Anna, thank you for making us healthier, more beautiful, happier and kinder) What led me to you for a massage? Initially, the desire to relax, escape from unpleasant thoughts and worries… And here I am at your house … confusion, concern and understanding that now you will begin to work miracles, and I … and I’ll get rid of all my experiences)) Your soft and firm massage made ​​me melt. And with each session my body more and more filled with tenderness and love for myself … Thank you)",
              author: "Olga Drotyanko, Chief accountant at the Maschinenfabrik Niehoff"
            }, {
              text: "Hello everyone! I want to share my experience with Anna. I took her course Chi Nei Tsang massage, Thai massage, Tibetan Pulsing and several meditations. Feeling unreal! After a few sessions of massage I had complete relaxation, could feel my body (I did not realize that there are many blocks in the body))). After the massage was somewhat altered state of consciousness: the increased sensitivity, even the air felt different) and I managed to turn off the mind, finally I was able to experience a meditative state! It’s great that Anna’s personal touch and she picks up what exactly do you want the data point! And anyway, I’m happy that I met such a fun and positive person) Thank you very much!",
              author: "Rada Malakhova, Head of Training in Investment Group Absolut"
            }, {
              text: "I arrived in Bali completely broken, tired, with pain in my back. Immediately began to study with Anna and I have found happiness and harmony health in just 10 yoga classes and a series of massages! I loved the energy of Anna, her magic hands. Holidaymakers in Bali, I highly recommend to combine a relaxing holiday with beneficial to themselves, and the result is not long to wait!! Anna, thank you for everything! Now, I will try to rest only in Bali, because there is you))) P.S. Returning to my homeland, I visited yoga classes and was very disappointed with the teacher, with whom I did yoga before met you. Now I do not know where to look for the same teacher like you … With you, as long as no one can not compare))))",
              author: "Nadya Malysheva, Military Insurance Company"
            }, {
              text: "Thank you Anna for excellent morning yoga sessions. For a great massage, which you do with a deep understanding of what is really necessary for me. I recommend you to my friends and acquaintances, and I hear about you only the best reviews. Contact to Anna, you can be sure – you’re in good hands!",
              author: "Daria Kotova, Photo model"
            }, {
              text: "Anna, thank you very much for yoga and massage in Bali! Vacation would turn into a sad contemplation of rain from the windows of our house, if I had not met you. In addition to a pleasant and constructive use of time with you, I realized that I now know a little more about yourself and the world, I feel some things acutely, open for new experiences. Now looking for a suitable yoga center, I want to continue further studies. You are able to change my attitude to yoga: Now for me it’s not boring classes, and classes filled with meaning. Thank you for this jerk! All the best and good to you. Greetings from Misha and Batyr and someday we will meet again! ))))))))))))",
              author: "Veronika Smirnova, Housewife"
            }, {
              text: "Anna, Thank you so much for yoga and massage. I’m flying back home with a better sense of myself and a firm intention to continue my studies, thank you for all advices! You do not just lead a class, you are planting a certain attitude to yoga, body condition. And because of this, I found it easier to overcome myself. Now I believe that everything will turn out. Thank you, good luck, and I hope to see you soon! Connected :)))",
              author: "Olga Kazanina, Top manager"
            }
          ]
        },
        ru: {
          title: "<b>Отзывы</b>",
          testimonials: [
            {
              text: "Anna has a great energy and is fun to work with.",
              author: "Arron Selby, Life Empowerment Coach, <a href='www.empoweredinlife.com'>www.empoweredinlife.com</a>"
            }, {
              text: "Anna, thank you for your work, for your return, for your individual approach to each. I was pleasantly surprised by how sincere and responsive do you teach when I first came to you to practice. Every time I did not want to end with your yoga class))) Thank you for your massage session. It really works. Everyone should try your massage and feel the wonders of massage thanks to your work. Thank you so much, you helped me a lot!!",
              author: "Ksenia Malchenko, Designer/Owner of Ma:k"
            }, {
              text: "I was very impressed with the real Thai massage from Anna … I’m so sorry I’m so late to know it … But next year I will make arrangements in advance for a full course!))",
              author: "Dmitry Moshkov, Owner/Partner of AIESEC"
            }, {
              text: "Anna, thank you for making us healthier, more beautiful, happier and kinder) What led me to you for a massage? Initially, the desire to relax, escape from unpleasant thoughts and worries… And here I am at your house … confusion, concern and understanding that now you will begin to work miracles, and I … and I’ll get rid of all my experiences)) Your soft and firm massage made ​​me melt. And with each session my body more and more filled with tenderness and love for myself … Thank you)",
              author: "Olga Drotyanko, Chief accountant at the Maschinenfabrik Niehoff"
            }, {
              text: "Hello everyone! I want to share my experience with Anna. I took her course Chi Nei Tsang massage, Thai massage, Tibetan Pulsing and several meditations. Feeling unreal! After a few sessions of massage I had complete relaxation, could feel my body (I did not realize that there are many blocks in the body))). After the massage was somewhat altered state of consciousness: the increased sensitivity, even the air felt different) and I managed to turn off the mind, finally I was able to experience a meditative state! It’s great that Anna’s personal touch and she picks up what exactly do you want the data point! And anyway, I’m happy that I met such a fun and positive person) Thank you very much!",
              author: "Rada Malakhova, Head of Training in Investment Group Absolut"
            }, {
              text: "I arrived in Bali completely broken, tired, with pain in my back. Immediately began to study with Anna and I have found happiness and harmony health in just 10 yoga classes and a series of massages! I loved the energy of Anna, her magic hands. Holidaymakers in Bali, I highly recommend to combine a relaxing holiday with beneficial to themselves, and the result is not long to wait!! Anna, thank you for everything! Now, I will try to rest only in Bali, because there is you))) P.S. Returning to my homeland, I visited yoga classes and was very disappointed with the teacher, with whom I did yoga before met you. Now I do not know where to look for the same teacher like you … With you, as long as no one can not compare))))",
              author: "Nadya Malysheva, Military Insurance Company"
            }, {
              text: "Thank you Anna for excellent morning yoga sessions. For a great massage, which you do with a deep understanding of what is really necessary for me. I recommend you to my friends and acquaintances, and I hear about you only the best reviews. Contact to Anna, you can be sure – you’re in good hands!",
              author: "Daria Kotova, Photo model"
            }, {
              text: "Anna, thank you very much for yoga and massage in Bali! Vacation would turn into a sad contemplation of rain from the windows of our house, if I had not met you. In addition to a pleasant and constructive use of time with you, I realized that I now know a little more about yourself and the world, I feel some things acutely, open for new experiences. Now looking for a suitable yoga center, I want to continue further studies. You are able to change my attitude to yoga: Now for me it’s not boring classes, and classes filled with meaning. Thank you for this jerk! All the best and good to you. Greetings from Misha and Batyr and someday we will meet again! ))))))))))))",
              author: "Veronika Smirnova, Housewife"
            }, {
              text: "Anna, Thank you so much for yoga and massage. I’m flying back home with a better sense of myself and a firm intention to continue my studies, thank you for all advices! You do not just lead a class, you are planting a certain attitude to yoga, body condition. And because of this, I found it easier to overcome myself. Now I believe that everything will turn out. Thank you, good luck, and I hope to see you soon! Connected :)))",
              author: "Olga Kazanina, Top manager"
            }
          ]
        }
      };
    }
  ]);

  Sohana.controller('ContactCtrl', [
    '$scope', function($scope) {
      return $scope.data = {
        en: {
          title: "<b>Contact Anna Sohana</b>",
          form: {
            name: "Name",
            email: "Your e-mail",
            question: "Question",
            send: "Send"
          }
        },
        ru: {
          title: "<b>Контакт с Анной Соханой</b>",
          form: {
            name: "Имя",
            email: "Твой e-mail",
            question: "Вопрос",
            send: "Отправить"
          }
        }
      };
    }
  ]);

}).call(this);
