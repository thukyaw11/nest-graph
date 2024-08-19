import { registerEnumType } from '@nestjs/graphql';

export enum RolesType {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    EDITOR = "EDITOR"
}


registerEnumType(RolesType, { name: 'RolesType', description: undefined })
