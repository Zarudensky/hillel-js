import Model from './Model';

export default class Collection {
    constructor(url) {
        this.url = url;
        this.list = [];

        this.setData = this.setData.bind(this);

        console.log('collection', url);
    }

    fetch() {
        console.log('fetching');
        return fetch(this.url)
            .then(response => response.json())
            .then(this.setData)
            .then(() => {
                const m = this.list[0];
                console.log(m, JSON.stringify(m));
            });
    }

    setData(list) {
        return (this.list = list.map(el => new Model(this.url, el)));
    }

    delete(id) {
        const model = this.get(id);
        return model
            .delete()
            .then(() => (this.list = this.list.filter(item => item !== model)));
        // console.log('collection delete', id, model);
    }

    get(id) {
        return this.list.find(item => item.id == id);
    }

    async add(data) {
        data.completed = false;

        const res = await fetch(`${this.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const data = await res.json();
        return this.list.push(new Model(this.url, data));
    }
}