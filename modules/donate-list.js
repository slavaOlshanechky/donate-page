export class DonateList {
    #donatesContainer
    #donates

    constructor(donates) {
        this.#donates = donates
        this.#donatesContainer = document.createElement('div')
    }


    updateDonates(updatedDonates) {

        const donatesContainerDonates = document.querySelector('.donates-container__donates')
        donatesContainerDonates.prepend(this.createDonateItem(updatedDonates))
    }

    createDonateItem(donates) {
        const donateItemElement = document.createElement('div')

        donateItemElement.className = 'donate-item'
        donateItemElement.textContent = donates.date

        const donateItemB = document.createElement('b')
        donateItemB.textContent = ' - ' + donates.amount
        donateItemElement.append(donateItemB)

        return donateItemElement

    }

    render() {
        this.#donatesContainer.className = 'donates-container'

        const h2El = document.createElement('h2')
        h2El.className = 'donates-container__title'
        h2El.textContent = 'Список донатов'

        const donatesContainerDonates = document.createElement('div')
        donatesContainerDonates.className = 'donates-container__donates'

        this.#donates.forEach((donateItem) => {
            donatesContainerDonates.append(this.createDonateItem(donateItem))
        })

        this.#donatesContainer.append(h2El, donatesContainerDonates)

        return this.#donatesContainer
    }
}
