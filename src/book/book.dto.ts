import {IsNotEmpty, IsNumber, IsOptional} from "class-validator";


export class BookDto {
    @IsNotEmpty({message: "Le titre est requis"})
    title: string;

    @IsNotEmpty({message: "Le genre est obligatoire"})
    genre: string[];

    @IsNotEmpty({message: "L'année de publication est obligatoire"})
    publicationYear: number;

    @IsNotEmpty({message: "L'auteur est obligatoire"})
    authors: string[];

    @IsNotEmpty({message: "L'isbn ne peut pas etre vide"})
    isbn: string;

    @IsNotEmpty({message: "Veuillez entrer le nombre de pages"})
    pageCount: number;

    @IsNotEmpty({message: "Veuilllez entrer l'éditeur"})
    publisher: string;

    @IsNotEmpty({message: "Veuillez entrer la langue"})
    language: string;

}


