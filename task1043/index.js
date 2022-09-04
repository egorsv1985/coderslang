import { server } from './server.js';
import {logRequestType, logRequestTimestamp} from './middleware';

const port = 8080;
const server = express();
server.use(logRequestTimestamp);
server.use(logRequestType);
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
export {server};