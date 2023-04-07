export interface CustomResponse<T> {
  data: T;
  message: string;
  code: number;
}
