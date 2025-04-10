export interface Role {
  role: string;
  description: string;
}

export interface Company {
  company: string;
  roles?: Role[];
  coming_soon?: string;
  imgUrl: string;
}

export interface User {
  user: {
    userid: string;
    name: string;
    branch: string;
    role: string;
    access: string[];
    token: string;
  };
}
