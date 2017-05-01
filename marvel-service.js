function MarvelService(){
  var key = '?apikey=6cd5122c589aa703d8a1c249855727a7';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'
  
  var marvelCharacters = []; // controls everything that happens to our data
  var myCharacters = [];
  
  
  this.getMarvelCharacters = function(){
    //what should this function return
  }
  
  this.getMyCharacters = function(){
    //what should this function return
  }
  
  this.addToMyCharacters = function(id){
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array
    
    
    // marvelCharacters(.id?) put into my own list

  }
  
  this.removeMyCharacter = function(id){
    //you need to find the character that you want to remove by its id
    //and remove it.
  }
  
  // takes in an argument
  this.getCharacters = function(callWhenDone){
    var data = localStorage.getItem('MarvelData') // ignore for now
    if(data){
      marvelCharacters = JSON.parse(data);
      return callWhenDone(marvelCharacters)
    }
    // $.get is a function built into jquery (callback)
    $.get(baseUrl + 'characters'+key, function(response){ // says go to this url and get the data that is there
      localStorage.setItem('MarvelData', JSON.stringify(response.data.results)) // when done, runs this function
      marvelCharacters = response.data.results;
      callWhenDone(marvelCharacters) // when callWhenDone is done, it will call the marvelCharacters function
    })
  }
  
  
}