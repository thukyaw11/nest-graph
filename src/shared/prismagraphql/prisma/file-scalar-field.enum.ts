import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    name = "name",
    path = "path",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
