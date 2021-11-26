import DonateForm from "./donate-form";
import {DonateList} from "./donate-list";
import * as utils from '../core/utils/index'
import {mockDonates} from '../core/constants/settings'

export default class App {
    #donateForm
    #donateList
    #state



    constructor() {

        this.#state = {
            donates: mockDonates,
            totalAmount: utils.calculateSumOfNumbers(mockDonates)
        }

        this.#donateList = new DonateList(this.#state.donates)
        this.#donateForm = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this))
    }

    createNewDonate(newDonate) {
        this.#state.donates.push(newDonate)
        this.#state.totalAmount += Number(newDonate.amount)
        this.#donateList.updateDonates(newDonate)
        this.#donateForm.updateTotalAmount(this.#state.totalAmount)
    }


    run() {
        document.body.textContent = 'Hello World'
        document.body.append(this.#donateForm.render())
        document.body.append(this.#donateList.render())
        this.#donateForm.event()

    }


}
