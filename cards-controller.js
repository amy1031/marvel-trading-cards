function CardsController() {

  // alias
  var dataStore = new MarvelService()

  // Ready is a local function. When you're done getting the characters, go get the ready function. 
  // Passes a reference to that function. Whenever getCharacters is done
  // doing what it needs to do, it will call the ready function
  dataStore.getCharacters(ready)

  this.onAdd = function (id) {
    //this function will take the player that was clicked and add them to your team through the dataStore.
    dataStore.addToMyCharacters(id);
    draw(dataStore.getMarvelCharacters(), dataStore.getMarvelCharacters());
    }

  this.onRemove = function () {
    //this will remove the character from your team

  }

  //calls draw and then what it received from getCharacters
  function ready(data) {
    draw(data, [])
  }

  function draw(marvelList, myList) {
    //target is the id of the element where the list will be rendered
    var marvelElem = document.getElementById('marvel-characters')
    var myElem = document.getElementById('my-characters')
    marvelElem.innerHTML = ''
    myElem.innerHTML = ''

    var marvelTemplate = ''
    var myTemplate = ''

    // marvel list
    for (var i in marvelList) {
      var character = marvelList[i];
      marvelTemplate += `
          <div class="card">
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
            <h3>${character.name}</h3>
            <div>
              <button class="btn-success" id="${character.id}" onclick="cardsCtrl.onAdd(${character.id})">Add to Team</button> 
            </div>
          <div>
        `
    }

    // adds from marvel list to my list
    for (var i in myList) {
      var character = myList[i];
      myTemplate += `
          <div class="card">
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
            <h3>${character.name}</h3>
            <div>
              <button class="btn-danger" id="${character.id}">DESTROY FOREVER</button>
            </div>
          <div>
          `
    }

    marvelElem.innerHTML = marvelTemplate
    myElem.innerHTML = myTemplate;

  }


}