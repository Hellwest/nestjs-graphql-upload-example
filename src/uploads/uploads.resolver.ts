/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Resolver, Mutation, Args, ObjectType, Query, Field } from '@nestjs/graphql';
import { GraphQLUpload } from 'apollo-server-express';

@ObjectType()
class PlaceholderType {
  @Field()
  placeholder: string
}

@Resolver('Uploads')
export class UploadsResolver {
  @Query((): typeof PlaceholderType => PlaceholderType, {
    name: "placeholder",
  })
  async placeholder() {
    return new PlaceholderType()
  }
  
  @Mutation((): typeof GraphQLUpload => GraphQLUpload, {
    name: "uploadFile",
    description: "Upload a file",
    nullable: true,
  })
  async uploadFileAsync(@Args({name: "file", type: (): typeof GraphQLUpload => GraphQLUpload}) file: typeof GraphQLUpload) {
    console.log("Uploaded:", file)
  }
}
