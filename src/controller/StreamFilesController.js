import { StreamFilesService } from "../service/StreamFilesService.js";

export class StreamFilesController {
  async handle(request, response) {
    const streamFilesService = new StreamFilesService();
    const data = await streamFilesService.execute(request.body);

    return response.json(`Data returned -> ${data}`);
  }
}
