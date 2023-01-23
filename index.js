import { httpServer } from "./src/http_server/index.js";
import {getActiveWindow , mouse, straightTo, Point } from "@nut-tree/nut-js";
import Jimp from 'jimp';
const HTTP_PORT = 8181;


(async () => {
    const windowRef = await getActiveWindow();
})();

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
