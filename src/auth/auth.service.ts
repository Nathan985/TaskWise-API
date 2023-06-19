import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { FirebaseConfig } from '../config/firebase';

@Injectable()
export class AuthService {
  async AuthenticateUser(token: string) {
    try {
      const app = firebase.initializeApp(FirebaseConfig);

      const decoded = await app.auth().verifyIdToken(token);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
