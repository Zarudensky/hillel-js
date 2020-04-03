import TodoCollection from '../model/collection';
import { todoUrl } from '../config';
import ViewList from '../view/list';
import ViewForm from '../view/form';

export default class Controller {
    constructor() {
        this.collection = new TodoCollection(todoUrl);
        this.ViewList = new ViewList({
            onDelete: id => {
                this.collection.delete(id).then(() => this.renderData());
            },
            onToggle: id => {
                this.collection
                    .get(id)
                    .toggle()
                    .then(() => this.renderData());
            }
        });
        this.ViewForm = new ViewForm({
            onSave: data => {
                this.collection.add(data).then(() => this.renderData());
            }
        });
        this.container = document.getElementById('root');
        this.container.append(this.ViewList.el);
        this.container.append(this.ViewForm.el);
        this.refreshData();
    }

    refreshData() {
        this.collection.fetch().then(() => this.renderData());
    }

    renderData() {
        this.ViewList.render(this.collection.list);
    }
}