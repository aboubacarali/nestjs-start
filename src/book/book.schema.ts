import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";


@Schema()
class Book {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    genre: string;

    @Prop({ required: true })
    publicationYear: number;

    @Prop({ required: true })
    authors: string[];

    @Prop({ required: true })
    isbn: string;

    @Prop({ required: true })
    pageCount: number;

    @Prop({ required: true })
    publisher: string;

    @Prop({ required: true })
    language: string;
}

export type BookDocument = HydratedDocument<Book>
export const BookSchema = SchemaFactory.createForClass(Book)