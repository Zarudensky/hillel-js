"use strict";

class Tabset {
    constructor(el, config) {
        this.config = config || {
            hideAll: true
        };

        this.el = el;

        this.init();
    }

    static TABSET_CLASS = 'tabset';
    static TABSET_ITEM_CLASS = 'tabset-item';
    static TABSET_ITEM_TITLE_CLASS = 'tabset-item-title';
    static TABSET_ITEM_CONTENT_CLASS = 'tabset-item-content';
    static ACTIVE_ITEM_CLASS = 'active';
    
    init() {
        this.bindClasses();
        this.bindCallbacks();
    }

    bindClasses() {
        this.el.classList.add(Tabset.TABSET_CLASS);
        Array.prototype.forEach.call(this.el.children, itemEl => {
            itemEl.classList.add(Tabset.TABSET_ITEM_CLASS);
            itemEl.children[0].classList.add(
                Tabset.TABSET_ITEM_TITLE_CLASS
            );
            itemEl.children[1].classList.add(
                Tabset.TABSET_ITEM_CONTENT_CLASS
            );
        });
    }

    bindCallbacks() {
        this.el.addEventListener('click', this.onTabsetClick.bind(this));
    }

    onTabsetClick(e) {
        switch (true) {
            case e.target.classList.contains(
                Tabset.TABSET_ITEM_TITLE_CLASS
            ):
                this.onTitleClick(e.target);
                break;
        }
    }

    onTitleClick(titleElem) {
        const itemElem = titleElem.parentNode;
        const isCurrentVisible = this.isVisible(itemElem);

        if (this.config.hideAll) {
            this.hideAll();
        }

        if (!isCurrentVisible) {
            this.show(itemElem);
        } else {
            this.hide(itemElem);
        }
    }

    show(itemElem) {
        itemElem.classList.add(Tabset.ACTIVE_ITEM_CLASS);
    }

    hide(itemElem) {
        itemElem.classList.remove(Tabset.ACTIVE_ITEM_CLASS);
    }

    isVisible(itemElem) {
        return itemElem.classList.contains(Tabset.ACTIVE_ITEM_CLASS);
    }

    hideAll() {
        const visibleElements = this.el.querySelectorAll(
            '.' + Tabset.ACTIVE_ITEM_CLASS
        );

        Array.prototype.forEach.call(visibleElements, this.hide.bind(this));
    }
}