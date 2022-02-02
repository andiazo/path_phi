import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RoleGuard implements CanActivate {
    private readonly _reflector;
    constructor(_reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}
