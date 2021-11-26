import moment from "moment";

export const calculateSumOfNumbers = (numbers) => {
    return numbers.reduce((acc, item) =>
            acc + item.amount
        , 0)
}


export const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')

}
