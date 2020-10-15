class Trivia{

    constructor(){
        this.questions = [];
    }
    addQuestions(question){
        this.questions.push(question);
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
    }

    start(){
        const espacio_libre = document.querySelector('.contenedor'); 
        var addCardBig = document.createElement('div')
        addCardBig.setAttribute('class','d-none d-lg-block d-xl-block d-md-none d-xs-none')  
        addCardBig.setAttribute('id','cartaGrande')            
        addCardBig.innerHTML = '<div class="row justify-content-center">' + this.divsCartaGrande();

        var addCardSmall = document.createElement('div')
        addCardSmall.setAttribute('class','d-xs-block d-sm-block d-md-block d-lg-none d-xl-none') 
        addCardSmall.setAttribute('id','cartaChica')        
        addCardSmall.innerHTML = '<div class="row justify-content-center">' + this.divsCartaChica();

        console.log(addCardBig);
        console.log(addCardSmall);

        console.log(espacio_libre);

        espacio_libre.appendChild( addCardBig );
        espacio_libre.appendChild( addCardSmall );

    }*/

}

export default Trivia