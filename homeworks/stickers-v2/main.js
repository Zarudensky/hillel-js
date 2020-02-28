$(function() {
    let stickers = [];
    const stickerTemplate = $('#stickerTemplate').html();
    const $board = $('#board');
    const dialog = $('#formSticker').dialog({
        autoOpen: false,
        height: 350,
        width: 350,
        modal: true,
        buttons: {
            'Create': addSticker,
            Cancel: function() {
                dialog.dialog('close');
            }
        },
        close: function() {
            form[0].reset();
        }
    });
    
    const form = dialog.find('form').on('submit', onFormSubmit);

    $('#addBtn').on('click', () => dialog.dialog('open'));
    $('#clearBtn').on('click', clearAll);
    $board.on('click', '.sticker__delete', onDeleteClick);

    init();

    function init() {
        refreshStickerList();
        renderStickerList();
    }

    function refreshStickerList() {
        stickers = getStickers();
    }

    function renderStickerList() {
        stickers.forEach(renderSticker);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        addSticker();
    }

    function onDeleteClick() {
        const $sticker = $(this).closest('.sticker');
        const stickerId = $sticker.data('id');

        $sticker.remove();
        deleteSticker(stickerId);
    }

    function clearAll() {
        localStorage.clear();
        location.reload();
    }

    function addSticker() {
        const sticker = {};

        form.serializeArray().forEach(v => (sticker[v.name] = v.value));
        sticker.id = Date.now();
        stickers.push(sticker);
        saveStickers();
        renderSticker(sticker);
        dialog.dialog('close');
    }

    function deleteSticker(id) {
        stickers = stickers.filter(sticker => sticker.id !== id);
        saveStickers();
    }

    function renderSticker(sticker) {
        const $sticker = $(
            stickerTemplate
                .replace('{{title}}', sticker.title)
                .replace('{{description}}', sticker.description)
        )
            .css({
                left: sticker.left,
                top: sticker.top,
                width: sticker.width,
                height: sticker.height
            })
            .data('id', sticker.id);
        $board.append($sticker);

        $sticker
            .draggable({
                handle: '.sticker__title',
                stop: function(e, ui) {
                    updateSticker(sticker.id, ui.position);
                }
            })
            .resizable({
                stop: function(e, ui) {
                    updateSticker(sticker.id, ui.size);
                }
            });
    }

    function updateSticker(id, changes) {
        stickers = stickers.map(sticker =>
            sticker.id != id ? sticker : { ...sticker, ...changes }
        );
        saveStickers();
    }

    function saveStickers() {
        localStorage.setItem('stickersVertionTwo', JSON.stringify(stickers));
    }

    function getStickers() {
        const stickers = localStorage.getItem('stickersVertionTwo');

        return stickers ? JSON.parse(stickers) : [];
    }
});