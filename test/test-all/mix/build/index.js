/*<TMODJS> <MD5:6671def2a9f4db5d82bd79a59ccb8933>*/
template("index", "{{include './public/header'}} <div id=\"main\"> <h3>{{title}}</h3> <ul> {{each list}} <li><a href=\"{{$value.url}}\">{{$value.title}}</a></li> {{/each}} </ul> </div> {{include './public/footer'}}");