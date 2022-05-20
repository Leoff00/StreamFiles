import { StreamFilesService } from "../service/StreamFilesService.mjs";

export class StreamFilesController {
  async handle(request, response) {
    const streamFilesService = new StreamFilesService();
    const data = await streamFilesService.execute(request, response);

    return response.json(`Data returned -> ${data}`);
  }
}
