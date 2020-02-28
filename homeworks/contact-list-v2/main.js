$(function() {
    const CONTACTS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts';
    
    let contacts = [];

    const templateContact = $('#templateContact').html();
    const $listContacts = $('#listContacts');
    const $inputForm = $('.input__form');
    const dialog = $('#formContact').dialog({
        autoOpen: false,
        height: 350,
        width: 350,
        modal: true,
        buttons: {
            Save: function() {
                saveBtnClick();
                dialog.dialog('close');
            },
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            form[0].reset();
        }
    });
    const form = dialog.find('form').on('submit', onFormSubmit);

    $('.add__btn').on('click', () => dialog.dialog('open'));
    
    $listContacts.on('click', '.delete__btn', onDeleteClick);
    $listContacts.on('click', '.edit__btn', onEditClick);

    init();

    function init() {
        getContacts();
    }

    function getContacts() {
        fetch(CONTACTS_URL)
            .then(resp => resp.json())
            .then(setContacts)
            .then(renderContactsList);
    }

    function setContacts(data) {
        return (contacts = data);
    }
    
    function renderContactsList(data) {
        listContacts.innerHTML = '';
    
        data.forEach(renderContact);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        addContact();
    }

    function addContact() {
        const contact = {};

        form.serializeArray().forEach(v => (contact[v.name] = v.value));
        contact.id = Date.now();
        contacts.push(contact);
        renderContact(contact);
        saveContact(contact);
    }

    function renderContact(contact) {
        const $contact = $(
            templateContact
                .replace('{{id}}', contact.id)
                .replace('{{name}}', contact.name)
                .replace('{{surname}}', contact.surname)
                .replace('{{email}}', contact.email)
                .replace('{{phone}}', contact.phone)
                .replace('{{date}}', contact.date)
            );
        $listContacts.append($contact);
    }

    function onDeleteClick() {
        const $contact = $(this).closest('.contact');
        const contactId = $contact.data('id');

        $contact.remove();
        deleteContact(contactId);
    }
    
    function deleteContact(id) {
        fetch(`${CONTACTS_URL}/${id}`, {
            method: 'DELETE'
        });
        contacts = contacts.filter(item => item.id !== id);
    } 
    
    function saveBtnClick() {
        const contact = getNewContact();
        if (contact.id) {
            updateContact(contact);
        } else {
            addContact(contact);
        }
    }

    function getNewContact() {
        const obj = {};
        for (let i = 0; i < $inputForm.length; i++) {
            obj[$inputForm[i].name] = $inputForm[i].value;
        }
        return obj;
    }

    function updateContact(contact) {
        fetch(`${CONTACTS_URL}/${contact.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        contacts = contacts.map(item => (item.id == contact.id ? contact : item));
        renderContactsList(contacts);
    }

    function onEditClick() {
        const $contact = $(this).closest('.contact');
        const contactId = $contact.data('id');
        
        editContact(contactId);
        dialog.dialog('open');
    }

    function editContact(id) {
        const contact = contacts.find(item => item.id == id);
        fillForm(contact);
    }
    
    function fillForm(contact) {
        for (let i = 0; i < $inputForm.length; i++) {
            $inputForm[i].value = contact[$inputForm[i].name];
        }
    }
    
    function saveContact(contact) {
        fetch(`${CONTACTS_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
    }
        
});