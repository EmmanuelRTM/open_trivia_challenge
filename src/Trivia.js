class Trivia{

    constructor(){
        this.questions = [];
        this.categor='';
        this.dificulty='';
        this.typo='';
    }
    addQuestions(question){
        this.questions.push(question);
    }
    setThisCategory(category){
        this.categor=category;
    }
    setThisDifficulty(difficulty){
        this.dificulty=difficulty;
    }
    setThisType(type){
        this.typo=type;
    }

    getAllList(){
        return this.questions;
    }
    getCategory(i){
        return this.questions[0][i].category;
    }
    getType(i){
        return this.questions[0][i].type;
    }
    getQuestion(i){
        return this.questions[0][i].question;
    }
    getDifficulty(i){
        return this.questions[0][i].difficulty;
    }
    getCorrectAnswer(i){
        return this.questions[0][i].correct_answer;
    }
    getIncorrectAnswer(i){
        return this.questions[0][i].incorrect_answers;
    }
    getAnswersInOne(i){
        let listOfAnswers=[]
        listOfAnswers.push(getCorrectAnswer(i))
        let incorrectAnswers= getIncorrectAnswer(i)
        for(let j=0; j< incorrectAnswers.length;j++){
            listOfAnswers.push(incorrectAnswers[j])
        }
        console.log(listOfAnswers)
        return listOfAnswers;
    }
    
    divsCartaGrande(){
        console.log("hi big")
        let infoDivs =''
        let infoDivs_i=''
        for (let i=0;i<this.questions[0].length;i++){
            //let answers = this.getAnswersInOne(i);
            let answers = []
            answers.push(this.questions[0][i].correct_answer);
            let lengthincorrect= this.questions[0][i].incorrect_answers.length
            for (let j=0;j< lengthincorrect;j++){
                answers.push(this.questions[0][i].incorrect_answers[j]);
            }
            //console.log(answers)

            infoDivs_i='<div class="card  col-7 mb-3 ">'
                            +'<div class="container">'
                            +'<section class="formulario ">'
                                    +'<div class="form-group">'

                                    +`<label for="exampleFormControlSelect1">${this.questions[0][i].question}</label>`
                                    +`<select class="form-control" id=${i+1}>`
                                    //for (let j =0 ;j< answers.length;j++){
                                        //+`<option>${answers[j]}</option>`
                                        for (  let k=0 ; k< answers.length; k++){
                                            +`<option>${answers[k]}</option>`
                                        }
                                        //+`<option>${i+1}</option>`
                                    //}
                                +'</select>'

                            +'</div>'
                            +'<button class="btn btn-outline-primary" type="button" id="button-addon2">Ok</button>'
                        +'</section>'
                    +'</div>'
                +'</div>'
    
            //console.log(infoDivs_i);
            infoDivs=infoDivs+infoDivs_i
            }
           //console.log(infoDivs)
        //console.log(infoDivs)
        return infoDivs;
    }
    
    divsCartaChica(){
        console.log("hi mini")
        let infoDivs =''
        let infoDivs_i=''
        for (let i=0;i<this.questions[0].length;i++){
            let answers = this.getAnswersInOne(i);
            infoDivs_i='<div class="card  col-7 mb-5">'
                            +'<div class="container">'
                            +'<section class="formulario ">'
                                    +'<div class="form-group">'

                                    +`<label for="exampleFormControlSelect1">${this.questions[0][i].question}</label>`
                                    +`<select class="form-control" id=${i+1}>`
                                    //for (let j =0 ;j< answers.length;j++){
                                        //+`<option>${answers[j]}</option>`
                                        for (  let k=0 ; k< answers.length; k++){
                                            +`<option>${answers[k]}</option>`
                                        }
                                        //+`<option>${i+1}</option>`
                                    //}
                                +'</select>'

                            +'</div>'
                            +'<button class="btn btn-outline-primary" type="button" id="button-addon2">Ok</button>'
                        +'</section>'
                    +'</div>'
                +'</div>'
            
            infoDivs=infoDivs+infoDivs_i
            }
            console.log(infoDivs)
        //console.log(infoDivs)
        return infoDivs;
    }

    start(){
        //const botonSubmit = document.getElementById('button-addon1')
        console.log("hi")
        console.log(this.questions[0][0])
        
        const espacio_libre = document.querySelector('.contenedor'); 
        let addCardBig = document.createElement('div')
        addCardBig.setAttribute('class','d-none d-lg-block d-xl-block d-md-none d-xs-none')  
        addCardBig.setAttribute('id','cartaGrande')            
        addCardBig.innerHTML = '<div class="row justify-content-center">' + this.divsCartaGrande();
       // console.log(addCardBig.innerHTML)
        //console.log(addCardBig);

        /* let addCardSmall = document.createElement('div')
        addCardSmall.setAttribute('class','d-xs-block d-sm-block d-md-block d-lg-none d-xl-none') 
        addCardSmall.setAttribute('id','cartaChica')        
        addCardSmall.innerHTML = '<div class="row justify-content-center">' + this.divsCartaChica();*/

        //console.log(addCardBig);
        //console.log(addCardSmall);
        //console.log(espacio_libre);

        espacio_libre.appendChild( addCardBig );
        //espacio_libre.appendChild( addCardSmall );
        console.log(espacio_libre);

        //botonSubmit.addEventListener('click', function(){
         //   console.log("hi2")
            //Obtener valores del formulario.
                
                /*
                let catego = document.getElementById('category')//category
                let categ_val=catego.value;
                if (categ_val=='any'){
                    categ_val='';
                }
                console.log(categ_val)
                this.setThisCategory(categ_val);

                let diffi = document.getElementById('difficulty')//difficulty
                let diffi_val=diffi.value;
                if (diffi_val=='any'){
                    diffi_val='';
                }
                console.log(diffi_val)
                this.setThisDifficulty(diffi_val);

                let typo = document.getElementById('type')//type
                let type_val=typo.value;
                if (type_val=='any'){
                    type_val='';
                }
                console.log(type_val)
                this.setThisType(type_val);

                if(presupuesto_val>150000){
                    //arrojara un mensaje de checa el modelo que te guste, todos estos solamente estan a tu disposicion
                    mensaje_restrictivo();
                    presupuesto_val=150000;
                }
*/


               // var idAutos=obtenerId(marca_val,modelo_val, presupuesto_val, caja_val);

                //add(autos, this.getAllList());

                
        //})

    }

}

export default Trivia