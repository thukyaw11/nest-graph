import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    modelName = "modelName",
    allowedOperations = "allowedOperations",
    roleId = "roleId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
