import { Readable, Writable } from "stream";

export class StreamFilesService {
  async execute(request, response) {
    const readable = new Readable({
      read() {
        this.push(JSON.stringify(`data streammed -> ${request}`));
        this.push(null);
      },
    });
  }
}
