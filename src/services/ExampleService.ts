interface Request {
  message: string;
}

export default class ExampleService {
  public async execute(request: Request): Promise<string> {
    return request.message;
  }
}
