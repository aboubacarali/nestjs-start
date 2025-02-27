import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { HelloService } from '../persons/hello.service';
import { BookRepository } from './book.repository';
import {MongooseModule} from "@nestjs/mongoose";
import {BookSchema} from "./book.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Book',
        schema: BookSchema,
      },
    ]),
  ],
  controllers: [BookController],
  providers: [HelloService, BookRepository],
})
export class BookModule {}
