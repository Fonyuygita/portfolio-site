export default{
    name:'post',
    type:'document',
    title:'Post',

    fields:[
        {
            name:'title',
            type:'string',
            title:'Title'
        },

        {
            name:'overview',
            type:'string',
            title:'Overview'
        },

        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title'
            }

        },

        {
            name:'content',
        type:'array',
        title:'Content',
        of:[
            {type:'block'},
            {type:'image',
        fields:[
            // a;t for seo purposes and people with dissability
            {type:'text', name:'alt', title:'Alternative Text'}
        ]
        }
        ]
        }
    ]
}