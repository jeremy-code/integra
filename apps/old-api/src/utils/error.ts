type HttpCode = 200 | 400 | 401 | 403 | 404 | 500;

export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpCode;

  constructor(name: string, httpCode: HttpCode, description: string) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = name;
    this.httpCode = httpCode;
    Error.captureStackTrace(this);
  }
}
