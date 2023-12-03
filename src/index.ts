import createServer from './framework/express';
import BaseRepository from './repository/BaseRepository';
const PORT = 3100

// TODO: Move to configuration folder
const dependencies = {
    baseRepository: new BaseRepository()
};

const { app, listen } = createServer(dependencies);

  listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
  });