const gamesJson = require("../models/games.json")

const getAllGames = (request, response) =>{
    response.status(200).send(gamesJson)
      
}

const getGameById=(request,response)=> {
const idRequest = request.params.id
const gameEncontrado = gamesJson.find(game=>game.id == idRequest)

response.status(200).send(gameEncontrado)
}

const addNewGames =(request,response) => {
    const titleRequest = request.body.title
    const launchYearRequest = request.body.launchYear
    const consolesRequest = request.body.consoles
    const likedRequest = request.body.liked
    const newId = gamesJson.length + 1

    const newGame = {
        id:newId,
        title: titleRequest,
        launchYear: launchYearRequest,
        consoles: consolesRequest,
        liked: likedRequest
    }

    gamesJson.push(newGame)
    response.status(200).json([{
        "mensagem":"jogo adicionado",
        newGame
    }])
}

const updateGame = (request, response) => {
    const idRequest = request.params.id
    const gameRequest = request.body

    const gameEncontrado = gamesJson.findIndex(game => game.id == idRequest)
    gamesJson.splice(gameEncontrado, 1, gameRequest)

    response.status(200).json([{
        "mensagem": "jogo atualizado",
        gamesJson
    }])
}

const deleteGame = (request, response) => {
    const idRequest = request.params.id
    const gameEncontrado = gamesJson.findIndex(game => game.id == idRequest)
    gamesJson.splice(gameEncontrado, 1)

    response.status(200).json([{
        "mensagen": "jogo excluído!",
        gamesJson
    }])
}

const likedGame = (request, response) => {
    const idRequest = request.params.id
    const gameEncontrado = gamesJson.find(game => game.id == idRequest)

    if(gameEncontrado.liked === true){
        gameEncontrado.liked = false
    } else {
        gameEncontrado.liked = true
    }
    response.status(200).json ([{
        "message": "jogo curtido/descurtido!",
        gameEncontrado
    }])
}
    
module.exports = {
getAllGames,
getGameById,
addNewGames,
updateGame,
deleteGame, 
likedGame
};
