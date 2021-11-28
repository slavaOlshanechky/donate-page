import {settings as currency} from '../core/constants/settings'
import * as utils from '../core/utils/index'

export default class DonateForm {
    #formEl
    #totalAmount

    constructor(totalAmount, createNewDonate) {
        this.#totalAmount = totalAmount
        this.createNewDonate = createNewDonate
        this.#formEl = document.createElement('form')

    }

    render() {
        this.#formEl.className = 'donate-form'

        const h1El = document.createElement('h1')
        h1El.id = 'total-amount'
        h1El.textContent = `${this.#totalAmount}${currency.currency}`

        const labelEl = document.createElement('label')
        labelEl.className = 'donate-form__input-label'
        labelEl.textContent = `Введите сумму в ${currency.currency}`

        const inputEl = document.createElement('input')
        inputEl.className = 'donate-form__donate-input'
        inputEl.name = 'amount'
        inputEl.type = 'number'
        inputEl.max = '100'
        inputEl.min = '0'
        inputEl.required = true

        labelEl.append(inputEl)

        const buttonEl = document.createElement('button')
        buttonEl.className = 'donate-form__submit-button'
        buttonEl.type = 'submit'
        buttonEl.textContent = 'Задонатить'

        this.#formEl.append(h1El, labelEl, buttonEl)
        return this.#formEl

    }

    updateTotalAmount = (newAmount) => {
        const totalAmount = document.querySelector('#total-amount')
        totalAmount.textContent = `${newAmount}${currency.currency}`

    }

    event() {
        const donateForm = document.querySelector('.donate-form')
        donateForm.addEventListener('submit', (event) => {
            const donateFormInput = document.querySelector('.donate-form__donate-input')
            event.preventDefault();
            if (donateFormInput.value.trim() !== '') {
                const newDonate = {
                    date: utils.getFormattedTime(new Date()),
                    amount: donateFormInput.value.trim()
                }
                this.createNewDonate(newDonate)
                donateFormInput.value = ''
            }

        })
    }

}
