import { Document } from 'mongoose';

import { User } from '../types';

export interface UserDocument extends Document, Readonly<User> {}
