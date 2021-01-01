import type { VariableDeclaration } from '../statement/VariableDeclaration/spec';
import type { Expression } from './Expression';

export type ForInitialiser = Expression | VariableDeclaration;
