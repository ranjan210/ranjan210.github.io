import {api} from "../config.js"


var converter = new showdown.Converter()

async function getBlogs(){
    console.log(api)
    let resp = await fetch(api)
    let data = resp.json()
    return data
}

async function addBlogs(){
    let blog = await getBlogs()
    blog.forEach(element => {
        let html = converter.makeHtml(element.article)
        document.getElementById("blogs").innerHTML += html
        document.getElementById("blogs").innerHTML += "<hr>"
      
    });
}

addBlogs()