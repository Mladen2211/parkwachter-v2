// src/app/store/auth/auth.actions.ts

import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../../core/models/user.model';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string; user: UserProfile }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');
