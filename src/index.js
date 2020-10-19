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
        let generated =false;
        let answer= response.data.trivia_categories;
        for (let i =0;i< answer.length;i++){
            if(answer[i].name==category){
                //console.log();
                generated =true;
                typeAndDifiicultyGenerator(answer[i].id);

            }
            if(i===answer.length-1 && generated==false){
                typeAndDifiicultyGenerator("");
            }
        }
        //console.log(answer)
    }).catch((error)=>{
        console.log(error)
       // return "problemo";
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
        console.log(listCateg) ;
        //console.log(answer)
    }).catch((error)=>{
        console.log(error)
    })
}
const listOfCateg=getListOfCategories();


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

function waitingForButtonAnswers(){
    const botonSubmit = document.getElementById('button-addon1')

        botonSubmit.addEventListener('click', function(){
            //Obtener valores del formulario.
                let catego = document.getElementById('category')//category
                let categ_val=catego.value;
                if (categ_val=='any'){
                    //trivia.setThisCategory(categ);
                    categ_val='';
                }else{
                    //trivia.setThisCategory(categ);
                }
                getCategoryIDByName(categ_val);
                /*
                if(presupuesto_val>150000){
                    //arrojara un mensaje de checa el modelo que te guste, todos estos solamente estan a tu disposicion
                    mensaje_restrictivo();
                    presupuesto_val=150000;
                }
*/
               // var idAutos=obtenerId(marca_val,modelo_val, presupuesto_val, caja_val);

                //add(autos, this.getAllList());
        })
}
function createURLandGetAPI(list){

    let categor=list[0];
    let diffi=list[1];
    let typp=list[2];
    

    let url_base=`https://opentdb.com/api.php?amount=10`;
    let final_url=`${url_base}`;
    if(categor>8 && categor <33){
        final_url=`${final_url}&category=${categor}`;
    }
    if(diffi == 'easy'||diffi == 'medium'||diffi == 'hard' ){
        final_url=`${final_url}&difficulty=${diffi}`;
    }
    if(typp == 'multiple'||typp == 'boolean' ){
        final_url=`${final_url}&type=${typp}`
    }
    axios.get(final_url)
        .then((response) => {
            let answer=response.data.results;
            //console.log(answer)
            trivia.addQuestions(answer);
            console.log(trivia.getQuestion(4))//example of using the functions

           // return answer;
            trivia.setThisCategory(categor);
            trivia.setThisDifficulty(diffi);
            trivia.setThisType(typp);
            trivia.start();

            //wait button of Ok 
            //create final button 
        })
        .catch( (err) =>{
//aqui se pasa el error
//console.log("aca el error", error.response.status)
        })
}

function typeAndDifiicultyGenerator(categ){
    console.log(categ);
    let diffi = document.getElementById('difficulty')//difficulty
    let diffi_val=diffi.value;
    if (diffi_val=='any'){
        //trivia.setThisDifficulty(diffi_val);
        diffi_val='';
    }else{
        //trivia.setThisDifficulty(diffi_val);
    }
    const diff= diffi_val;
    console.log(diff)
    

    let typo = document.getElementById('type')//type
    let type_val=typo.value;
    if (type_val=='any'){
        //trivia.setThisType(type_val);
        type_val='';
    }else{
        //trivia.setThisType(type_val);
    }
    const typ= type_val;
    console.log(typ)

    createURLandGetAPI([categ,diff,typ]);
}
/*
function init (){
    // aqui voy a hacer la llamda de la api por los datos
    const trivia = new Trivia (createURL(5,"medium","h"));
    trivia.start();
}*/
//let listTrivia=createURL(5,"medium","h")
waitingForButtonAnswers();
//console.log(listTrivia)
console.log("Trivia");
//console.log(getListOfCategories())
//init();

