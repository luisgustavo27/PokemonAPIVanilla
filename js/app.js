

document.addEventListener('DOMContentLoaded',()=>{
    for (let i = 1; i <= 150; i++) {
        fetchData(i);
    }
})

const fetchData = async(id)=>{
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        const pokemon ={
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            hp : data.stats[0].base_stat,
            experiencia: data.base_experience,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat,

        }
        pintarCard(pokemon);
    } catch (error) {
        console.log(error);
    }
}

const pintarCard = (pokemon)=>{
    const flex = document.querySelector('.colContenedor')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment();
    clone.querySelector('.card-body-img').setAttribute('src',pokemon.img)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.hp}</span>`
    clone.querySelector('.card-body-text').textContent = `${pokemon.experiencia} Exp`
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque +'K'
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.defensa +'K'
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.especial +'K'

    flex.appendChild(clone)
    flex.appendChild(fragment)



}

