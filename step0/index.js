Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {

        var panel = new Ext.Panel({
            fullscreen: true,
            html: 'Helloworld', // Basic HTML
            style: 'background-color: #fee' //Basic styling
        });

    }
});