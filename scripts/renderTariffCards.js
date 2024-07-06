const tariffData = {
    mainTariffs: [
        { title: 'Разовое посещение', img:'./assets/cardsImg/one.png' , price: '200₽ ', duration: '3 часа'},
        { title: 'Абонемент на месяц',img:'./assets/cardsImg/two.jpg' ,  price: '4999 ₽ ', duration: '30 дней' },
        { title: 'Абонемент на 3 месяца',img:'./assets/cardsImg/three.jpg' , price: '11 999 ₽ ', duration: '90 дней' },
        { title: 'Абонемент на год',img:'./assets/cardsImg/four.jpg' ,  price: '29 999 ₽ ', duration: '1 год' }
    ],
    additionalTariffs: [
        { title: 'Посещение СПА зоны',  price: '999 ₽',  },
        { title: 'Занятие с личным тренером', price: '1499 ₽',  },
        { title: 'Занятие в фитнес зоне', price: '499 ₽', },
        { title: 'Составление плана тренировок',  price: '4999 ₽',  },
        { title: 'Занятия в бассейне', price: '999 ₽',  }
    ]
};

function renderTariffCards() {
    const mainTariffsList = document.querySelector('.mainTariffsList');
    const additionalTariffsList = document.querySelector('.additionalTariffsList');
   
    tariffData.mainTariffs.forEach(tariff => {
        mainTariffsList.innerHTML += 
               `<li class='mainTariff' style='background-image: url(${tariff.img}); 
               background-size:cover';background-position: cover;'>
                <h4 class='cardTitle'>${tariff.title}</h4>
                <p class='cardPrice'>Цена: ${tariff.price}</p>
                <p class='carDur'>${tariff.duration}</p>
                
                <button class='cardBtn'>Записаться</button>
            </li>`
        ;
    });
    tariffData.additionalTariffs.forEach(tariff => {
        additionalTariffsList.innerHTML += 
            `<li class='additionalTariff'>
                <h4 class='cardTitle'>${tariff.title}</h4>
                <p class='cardPrice'>Цена: ${tariff.price}</p>
                <button class='cardBtn'>Подробнее</button>

            </li>`
        ;
    });
}

renderTariffCards();
