// TODO
// This file contains all functions that will be used to interact with the database are written here
// Please write here a generic functions that can be used everywhere
// Functions here written to perform the CRUD operation 
// Function's names must be lowCamelCase 
// Don't delete this comments
// By Waleed Jubeh
function getData(storeName) {
    return JSON.parse(sessionStorage.getItem("userData"));
}

function saveData(storeName, data) {
    sessionStorage.setItem(storeName, JSON.stringify(data));
}
let myNewsPage = [{
    id: 1,
    title: "test is test ",
    content: "<h1>This is my first news</h1>",
    categoryId: 1,
    seoTitle: "First news",
    seoTags: "{ 'tags':{['test','sport']} }",
    seoDescription: "This is my first news",
    isActive: 1,
    isMainNews: 0,
    isUrgentNews: 1,
    createDate: new Date(),
    writerId: 1,
    _attachments: "",
},
{
    id: 2,
    title: "test is test ",
    content: "<h1>This is my first news</h1>",
    categoryId: 1,
    seoTitle: "First news",
    seoTags: "{ 'tags':{['test','sport']} }",
    seoDescription: "This is my first news",
    isActive: 1,
    isMainNews: 0,
    isUrgentNews: 1,
    createDate: new Date(),
    writerId: 1,
    _attachments: "",
},
{
    id: 3,
    title: "test is test ",
    content: "<h1>This is my first news</h1><br><ul><li>ههههه</li></ul>",
    categoryId: 1,
    seoTitle: "First news",
    seoTags: "شسيشس شسيشس شسي شسي",
    seoDescription: "This is my first news",
    isActive: 1,
    isMainNews: 0,
    isUrgentNews: 1,
    createDate: "2019-05-12",
    writerId: 1,
    _attachments: "",
},
{
    title: "الاحلال يعتقل مقدسيا مسنا",
    content: "<h1>This is my first news</h1>",
    categoryId: 3,
    seoTitle: "First news",
    seoTags: "{ 'tags':{['test','sport']} }",
    seoDescription: "This is my first news",
    isActive: 0,
    isMainNews: 1,
    isUrgentNews: 1,
    createDate: "2019-05-12",
    writerId: 1,
    _attachments: "",
    id: 4,
},

];
let categories = [{
    id: 1,
    name: "الألعاب",
    isActive: 1,
},
{
    id: 3,
    name: "الرئيسية",
    isActive: 1,
},
{
    id: 2,
    name: "الرياضة",
    isActive: 0, //غير مفعل
},
{
    id: 4,
    name: "الفن",
    isActive: 0,
}
]
let allNewsPage = [{
    title: "النصيرات أكثر المناطق هطولاً",
    content: "<h1>This is my first news</h1>",
    categoryId: 3,
    seoTitle: "First news",
    seoTags: "{ 'tags':{['test','sport']} }",
    seoDescription: "This is my first news",
    isActive: 0,
    isMainNews: 0,
    isUrgentNews: 1,
    createDate: new Date(),
    writerId: 1,
    _attachments: "",
    id: 1,
},
{
    title: "الالعاب الاولمبية قريبا",
    content: "<h1>This is my first news</h1>",
    categoryId: 2,
    seoTitle: "First news",
    seoTags: "{ 'tags':{['test','sport']} }",
    seoDescription: "This is my first news",
    isActive: 1,
    isMainNews: 1,
    isUrgentNews: 2,
    createDate: new Date(),
    writerId: 1,
    _attachments: "",
    id: 2,
},
{
    title: "أخبار الفن والفنانين والنجوم والمشاهير",
    content: "<h1>This is my first news</h1>",
    categoryId: 4,
    seoTitle: "First news",
    seoTags: "{ 'tags':{['test','sport']} }",
    seoDescription: "This is my first news",
    isActive: 1,
    isMainNews: 0,
    isUrgentNews: 0,
    createDate: new Date(),
    writerId: 1,
    _attachments: "",
    id: 3,
},
{
    title: "الاحلال يعتقل مقدسيا مسنا",
    content: "<h1>This is my first news</h1>",
    categoryId: 3,
    seoTitle: "First news",
    seoTags: "{ 'tags':{['test','sport']} }",
    seoDescription: "This is my first news",
    isActive: 1,
    isMainNews: 1,
    isUrgentNews: 1,
    createDate: new Date(),
    writerId: 1,
    _attachments: "",
    id: 4,
},
{
    title: "سلسلة العاب LEft 4 Dead تعود من جديد",
    content: "<h1>This is my first news</h1>",
    categoryId: 1,
    seoTitle: "First news",
    seoTags: "{ 'tags':{['test','sport']} }",
    seoDescription: "This is my first news",
    isActive: 0,
    isMainNews: 1,
    isUrgentNews: 1,
    createDate: new Date(),
    writerId: 1,
    _attachments: "",
    id: 5,
}
];
function updateNews(id,page) {
    let aim = null;
    let aimData = null;
    
    if(page == 0)
        aimData = myNewsPage;
    else if (page == 1)
        aimData = allNewsPage;
    for (ind in aimData)
        if (aimData[ind].id == id) {
            aim = aimData[ind];
            aim["ind"] = ind;
            aim['pageNo'] = page;
            break;
        }
    sessionStorage.setItem("userData", JSON.stringify(aim));
    window.location.href = "../addnewspage/addnewpage.html";
}