Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        var tab1 = new Ext.Component({ //One way to specify components
            title: 'First',
            html: 'Hello First', 
            style: 'background-color: #fee'
        });
        var panel = new Ext.TabPanel({
            fullscreen: true,
            items: [
                tab1,
                { //Shortcut to specify components
                    title: 'Second',
                    html: 'Hello Second', 
                    style: 'background-color: #eef',
                }                    
            ]
        });
    }
});