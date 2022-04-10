module.exports = [
  {
    id: 1,
    name: 'Quiz Choice',
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
    name: 'Quiz Match',
    picture: 'something img/href',
    questions: [
      {
        type: 'match',
        text: 'Сопоставьте произведение и автора',
        choiceLeft: ['Ревизор', 'Горе от ума', 'Повелитель мух', 'Ромео и Джульетта'],
        choiceRight: ['Грибоедов', 'Шекспир', 'Гоголь', 'Голдинг'],
        answer: {
          1: 'Гоголь',
          2: 'Грибоедов',
          3: 'Голдинг',
          4: 'Шекспир'
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
          1: 'white',
          2: 'greed',
          3: 'heron'
        },
        strict: true,
        value: 3
      },
      {
        type: 'match',
        text: 'Сопоставьте название и написание языка',
        choiceLeft: ['Испанский', 'Русский', 'Корейский'],
        choiceRight: ['Oye', '이봐', 'Привет'],
        answer: {
          1: 'Oye',
          2: 'Привет',
          3: '이봐'
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
          1: 'Август',
          2: 'Март',
          3: 'Февраль'
        },
        strict: true,
        value: 3
      },
      {
        type: 'match',
        text: 'Сопоставьте названия:',
        choiceLeft: ['Индийский', 'Байкал', 'Азовское'],
        choiceRight: ['озеро', 'море', 'океан'],
        answer: {
          1: 'океан',
          2: 'озеро',
          3: 'море'
        },
        strict: true,
        value: 3
      }
    ]
  },

  {
    id: 3,
    name: 'Quiz Mixed',
    picture: 'something img/href',
    questions: [
      {
        type: 'chooseOne',
        text: 'Выберите правильный ответ',
        picture:
          'https://animesher.com/orig/1/116/1166/11661/animesher.com_kaneki-ken-tokiyskiy-gul-tokyo-ghoul-1166112.jpg',
        choices: ['467', '890', '993', '1'],
        answer: '993',
        value: 1
      },
      {
        type: 'chooseMany',
        text: 'Фрукт',
        choices: ['айва', 'смородина', 'яблоко', 'кукуруза'],
        answer: {
          айва: true,
          яблоко: true
        },
        strict: false,
        value: 2
      },
      {
        type: 'chooseOne',
        text: 'Столица Индонезии',
        choices: ['Нусантара', 'Джакарта', 'Калимантан', 'Тенгаронг'],
        answer: 'Джакарта',
        value: 1
      },
      {
        type: 'match',
        text: 'Сопоставьте родителя и ребёнка:',
        choiceLeft: ['Корова', 'Олень', 'Заяц'],
        choiceRight: ['оленёнок', 'зайчонок', 'телёнок'],
        answer: {
          1: 'телёнок',
          2: 'оленёнок',
          3: 'зайчонок'
        },
        strict: true,
        value: 3
      },
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
        type: 'match',
        text: 'Сопоставьте персонажа и аниме:',
        choiceLeft: ['Гац', 'Саске', 'Киллуа'],
        choiceRight: ['Наруто', 'Хантер Хантер', 'Берсерк'],
        answer: {
          1: 'Берсерк',
          2: 'Наруто',
          3: 'Хантер Хантер'
        },
        strict: true,
        value: 3
      }
    ]
  }
]
