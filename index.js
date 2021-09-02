
/**
 * Toggle using button
 */

// const switchLabel = document.querySelector('.header__mode-label')
// const headerSwitch = document.querySelector('.header__mode-switch')

// /**
//  * Toggle light/ dark mode
//  */
// const toggleSwitch = () => {
//     const checked = headerSwitch.getAttribute('aria-checked') === 'true'

//     headerSwitch.setAttribute('aria-checked', !checked)
//     switchLabel.textContent = `${!checked ? 'Dark' : 'Light'} Mode`

//     document.body.classList.toggle('dark')

//     headerSwitch.focus()
// }

// headerSwitch.addEventListener('click', toggleSwitch)



/**
 * Toggle using radio buttons
 */
const switchRadios = document.querySelectorAll('.header__switch-toggle')

const toggleSwitch = () => {
    document.body.classList.toggle('dark')
}

for (let radio of switchRadios) {
    radio.addEventListener('change', toggleSwitch)
}