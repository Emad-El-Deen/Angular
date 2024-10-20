const Movies = require('../Models/movieModel');

exports.addNewMovie = async (req,res)=>{
  try
  {
      const movie = await Movies.create({...req.body, image: req.file.filename});
      res.status(201).json(movie);
  }
  catch(err){
      res.status(500).send(err.message);
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movies.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movies.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


















// const Movie = require('../Models/movieModel');

// exports.addMovie = async (req, res) => {
//   try {
//     const newMovie = new Movie(req.body);
//     await newMovie.save();
//     res.status(201).json(newMovie);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.getMovies = async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.status(200).json(movies);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.getMovieById = async (req, res) => {
//   try {
//     const movie = await Movie.findById(req.params.id);
//     if (!movie) return res.status(404).json({ message: 'Movie not found' });
//     res.status(200).json(movie);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.updateMovie = async (req, res) => {
//   try {
//     const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
//     res.status(200).json(updatedMovie);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.deleteMovie = async (req, res) => {
//   try {
//     const movie = await Movie.findByIdAndDelete(req.params.id);
//     if (!movie) return res.status(404).json({ message: 'Movie not found' });
//     res.status(200).json({ message: 'Movie deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
