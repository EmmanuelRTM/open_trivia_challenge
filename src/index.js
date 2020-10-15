import './styles/main.scss'
import bootstrap from 'bootstrap'
import Trivia from './Trivia';
import axios from 'axios';

const trivia = new Trivia ();

function getCategoryIDByName(category){
    let urlCateg=`https://opentdb.com/api_category.php`;
    //console.log(category)
    axios.get(urlCateg)
    .then((response)=>{
        let answer= response.data.trivia_categories;
        for (let i =0;i< answer.length;i++){
            if(answer[i].name==category){
                return answer[i].id;
            }
        }
        //console.log(answer)
    }).catch((error)=>{
        console.log(error)
    })
}
//getCategoryNameById("General Knowledge");
function getCategoryNameByID(category){// 9 to 32
    let urlCateg=`https://opentdb.com/api_category.php`;
    //console.log(category)
    axios.get(urlCateg)
    .then((response)=>{
        let answer= response.data.trivia_categories;
        for (let i =0;i< answer.length;i++){
            if(answer[i].id===category){
                return answer[i].name
            }
        }
        //console.log(answer)
    }).catch((error)=>{
        console.log(error)
    })
}
function getListOfCategories(){
    let urlCateg=`https://opentdb.com/api_category.php`;
    let listCateg=[]
    //console.log(category)
    axios.get(urlCateg)
    .then((response)=>{
        let answer= response.data.trivia_categories;
        for (let i =0;i< answer.length;i++){
            listCateg.push(answer[i].name)
        }
        return listCateg;
        //console.log(answer)
    }).catch((error)=>{
        console.log(error)
    })
}
//getListOfCategories();

/*
function createURL(categ,diff,typ){
    let url_base=`https://opentdb.com/api.php?amount=10`;
    let final_url=`${url_base}`;
    if(categ>8 && categ <33){
        final_url=`${final_url}&category=${categ}`;
    }
    if(diff == 'easy'||diff == 'medium'||diff == 'hard' ){
        final_url=`${final_url}&difficulty=${diff}`;
    }
    if(typ == 'multiple'||typ == 'boolean' ){
        final_url=`${final_url}&type=${typ}`
    }
    let info=getAPIbyURL(final_url);
    //console.log(info)
    return info;
}

function getAPIbyURL(final_url){
    //axios.get('https://jsoneditoronline.org/#left=local.vuzuji&right=local.wocowu')

    axios.get(final_url)
        .then((response) => {
            let answer=response.data.results;
            console.log(answer)
            return answer;
        })
        .catch( (err) =>{
//aqui se pasa el error
//console.log("aca el error", error.response.status)
        })
}
*/
function createURLandGetAPI(categ,diff,typ){
    let url_base=`https://opentdb.com/api.php?amount=10`;
    let final_url=`${url_base}`;
    if(categ>8 && categ <33){
        final_url=`${final_url}&category=${categ}`;
    }
    if(diff == 'easy'||diff == 'medium'||diff == 'hard' ){
        final_url=`${final_url}&difficulty=${diff}`;
    }
    if(typ == 'multiple'||typ == 'boolean' ){
        final_url=`${final_url}&type=${typ}`
    }
    axios.get(final_url)
        .then((response) => {
            let answer=response.data.results;
            //console.log(answer)
            trivia.addQuestions(answer);
            console.log(trivia.getQuestion(1))//example of using the functions
           // return answer;
        })
        .catch( (err) =>{
//aqui se pasa el error
//console.log("aca el error", error.response.status)
        })
}
/*
function init (){
    // aqui voy a hacer la llamda de la api por los datos
    const trivia = new Trivia (createURL(5,"medium","h"));
    trivia.start();
}*/
//let listTrivia=createURL(5,"medium","h")
createURLandGetAPI(5,"medium","h")
//console.log(listTrivia)
console.log("Trivia");
//init();

