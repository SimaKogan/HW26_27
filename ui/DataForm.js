export class DataForm {
    #formElement;
    #inputElements;
    #dateFromElement;
    #dateToElement;
    #hoursFromElement;
    #hoursToElement;
    #errorElement;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#dateFromElement = document.getElementById(params.idDateFrom);
        this.#dateToElement = document.getElementById(params.idDateTo);
        this.#hoursFromElement = document.getElementById(params.idHoursFrom);
        this.#hoursToElement = document.getElementById(params.idHoursTo);
        this.#errorElement = document.getElementById(params.idError);
    }
    addHandler(processFunc) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const obJ = Array.from(this.#inputElements).reduce((res, cur) => {
                res[cur.name] = cur.value;
                return res;
            }, {});
            processFunc(obJ);
        })
    }
}