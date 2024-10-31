
// src/app/store/auth/auth.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { UserProfile } from '../../core/models/user.model';

export interface AuthState {
  user: UserProfile | null;
  token: string | null;
  error: any | null;
}

export const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token, user }) => ({
    ...state,
    token,
    user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AuthActions.logout, () => initialState)
);
