---
author: "joostdecock"
caption: "Ваш новий фон для входу в систему на жовтень"
date: "2017-09-30"
intro: "Це ваш щомісячний огляд новин фрітрекінгу за останні чотири тижні, а також погляд на те, що чекає на нас у наступному місяці."
title: "Щомісячний звіт - вересень 2017: Ускладнення з Саймоном, проблеми з електронною поштою та пожертви зросли цього року."
---

Це ваш щомісячний огляд новин фрітрекінгу за останні чотири тижні, а також погляд на те, що чекає на нас у наступному місяці.

## Озираючись на вересень і трохи на серпень
Для цього першого випуску я озираюся трохи далі, ніж на один місяць, тому що [цей сайт запустився наприкінці серпня](/blog/open-for-business/), тому я включаю цей тиждень у щомісячний огляд.

### Мене звуть Саймон, і я складний

З моменту запуску було [3 нових випуски ядра freesewing](https://github.com/freesewing/core/releases) --- ви знаєте, річ, яка фактично генерує ваші викрійки --- і всі вони були пов'язані з проблемами з [викрійкою Simon Shirt](/patterns/simon).

Повна інформація доступна в [та в журналі змін](https://github.com/freesewing/core/blob/develop/CHANGELOG.md), але ось її суть:


 -  Припуск на шов на подолі був неправильним, коли lenthBonus був дуже низьким.
 -  Розріз рукава для планки був занадто коротким
 -  Виникла проблема з припуском шва на планку петлі для ґудзиків
 -  Бонус за довжину рукава нараховувався в подвійному розмірі
 -  Обхват стегон/обхват грудей не брали до уваги; замість цього використовували обхват грудей/обхват стегон
 -  Було змінено значення за замовчуванням деяких опцій


Дякуємо [Тетяні](/users/yrhdw) та [Стефану](/users/kczrw) за повідомлення про ці проблеми. Ти отримаєш цей прикольний значок з жуком:

![Мені дуже подобається цей](https://posts.freesewing.org/uploads/badge_found_bug_d7d0c9055a.svg)

#### У чому проблема, Саймоне?

Те, що ці питання з'являються в "Саймоні", не випадково. Візерунок має 41 опцію, які дозволяють вам контролювати практично кожен аспект вашої сорочки.

Керування всіма цими різними комбінаціями в коді призводить до великої складності. А зі зростанням складності коду з'являються баги.

![Якби Саймон був на Facebook, його статус стосунків, безумовно, був би *Усе складно*.](https://posts.freesewing.org/uploads/complicated_d8c872358d.gif)

#### Чи настав час для капітального ремонту?
Саймон - це порт шаблону Singular Shirt від MakeMyPattern.com. Тоді, щоб зробити сорочку іншого стилю, довелося б копіювати код, вносити зміни, а потім вічно підтримувати дві дещо відмінні варіації.

У фріскейтингу справи йдуть краще, оскільки успадкування закладено в системі. Тож я міг би (і, можливо, повинен) мати базову модель сорочки, а потім розгалужити її на купу різних моделей сорочок.

 - Брайан Боді Блок
   - Базова викрійка сорочки
     - Викрійка сорочки в стилі кежуал
     - Формальна викрійка сорочки
     - Інший візерунок сорочки

Це не тільки зменшить складність коду, але й, можливо, буде більш інтуїтивно зрозумілим, коли ви бачите купу різних моделей сорочок, а не один шаблон, а потім маєте 41 варіант, з якими можна жонглювати.

Повна реконструкція Саймона буде нелегкою справою, але вона можлива. Мені було б цікаво почути ваші думки з цього приводу.


## Вирішення проблем з доставкою електронної пошти
Я додав обхідний шлях для тих, у кого виникли проблеми з отриманням реєстраційних листів. В основному, люди, які мають обліковий запис електронної пошти, керований Microsoft.

![Якщо ці хлопці керують вашою поштовою скринькою, то хто знає, які ще листи ви не отримуєте](msft.gif)

Ви можете прочитати [мою статтю в блозі на цю тему](/blog/email-spam-problems/) , але якщо у вас є одна з цих адрес, ви маєте отримати ці листи вже зараз. Єдиний мінус - це те, що ви можете отримати їх двічі.

## Реферали
Коли люди посилаються на ваш сайт, а відвідувачі переходять за цим посиланням, це називається рефералом. Блогери серед вас можуть бути знайомі з тим, як переглядати звіти Google Analytics, щоб побачити, хто на вас посилається.

Цей сайт не використовує Google Analytics --- є [пост в блозі з деталями про це](/blog/privacy-choices/) також --- але все одно фіксує рефералів. Огляд останніх рефералів доступний для всіх на сайті [на сторінці статусу](/status).

Посилати на freesewing.org, очевидно, приємно, тому я стежу за рефералами, і якщо з'являється сайт, який належить користувачеві, ви отримуєте значок Посла.

![Посилання на freesewing.org - один із способів розблокувати бейдж амбасадора](https://posts.freesewing.org/uploads/badge_ambassador_3dd1e722cc.svg)

Це невеликий спосіб подякувати вам за те, що ви поширюєте інформацію про фріспівінг.

## Пожертви
Протягом вересня ми перевищили минулорічну суму пожертв, тож приємно бачити, що цього року я зможу [надіслати більше грошей на рахунок MSF](/about/pledge#donations-history) , ніж у 2016 році.

Ви завжди можете відслідковувати пожертви на сторінці [та на сторінці збору пожертв](/about/pledge#donations-history), але ось поточний статус:

![Ура! Краще, ніж минулого року](https://posts.freesewing.org/uploads/donations_68e214d133.svg)

## Інші формати завантаження

Я також додав додаткові формати на сторінку завантаження проекту. Тепер у вас є вибір між SVG, PDF, letter-PDF, tabloid-PDF, A4-PDF, A3-PDF, A2-PDF, A1-PDF та A0-PDF.

## Значок контролю якості
Я додав значок контролю якості для таких речей, як повідомлення (або виправлення) помилок, непрацюючих посилань, граматики та інших невеликих поліпшень.

![Бачите помилку? Повідомте мене, і ви отримаєте це](https://posts.freesewing.org/uploads/badge_quality_control_6acb8c10c2.svg)

Це може здатися не таким вже й значним внеском, але, тим не менш, він важливий.

Якщо вибирати між нескінченною працею над ідеальним контентом перед публікацією та швидким виведенням його з бородавками, я схиляюся до останнього варіанту. Тож я розраховую на те, що ви дасте мені знати, коли я помилився.

## Забігаючи наперед до жовтня

Зараз я працюю над 5 моделями. І всі вони готові до того моменту, коли мені потрібно зробити їх, щоб переконатися, що вони працюють за призначенням. Спочатку муслін, а потім справжній.

Для мене це трохи вузьке місце, тому що мені доводиться довго добиратися на роботу, тому мій час для шиття зазвичай обмежений вихідними.

Єдиний спосіб прискорити процес випуску патернів, який я бачу, - це залучити людей до тестування патернів. Я не думаю, що можу просити людей про це, тому що це тестування на ранній стадії. Не кажучи вже про те, що мені нічого запропонувати їм, щоб підсолодити угоду. Що я вам дам, безкоштовний шаблон?

Проте, на випадок, якщо хтось із вас захоче допомогти, зробивши муслін і повідомивши мені, як все пройшло, ось що зараз на моїй креслярській дошці:

 - Чоловічий брючний блок, який має бути кращим за Theo(dore)
 - Колодку для чоловічих джинсів з кантами
 - Худі на блискавці для чоловіків
 - Зимове пальто
 - Викрійка легінсів унісекс

Якщо хтось із вас захоче зробити один з них в якості тесту, [дайте мені знати](/contact), це б мені дуже допомогло. 
