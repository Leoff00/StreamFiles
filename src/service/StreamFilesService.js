import { request } from "http";
import { Readable, Writable } from "stream";
export class StreamFilesService {
  async execute(requestObj) {
    const readable = new Readable({
      read() {
        this.push(`data streammed -> ${requestObj}`);
        this.push(null);
      },
    });

    return readable;
  }
}
