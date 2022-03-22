import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserSchema } from "./Models/user.model";
import { UserModule } from "./UserModule/user.module";

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot("mongodb+srv://Adarsh:1234@freecluster.8ny0s.mongodb.net/pepperFryDB?retryWrites=true&w=majority"),
    MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
    JwtModule.register({
      secret: "mySecret",
      signOptions: { expiresIn: "3600000s" },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
