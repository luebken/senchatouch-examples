Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        var panel = new Ext.Panel({
            fullscreen: true,
            dockedItems: [{ //one way to place items in a panel
                html: 'Hello Bottom', 
                style: 'background-color: #fee',
                dock: 'bottom' //top, right, left or bottom
            },
            {
                html: 'Hello Top', 
                style: 'background-color: #eef',
                dock: 'top'
            }]
        });

    }
});