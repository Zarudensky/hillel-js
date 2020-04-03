export default class ViewForm {
    constructor(config) {
        this.config = config;
        this.createForm();
        this.el.addEventListener('submit', this.onSubmitBtn.bind(this));
        this.inputTitele = this.el.querySelector('#inputTask');
    }

    onSubmitBtn(e) {
        e.preventDefault();
        this.config.onSave({
            title: this.inputTitele.value
        });
    }

    createForm() {
        this.el = document.createElement('form');
        this.el.innerHTML = `
            <div class="input__block conteiner">
                <input id="inputTask" class="input__task" type="text" placeholder="Enter task">
                <button id="addTask" class="btn add__btn" type="submit">Add Task</button>
            </div>
        `;
    }
}