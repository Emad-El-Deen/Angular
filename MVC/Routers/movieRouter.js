// movieRouter.js
const express = require('express');
const movieController = require('../Controllers/movieController');
const upload = require('../Utili/multerConfig');

const router = express.Router();

router.post('/', upload.single('image'), movieController.addNewMovie);

router.get('/', movieController.getMovies);

router.delete('/:id', movieController.deleteMovie);


// router.post('/movies', movieController.addMovie);

// router.get('/movies', movieController.getMovies);

// router.get('/movies/:id', movieController.getMovieById);

// router.put('/movies/:id', movieController.updateMovie);


module.exports = router;
