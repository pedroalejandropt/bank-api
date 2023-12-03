import createServer from './framework/express';
import BaseRepository from './repository/BaseRepository';
import ClientRepository from './repository/ClientRepository';
const PORT = 3100

// TODO: Move to configuration folder
const dependencies = {
    baseRepository: new BaseRepository(),
    clientRepository: new ClientRepository(),
};

const { app, listen } = createServer(dependencies);

listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});