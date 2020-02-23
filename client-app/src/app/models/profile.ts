import { category } from './../common/options/categoryOptions';
export interface IProfile {
  username: string;
  displayName: string;
  bio: string;
  image: string;
  following: boolean,
  followersCount: number,
  followingCount: number,
  photos: IPhoto[];  
}

export interface IPhoto {
  id: string;
  url: string;
  isMain: boolean;
}

export interface IUserActivity{
  id: string;
  title: string;
  category: string;
  date: Date;
}

