interface IPaginatedResponse<T> {
  count: number;
  next: string | null;
  prev: string | null;
  results: T[];
}

export interface IPhotoItem {
  id: number;
  title: string;
  desc: string;
  img: string
}

export interface IAuthData {
  username: string;
  password: string;
  email: string
}
 

