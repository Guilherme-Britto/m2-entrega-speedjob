
function render(array, sectionPlace) {

    const section = document.querySelector(`#${sectionPlace}`)

    for(let i = 0; i < array.length; i++){
        const card = createCard(array[i])
        console.log(card)
        console.log(section)
        section.appendChild(card)
    }
}



render(frontEndJobs, "frontend__section")
render(backEndJobs, "backend__section")


function createCard(element) {
    const card__container = document.createElement('div')

    const card__header = document.createElement('div')
    const card__descprition = document.createElement('p')
    const type__container = document.createElement('div')

    const h2 = document.createElement('h2')
    const card__info = document.createElement('div')

    const h3 = document.createElement('h3')
    const info__place = document.createElement('p')

    const type = document.createElement('span')
    const type2 = document.createElement('span')



    card__container.classList.add('card__container')

    card__header.classList.add('card__header')
    card__descprition.classList.add('card__descprition')
    type__container.classList.add('type__container')

    card__info.classList.add('card__info')

    info__place.classList.add('info__place')

    type.classList.add('type')
    type2.classList.add('type')



    card__container.append(card__header, card__descprition, type__container)
    card__header.append(h2, card__info)
    type__container.append(type, type2)

    card__info.append(h3, info__place)


    h2.innerText = "G"
    h3.innerText = element.title
    info__place.innerText = "Curitiba - Paraná"
    card__descprition.innerText = element.descrription
    type.innerText = element.modality[0]
    type2.innerText = element.modality[1]

    return card__container
}


/* <section class="card__section" id="frontend__section">
<div class="card__container">
    <div class="card__header">
        <h2>G</h2>
        <div class="card__info">
            <h3>Defunsenvolvedor Frontend</h3>
            <p>Curitiba - Paraná</p>
        </div>
    </div>
    <p class="card__descprition">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    <div class="type__container">
        <span class="type">Full Time</span>
        <span class="type">Remote</span>
    </div>
</div> */