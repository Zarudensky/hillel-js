export default class ViewList {
    constructor(config) {
        this.config = config;
        this.createList();
    }

    createList() {
        this.el = document.createElement('div');
        this.el.className = 'list__task conteiner';
        this.el.addEventListener('click', this.onClickList.bind(this));
    }

    onClickList(e) {
        switch (true) {
            case e.target.classList.contains('delete__btn'):
                this.config.onDelete(e.target.parentNode.dataset.id);
                break;
            case e.target.classList.contains('task'):
                this.config.onToggle(e.target.dataset.id);
                break;
        }
    }

    render(data) {
        this.el.innerHTML = data.map(this.createTask).join('\n');
    }

    createTask(e) {
        const completedClass = e.completed ? 'completed' : '';
        return `
            <div class="task ${completedClass}" data-id="${e.id}">
                <div class="task__block">${e.title}</div>
                <button class="btn delete__btn" type="button">Delete</button>
            </div>
        `;
    }
}