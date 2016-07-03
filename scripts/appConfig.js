/**
 * Created by Mahesh on 7/3/2016.
 */

app.factory('appConfig',function(){
    var leftMenu=[
        {
            id:1,
            name:'Home',
            link:'/home',
            controller:'#',
            icon:'fa fa-home',
        },
        {
            id:2,
            name:'About',
            link:'/aboutus',
            controller:'#',
            icon:'fa fa-info-circle',
        },
        {
            id:3,
            name:'Contact Us',
            link:'/contactus',
            controller:'#',
            icon:'fa fa-envelope',
        },
        {
            id:4,
            name:'Search',
            link:'/search',
            controller:'#',
            icon:'fa fa-search',
        }
    ];

    return{
        getLeftMenu:function(){
            return leftMenu;
        }
    }
});
