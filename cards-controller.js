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
    draw(dataStore.getMarvelCharacters(), dataStore.getMyCharacters());
    }

  this.onRemove = function (id) {
    //this will remove the character from your team
    dataStore.removeMyCharacter(id);
    draw(dataStore.getMarvelCharacters(), dataStore.getMyCharacters());
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
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">${character.name}</h3>
        </div>
        <div class="panel-body text-center">
          <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100" class="img-circle">
        </div>
        <div class="panel-footer text-center"><button class="btn-success" id="${character.id}" onclick="cardsCtrl.onAdd(${character.id})">Add to Team</button> </div>
      </div>
        `
    }

    // my list
    for (var i in myList) {
      var character = myList[i];
      myTemplate += `
        <div class="panel panel-default text-center">
          <div class="panel-heading">
             <h3 class="panel-title">${character.name}</h3>
          </div>
          <div class="panel-body text-center">
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100" class="img-circle">
          </div>
          <div class="panel-footer text-center">
            <button class="btn-danger" id="${character.id}" onclick="cardsCtrl.onRemove(${character.id})">Remove</button>
          </div>
      </div>
          `
    }

    marvelElem.innerHTML = marvelTemplate
    myElem.innerHTML = myTemplate;

  }


}