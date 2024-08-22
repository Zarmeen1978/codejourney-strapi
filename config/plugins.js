module.exports = ({env}) => ({
    upload:{
        config:{
        provider:'cloudinary',
        providerOptions:{
        cloud_name: 'dovrzhesz',
        api_key:'237925149497497',
        api_secret: 'z8MK7jym6stc_HECYOJaszyNMPQ',
        i18n:true,
        },
        actionOptions:{
        upload:{},
        uploadStream:{},
        delete:{},
        },
        },
        },
        

});
/* 
upload:{
config:{
provider:'cloudinary',
providerOptions:{
cloud_name:env('CLOUDINARY_NAME'),
api_key:env('CLOUDINARY_KEY'),
api_secret:env('CLOUDINARY_SECRET'),
},
actionOptions:{
upload:{},
uploadStream:{},
delete:{},
},
},
},

*/