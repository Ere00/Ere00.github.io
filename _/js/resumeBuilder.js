$(document).ready(function()
{
   header.init();
});


var header = 
{
    init: function()
    {
       
        var template = "<h1>{{header}}<br> {{name}}</h1>  <p>Current job is: {{occupation}}</p>";
        var html = Mustache.to_html(template, me);
        $('#header').html(html);
   
    }
}


var me =
{
    header: "Curriculum vitae",
    name: "Erno Tuovinen",
    occupation: "Front-End Web Developer",
    jobs:
    [
        
    ]
}