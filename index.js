
const switchLabel = document.querySelector('.header__mode-label')
const headerSwitch = document.querySelector('.header__mode-switch')

/**
 * Toggle light/ dark mode
 */
const toggleSwitch = () => {
    const checked = headerSwitch.getAttribute('aria-checked') === 'true'

    headerSwitch.setAttribute('aria-checked', !checked)
    switchLabel.textContent = `${!checked ? 'Dark' : 'Light'} Mode`

    document.body.classList.toggle('dark')

    headerSwitch.focus()
}

headerSwitch.addEventListener('click', toggleSwitch)