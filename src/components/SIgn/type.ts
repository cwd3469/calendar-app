export interface UserLoginInfo {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface UserRequstData {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  user_permissions: string[];
  user_roles: string[];
}

export interface UserRequstType {
  code: string;
  data: UserRequstData;
  isSuccess: boolean;
  message: string;
}
