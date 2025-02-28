import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async findOne(
        username: string
    ): Promise<User | null>
    {
        return this.userModel
            .findOne({ username })
            .exec();
    }

    async create(
        username: string
        , password: string
    ): Promise<User>
    {
        const hashedPassword = await bcrypt
            .hash(password, 10);

        const newUser = new this.userModel(
            { username, password: hashedPassword }
        );

        return newUser.save();
    }

    async validateUser(
        username: string,
        pass: string
    ): Promise<any>
    {
        const user = await this.findOne(username);

        if (user &&
            (await bcrypt.compare(pass, user.password))
        )
        {
            const { password, ...result } = user.toObject();
            return result;
        }
        return null;
    }
}