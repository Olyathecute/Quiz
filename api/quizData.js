module.exports = [
  {
    id: 1,
    name: 'Choice',
    picture: 'something img/href',
    questions: [
      {
        type: 'chooseOne',
        text: 'Сколько секунд длится мгновение?',
        choices: ['60', '90', '120', '180'],
        answer: '90',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Факультет Седрика Диггори',
        choices: ['Когтевран', 'Пуффендуй', 'Гриффиндор', 'Слизерин'],
        answer: 'Пуффендуй',
        value: 1
      },
      {
        type: 'chooseMany',
        text: 'Имя Бога смерти?',
        choices: ['Рем', 'Миса', 'Рюк', 'Ниа'],
        answer: {
          Рем: true,
          Рюк: true
        },
        strict: false,
        value: 2
      },
      {
        type: 'chooseOne',
        text: 'Имя первого ДжоДжо в истории?',
        choices: ['Джозеф', 'Джонатан', 'Джолин', 'Джордж'],
        answer: 'Джордж',
        value: 1
      },
      {
        type: 'chooseMany',
        text: 'Укажите млекопитающих',
        choices: ['Заяц', 'Крокодил', 'Диплодок', 'Утконос'],
        answer: {
          Заяц: true,
          Утконос: true
        },
        strict: false,
        value: 2
      },
      {
        type: 'chooseMany',
        text: 'Выберите НЕ валюту',
        choices: ['песо', 'лори', 'клир', 'флорин'],
        answer: {
          лори: true,
          клир: true
        },
        strict: false,
        value: 2
      }
    ]
  },

  {
    id: 2,
    name: 'Match',
    picture: 'something img/href',
    questions: [
      {
        type: 'match',
        text: 'Сопоставьте произведение и автора',
        choiceLeft: ['Ревизор', 'Горе от ума', 'Повелитель мух', 'Ромео и Джульетта'],
        choiceRight: ['Грибоедов', 'Шекспир', 'Гоголь', 'Голдинг'],
        answer: {
          Ревизор: 'Гоголь',
          'Горе от ума': 'Грибоедов',
          'Повелитель мух': 'Голдинг',
          'Ромео и Джульетта': 'Шекспир'
        },
        strict: true,
        value: 3
      },
      {
        type: 'match',
        text: 'Переведите слова:',
        choiceLeft: ['белый', 'жадность', 'цапля'],
        choiceRight: ['heron', 'white', 'greed'],
        answer: {
          белый: 'white',
          жадность: 'greed',
          цапля: 'heron'
        },
        strict: true,
        value: 3
      },
      {
        type: 'match',
        text: 'Сопоставьте время года и месяц:',
        choiceLeft: ['Лето', 'Весна', 'Зима'],
        choiceRight: ['Февраль', 'Март', 'Август'],
        answer: {
          Лето: 'Август',
          Весна: 'Март',
          Зима: 'Февраль'
        },
        strict: true,
        value: 3
      }
    ]
  },

  {
    id: 3,
    name: 'All types questions',
    picture: 'something img/href',
    questions: [
      {
        type: 'chooseMany',
        text: 'Планеты солнечной системы',
        choices: ['Юпитер', 'Солнце', 'Уран', 'Азот'],
        answer: {
          Уран: true,
          Юпитер: true
        },
        strict: false,
        value: 2
      },
      {
        type: 'chooseOne',
        text: 'Имя персонажа?',
        picture: 'https://i.ytimg.com/vi/HojJV3CxqXg/maxresdefault.jpg',
        choices: ['Польнареф', 'Джонатан', 'Какёин', 'Абдул'],
        answer: 'Какёин',
        value: 1
      },
      {
        type: 'match',
        text: 'Сопоставьте название и написание языка',
        choiceLeft: ['Испанский', 'Русский', 'Корейский'],
        choiceRight: ['Oye', '이봐', 'Привет'],
        answer: {
          Испанский: 'Oye',
          Русский: 'Привет',
          Корейский: '이봐'
        },
        strict: true,
        value: 3
      }
    ]
  },

  {
    id: 23,
    name: 'Cosmos',
    picture: 'something img/href',
    questions: [
      {
        type: 'chooseOne',
        text: 'У какой из перечисленных планет нет твердой поверхности?',
        choices: ['Юпитер', 'Марс', 'Венера', 'Меркурий'],
        answer: 'Юпитер',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Кто был первым космонавтом?',
        choices: ['Нил Армстронг', 'Базз Олдрин', 'Юрий Гагарин', 'Валентина Терешкова'],
        answer: 'Юрий Гагарин',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Есть ли в космосе какие-либо звуки?',
        choices: ['Да, там постоянно всё сталкивается', 'В космосе нет звуков'],
        answer: 'В космосе нет звуков',
        value: 1
      }
    ]
  },
  {
    id: 09,
    name: 'Meme',
    picture: 'something img/href',
    questions: [
      {
        type: 'chooseOne',
        text: 'Что сказал Добрыня?',
        picture: 'https://i.ytimg.com/vi/5HZx4xn5RD0/maxresdefault.jpg',
        choices: ['Удивил ты меня!', 'Что за ересь, Елисей!', 'А ловко ты это придумал!', 'Натворил ты дел…'],
        answer: 'А ловко ты это придумал!',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Как на самом деле зовут Дашу Карейку?',
        picture: 'https://i.ytimg.com/vi/PywUEBIG5jM/maxresdefault.jpg',
        choices: ['Павел Артёмов', 'Артём Павлов', 'Максим Матвеев', 'Матвей Максимов'],
        answer: 'Максим Матвеев',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Продолжи песню из Тиктока: "Вот как-то так, но никак иначе. Слезы на щеках..."',
        choices: ['...получила сдачу', '...ты чё, дура, плачешь', '...желаю тебе удачи', '...раздолбала тачку'],
        answer: '...ты чё, дура, плачешь',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Из какой игры эта прекрасная леди?',
        picture: 'https://games.24tv.ua/resources/photos/news/1200x675_DIR/202105/1622083.jpg?202105134349',
        choices: ['Far Cry 6', 'Biomutant', 'Little Nightmares ll', 'Resident Evil Village'],
        answer: 'Resident Evil Village',
        value: 1
      },
      {
        type: 'match',
        text: 'Соедините высказывания',
        choiceLeft: [
          'you got two seconds to explain ',
          'lets selebrate and ',
          'fisting is ',
          'you selected the wrong door '
        ],
        choiceRight: [
          'three hundred bucks',
          'round leather craft two blocks down',
          'what you are doing on my property',
          'suck some dick'
        ],
        answer: {
          'you got two seconds to explain ': 'what you are doing on my property',
          'lets selebrate and ': 'suck some dick',
          'fisting is ': 'three hundred bucks',
          'you selected the wrong door ': 'round leather craft two blocks down'
        },
        strict: true,
        value: 3
      },
      {
        type: 'chooseOne',
        text: 'Что в руке у девочки в маске анонимуса?',
        picture: 'https://memepedia.ru/wp-content/uploads/2021/12/dev.jpg',
        choices: ['Тульский пряник', 'Поп-ит', 'Симпл Димпл', 'Снюс'],
        answer: 'Поп-ит',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Какую сущность видел этот мощный экстрасенс?',
        picture:
          'https://memepedia.ru/wp-content/uploads/2017/08/%D1%81%D1%83%D1%89%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B2-%D0%B2%D0%B8%D0%B4%D0%B5-%D0%B3%D0%BD%D0%BE%D0%BC%D0%B8%D0%BA%D0%B0-%D0%BC%D0%B5%D0%BC.jpg',
        choices: ['Черепаху', 'Его зовут Алмаз, значит, он видел топаз', 'Огра', 'Сущность в виде гномика'],
        answer: 'Сущность в виде гномика',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Продолжи фразу:',
        picture: 'https://peopletalk.ru/wp-content/uploads/2017/08/klicho.jpg',
        choices: [
          'Но я могу, я вижу все',
          'Но кто бы это ни мог сделать, лишь я могу и я лишь буду',
          'Вернее, смотреть могут не только лишь все, мало кто может это сделать',
          'А если ты можешь, тебе к нам!'
        ],
        answer: 'Вернее, смотреть могут не только лишь все, мало кто может это сделать',
        value: 1
      },
      {
        type: 'chooseMany',
        text: 'Дополните высказывание: "Иди ... дальше, твоё распределение — это твой путь и твой горизонт познания, ... и твоей природы"',
        choices: ['суетись', 'торопись', 'чувст', 'ощущения'],
        answer: {
          суетись: true,
          ощущения: true
        },
        strict: false,
        value: 2
      },
      {
        type: 'chooseOne',
        text: 'Автор видео держал в руках камеру. А что показалось женщине, которая проходила мимо?',
        choices: ['Что у него была сова', 'Что у него была кошка', 'Что у него был ребёнок', 'Что у него был телескоп'],
        answer: 'Что у него была сова',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Человека с каким редким именем встречала эта женщина?',
        picture: 'https://peopletalk.ru/wp-content/uploads/2022/04/snimok-ekrana-2022-04-08-v-12.30.37-1024x575.png',
        choices: ['Иларион', 'Ибрагим', 'Игнат', 'Измаил'],
        answer: 'Ибрагим',
        value: 1
      },
      {
        type: 'chooseOne',
        text: 'Какой был борщ в школе у Никиты?',
        picture: 'https://peopletalk.ru/wp-content/uploads/2022/04/nikita-litvinkov-original.jpeg',
        choices: ['С капусткой, но не красный', 'Со сметаной', 'Вкусный, но без мяса', 'А борща в столовой не давали'],
        answer: 'С капусткой, но не красный',
        value: 1
      },
      {
        type: 'chooseMany',
        text: 'Дополните высказывание: "Мне уже этот мир абсолютно ... и я здесь ищу только одного: покоя, умиротворения и вот этой ... от слияния с бесконечно вечным"',
        choices: ['ясен', 'понятен', 'гармонии', 'благодати'],
        answer: {
          понятен: true,
          гармонии: true
        },
        strict: false,
        value: 2
      }
    ]
  }
]
