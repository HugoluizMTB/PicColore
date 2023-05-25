export class AppError {
    constructor(
      public message: string,
      public status: number,
      public data?: any
    ) {
      this.message = message
      this.status = status
      this.data = data
    }
  }