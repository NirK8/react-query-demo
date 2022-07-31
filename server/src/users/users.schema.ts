import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { IUser, Role, RoleClass } from '@protecht/types';

// enum DocumentStatus {
//   ACTIVE = 0,
//   INACTIVE,
// }
// export type UsersDocument = IUser;

// @Schema({ timestamps: true })
// export class User {
//   @Prop({ required: true })
//   firstName: string;
//   @Prop({ required: true })
//   lastName: string;
//   @Prop()
//   phone?: string;
//   @Prop()
//   email: string;
//   @Prop()
//   address?: string;
//   @Prop()
//   sub?: string;
//   @Prop({ type: RoleClass })
//   role: Role;
//   @Prop({ default: DocumentStatus.ACTIVE, enum: DocumentStatus, type: Number })
//   status: 0 | 1;
// }

// export const UsersSchema = SchemaFactory.createForClass(User);

// UsersSchema.methods.toJSON = function () {
//   const obj = this.toObject();
//   delete obj.__v;
//   delete obj.createdAt;
//   delete obj.updatedAt;

//   return obj;
// };
