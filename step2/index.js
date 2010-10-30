Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        var panel = new Ext.Panel({
            fullscreen: true,
            layout: { //specify layout for items
                type: 'vbox',  //auto, card, fit, hbox, vbox
                align: 'start' //center, end, start, stretch
            },
            items: [{ //another way to place items in a panel
                html: 'Hello First', 
                style: 'background-color: #fee',
            },
            {
                html: 'Hello Second', 
                style: 'background-color: #eef',
            }]
        });
    }
});