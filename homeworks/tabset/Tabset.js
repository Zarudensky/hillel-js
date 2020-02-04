"use strict";

class Tabset {
    constructor(container) {
        this.container = container;
        this.init();
    }

    static TABSET_CLASS = 'tabset';
    static CONTEINER_CLASS = 'tabset__conteiner';
    static TABS_CLASS = 'tabset__tabs';
    static TITLE_CLASS = 'tabset__title';
    static ACTIVE_CLASS = 'active';
    static BUTTONS_CLASS = 'tabset__buttons';

    init() {
        this.wrapContainer();
        this.copyTitles();
        this.addEventListener();
        this.addButtons();
        this.show(0);
    }

    wrapContainer() {
        this.titlesList = document.createElement('div');
        this.titlesList.className = Tabset.TABS_CLASS;

        const wrap = document.createElement('div');
        wrap.className = Tabset.CONTEINER_CLASS;
        wrap.appendChild(this.titlesList);

        this.container.parentNode.insertBefore(wrap, this.container);
        wrap.appendChild(this.container);

        this.container.classList.add(Tabset.TABSET_CLASS);
    }

    copyTitles() {
        const titles = this.container.querySelectorAll(`.${Tabset.TITLE_CLASS}`);
        Array.prototype.forEach.call(titles, el => this.titlesList.appendChild(el));
    }
    
    addEventListener() {
        this.titlesList.addEventListener('click', e => this.onTitleClick(e));
    }

    addButtons() {
        const btnsContainer = document.createElement('div');
        btnsContainer.className = Tabset.BUTTONS_CLASS;

        const prevBtn = document.createElement('button');
        prevBtn.textContent = '< Prev';
        prevBtn.className = 'tabset__btn prev';
        prevBtn.addEventListener('click', () => this.prev());

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next >';
        nextBtn.className = 'tabset__btn';
        nextBtn.addEventListener('click', () => this.next());

        btnsContainer.append(prevBtn);
        btnsContainer.append(nextBtn);

        this.titlesList.append(btnsContainer);
    }

    onTitleClick(e) {
        const titleIndex = Array.prototype.indexOf.call(
            this.titlesList.children,
            e.target
        );

        if (titleIndex >= 0) {
            this.show(titleIndex);
        }
    }

    show(index) {
        if (!this.titlesList.children[index]) {
            return;
        }

        this.hide(this.activeIndex);
        this.activeIndex = index;

        this.titlesList.children[index].classList.add(Tabset.ACTIVE_CLASS);
        this.container.children[index].classList.add(Tabset.ACTIVE_CLASS);
    }

    hide(index) {
        if (!this.titlesList.children[index]) {
            return;
        }
        this.titlesList.children[index].classList.remove(Tabset.ACTIVE_CLASS);
        this.container.children[index].classList.remove(Tabset.ACTIVE_CLASS);
    }

    hideAll() {
        Array.prototype.forEach.call(
            this.titlesList.children,
            (titleEl, index) => {
                this.hide(index);
            }
        );
    }

    next() {
        let newIndex = this.activeIndex + 1;

        if (newIndex >= this.titlesList.children.length - 1) {
            newIndex = 0;
        }

        this.show(newIndex);
    }

    prev() {
        let newIndex = this.activeIndex - 1;

        if (newIndex < 0) {
            newIndex = this.titlesList.children.length - 2;
        }

        this.show(newIndex);
    }
}