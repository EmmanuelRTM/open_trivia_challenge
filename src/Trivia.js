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
    /*
    divsCartaGrande(){
        var infoDivs =''
        var infoDivs_i=''
        for (var i=0;i<this.pokemons.length;i++){
            infoDivs_i='<div class="card  col-4 mb-3 ">'
                    //+'<div class="container">'
                        +`<img src= ${this.getPokemonImgUrl(this.getPokeId(i))} class="card-img-top" alt="...">`
                        +'<div class="card-body">'
                            +'<h5 class="card-title">'
                                +this.getPokemonName(i)
                            +'</h5>'
                            +'<p class="card-text">'
                //poner condicionante de length
                                +this.getPokemonType(i)
                            +'</p>'
                            +'<p class="card-text">'
                                +'HP: '+ this.getPokeHP(i)
                            +'</p>'
                        +'</div>'
                    //+ '</div>'
                +'</div>'
    
            //console.log(infoDivs_i);
            infoDivs=infoDivs+infoDivs_i
            }
           //console.log(infoDivs)
        return infoDivs;
    }
    
    divsCartaChica(){
        var infoDivs =''
        var infoDivs_i=''
        for (var i=0;i<this.pokemons.length;i++){
            infoDivs_i='<div class="card  col-7 mb-5">'
                    +`<img src= ${this.getPokemonImgUrl(this.getPokeId(i))} class="card-img-top" alt="...">`
                    +'<div class="card-body">'
                        +'<h5 class="card-title">'
                            +this.getPokemonName(i)
                        +'</h5>'
                        +'<p class="card-text">'
            //poner condicionante de length
                            +this.getPokemonType(i)
                        +'</p>'
                        +'<p class="card-text">'
                            +'HP: '+ this.getPokeHP(i)
                        +'</p>'
                    +'</div>'
                + '</div>'
            
            infoDivs=infoDivs+infoDivs_i
            }
        //console.log(infoDivs)
        return infoDivs;
    }*/

    start(){
        const botonSubmit = document.getElementById('button-addon1')

        botonSubmit.addEventListener('click', function(){
            //Obtener valores del formulario.
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

        const espacio_libre = document.querySelector('.contenedor'); 
        let addCardBig = document.createElement('div')
        addCardBig.setAttribute('class','d-none d-lg-block d-xl-block d-md-none d-xs-none')  
        addCardBig.setAttribute('id','cartaGrande')            
        addCardBig.innerHTML = '<div class="row justify-content-center">' + this.divsCartaGrande();

        let addCardSmall = document.createElement('div')
        addCardSmall.setAttribute('class','d-xs-block d-sm-block d-md-block d-lg-none d-xl-none') 
        addCardSmall.setAttribute('id','cartaChica')        
        addCardSmall.innerHTML = '<div class="row justify-content-center">' + this.divsCartaChica();

        //console.log(addCardBig);
        //console.log(addCardSmall);
        //console.log(espacio_libre);

        espacio_libre.appendChild( addCardBig );
        espacio_libre.appendChild( addCardSmall );

    }

}

export default Trivia