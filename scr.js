document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const popupContainer = document.getElementById("popup-container");
    const popupText = document.getElementById("popup-text");
    const closeBtn = document.getElementById("close-btn");

    // Дата начала календаря (18 декабря)
    const startDate = new Date("2024-12-18");
    const today = new Date();
    const dayDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1; // Сколько дней прошло





const hiddenMessage = `
Привет, кодер! Не порти себе вайб — не смотри наперед. Если ты это читаешь, значит ты точно зашел не туда. Но что поделать — раз открыл, вот тебе пара советов: 

1. Код всегда проще, чем кажется.
2. Баги — это не ошибки, это скрытые фичи. 
3. Не бойся делать Ctrl+Z!

Удачи с кодом! 🔥
`;


function showEasterEgg() {
    alert(hiddenMessage);
}




















    


    
    const dayMessages = {
        1: `Привет, дружище! Сегодня день улыбок! Давай улыбнёмся всем вокруг, даже если мир не всегда радужный. Улыбка – это маленький, но мощный способ сделать день ярче. Не забывай, твоя доброта может изменить чью-то жизнь. Так что улыбайся чаще, это заразительно!`,
        2: `Задание на сегодня: напиши своему близкому человеку что-то приятное. Мы часто забываем, как важно говорить тем, кого мы любим, как сильно их ценим. Отправь сообщение, пусть оно будет самым тёплым и искренним. Ты удивишь этого человека, и он точно запомнит этот момент.`,
        3: `Интересный факт: в Финляндии люди прыгают в ледяное озеро после сауны! Это не только невероятно бодрит, но и помогает укрепить здоровье. Может, это будет твоим вдохновением на сегодня: делать что-то неожиданное и смелое, что принесёт тебе силы и радость.`,
        4: `Если ты ищешь настроение, посмотри мультфильм "Рождественская история". Он создаёт атмосферу праздника и тепла. Включи его, и пусть вокруг тебя будет волшебство. Это твой шанс сбежать от повседневности и погрузиться в мир чудес.`,
        5: `Сегодня посмотрим "Один дома"! Этот фильм стал символом праздников для многих поколений. Он напоминает нам, как важно быть вместе с семьей и радоваться жизни. Так что давай сделаем этот вечер по-настоящему уютным и весёлым.`,
        6: `Сегодня предлагаю заняться украшением комнаты или рабочего места. Ты ведь знаешь, как важно создавать вокруг себя атмосферу, в которой хочется жить. Декор, гирлянды, свечи... Сделай так, чтобы твой мир стал немного ярче. Это приятное занятие сделает день особенным.`,
        7: `Ты знал, что самый большой снеговик в мире был высотой 37 метров? Вдохновляющий факт, правда? Это напоминает мне, что даже самые невероятные мечты могут стать реальностью. Если ты чувствуешь вдохновение, почему бы не начать что-то грандиозное прямо сейчас?`,
        8: `Сегодня посмотри "Эльфа" — отличный фильм для зимнего вечера. Он точно создаст у тебя новогоднее настроение и заставит поверить в чудеса. Пусть этот вечер будет полон веселья и света, как в этом фильме. Возьми попкорн и наслаждайся!`,
        9: `Пусть твой день будет таким же ярким, как огоньки на новогодней ёлке! Это время, когда хочется радоваться каждому моменту. Пусть он будет полон тепла и смеха. Не забывай, что в этой жизни главное — не торопиться, а ценить каждый момент.`,
        10: `Задание на день: испеки праздничные печенья с семьёй или друзьями. Это будет не только вкусно, но и весело! Печенье — это не просто лакомство, а маленькая традиция. Устроим весёлую кулинарную авантюру? Уверен, это доставит тебе массу радости!`,
        11: `Вот тебе интересный факт: северный олень — единственный вид оленей, где самки тоже носят рога зимой. Думал, что только самцы это делают, а оказывается, это необычное исключение в природе! Так что, если вдруг встретишь оленя, будет о чём поговорить 😉`,
        12: `Напиши сегодня список своих целей на следующий год. Это не просто бумага с планами, а твой путеводитель на будущее. Пусть твои мечты будут смелыми, а цели — реалистичными. Ты можешь всё!`,
        13: `Знаешь, что самый холодный день на Земле был в Антарктиде — -89.2 °C? Представь, как это ощущается. Пусть твой день будет гораздо теплее, чем это! Я надеюсь, что ты найдешь тепло в своих мыслях, в общении с близкими и в самых простых вещах.`,
        14: `С наступающим Новым Годом! Сегодня — день для того, чтобы ощутить атмосферу праздника и радости. Пусть этот день будет полон ярких эмоций и тёплых встреч! Верь в чудеса, они уже рядом.`,
        15: `С Новым Годом! Пусть этот год будет для тебя самым ярким и успешным. Пусть сбудется всё, о чём ты мечтаешь! 🎉`,
        16: `Пусть этот день принесёт тебе уют и радость! Всё, что тебе нужно, – это немного покоя и тепла. Возьми чашку горячего чая, закутайся в плед и просто насладись моментом. Я надеюсь, что этот день будет полон приятных сюрпризов для тебя.`,
        17: `Пусть этот день принесет тепло твоему сердцу! Желаю тебе почувствовать этот момент и насладиться им. Это твой день, и ты заслуживаешь всего самого лучшего! Пусть даже мелочи будут приносить радость.`,
        18: `Сегодня — хороший день для того, чтобы посмотреть "Корону". Этот сериал погружает в мир королевских тайн, драм и величия. Погрузись в атмосферу истории и наслаждайся каждым моментом, как будто ты сам в этом мире.`,
        19: `В Австралии Рождество празднуют на пляже, ведь там лето! Я всегда восхищался этим. Зачем сидеть дома, когда можно наслаждаться солнцем и морем в праздничный день? Мечтай о путешествиях и о том, как однажды проведёшь Рождество в другом уголке мира!`,
        20: `Пусть все твои мечты сбываются! Я верю в тебя, и знаю, что ты можешь добиться всего, о чём мечтаешь. Этот день — твой шанс начать делать шаги к большому. Пусть каждый день приносит тебе что-то важное и вдохновляющее! Это последняя ячейка, так что поздравляю тебя! ))))`
    };

    // Обрабатываем ячейки календаря
    const dayCells = document.querySelectorAll(".calendar div");
    dayCells.forEach((cell) => {
        const day = parseInt(cell.id); 

        if (day <= dayDiff) {
            
            cell.classList.add("open");
            cell.style.backgroundImage = `url(Days/${day}.png)`;
            cell.addEventListener("click", () => {
                const dayName = getDayName(startDate, day);  
                const date = getDateString(startDate, day); 
                openPopup(dayMessages[day] || "Сюрприз! Сегодня особенный день!", dayName, date);
            });
        } else {
            
            cell.classList.add("locked");
            const lockedImages = {
                small: 'locked-small.png',
                medium: 'locked-medium.png',
                large: 'locked-large.png'
            };
            if (cell.classList.contains("small")) {
                cell.style.backgroundImage = `url(${lockedImages.small})`;
            } else if (cell.classList.contains("medium")) {
                cell.style.backgroundImage = `url(${lockedImages.medium})`;
            } else if (cell.classList.contains("large")) {
                cell.style.backgroundImage = `url(${lockedImages.large})`;
            }
        }
    });

   
    function getDayName(startDate, day) {
        const dayOfMonth = new Date(startDate);
        dayOfMonth.setDate(startDate.getDate() + day - 1); // Устанавливаем нужную дату
        const options = { weekday: 'long' };  // Для получения полного названия дня недели
        return dayOfMonth.toLocaleDateString('ru-RU', options);  
    }


    function getDateString(startDate, day) {
        const dayOfMonth = new Date(startDate);
        dayOfMonth.setDate(startDate.getDate() + day - 1); 
        let month = dayOfMonth.getMonth() + 1; // Получаем месяц
        let date = dayOfMonth.getDate(); // Получаем день месяца
        if (month === 12) {
            return `${date} декабря`;
        } else {
            return `${date} января`; 
        }
    }

  
    function openPopup(message, dayName, date) {
        popupText.innerHTML = `<h2>${dayName}, ${date}</h2><p>${message}</p>`;
        popupContainer.classList.add("open");
    }

   
    closeBtn.addEventListener("click", () => {
        popupContainer.classList.remove("open");
    });
});


