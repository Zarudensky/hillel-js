import Collection from '../model/Collection';
import { usersUrl } from '../config';

import View from '../view/View';

export default class Controller {
    constructor() {
        this.collection = new Collection(usersUrl);
        this.view = new View({
            onDelete: id => {
                this.collection.delete(id).then(() => this.renderData());
            },
            onEdit: id => {
                const model = this.collection.get(id);

                this.view.fillForm(model);
                console.log('edit user', id);
            },
            onSave: data => {
                console.log('save', data);
                // this.collection.add(data).then(() => this.renderData());
            }
        });

        this.container = document.getElementById('root');
        this.container.append(this.view.el);

        this.refreshData();
    }

    refreshData() {
        this.collection.fetch().then(() => this.renderData());
    }

    renderData() {
        this.view.render(this.collection.list);
        console.log(this.collection.list);
    }
}