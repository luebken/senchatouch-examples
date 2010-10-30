Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        Ext.regModel('Contact', {
            fields: ['text']
        });

        var store = new Ext.data.JsonStore({
            model  : 'Contact',
            sorters: 'text',
            data: [
                {text: 'Tommy'},
                {text: 'Rob'},
                {text: 'Ed'},
                {text: 'Jamie'},
                {text: 'Aaron'},
                {text: 'Dave'},
                {text: 'Michael'},
                {text: 'Abraham'},
                {text: 'Jay'},
                {text: 'Tommy'},
                {text: 'Rob'},
                {text: 'Ed'},
                {text: 'Jamie'},
                {text: 'Aaron'},
                {text: 'Dave'}
            ]
        });

        var list = new Ext.List({
            tpl: '<tpl for="."><div class=item>{text}</div></tpl>',
            itemSelector: 'div.item',
            singleSelect: true,
            store: store,
            width        : 350,
            height       : 370,
        });
        
        var panel = new Ext.Panel({
            fullscreen: true,
            items: [list]
        });
    }
});