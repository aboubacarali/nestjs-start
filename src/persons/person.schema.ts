import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({toJSON: {virtuals: true}, toObject: {virtuals: true}})
class Person {

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  jobTitle: string;
}

export type PersonDocument = HydratedDocument<Person>


export const PersonSchema = SchemaFactory.createForClass(Person);

PersonSchema.virtual('userName').get(function () {
  return `${this.firstName}-${this.lastName}-the-${this.jobTitle}`.toLowerCase();
})