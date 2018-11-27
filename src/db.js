var faker = require('faker');
var _ = require('lodash');

module.exports = function() {
  var data = {
    categories: [],
    posts: [],
    users :[],
    navlinks : []
  };

  // Create categories
  for (var i = 1; i <= 3; i++) {
    data.categories.push({
      id: i,
      name: _.capitalize(faker.lorem.word())
    });
  }

  // Create posts
  for (var i = 1; i <= 5; i++) {
    data.posts.push({
      id: i,
      category_id: _.shuffle(data.categories)[0].id,
      title: faker.lorem.sentence().slice(0,-1),
      body: faker.lorem.lines()
    });
  }
  
 //Create posts
  for (var i = 1; i <= 5; i++) {
    data.users.push({
      id: i,
      firstName:'firstName-'+i, 
      lastName:'lastname-'+i
    });
  }

  data.navlinks.push({
                  id: "10000083",
                  label: "Home",
                  name: "",
                  value: "",
                  flag: "",
                  image: "HOME",
                  parentImage: "HOME",
                  toppanelImage: "HOME",
                  token: "",
                  loginId: "",
                  companyId: "",
                  action: "",
                  link: "javascript:doLPHome(\u0026#39;HOME\u0026#39;,\u0026#39;\u0026#39;)",
                  type: ""
                 },{
                  id: "10000084",
                  label: "Administration",
                  name: "",
                  value: "",
                  flag: "",
                  image: "Administration",
                  parentImage: "Administration",
                  toppanelImage: "Administration",
                  token: "",
                  loginId: "",
                  companyId: "",
                  action: "",
                  link: "javascript:doLPHome(\u0026#39;Administration\u0026#39;,\u0026#39;\u0026#39;)",
                  type: ""
                 });

   return data;
}();