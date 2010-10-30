Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        var topChanger = new Ext.Carousel({
            items: [
                {style: 'background-color: #7bb300'},
                {style: 'background-color: #3b7e00'},
                {style: 'background-color: #0e3e00'}
            ]
        });
        var centerChanger = new Ext.Carousel({
            items: [
                {style: 'background-color: #7bb300'},
                {style: 'background-color: #3b7e00'},
                {style: 'background-color: #0e3e00'}
            ]
        });
        var bottomChanger = new Ext.Carousel({
            items: [
                {style: 'background-color: #7bb300'},
                {style: 'background-color: #3b7e00'},
                {style: 'background-color: #0e3e00'}
            ]
        });
        var panel = new Ext.TabPanel({
            fullscreen: true,
            layout: { 
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {flex: 1},
            items: [topChanger, centerChanger, bottomChanger]
        });
    }
});