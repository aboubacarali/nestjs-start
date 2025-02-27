import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {BookDocument} from "./book.schema";
import {BookDto} from "./book.dto";

@Injectable()
export class BookRepository {

    constructor(@InjectModel('Book') private readonly bookModel: Model<BookDocument>) {}


    async findAll(): Promise<BookDocument[]> {
        return this.bookModel.find();
    }

    async save(bookDto: BookDto): Promise<BookDocument> {
        let book = new this.bookModel(bookDto);
        await book.save();
        return book;
    }


}
