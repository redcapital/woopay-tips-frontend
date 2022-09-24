export interface UserSession {
  country: number;
  id: number;
  login: string;
  email: string;
  created_at: string;
}

export interface AppState {
  session: {
    active: UserSession;
    signup?: {
      login: string;
      password: string;
    };
  };
  donation?: {
    created_service_name?: string;
  };
}
