import { Module } from '@nestjs/common';
import { UploadsModule } from './uploads/uploads.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
    debug: false,
    playground: true,
    autoSchemaFile: "_schema.graphql",
    uploads: {
      maxFileSize: 10000000,
      maxFiles: 1,
    }
    }),
    UploadsModule,
  ],
  providers: [],
})
export class AppModule {}
