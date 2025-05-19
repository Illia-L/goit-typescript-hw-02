export type Image = {
  id: string;
  description: string | null;
  urls: {
    regular: string;
    small: string;
  };
  likes: number;
  user: {
    name: string;
  };
};

export type Search = string
export type Page = number

