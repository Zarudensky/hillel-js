import { viewTemplate, itemTemplate } from '../templates';
import { createElementFromHTML } from '../utils';

export default class View {
    constructor(config) {
        this.el = this.createElememt();
        this.config = config;

        this.el.addEventListener('submit', this.onFormSubmit.bind(this));

        this.list = this.el.querySelector('tbody');
        this.list.addEventListener('click', this.onListClick.bind(this));
        this.inputs = this.el.querySelectorAll('input');
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.config.onSave();
    }

    onListClick(e) {
        switch (true) {
            case e.target.classList.contains('delete-btn'):
                this.config.onDelete(e.target.closest('.user-item').dataset.id);
                break;
            case e.target.classList.contains('edit-btn'):
                console.log(
                    'onEdit',
                    e.target.closest('.user-item').dataset.id
                );
                this.config.onEdit(e.target.closest('.user-item').dataset.id);
                break;
        }
    }

    createElememt() {
        return createElementFromHTML(viewTemplate);
    }

    fillForm(user) {
        Array.prototype.forEach.call(this.inputs, input => {
            input.value = user[input.name];
        });
    }

    render(data) {
        this.list.innerHTML = data.map(this.renderItem).join('\n');
    }

    renderItem(user) {
        return itemTemplate
            .replace('{{id}}', user.id)
            .replace('{{name}}', user.name)
            .replace('{{email}}', user.email)
            .replace('{{surname}}', user.surname || '-');
    }
}