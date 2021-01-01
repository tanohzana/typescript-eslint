import type { BlockStatement } from '../statement/BlockStatement/spec';
import type { BreakStatement } from '../statement/BreakStatement/spec';
import type { ClassDeclaration } from '../statement/ClassDeclaration/spec';
import type { ContinueStatement } from '../statement/ContinueStatement/spec';
import type { DebuggerStatement } from '../statement/DebuggerStatement/spec';
import type { DoWhileStatement } from '../statement/DoWhileStatement/spec';
import type { ExportAllDeclaration } from '../statement/ExportAllDeclaration/spec';
import type { ExportDefaultDeclaration } from '../statement/ExportDefaultDeclaration/spec';
import type { ExportNamedDeclaration } from '../statement/ExportNamedDeclaration/spec';
import type { ExpressionStatement } from '../statement/ExpressionStatement/spec';
import type { ForInStatement } from '../statement/ForInStatement/spec';
import type { ForOfStatement } from '../statement/ForOfStatement/spec';
import type { ForStatement } from '../statement/ForStatement/spec';
import type { FunctionDeclaration } from '../statement/FunctionDeclaration/spec';
import type { IfStatement } from '../statement/IfStatement/spec';
import type { ImportDeclaration } from '../statement/ImportDeclaration/spec';
import type { LabeledStatement } from '../statement/LabeledStatement/spec';
import type { ReturnStatement } from '../statement/ReturnStatement/spec';
import type { SwitchStatement } from '../statement/SwitchStatement/spec';
import type { ThrowStatement } from '../statement/ThrowStatement/spec';
import type { TryStatement } from '../statement/TryStatement/spec';
import type { TSDeclareFunction } from '../statement/TSDeclareFunction/spec';
import type { TSEnumDeclaration } from '../statement/TSEnumDeclaration/spec';
import type { TSExportAssignment } from '../statement/TSExportAssignment/spec';
import type { TSImportEqualsDeclaration } from '../statement/TSImportEqualsDeclaration/spec';
import type { TSInterfaceDeclaration } from '../statement/TSInterfaceDeclaration/spec';
import type { TSModuleDeclaration } from '../statement/TSModuleDeclaration/spec';
import type { TSNamespaceExportDeclaration } from '../statement/TSNamespaceExportDeclaration/spec';
import type { TSTypeAliasDeclaration } from '../statement/TSTypeAliasDeclaration/spec';
import type { VariableDeclaration } from '../statement/VariableDeclaration/spec';
import type { WhileStatement } from '../statement/WhileStatement/spec';
import type { WithStatement } from '../statement/WithStatement/spec';

export type Statement =
  | BlockStatement
  | BreakStatement
  | ClassDeclaration
  | ContinueStatement
  | DebuggerStatement
  | DoWhileStatement
  | ExportAllDeclaration
  | ExportDefaultDeclaration
  | ExportNamedDeclaration
  | ExpressionStatement
  | ForInStatement
  | ForOfStatement
  | ForStatement
  | FunctionDeclaration
  | IfStatement
  | ImportDeclaration
  | LabeledStatement
  | ReturnStatement
  | SwitchStatement
  | ThrowStatement
  | TryStatement
  | TSDeclareFunction
  | TSEnumDeclaration
  | TSExportAssignment
  | TSImportEqualsDeclaration
  | TSInterfaceDeclaration
  | TSModuleDeclaration
  | TSNamespaceExportDeclaration
  | TSTypeAliasDeclaration
  | VariableDeclaration
  | WhileStatement
  | WithStatement;

// Certain nodes are only allowed at the top-level
export type ProgramStatement =
  | ExportAllDeclaration
  | ExportDefaultDeclaration
  | ExportNamedDeclaration
  | ImportDeclaration
  | Statement
  | TSImportEqualsDeclaration
  | TSNamespaceExportDeclaration;

// TODO - once we have syntax errors, the types in ProgramStatement should not be in Statement
