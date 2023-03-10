import { IBaseModel } from "./IBaseModel";

export interface IFilePost extends IBaseModel {
  name: string;
  path: string;
  mimeType: string;
  size: number;
  postId: number;
}

export interface IFetchedPost extends IBaseModel {
  message: string | null;
  filePosts: IFilePost[];
  userId: number | null;
  // TODO type this
  user: unknown;
}

export interface ICreateNewPost {
  message: string;
  files: FileList;
};
