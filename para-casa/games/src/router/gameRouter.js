const controller = require ("../contoller/gamesController")
const express = require("express")
const router = express.Router()

router.get("/listarGames",controller.getAllGames)
router.get("/games/:id",controller.getGameById)
router.post("/criarGames",controller.addNewGames)
router.put("/editar/:id",controller.updateGame)
router.delete("/deletar/:id",controller.deleteGame)
router.patch("/liked/:id",controller.likedGame)

module.exports = router