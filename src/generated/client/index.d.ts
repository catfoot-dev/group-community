
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostLargText
 * 
 */
export type PostLargText = $Result.DefaultSelection<Prisma.$PostLargTextPayload>
/**
 * Model PostComment
 * 
 */
export type PostComment = $Result.DefaultSelection<Prisma.$PostCommentPayload>
/**
 * Model PostCommentLargText
 * 
 */
export type PostCommentLargText = $Result.DefaultSelection<Prisma.$PostCommentLargTextPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatComment
 * 
 */
export type ChatComment = $Result.DefaultSelection<Prisma.$ChatCommentPayload>
/**
 * Model ChatCommentLargText
 * 
 */
export type ChatCommentLargText = $Result.DefaultSelection<Prisma.$ChatCommentLargTextPayload>
/**
 * Model MetaData
 * 
 */
export type MetaData = $Result.DefaultSelection<Prisma.$MetaDataPayload>
/**
 * Model LogAccess
 * 
 */
export type LogAccess = $Result.DefaultSelection<Prisma.$LogAccessPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CommunityCategory: {
  WORK: 'WORK',
  PROJECT: 'PROJECT',
  CLUB: 'CLUB'
};

export type CommunityCategory = (typeof CommunityCategory)[keyof typeof CommunityCategory]

}

export type CommunityCategory = $Enums.CommunityCategory

export const CommunityCategory: typeof $Enums.CommunityCategory

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.postLargText`: Exposes CRUD operations for the **PostLargText** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLargTexts
    * const postLargTexts = await prisma.postLargText.findMany()
    * ```
    */
  get postLargText(): Prisma.PostLargTextDelegate<ExtArgs>;

  /**
   * `prisma.postComment`: Exposes CRUD operations for the **PostComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostComments
    * const postComments = await prisma.postComment.findMany()
    * ```
    */
  get postComment(): Prisma.PostCommentDelegate<ExtArgs>;

  /**
   * `prisma.postCommentLargText`: Exposes CRUD operations for the **PostCommentLargText** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostCommentLargTexts
    * const postCommentLargTexts = await prisma.postCommentLargText.findMany()
    * ```
    */
  get postCommentLargText(): Prisma.PostCommentLargTextDelegate<ExtArgs>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs>;

  /**
   * `prisma.chatComment`: Exposes CRUD operations for the **ChatComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatComments
    * const chatComments = await prisma.chatComment.findMany()
    * ```
    */
  get chatComment(): Prisma.ChatCommentDelegate<ExtArgs>;

  /**
   * `prisma.chatCommentLargText`: Exposes CRUD operations for the **ChatCommentLargText** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatCommentLargTexts
    * const chatCommentLargTexts = await prisma.chatCommentLargText.findMany()
    * ```
    */
  get chatCommentLargText(): Prisma.ChatCommentLargTextDelegate<ExtArgs>;

  /**
   * `prisma.metaData`: Exposes CRUD operations for the **MetaData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaData
    * const metaData = await prisma.metaData.findMany()
    * ```
    */
  get metaData(): Prisma.MetaDataDelegate<ExtArgs>;

  /**
   * `prisma.logAccess`: Exposes CRUD operations for the **LogAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAccesses
    * const logAccesses = await prisma.logAccess.findMany()
    * ```
    */
  get logAccess(): Prisma.LogAccessDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Position: 'Position',
    Group: 'Group',
    Community: 'Community',
    Post: 'Post',
    PostLargText: 'PostLargText',
    PostComment: 'PostComment',
    PostCommentLargText: 'PostCommentLargText',
    ChatRoom: 'ChatRoom',
    ChatComment: 'ChatComment',
    ChatCommentLargText: 'ChatCommentLargText',
    MetaData: 'MetaData',
    LogAccess: 'LogAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'position' | 'group' | 'community' | 'post' | 'postLargText' | 'postComment' | 'postCommentLargText' | 'chatRoom' | 'chatComment' | 'chatCommentLargText' | 'metaData' | 'logAccess'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>,
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>,
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostLargText: {
        payload: Prisma.$PostLargTextPayload<ExtArgs>
        fields: Prisma.PostLargTextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLargTextFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLargTextFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload>
          }
          findFirst: {
            args: Prisma.PostLargTextFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLargTextFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload>
          }
          findMany: {
            args: Prisma.PostLargTextFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload>[]
          }
          create: {
            args: Prisma.PostLargTextCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload>
          }
          createMany: {
            args: Prisma.PostLargTextCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostLargTextDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload>
          }
          update: {
            args: Prisma.PostLargTextUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload>
          }
          deleteMany: {
            args: Prisma.PostLargTextDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostLargTextUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostLargTextUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostLargTextPayload>
          }
          aggregate: {
            args: Prisma.PostLargTextAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePostLargText>
          }
          groupBy: {
            args: Prisma.PostLargTextGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostLargTextGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLargTextCountArgs<ExtArgs>,
            result: $Utils.Optional<PostLargTextCountAggregateOutputType> | number
          }
        }
      }
      PostComment: {
        payload: Prisma.$PostCommentPayload<ExtArgs>
        fields: Prisma.PostCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          findFirst: {
            args: Prisma.PostCommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          findMany: {
            args: Prisma.PostCommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>[]
          }
          create: {
            args: Prisma.PostCommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          createMany: {
            args: Prisma.PostCommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostCommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          update: {
            args: Prisma.PostCommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostCommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentPayload>
          }
          aggregate: {
            args: Prisma.PostCommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePostComment>
          }
          groupBy: {
            args: Prisma.PostCommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCommentCountAggregateOutputType> | number
          }
        }
      }
      PostCommentLargText: {
        payload: Prisma.$PostCommentLargTextPayload<ExtArgs>
        fields: Prisma.PostCommentLargTextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostCommentLargTextFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostCommentLargTextFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload>
          }
          findFirst: {
            args: Prisma.PostCommentLargTextFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostCommentLargTextFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload>
          }
          findMany: {
            args: Prisma.PostCommentLargTextFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload>[]
          }
          create: {
            args: Prisma.PostCommentLargTextCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload>
          }
          createMany: {
            args: Prisma.PostCommentLargTextCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostCommentLargTextDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload>
          }
          update: {
            args: Prisma.PostCommentLargTextUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload>
          }
          deleteMany: {
            args: Prisma.PostCommentLargTextDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostCommentLargTextUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostCommentLargTextUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostCommentLargTextPayload>
          }
          aggregate: {
            args: Prisma.PostCommentLargTextAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePostCommentLargText>
          }
          groupBy: {
            args: Prisma.PostCommentLargTextGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostCommentLargTextGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCommentLargTextCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCommentLargTextCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatComment: {
        payload: Prisma.$ChatCommentPayload<ExtArgs>
        fields: Prisma.ChatCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatCommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatCommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload>
          }
          findFirst: {
            args: Prisma.ChatCommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatCommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload>
          }
          findMany: {
            args: Prisma.ChatCommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload>[]
          }
          create: {
            args: Prisma.ChatCommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload>
          }
          createMany: {
            args: Prisma.ChatCommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatCommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload>
          }
          update: {
            args: Prisma.ChatCommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload>
          }
          deleteMany: {
            args: Prisma.ChatCommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatCommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatCommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentPayload>
          }
          aggregate: {
            args: Prisma.ChatCommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatComment>
          }
          groupBy: {
            args: Prisma.ChatCommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCommentCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatCommentCountAggregateOutputType> | number
          }
        }
      }
      ChatCommentLargText: {
        payload: Prisma.$ChatCommentLargTextPayload<ExtArgs>
        fields: Prisma.ChatCommentLargTextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatCommentLargTextFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatCommentLargTextFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload>
          }
          findFirst: {
            args: Prisma.ChatCommentLargTextFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatCommentLargTextFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload>
          }
          findMany: {
            args: Prisma.ChatCommentLargTextFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload>[]
          }
          create: {
            args: Prisma.ChatCommentLargTextCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload>
          }
          createMany: {
            args: Prisma.ChatCommentLargTextCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatCommentLargTextDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload>
          }
          update: {
            args: Prisma.ChatCommentLargTextUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload>
          }
          deleteMany: {
            args: Prisma.ChatCommentLargTextDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatCommentLargTextUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatCommentLargTextUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatCommentLargTextPayload>
          }
          aggregate: {
            args: Prisma.ChatCommentLargTextAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatCommentLargText>
          }
          groupBy: {
            args: Prisma.ChatCommentLargTextGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatCommentLargTextGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCommentLargTextCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatCommentLargTextCountAggregateOutputType> | number
          }
        }
      }
      MetaData: {
        payload: Prisma.$MetaDataPayload<ExtArgs>
        fields: Prisma.MetaDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          findFirst: {
            args: Prisma.MetaDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          findMany: {
            args: Prisma.MetaDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>[]
          }
          create: {
            args: Prisma.MetaDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          createMany: {
            args: Prisma.MetaDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MetaDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          update: {
            args: Prisma.MetaDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          deleteMany: {
            args: Prisma.MetaDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MetaDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MetaDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaDataPayload>
          }
          aggregate: {
            args: Prisma.MetaDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMetaData>
          }
          groupBy: {
            args: Prisma.MetaDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MetaDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaDataCountArgs<ExtArgs>,
            result: $Utils.Optional<MetaDataCountAggregateOutputType> | number
          }
        }
      }
      LogAccess: {
        payload: Prisma.$LogAccessPayload<ExtArgs>
        fields: Prisma.LogAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAccessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAccessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload>
          }
          findFirst: {
            args: Prisma.LogAccessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAccessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload>
          }
          findMany: {
            args: Prisma.LogAccessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload>[]
          }
          create: {
            args: Prisma.LogAccessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload>
          }
          createMany: {
            args: Prisma.LogAccessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LogAccessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload>
          }
          update: {
            args: Prisma.LogAccessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload>
          }
          deleteMany: {
            args: Prisma.LogAccessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LogAccessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LogAccessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogAccessPayload>
          }
          aggregate: {
            args: Prisma.LogAccessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLogAccess>
          }
          groupBy: {
            args: Prisma.LogAccessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LogAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAccessCountArgs<ExtArgs>,
            result: $Utils.Optional<LogAccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    postComments: number
    communities: number
    managedCommunities: number
    chatRooms: number
    chatCommets: number
    access: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    postComments?: boolean | UserCountOutputTypeCountPostCommentsArgs
    communities?: boolean | UserCountOutputTypeCountCommunitiesArgs
    managedCommunities?: boolean | UserCountOutputTypeCountManagedCommunitiesArgs
    chatRooms?: boolean | UserCountOutputTypeCountChatRoomsArgs
    chatCommets?: boolean | UserCountOutputTypeCountChatCommetsArgs
    access?: boolean | UserCountOutputTypeCountAccessArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagedCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatCommetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatCommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAccessWhereInput
  }



  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    users: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PositionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    children: number
    users: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | GroupCountOutputTypeCountChildrenArgs
    users?: boolean | GroupCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    posts: number
    users: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CommunityCountOutputTypeCountPostsArgs
    users?: boolean | CommunityCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    meta: number
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | PostCountOutputTypeCountMetaArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaDataWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
  }



  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    user: number
    comments: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChatRoomCountOutputTypeCountUserArgs
    comments?: boolean | ChatRoomCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatCommentWhereInput
  }



  /**
   * Count Type MetaDataCountOutputType
   */

  export type MetaDataCountOutputType = {
    posts: number
    comments: number
  }

  export type MetaDataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | MetaDataCountOutputTypeCountPostsArgs
    comments?: boolean | MetaDataCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * MetaDataCountOutputType without action
   */
  export type MetaDataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaDataCountOutputType
     */
    select?: MetaDataCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MetaDataCountOutputType without action
   */
  export type MetaDataCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * MetaDataCountOutputType without action
   */
  export type MetaDataCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatCommentWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    positionId: number | null
    groupId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    positionId: number | null
    groupId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    image: string | null
    positionId: number | null
    groupId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    image: string | null
    positionId: number | null
    groupId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    positionId: number
    groupId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    positionId?: true
    groupId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    positionId?: true
    groupId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    positionId?: true
    groupId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    positionId?: true
    groupId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    positionId?: true
    groupId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    image: string
    positionId: number
    groupId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    positionId?: boolean
    groupId?: boolean
    position?: boolean | PositionDefaultArgs<ExtArgs>
    group?: boolean | User$groupArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postComments?: boolean | User$postCommentsArgs<ExtArgs>
    communities?: boolean | User$communitiesArgs<ExtArgs>
    managedCommunities?: boolean | User$managedCommunitiesArgs<ExtArgs>
    chatRooms?: boolean | User$chatRoomsArgs<ExtArgs>
    chatCommets?: boolean | User$chatCommetsArgs<ExtArgs>
    access?: boolean | User$accessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    positionId?: boolean
    groupId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PositionDefaultArgs<ExtArgs>
    group?: boolean | User$groupArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postComments?: boolean | User$postCommentsArgs<ExtArgs>
    communities?: boolean | User$communitiesArgs<ExtArgs>
    managedCommunities?: boolean | User$managedCommunitiesArgs<ExtArgs>
    chatRooms?: boolean | User$chatRoomsArgs<ExtArgs>
    chatCommets?: boolean | User$chatCommetsArgs<ExtArgs>
    access?: boolean | User$accessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      position: Prisma.$PositionPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      postComments: Prisma.$PostCommentPayload<ExtArgs>[]
      communities: Prisma.$CommunityPayload<ExtArgs>[]
      managedCommunities: Prisma.$CommunityPayload<ExtArgs>[]
      chatRooms: Prisma.$ChatRoomPayload<ExtArgs>[]
      chatCommets: Prisma.$ChatCommentPayload<ExtArgs>[]
      access: Prisma.$LogAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      image: string
      positionId: number
      groupId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    group<T extends User$groupArgs<ExtArgs> = {}>(args?: Subset<T, User$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    postComments<T extends User$postCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$postCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    communities<T extends User$communitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$communitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'> | Null>;

    managedCommunities<T extends User$managedCommunitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$managedCommunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'> | Null>;

    chatRooms<T extends User$chatRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findMany'> | Null>;

    chatCommets<T extends User$chatCommetsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatCommetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    access<T extends User$accessArgs<ExtArgs> = {}>(args?: Subset<T, User$accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly positionId: FieldRef<"User", 'Int'>
    readonly groupId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.group
   */
  export type User$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.postComments
   */
  export type User$postCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    cursor?: PostCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }


  /**
   * User.communities
   */
  export type User$communitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * User.managedCommunities
   */
  export type User$managedCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * User.chatRooms
   */
  export type User$chatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }


  /**
   * User.chatCommets
   */
  export type User$chatCommetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    where?: ChatCommentWhereInput
    orderBy?: ChatCommentOrderByWithRelationInput | ChatCommentOrderByWithRelationInput[]
    cursor?: ChatCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatCommentScalarFieldEnum | ChatCommentScalarFieldEnum[]
  }


  /**
   * User.access
   */
  export type User$accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    where?: LogAccessWhereInput
    orderBy?: LogAccessOrderByWithRelationInput | LogAccessOrderByWithRelationInput[]
    cursor?: LogAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAccessScalarFieldEnum | LogAccessScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    id: number | null
    power: number | null
  }

  export type PositionSumAggregateOutputType = {
    id: number | null
    power: number | null
  }

  export type PositionMinAggregateOutputType = {
    id: number | null
    name: string | null
    power: number | null
  }

  export type PositionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    power: number | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    name: number
    power: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    id?: true
    power?: true
  }

  export type PositionSumAggregateInputType = {
    id?: true
    power?: true
  }

  export type PositionMinAggregateInputType = {
    id?: true
    name?: true
    power?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    name?: true
    power?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    name?: true
    power?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: number
    name: string
    power: number
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    power?: boolean
    users?: boolean | Position$usersArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    id?: boolean
    name?: boolean
    power?: boolean
  }

  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Position$usersArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      power: number
    }, ExtArgs["result"]["position"]>
    composites: {}
  }


  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PositionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Position that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PositionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PositionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
    **/
    create<T extends PositionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PositionCreateArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Positions.
     *     @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     *     @example
     *     // Create many Positions
     *     const position = await prisma.position.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PositionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
    **/
    delete<T extends PositionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PositionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PositionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PositionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
    **/
    upsert<T extends PositionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>
    ): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Position$usersArgs<ExtArgs> = {}>(args?: Subset<T, Position$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Position model
   */ 
  interface PositionFieldRefs {
    readonly id: FieldRef<"Position", 'Int'>
    readonly name: FieldRef<"Position", 'String'>
    readonly power: FieldRef<"Position", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
  }


  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
  }


  /**
   * Position.users
   */
  export type Position$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PositionInclude<ExtArgs> | null
  }



  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
    order: number | null
    parentId: number | null
    communityId: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
    order: number | null
    parentId: number | null
    communityId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    order: number | null
    slug: string | null
    name: string | null
    parentId: number | null
    communityId: number | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    order: number | null
    slug: string | null
    name: string | null
    parentId: number | null
    communityId: number | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    order: number
    slug: number
    name: number
    parentId: number
    communityId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
    order?: true
    parentId?: true
    communityId?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
    order?: true
    parentId?: true
    communityId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    order?: true
    slug?: true
    name?: true
    parentId?: true
    communityId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    order?: true
    slug?: true
    name?: true
    parentId?: true
    communityId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    order?: true
    slug?: true
    name?: true
    parentId?: true
    communityId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    order: number
    slug: string
    name: string
    parentId: number | null
    communityId: number
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    slug?: boolean
    name?: boolean
    parentId?: boolean
    communityId?: boolean
    parent?: boolean | Group$parentArgs<ExtArgs>
    children?: boolean | Group$childrenArgs<ExtArgs>
    users?: boolean | Group$usersArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    order?: boolean
    slug?: boolean
    name?: boolean
    parentId?: boolean
    communityId?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Group$parentArgs<ExtArgs>
    children?: boolean | Group$childrenArgs<ExtArgs>
    users?: boolean | Group$usersArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      parent: Prisma.$GroupPayload<ExtArgs> | null
      children: Prisma.$GroupPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      community: Prisma.$CommunityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order: number
      slug: string
      name: string
      parentId: number | null
      communityId: number
    }, ExtArgs["result"]["group"]>
    composites: {}
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends Group$parentArgs<ExtArgs> = {}>(args?: Subset<T, Group$parentArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    children<T extends Group$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Group$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly order: FieldRef<"Group", 'Int'>
    readonly slug: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly parentId: FieldRef<"Group", 'Int'>
    readonly communityId: FieldRef<"Group", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }


  /**
   * Group.parent
   */
  export type Group$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }


  /**
   * Group.children
   */
  export type Group$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
  }



  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
    managerId: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
    managerId: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    isPrivate: boolean | null
    isPublicRead: boolean | null
    isPublicWrite: boolean | null
    category: $Enums.CommunityCategory | null
    slug: string | null
    name: string | null
    latestPostDate: Date | null
    managerId: number | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    isPrivate: boolean | null
    isPublicRead: boolean | null
    isPublicWrite: boolean | null
    category: $Enums.CommunityCategory | null
    slug: string | null
    name: string | null
    latestPostDate: Date | null
    managerId: number | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    isPrivate: number
    isPublicRead: number
    isPublicWrite: number
    category: number
    slug: number
    name: number
    latestPostDate: number
    managerId: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
    managerId?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
    managerId?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    isPrivate?: true
    isPublicRead?: true
    isPublicWrite?: true
    category?: true
    slug?: true
    name?: true
    latestPostDate?: true
    managerId?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    isPrivate?: true
    isPublicRead?: true
    isPublicWrite?: true
    category?: true
    slug?: true
    name?: true
    latestPostDate?: true
    managerId?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    isPrivate?: true
    isPublicRead?: true
    isPublicWrite?: true
    category?: true
    slug?: true
    name?: true
    latestPostDate?: true
    managerId?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: number
    isPrivate: boolean
    isPublicRead: boolean
    isPublicWrite: boolean
    category: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate: Date | null
    managerId: number | null
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: boolean
    slug?: boolean
    name?: boolean
    latestPostDate?: boolean
    managerId?: boolean
    group?: boolean | Community$groupArgs<ExtArgs>
    posts?: boolean | Community$postsArgs<ExtArgs>
    manager?: boolean | Community$managerArgs<ExtArgs>
    users?: boolean | Community$usersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: boolean
    slug?: boolean
    name?: boolean
    latestPostDate?: boolean
    managerId?: boolean
  }

  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Community$groupArgs<ExtArgs>
    posts?: boolean | Community$postsArgs<ExtArgs>
    manager?: boolean | Community$managerArgs<ExtArgs>
    users?: boolean | Community$usersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      manager: Prisma.$UserPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isPrivate: boolean
      isPublicRead: boolean
      isPublicWrite: boolean
      category: $Enums.CommunityCategory
      slug: string
      name: string
      latestPostDate: Date | null
      managerId: number | null
    }, ExtArgs["result"]["community"]>
    composites: {}
  }


  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Community that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommunityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
    **/
    create<T extends CommunityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Communities.
     *     @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     *     @example
     *     // Create many Communities
     *     const community = await prisma.community.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
    **/
    delete<T extends CommunityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
    **/
    upsert<T extends CommunityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends Community$groupArgs<ExtArgs> = {}>(args?: Subset<T, Community$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    posts<T extends Community$postsArgs<ExtArgs> = {}>(args?: Subset<T, Community$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    manager<T extends Community$managerArgs<ExtArgs> = {}>(args?: Subset<T, Community$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    users<T extends Community$usersArgs<ExtArgs> = {}>(args?: Subset<T, Community$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Community model
   */ 
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'Int'>
    readonly isPrivate: FieldRef<"Community", 'Boolean'>
    readonly isPublicRead: FieldRef<"Community", 'Boolean'>
    readonly isPublicWrite: FieldRef<"Community", 'Boolean'>
    readonly category: FieldRef<"Community", 'CommunityCategory'>
    readonly slug: FieldRef<"Community", 'String'>
    readonly name: FieldRef<"Community", 'String'>
    readonly latestPostDate: FieldRef<"Community", 'DateTime'>
    readonly managerId: FieldRef<"Community", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
  }


  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
  }


  /**
   * Community.group
   */
  export type Community$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }


  /**
   * Community.posts
   */
  export type Community$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Community.manager
   */
  export type Community$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Community.users
   */
  export type Community$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    communityId: number | null
    userId: number | null
    commentCnt: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    communityId: number | null
    userId: number | null
    commentCnt: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    communityId: number | null
    userId: number | null
    commentCnt: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    communityId: number | null
    userId: number | null
    commentCnt: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    text: number
    createdAt: number
    updatedAt: number
    communityId: number
    userId: number
    commentCnt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    communityId?: true
    userId?: true
    commentCnt?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    communityId?: true
    userId?: true
    commentCnt?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    communityId?: true
    userId?: true
    commentCnt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    communityId?: true
    userId?: true
    commentCnt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    communityId?: true
    userId?: true
    commentCnt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    text: string
    createdAt: Date
    updatedAt: Date
    communityId: number
    userId: number
    commentCnt: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communityId?: boolean
    userId?: boolean
    commentCnt?: boolean
    largeText?: boolean | Post$largeTextArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    meta?: boolean | Post$metaArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communityId?: boolean
    userId?: boolean
    commentCnt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    largeText?: boolean | Post$largeTextArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    meta?: boolean | Post$metaArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      largeText: Prisma.$PostLargTextPayload<ExtArgs> | null
      community: Prisma.$CommunityPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      meta: Prisma.$MetaDataPayload<ExtArgs>[]
      comments: Prisma.$PostCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      text: string
      createdAt: Date
      updatedAt: Date
      communityId: number
      userId: number
      commentCnt: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    largeText<T extends Post$largeTextArgs<ExtArgs> = {}>(args?: Subset<T, Post$largeTextArgs<ExtArgs>>): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    meta<T extends Post$metaArgs<ExtArgs> = {}>(args?: Subset<T, Post$metaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly text: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly communityId: FieldRef<"Post", 'Int'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly commentCnt: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.largeText
   */
  export type Post$largeTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    where?: PostLargTextWhereInput
  }


  /**
   * Post.meta
   */
  export type Post$metaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    where?: MetaDataWhereInput
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    cursor?: MetaDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
  }


  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    cursor?: PostCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model PostLargText
   */

  export type AggregatePostLargText = {
    _count: PostLargTextCountAggregateOutputType | null
    _avg: PostLargTextAvgAggregateOutputType | null
    _sum: PostLargTextSumAggregateOutputType | null
    _min: PostLargTextMinAggregateOutputType | null
    _max: PostLargTextMaxAggregateOutputType | null
  }

  export type PostLargTextAvgAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostLargTextSumAggregateOutputType = {
    id: number | null
    postId: number | null
  }

  export type PostLargTextMinAggregateOutputType = {
    id: number | null
    text: string | null
    postId: number | null
  }

  export type PostLargTextMaxAggregateOutputType = {
    id: number | null
    text: string | null
    postId: number | null
  }

  export type PostLargTextCountAggregateOutputType = {
    id: number
    text: number
    postId: number
    _all: number
  }


  export type PostLargTextAvgAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostLargTextSumAggregateInputType = {
    id?: true
    postId?: true
  }

  export type PostLargTextMinAggregateInputType = {
    id?: true
    text?: true
    postId?: true
  }

  export type PostLargTextMaxAggregateInputType = {
    id?: true
    text?: true
    postId?: true
  }

  export type PostLargTextCountAggregateInputType = {
    id?: true
    text?: true
    postId?: true
    _all?: true
  }

  export type PostLargTextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLargText to aggregate.
     */
    where?: PostLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLargTexts to fetch.
     */
    orderBy?: PostLargTextOrderByWithRelationInput | PostLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLargTexts
    **/
    _count?: true | PostLargTextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostLargTextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostLargTextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLargTextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLargTextMaxAggregateInputType
  }

  export type GetPostLargTextAggregateType<T extends PostLargTextAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLargText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLargText[P]>
      : GetScalarType<T[P], AggregatePostLargText[P]>
  }




  export type PostLargTextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLargTextWhereInput
    orderBy?: PostLargTextOrderByWithAggregationInput | PostLargTextOrderByWithAggregationInput[]
    by: PostLargTextScalarFieldEnum[] | PostLargTextScalarFieldEnum
    having?: PostLargTextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLargTextCountAggregateInputType | true
    _avg?: PostLargTextAvgAggregateInputType
    _sum?: PostLargTextSumAggregateInputType
    _min?: PostLargTextMinAggregateInputType
    _max?: PostLargTextMaxAggregateInputType
  }

  export type PostLargTextGroupByOutputType = {
    id: number
    text: string
    postId: number
    _count: PostLargTextCountAggregateOutputType | null
    _avg: PostLargTextAvgAggregateOutputType | null
    _sum: PostLargTextSumAggregateOutputType | null
    _min: PostLargTextMinAggregateOutputType | null
    _max: PostLargTextMaxAggregateOutputType | null
  }

  type GetPostLargTextGroupByPayload<T extends PostLargTextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLargTextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLargTextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLargTextGroupByOutputType[P]>
            : GetScalarType<T[P], PostLargTextGroupByOutputType[P]>
        }
      >
    >


  export type PostLargTextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLargText"]>

  export type PostLargTextSelectScalar = {
    id?: boolean
    text?: boolean
    postId?: boolean
  }

  export type PostLargTextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }


  export type $PostLargTextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLargText"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      postId: number
    }, ExtArgs["result"]["postLargText"]>
    composites: {}
  }


  type PostLargTextGetPayload<S extends boolean | null | undefined | PostLargTextDefaultArgs> = $Result.GetResult<Prisma.$PostLargTextPayload, S>

  type PostLargTextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostLargTextFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PostLargTextCountAggregateInputType | true
    }

  export interface PostLargTextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLargText'], meta: { name: 'PostLargText' } }
    /**
     * Find zero or one PostLargText that matches the filter.
     * @param {PostLargTextFindUniqueArgs} args - Arguments to find a PostLargText
     * @example
     * // Get one PostLargText
     * const postLargText = await prisma.postLargText.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostLargTextFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostLargTextFindUniqueArgs<ExtArgs>>
    ): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PostLargText that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostLargTextFindUniqueOrThrowArgs} args - Arguments to find a PostLargText
     * @example
     * // Get one PostLargText
     * const postLargText = await prisma.postLargText.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostLargTextFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostLargTextFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PostLargText that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLargTextFindFirstArgs} args - Arguments to find a PostLargText
     * @example
     * // Get one PostLargText
     * const postLargText = await prisma.postLargText.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostLargTextFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostLargTextFindFirstArgs<ExtArgs>>
    ): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PostLargText that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLargTextFindFirstOrThrowArgs} args - Arguments to find a PostLargText
     * @example
     * // Get one PostLargText
     * const postLargText = await prisma.postLargText.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostLargTextFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostLargTextFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PostLargTexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLargTextFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLargTexts
     * const postLargTexts = await prisma.postLargText.findMany()
     * 
     * // Get first 10 PostLargTexts
     * const postLargTexts = await prisma.postLargText.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postLargTextWithIdOnly = await prisma.postLargText.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostLargTextFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostLargTextFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PostLargText.
     * @param {PostLargTextCreateArgs} args - Arguments to create a PostLargText.
     * @example
     * // Create one PostLargText
     * const PostLargText = await prisma.postLargText.create({
     *   data: {
     *     // ... data to create a PostLargText
     *   }
     * })
     * 
    **/
    create<T extends PostLargTextCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostLargTextCreateArgs<ExtArgs>>
    ): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PostLargTexts.
     *     @param {PostLargTextCreateManyArgs} args - Arguments to create many PostLargTexts.
     *     @example
     *     // Create many PostLargTexts
     *     const postLargText = await prisma.postLargText.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostLargTextCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostLargTextCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostLargText.
     * @param {PostLargTextDeleteArgs} args - Arguments to delete one PostLargText.
     * @example
     * // Delete one PostLargText
     * const PostLargText = await prisma.postLargText.delete({
     *   where: {
     *     // ... filter to delete one PostLargText
     *   }
     * })
     * 
    **/
    delete<T extends PostLargTextDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostLargTextDeleteArgs<ExtArgs>>
    ): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PostLargText.
     * @param {PostLargTextUpdateArgs} args - Arguments to update one PostLargText.
     * @example
     * // Update one PostLargText
     * const postLargText = await prisma.postLargText.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostLargTextUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostLargTextUpdateArgs<ExtArgs>>
    ): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PostLargTexts.
     * @param {PostLargTextDeleteManyArgs} args - Arguments to filter PostLargTexts to delete.
     * @example
     * // Delete a few PostLargTexts
     * const { count } = await prisma.postLargText.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostLargTextDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostLargTextDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLargTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLargTextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLargTexts
     * const postLargText = await prisma.postLargText.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostLargTextUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostLargTextUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostLargText.
     * @param {PostLargTextUpsertArgs} args - Arguments to update or create a PostLargText.
     * @example
     * // Update or create a PostLargText
     * const postLargText = await prisma.postLargText.upsert({
     *   create: {
     *     // ... data to create a PostLargText
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLargText we want to update
     *   }
     * })
    **/
    upsert<T extends PostLargTextUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostLargTextUpsertArgs<ExtArgs>>
    ): Prisma__PostLargTextClient<$Result.GetResult<Prisma.$PostLargTextPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PostLargTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLargTextCountArgs} args - Arguments to filter PostLargTexts to count.
     * @example
     * // Count the number of PostLargTexts
     * const count = await prisma.postLargText.count({
     *   where: {
     *     // ... the filter for the PostLargTexts we want to count
     *   }
     * })
    **/
    count<T extends PostLargTextCountArgs>(
      args?: Subset<T, PostLargTextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLargTextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLargText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLargTextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostLargTextAggregateArgs>(args: Subset<T, PostLargTextAggregateArgs>): Prisma.PrismaPromise<GetPostLargTextAggregateType<T>>

    /**
     * Group by PostLargText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLargTextGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostLargTextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLargTextGroupByArgs['orderBy'] }
        : { orderBy?: PostLargTextGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostLargTextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLargTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLargText model
   */
  readonly fields: PostLargTextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLargText.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLargTextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PostLargText model
   */ 
  interface PostLargTextFieldRefs {
    readonly id: FieldRef<"PostLargText", 'Int'>
    readonly text: FieldRef<"PostLargText", 'String'>
    readonly postId: FieldRef<"PostLargText", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PostLargText findUnique
   */
  export type PostLargTextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostLargText to fetch.
     */
    where: PostLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText findUniqueOrThrow
   */
  export type PostLargTextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostLargText to fetch.
     */
    where: PostLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText findFirst
   */
  export type PostLargTextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostLargText to fetch.
     */
    where?: PostLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLargTexts to fetch.
     */
    orderBy?: PostLargTextOrderByWithRelationInput | PostLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLargTexts.
     */
    cursor?: PostLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLargTexts.
     */
    distinct?: PostLargTextScalarFieldEnum | PostLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText findFirstOrThrow
   */
  export type PostLargTextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostLargText to fetch.
     */
    where?: PostLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLargTexts to fetch.
     */
    orderBy?: PostLargTextOrderByWithRelationInput | PostLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLargTexts.
     */
    cursor?: PostLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLargTexts.
     */
    distinct?: PostLargTextScalarFieldEnum | PostLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText findMany
   */
  export type PostLargTextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostLargTexts to fetch.
     */
    where?: PostLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLargTexts to fetch.
     */
    orderBy?: PostLargTextOrderByWithRelationInput | PostLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLargTexts.
     */
    cursor?: PostLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLargTexts.
     */
    skip?: number
    distinct?: PostLargTextScalarFieldEnum | PostLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText create
   */
  export type PostLargTextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLargText.
     */
    data: XOR<PostLargTextCreateInput, PostLargTextUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText createMany
   */
  export type PostLargTextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLargTexts.
     */
    data: PostLargTextCreateManyInput | PostLargTextCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PostLargText update
   */
  export type PostLargTextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLargText.
     */
    data: XOR<PostLargTextUpdateInput, PostLargTextUncheckedUpdateInput>
    /**
     * Choose, which PostLargText to update.
     */
    where: PostLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText updateMany
   */
  export type PostLargTextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLargTexts.
     */
    data: XOR<PostLargTextUpdateManyMutationInput, PostLargTextUncheckedUpdateManyInput>
    /**
     * Filter which PostLargTexts to update
     */
    where?: PostLargTextWhereInput
  }


  /**
   * PostLargText upsert
   */
  export type PostLargTextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLargText to update in case it exists.
     */
    where: PostLargTextWhereUniqueInput
    /**
     * In case the PostLargText found by the `where` argument doesn't exist, create a new PostLargText with this data.
     */
    create: XOR<PostLargTextCreateInput, PostLargTextUncheckedCreateInput>
    /**
     * In case the PostLargText was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLargTextUpdateInput, PostLargTextUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText delete
   */
  export type PostLargTextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
    /**
     * Filter which PostLargText to delete.
     */
    where: PostLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostLargText deleteMany
   */
  export type PostLargTextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLargTexts to delete
     */
    where?: PostLargTextWhereInput
  }


  /**
   * PostLargText without action
   */
  export type PostLargTextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLargText
     */
    select?: PostLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostLargTextInclude<ExtArgs> | null
  }



  /**
   * Model PostComment
   */

  export type AggregatePostComment = {
    _count: PostCommentCountAggregateOutputType | null
    _avg: PostCommentAvgAggregateOutputType | null
    _sum: PostCommentSumAggregateOutputType | null
    _min: PostCommentMinAggregateOutputType | null
    _max: PostCommentMaxAggregateOutputType | null
  }

  export type PostCommentAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type PostCommentSumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type PostCommentMinAggregateOutputType = {
    id: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: number | null
    userId: number | null
  }

  export type PostCommentMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: number | null
    userId: number | null
  }

  export type PostCommentCountAggregateOutputType = {
    id: number
    comment: number
    createdAt: number
    updatedAt: number
    postId: number
    userId: number
    _all: number
  }


  export type PostCommentAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type PostCommentSumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type PostCommentMinAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    userId?: true
  }

  export type PostCommentMaxAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    userId?: true
  }

  export type PostCommentCountAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    userId?: true
    _all?: true
  }

  export type PostCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComment to aggregate.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostComments
    **/
    _count?: true | PostCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentMaxAggregateInputType
  }

  export type GetPostCommentAggregateType<T extends PostCommentAggregateArgs> = {
        [P in keyof T & keyof AggregatePostComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostComment[P]>
      : GetScalarType<T[P], AggregatePostComment[P]>
  }




  export type PostCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentWhereInput
    orderBy?: PostCommentOrderByWithAggregationInput | PostCommentOrderByWithAggregationInput[]
    by: PostCommentScalarFieldEnum[] | PostCommentScalarFieldEnum
    having?: PostCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentCountAggregateInputType | true
    _avg?: PostCommentAvgAggregateInputType
    _sum?: PostCommentSumAggregateInputType
    _min?: PostCommentMinAggregateInputType
    _max?: PostCommentMaxAggregateInputType
  }

  export type PostCommentGroupByOutputType = {
    id: number
    comment: string
    createdAt: Date
    updatedAt: Date
    postId: number
    userId: number
    _count: PostCommentCountAggregateOutputType | null
    _avg: PostCommentAvgAggregateOutputType | null
    _sum: PostCommentSumAggregateOutputType | null
    _min: PostCommentMinAggregateOutputType | null
    _max: PostCommentMaxAggregateOutputType | null
  }

  type GetPostCommentGroupByPayload<T extends PostCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    userId?: boolean
    largeComment?: boolean | PostComment$largeCommentArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postComment"]>

  export type PostCommentSelectScalar = {
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    userId?: boolean
  }

  export type PostCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    largeComment?: boolean | PostComment$largeCommentArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PostCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostComment"
    objects: {
      largeComment: Prisma.$PostCommentLargTextPayload<ExtArgs> | null
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      createdAt: Date
      updatedAt: Date
      postId: number
      userId: number
    }, ExtArgs["result"]["postComment"]>
    composites: {}
  }


  type PostCommentGetPayload<S extends boolean | null | undefined | PostCommentDefaultArgs> = $Result.GetResult<Prisma.$PostCommentPayload, S>

  type PostCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PostCommentCountAggregateInputType | true
    }

  export interface PostCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostComment'], meta: { name: 'PostComment' } }
    /**
     * Find zero or one PostComment that matches the filter.
     * @param {PostCommentFindUniqueArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostCommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentFindUniqueArgs<ExtArgs>>
    ): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PostComment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostCommentFindUniqueOrThrowArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostCommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PostComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindFirstArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostCommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentFindFirstArgs<ExtArgs>>
    ): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PostComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindFirstOrThrowArgs} args - Arguments to find a PostComment
     * @example
     * // Get one PostComment
     * const postComment = await prisma.postComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostCommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PostComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostComments
     * const postComments = await prisma.postComment.findMany()
     * 
     * // Get first 10 PostComments
     * const postComments = await prisma.postComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCommentWithIdOnly = await prisma.postComment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostCommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PostComment.
     * @param {PostCommentCreateArgs} args - Arguments to create a PostComment.
     * @example
     * // Create one PostComment
     * const PostComment = await prisma.postComment.create({
     *   data: {
     *     // ... data to create a PostComment
     *   }
     * })
     * 
    **/
    create<T extends PostCommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentCreateArgs<ExtArgs>>
    ): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PostComments.
     *     @param {PostCommentCreateManyArgs} args - Arguments to create many PostComments.
     *     @example
     *     // Create many PostComments
     *     const postComment = await prisma.postComment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostComment.
     * @param {PostCommentDeleteArgs} args - Arguments to delete one PostComment.
     * @example
     * // Delete one PostComment
     * const PostComment = await prisma.postComment.delete({
     *   where: {
     *     // ... filter to delete one PostComment
     *   }
     * })
     * 
    **/
    delete<T extends PostCommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentDeleteArgs<ExtArgs>>
    ): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PostComment.
     * @param {PostCommentUpdateArgs} args - Arguments to update one PostComment.
     * @example
     * // Update one PostComment
     * const postComment = await prisma.postComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostCommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentUpdateArgs<ExtArgs>>
    ): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PostComments.
     * @param {PostCommentDeleteManyArgs} args - Arguments to filter PostComments to delete.
     * @example
     * // Delete a few PostComments
     * const { count } = await prisma.postComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostCommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostComments
     * const postComment = await prisma.postComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostCommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostComment.
     * @param {PostCommentUpsertArgs} args - Arguments to update or create a PostComment.
     * @example
     * // Update or create a PostComment
     * const postComment = await prisma.postComment.upsert({
     *   create: {
     *     // ... data to create a PostComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostComment we want to update
     *   }
     * })
    **/
    upsert<T extends PostCommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentUpsertArgs<ExtArgs>>
    ): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PostComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentCountArgs} args - Arguments to filter PostComments to count.
     * @example
     * // Count the number of PostComments
     * const count = await prisma.postComment.count({
     *   where: {
     *     // ... the filter for the PostComments we want to count
     *   }
     * })
    **/
    count<T extends PostCommentCountArgs>(
      args?: Subset<T, PostCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentAggregateArgs>(args: Subset<T, PostCommentAggregateArgs>): Prisma.PrismaPromise<GetPostCommentAggregateType<T>>

    /**
     * Group by PostComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostComment model
   */
  readonly fields: PostCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    largeComment<T extends PostComment$largeCommentArgs<ExtArgs> = {}>(args?: Subset<T, PostComment$largeCommentArgs<ExtArgs>>): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PostComment model
   */ 
  interface PostCommentFieldRefs {
    readonly id: FieldRef<"PostComment", 'Int'>
    readonly comment: FieldRef<"PostComment", 'String'>
    readonly createdAt: FieldRef<"PostComment", 'DateTime'>
    readonly updatedAt: FieldRef<"PostComment", 'DateTime'>
    readonly postId: FieldRef<"PostComment", 'Int'>
    readonly userId: FieldRef<"PostComment", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PostComment findUnique
   */
  export type PostCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where: PostCommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment findUniqueOrThrow
   */
  export type PostCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where: PostCommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment findFirst
   */
  export type PostCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment findFirstOrThrow
   */
  export type PostCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComment to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostComments.
     */
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment findMany
   */
  export type PostCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter, which PostComments to fetch.
     */
    where?: PostCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostComments to fetch.
     */
    orderBy?: PostCommentOrderByWithRelationInput | PostCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostComments.
     */
    cursor?: PostCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostComments.
     */
    skip?: number
    distinct?: PostCommentScalarFieldEnum | PostCommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment create
   */
  export type PostCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a PostComment.
     */
    data: XOR<PostCommentCreateInput, PostCommentUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment createMany
   */
  export type PostCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostComments.
     */
    data: PostCommentCreateManyInput | PostCommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PostComment update
   */
  export type PostCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a PostComment.
     */
    data: XOR<PostCommentUpdateInput, PostCommentUncheckedUpdateInput>
    /**
     * Choose, which PostComment to update.
     */
    where: PostCommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment updateMany
   */
  export type PostCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostComments.
     */
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyInput>
    /**
     * Filter which PostComments to update
     */
    where?: PostCommentWhereInput
  }


  /**
   * PostComment upsert
   */
  export type PostCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the PostComment to update in case it exists.
     */
    where: PostCommentWhereUniqueInput
    /**
     * In case the PostComment found by the `where` argument doesn't exist, create a new PostComment with this data.
     */
    create: XOR<PostCommentCreateInput, PostCommentUncheckedCreateInput>
    /**
     * In case the PostComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentUpdateInput, PostCommentUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment delete
   */
  export type PostCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
    /**
     * Filter which PostComment to delete.
     */
    where: PostCommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostComment deleteMany
   */
  export type PostCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostComments to delete
     */
    where?: PostCommentWhereInput
  }


  /**
   * PostComment.largeComment
   */
  export type PostComment$largeCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    where?: PostCommentLargTextWhereInput
  }


  /**
   * PostComment without action
   */
  export type PostCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostComment
     */
    select?: PostCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentInclude<ExtArgs> | null
  }



  /**
   * Model PostCommentLargText
   */

  export type AggregatePostCommentLargText = {
    _count: PostCommentLargTextCountAggregateOutputType | null
    _avg: PostCommentLargTextAvgAggregateOutputType | null
    _sum: PostCommentLargTextSumAggregateOutputType | null
    _min: PostCommentLargTextMinAggregateOutputType | null
    _max: PostCommentLargTextMaxAggregateOutputType | null
  }

  export type PostCommentLargTextAvgAggregateOutputType = {
    id: number | null
    postCommentId: number | null
  }

  export type PostCommentLargTextSumAggregateOutputType = {
    id: number | null
    postCommentId: number | null
  }

  export type PostCommentLargTextMinAggregateOutputType = {
    id: number | null
    text: string | null
    postCommentId: number | null
  }

  export type PostCommentLargTextMaxAggregateOutputType = {
    id: number | null
    text: string | null
    postCommentId: number | null
  }

  export type PostCommentLargTextCountAggregateOutputType = {
    id: number
    text: number
    postCommentId: number
    _all: number
  }


  export type PostCommentLargTextAvgAggregateInputType = {
    id?: true
    postCommentId?: true
  }

  export type PostCommentLargTextSumAggregateInputType = {
    id?: true
    postCommentId?: true
  }

  export type PostCommentLargTextMinAggregateInputType = {
    id?: true
    text?: true
    postCommentId?: true
  }

  export type PostCommentLargTextMaxAggregateInputType = {
    id?: true
    text?: true
    postCommentId?: true
  }

  export type PostCommentLargTextCountAggregateInputType = {
    id?: true
    text?: true
    postCommentId?: true
    _all?: true
  }

  export type PostCommentLargTextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCommentLargText to aggregate.
     */
    where?: PostCommentLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentLargTexts to fetch.
     */
    orderBy?: PostCommentLargTextOrderByWithRelationInput | PostCommentLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostCommentLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostCommentLargTexts
    **/
    _count?: true | PostCommentLargTextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostCommentLargTextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostCommentLargTextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostCommentLargTextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostCommentLargTextMaxAggregateInputType
  }

  export type GetPostCommentLargTextAggregateType<T extends PostCommentLargTextAggregateArgs> = {
        [P in keyof T & keyof AggregatePostCommentLargText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostCommentLargText[P]>
      : GetScalarType<T[P], AggregatePostCommentLargText[P]>
  }




  export type PostCommentLargTextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostCommentLargTextWhereInput
    orderBy?: PostCommentLargTextOrderByWithAggregationInput | PostCommentLargTextOrderByWithAggregationInput[]
    by: PostCommentLargTextScalarFieldEnum[] | PostCommentLargTextScalarFieldEnum
    having?: PostCommentLargTextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCommentLargTextCountAggregateInputType | true
    _avg?: PostCommentLargTextAvgAggregateInputType
    _sum?: PostCommentLargTextSumAggregateInputType
    _min?: PostCommentLargTextMinAggregateInputType
    _max?: PostCommentLargTextMaxAggregateInputType
  }

  export type PostCommentLargTextGroupByOutputType = {
    id: number
    text: string
    postCommentId: number
    _count: PostCommentLargTextCountAggregateOutputType | null
    _avg: PostCommentLargTextAvgAggregateOutputType | null
    _sum: PostCommentLargTextSumAggregateOutputType | null
    _min: PostCommentLargTextMinAggregateOutputType | null
    _max: PostCommentLargTextMaxAggregateOutputType | null
  }

  type GetPostCommentLargTextGroupByPayload<T extends PostCommentLargTextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostCommentLargTextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostCommentLargTextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostCommentLargTextGroupByOutputType[P]>
            : GetScalarType<T[P], PostCommentLargTextGroupByOutputType[P]>
        }
      >
    >


  export type PostCommentLargTextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    postCommentId?: boolean
    postComment?: boolean | PostCommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postCommentLargText"]>

  export type PostCommentLargTextSelectScalar = {
    id?: boolean
    text?: boolean
    postCommentId?: boolean
  }

  export type PostCommentLargTextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postComment?: boolean | PostCommentDefaultArgs<ExtArgs>
  }


  export type $PostCommentLargTextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostCommentLargText"
    objects: {
      postComment: Prisma.$PostCommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      postCommentId: number
    }, ExtArgs["result"]["postCommentLargText"]>
    composites: {}
  }


  type PostCommentLargTextGetPayload<S extends boolean | null | undefined | PostCommentLargTextDefaultArgs> = $Result.GetResult<Prisma.$PostCommentLargTextPayload, S>

  type PostCommentLargTextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostCommentLargTextFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PostCommentLargTextCountAggregateInputType | true
    }

  export interface PostCommentLargTextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostCommentLargText'], meta: { name: 'PostCommentLargText' } }
    /**
     * Find zero or one PostCommentLargText that matches the filter.
     * @param {PostCommentLargTextFindUniqueArgs} args - Arguments to find a PostCommentLargText
     * @example
     * // Get one PostCommentLargText
     * const postCommentLargText = await prisma.postCommentLargText.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostCommentLargTextFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentLargTextFindUniqueArgs<ExtArgs>>
    ): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PostCommentLargText that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostCommentLargTextFindUniqueOrThrowArgs} args - Arguments to find a PostCommentLargText
     * @example
     * // Get one PostCommentLargText
     * const postCommentLargText = await prisma.postCommentLargText.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostCommentLargTextFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentLargTextFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PostCommentLargText that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentLargTextFindFirstArgs} args - Arguments to find a PostCommentLargText
     * @example
     * // Get one PostCommentLargText
     * const postCommentLargText = await prisma.postCommentLargText.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostCommentLargTextFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentLargTextFindFirstArgs<ExtArgs>>
    ): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PostCommentLargText that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentLargTextFindFirstOrThrowArgs} args - Arguments to find a PostCommentLargText
     * @example
     * // Get one PostCommentLargText
     * const postCommentLargText = await prisma.postCommentLargText.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostCommentLargTextFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentLargTextFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PostCommentLargTexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentLargTextFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostCommentLargTexts
     * const postCommentLargTexts = await prisma.postCommentLargText.findMany()
     * 
     * // Get first 10 PostCommentLargTexts
     * const postCommentLargTexts = await prisma.postCommentLargText.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postCommentLargTextWithIdOnly = await prisma.postCommentLargText.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostCommentLargTextFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentLargTextFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PostCommentLargText.
     * @param {PostCommentLargTextCreateArgs} args - Arguments to create a PostCommentLargText.
     * @example
     * // Create one PostCommentLargText
     * const PostCommentLargText = await prisma.postCommentLargText.create({
     *   data: {
     *     // ... data to create a PostCommentLargText
     *   }
     * })
     * 
    **/
    create<T extends PostCommentLargTextCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentLargTextCreateArgs<ExtArgs>>
    ): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PostCommentLargTexts.
     *     @param {PostCommentLargTextCreateManyArgs} args - Arguments to create many PostCommentLargTexts.
     *     @example
     *     // Create many PostCommentLargTexts
     *     const postCommentLargText = await prisma.postCommentLargText.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCommentLargTextCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentLargTextCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostCommentLargText.
     * @param {PostCommentLargTextDeleteArgs} args - Arguments to delete one PostCommentLargText.
     * @example
     * // Delete one PostCommentLargText
     * const PostCommentLargText = await prisma.postCommentLargText.delete({
     *   where: {
     *     // ... filter to delete one PostCommentLargText
     *   }
     * })
     * 
    **/
    delete<T extends PostCommentLargTextDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentLargTextDeleteArgs<ExtArgs>>
    ): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PostCommentLargText.
     * @param {PostCommentLargTextUpdateArgs} args - Arguments to update one PostCommentLargText.
     * @example
     * // Update one PostCommentLargText
     * const postCommentLargText = await prisma.postCommentLargText.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostCommentLargTextUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentLargTextUpdateArgs<ExtArgs>>
    ): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PostCommentLargTexts.
     * @param {PostCommentLargTextDeleteManyArgs} args - Arguments to filter PostCommentLargTexts to delete.
     * @example
     * // Delete a few PostCommentLargTexts
     * const { count } = await prisma.postCommentLargText.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostCommentLargTextDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCommentLargTextDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostCommentLargTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentLargTextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostCommentLargTexts
     * const postCommentLargText = await prisma.postCommentLargText.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostCommentLargTextUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentLargTextUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostCommentLargText.
     * @param {PostCommentLargTextUpsertArgs} args - Arguments to update or create a PostCommentLargText.
     * @example
     * // Update or create a PostCommentLargText
     * const postCommentLargText = await prisma.postCommentLargText.upsert({
     *   create: {
     *     // ... data to create a PostCommentLargText
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostCommentLargText we want to update
     *   }
     * })
    **/
    upsert<T extends PostCommentLargTextUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostCommentLargTextUpsertArgs<ExtArgs>>
    ): Prisma__PostCommentLargTextClient<$Result.GetResult<Prisma.$PostCommentLargTextPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PostCommentLargTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentLargTextCountArgs} args - Arguments to filter PostCommentLargTexts to count.
     * @example
     * // Count the number of PostCommentLargTexts
     * const count = await prisma.postCommentLargText.count({
     *   where: {
     *     // ... the filter for the PostCommentLargTexts we want to count
     *   }
     * })
    **/
    count<T extends PostCommentLargTextCountArgs>(
      args?: Subset<T, PostCommentLargTextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCommentLargTextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostCommentLargText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentLargTextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostCommentLargTextAggregateArgs>(args: Subset<T, PostCommentLargTextAggregateArgs>): Prisma.PrismaPromise<GetPostCommentLargTextAggregateType<T>>

    /**
     * Group by PostCommentLargText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCommentLargTextGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostCommentLargTextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostCommentLargTextGroupByArgs['orderBy'] }
        : { orderBy?: PostCommentLargTextGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostCommentLargTextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostCommentLargTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostCommentLargText model
   */
  readonly fields: PostCommentLargTextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostCommentLargText.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostCommentLargTextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    postComment<T extends PostCommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostCommentDefaultArgs<ExtArgs>>): Prisma__PostCommentClient<$Result.GetResult<Prisma.$PostCommentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PostCommentLargText model
   */ 
  interface PostCommentLargTextFieldRefs {
    readonly id: FieldRef<"PostCommentLargText", 'Int'>
    readonly text: FieldRef<"PostCommentLargText", 'String'>
    readonly postCommentId: FieldRef<"PostCommentLargText", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PostCommentLargText findUnique
   */
  export type PostCommentLargTextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentLargText to fetch.
     */
    where: PostCommentLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText findUniqueOrThrow
   */
  export type PostCommentLargTextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentLargText to fetch.
     */
    where: PostCommentLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText findFirst
   */
  export type PostCommentLargTextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentLargText to fetch.
     */
    where?: PostCommentLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentLargTexts to fetch.
     */
    orderBy?: PostCommentLargTextOrderByWithRelationInput | PostCommentLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCommentLargTexts.
     */
    cursor?: PostCommentLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCommentLargTexts.
     */
    distinct?: PostCommentLargTextScalarFieldEnum | PostCommentLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText findFirstOrThrow
   */
  export type PostCommentLargTextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentLargText to fetch.
     */
    where?: PostCommentLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentLargTexts to fetch.
     */
    orderBy?: PostCommentLargTextOrderByWithRelationInput | PostCommentLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostCommentLargTexts.
     */
    cursor?: PostCommentLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostCommentLargTexts.
     */
    distinct?: PostCommentLargTextScalarFieldEnum | PostCommentLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText findMany
   */
  export type PostCommentLargTextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which PostCommentLargTexts to fetch.
     */
    where?: PostCommentLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostCommentLargTexts to fetch.
     */
    orderBy?: PostCommentLargTextOrderByWithRelationInput | PostCommentLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostCommentLargTexts.
     */
    cursor?: PostCommentLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostCommentLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostCommentLargTexts.
     */
    skip?: number
    distinct?: PostCommentLargTextScalarFieldEnum | PostCommentLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText create
   */
  export type PostCommentLargTextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * The data needed to create a PostCommentLargText.
     */
    data: XOR<PostCommentLargTextCreateInput, PostCommentLargTextUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText createMany
   */
  export type PostCommentLargTextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostCommentLargTexts.
     */
    data: PostCommentLargTextCreateManyInput | PostCommentLargTextCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PostCommentLargText update
   */
  export type PostCommentLargTextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * The data needed to update a PostCommentLargText.
     */
    data: XOR<PostCommentLargTextUpdateInput, PostCommentLargTextUncheckedUpdateInput>
    /**
     * Choose, which PostCommentLargText to update.
     */
    where: PostCommentLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText updateMany
   */
  export type PostCommentLargTextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostCommentLargTexts.
     */
    data: XOR<PostCommentLargTextUpdateManyMutationInput, PostCommentLargTextUncheckedUpdateManyInput>
    /**
     * Filter which PostCommentLargTexts to update
     */
    where?: PostCommentLargTextWhereInput
  }


  /**
   * PostCommentLargText upsert
   */
  export type PostCommentLargTextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * The filter to search for the PostCommentLargText to update in case it exists.
     */
    where: PostCommentLargTextWhereUniqueInput
    /**
     * In case the PostCommentLargText found by the `where` argument doesn't exist, create a new PostCommentLargText with this data.
     */
    create: XOR<PostCommentLargTextCreateInput, PostCommentLargTextUncheckedCreateInput>
    /**
     * In case the PostCommentLargText was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostCommentLargTextUpdateInput, PostCommentLargTextUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText delete
   */
  export type PostCommentLargTextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter which PostCommentLargText to delete.
     */
    where: PostCommentLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PostCommentLargText deleteMany
   */
  export type PostCommentLargTextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostCommentLargTexts to delete
     */
    where?: PostCommentLargTextWhereInput
  }


  /**
   * PostCommentLargText without action
   */
  export type PostCommentLargTextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCommentLargText
     */
    select?: PostCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostCommentLargTextInclude<ExtArgs> | null
  }



  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    id: number | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    createdAt: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    id?: true
  }

  export type ChatRoomSumAggregateInputType = {
    id?: true
  }

  export type ChatRoomMinAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    createdAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: number
    createdAt: Date
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    user?: boolean | ChatRoom$userArgs<ExtArgs>
    comments?: boolean | ChatRoom$commentsArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    createdAt?: boolean
  }

  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ChatRoom$userArgs<ExtArgs>
    comments?: boolean | ChatRoom$commentsArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
      comments: Prisma.$ChatCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }


  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatRoomFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatRoom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatRoomFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatRoomFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
    **/
    create<T extends ChatRoomCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatRooms.
     *     @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     *     @example
     *     // Create many ChatRooms
     *     const chatRoom = await prisma.chatRoom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatRoomCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
    **/
    delete<T extends ChatRoomDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatRoomUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatRoomDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatRoomUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
    **/
    upsert<T extends ChatRoomUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>
    ): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends ChatRoom$userArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends ChatRoom$commentsArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatRoom model
   */ 
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'Int'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data?: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
  }


  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
  }


  /**
   * ChatRoom.user
   */
  export type ChatRoom$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * ChatRoom.comments
   */
  export type ChatRoom$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    where?: ChatCommentWhereInput
    orderBy?: ChatCommentOrderByWithRelationInput | ChatCommentOrderByWithRelationInput[]
    cursor?: ChatCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatCommentScalarFieldEnum | ChatCommentScalarFieldEnum[]
  }


  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }



  /**
   * Model ChatComment
   */

  export type AggregateChatComment = {
    _count: ChatCommentCountAggregateOutputType | null
    _avg: ChatCommentAvgAggregateOutputType | null
    _sum: ChatCommentSumAggregateOutputType | null
    _min: ChatCommentMinAggregateOutputType | null
    _max: ChatCommentMaxAggregateOutputType | null
  }

  export type ChatCommentAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    userId: number | null
    metaId: number | null
  }

  export type ChatCommentSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    userId: number | null
    metaId: number | null
  }

  export type ChatCommentMinAggregateOutputType = {
    id: number | null
    comment: string | null
    createdAt: Date | null
    roomId: number | null
    userId: number | null
    metaId: number | null
  }

  export type ChatCommentMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    createdAt: Date | null
    roomId: number | null
    userId: number | null
    metaId: number | null
  }

  export type ChatCommentCountAggregateOutputType = {
    id: number
    comment: number
    createdAt: number
    roomId: number
    userId: number
    metaId: number
    _all: number
  }


  export type ChatCommentAvgAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    metaId?: true
  }

  export type ChatCommentSumAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    metaId?: true
  }

  export type ChatCommentMinAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    roomId?: true
    userId?: true
    metaId?: true
  }

  export type ChatCommentMaxAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    roomId?: true
    userId?: true
    metaId?: true
  }

  export type ChatCommentCountAggregateInputType = {
    id?: true
    comment?: true
    createdAt?: true
    roomId?: true
    userId?: true
    metaId?: true
    _all?: true
  }

  export type ChatCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatComment to aggregate.
     */
    where?: ChatCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatComments to fetch.
     */
    orderBy?: ChatCommentOrderByWithRelationInput | ChatCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatComments
    **/
    _count?: true | ChatCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatCommentMaxAggregateInputType
  }

  export type GetChatCommentAggregateType<T extends ChatCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateChatComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatComment[P]>
      : GetScalarType<T[P], AggregateChatComment[P]>
  }




  export type ChatCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatCommentWhereInput
    orderBy?: ChatCommentOrderByWithAggregationInput | ChatCommentOrderByWithAggregationInput[]
    by: ChatCommentScalarFieldEnum[] | ChatCommentScalarFieldEnum
    having?: ChatCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCommentCountAggregateInputType | true
    _avg?: ChatCommentAvgAggregateInputType
    _sum?: ChatCommentSumAggregateInputType
    _min?: ChatCommentMinAggregateInputType
    _max?: ChatCommentMaxAggregateInputType
  }

  export type ChatCommentGroupByOutputType = {
    id: number
    comment: string
    createdAt: Date
    roomId: number
    userId: number
    metaId: number | null
    _count: ChatCommentCountAggregateOutputType | null
    _avg: ChatCommentAvgAggregateOutputType | null
    _sum: ChatCommentSumAggregateOutputType | null
    _min: ChatCommentMinAggregateOutputType | null
    _max: ChatCommentMaxAggregateOutputType | null
  }

  type GetChatCommentGroupByPayload<T extends ChatCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatCommentGroupByOutputType[P]>
            : GetScalarType<T[P], ChatCommentGroupByOutputType[P]>
        }
      >
    >


  export type ChatCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    roomId?: boolean
    userId?: boolean
    metaId?: boolean
    largeComment?: boolean | ChatComment$largeCommentArgs<ExtArgs>
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    meta?: boolean | ChatComment$metaArgs<ExtArgs>
  }, ExtArgs["result"]["chatComment"]>

  export type ChatCommentSelectScalar = {
    id?: boolean
    comment?: boolean
    createdAt?: boolean
    roomId?: boolean
    userId?: boolean
    metaId?: boolean
  }

  export type ChatCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    largeComment?: boolean | ChatComment$largeCommentArgs<ExtArgs>
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    meta?: boolean | ChatComment$metaArgs<ExtArgs>
  }


  export type $ChatCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatComment"
    objects: {
      largeComment: Prisma.$ChatCommentLargTextPayload<ExtArgs> | null
      room: Prisma.$ChatRoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      meta: Prisma.$MetaDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      createdAt: Date
      roomId: number
      userId: number
      metaId: number | null
    }, ExtArgs["result"]["chatComment"]>
    composites: {}
  }


  type ChatCommentGetPayload<S extends boolean | null | undefined | ChatCommentDefaultArgs> = $Result.GetResult<Prisma.$ChatCommentPayload, S>

  type ChatCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: ChatCommentCountAggregateInputType | true
    }

  export interface ChatCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatComment'], meta: { name: 'ChatComment' } }
    /**
     * Find zero or one ChatComment that matches the filter.
     * @param {ChatCommentFindUniqueArgs} args - Arguments to find a ChatComment
     * @example
     * // Get one ChatComment
     * const chatComment = await prisma.chatComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatCommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatComment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatCommentFindUniqueOrThrowArgs} args - Arguments to find a ChatComment
     * @example
     * // Get one ChatComment
     * const chatComment = await prisma.chatComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatCommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentFindFirstArgs} args - Arguments to find a ChatComment
     * @example
     * // Get one ChatComment
     * const chatComment = await prisma.chatComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatCommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentFindFirstArgs<ExtArgs>>
    ): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentFindFirstOrThrowArgs} args - Arguments to find a ChatComment
     * @example
     * // Get one ChatComment
     * const chatComment = await prisma.chatComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatCommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatComments
     * const chatComments = await prisma.chatComment.findMany()
     * 
     * // Get first 10 ChatComments
     * const chatComments = await prisma.chatComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatCommentWithIdOnly = await prisma.chatComment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatCommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatComment.
     * @param {ChatCommentCreateArgs} args - Arguments to create a ChatComment.
     * @example
     * // Create one ChatComment
     * const ChatComment = await prisma.chatComment.create({
     *   data: {
     *     // ... data to create a ChatComment
     *   }
     * })
     * 
    **/
    create<T extends ChatCommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentCreateArgs<ExtArgs>>
    ): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatComments.
     *     @param {ChatCommentCreateManyArgs} args - Arguments to create many ChatComments.
     *     @example
     *     // Create many ChatComments
     *     const chatComment = await prisma.chatComment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatCommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatComment.
     * @param {ChatCommentDeleteArgs} args - Arguments to delete one ChatComment.
     * @example
     * // Delete one ChatComment
     * const ChatComment = await prisma.chatComment.delete({
     *   where: {
     *     // ... filter to delete one ChatComment
     *   }
     * })
     * 
    **/
    delete<T extends ChatCommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentDeleteArgs<ExtArgs>>
    ): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatComment.
     * @param {ChatCommentUpdateArgs} args - Arguments to update one ChatComment.
     * @example
     * // Update one ChatComment
     * const chatComment = await prisma.chatComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatCommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentUpdateArgs<ExtArgs>>
    ): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatComments.
     * @param {ChatCommentDeleteManyArgs} args - Arguments to filter ChatComments to delete.
     * @example
     * // Delete a few ChatComments
     * const { count } = await prisma.chatComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatCommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatComments
     * const chatComment = await prisma.chatComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatCommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatComment.
     * @param {ChatCommentUpsertArgs} args - Arguments to update or create a ChatComment.
     * @example
     * // Update or create a ChatComment
     * const chatComment = await prisma.chatComment.upsert({
     *   create: {
     *     // ... data to create a ChatComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatComment we want to update
     *   }
     * })
    **/
    upsert<T extends ChatCommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentUpsertArgs<ExtArgs>>
    ): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChatComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentCountArgs} args - Arguments to filter ChatComments to count.
     * @example
     * // Count the number of ChatComments
     * const count = await prisma.chatComment.count({
     *   where: {
     *     // ... the filter for the ChatComments we want to count
     *   }
     * })
    **/
    count<T extends ChatCommentCountArgs>(
      args?: Subset<T, ChatCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatCommentAggregateArgs>(args: Subset<T, ChatCommentAggregateArgs>): Prisma.PrismaPromise<GetChatCommentAggregateType<T>>

    /**
     * Group by ChatComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatCommentGroupByArgs['orderBy'] }
        : { orderBy?: ChatCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatComment model
   */
  readonly fields: ChatCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    largeComment<T extends ChatComment$largeCommentArgs<ExtArgs> = {}>(args?: Subset<T, ChatComment$largeCommentArgs<ExtArgs>>): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    room<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    meta<T extends ChatComment$metaArgs<ExtArgs> = {}>(args?: Subset<T, ChatComment$metaArgs<ExtArgs>>): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatComment model
   */ 
  interface ChatCommentFieldRefs {
    readonly id: FieldRef<"ChatComment", 'Int'>
    readonly comment: FieldRef<"ChatComment", 'String'>
    readonly createdAt: FieldRef<"ChatComment", 'DateTime'>
    readonly roomId: FieldRef<"ChatComment", 'Int'>
    readonly userId: FieldRef<"ChatComment", 'Int'>
    readonly metaId: FieldRef<"ChatComment", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ChatComment findUnique
   */
  export type ChatCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * Filter, which ChatComment to fetch.
     */
    where: ChatCommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment findUniqueOrThrow
   */
  export type ChatCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * Filter, which ChatComment to fetch.
     */
    where: ChatCommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment findFirst
   */
  export type ChatCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * Filter, which ChatComment to fetch.
     */
    where?: ChatCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatComments to fetch.
     */
    orderBy?: ChatCommentOrderByWithRelationInput | ChatCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatComments.
     */
    cursor?: ChatCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatComments.
     */
    distinct?: ChatCommentScalarFieldEnum | ChatCommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment findFirstOrThrow
   */
  export type ChatCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * Filter, which ChatComment to fetch.
     */
    where?: ChatCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatComments to fetch.
     */
    orderBy?: ChatCommentOrderByWithRelationInput | ChatCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatComments.
     */
    cursor?: ChatCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatComments.
     */
    distinct?: ChatCommentScalarFieldEnum | ChatCommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment findMany
   */
  export type ChatCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * Filter, which ChatComments to fetch.
     */
    where?: ChatCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatComments to fetch.
     */
    orderBy?: ChatCommentOrderByWithRelationInput | ChatCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatComments.
     */
    cursor?: ChatCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatComments.
     */
    skip?: number
    distinct?: ChatCommentScalarFieldEnum | ChatCommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment create
   */
  export type ChatCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatComment.
     */
    data: XOR<ChatCommentCreateInput, ChatCommentUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment createMany
   */
  export type ChatCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatComments.
     */
    data: ChatCommentCreateManyInput | ChatCommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChatComment update
   */
  export type ChatCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatComment.
     */
    data: XOR<ChatCommentUpdateInput, ChatCommentUncheckedUpdateInput>
    /**
     * Choose, which ChatComment to update.
     */
    where: ChatCommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment updateMany
   */
  export type ChatCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatComments.
     */
    data: XOR<ChatCommentUpdateManyMutationInput, ChatCommentUncheckedUpdateManyInput>
    /**
     * Filter which ChatComments to update
     */
    where?: ChatCommentWhereInput
  }


  /**
   * ChatComment upsert
   */
  export type ChatCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatComment to update in case it exists.
     */
    where: ChatCommentWhereUniqueInput
    /**
     * In case the ChatComment found by the `where` argument doesn't exist, create a new ChatComment with this data.
     */
    create: XOR<ChatCommentCreateInput, ChatCommentUncheckedCreateInput>
    /**
     * In case the ChatComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatCommentUpdateInput, ChatCommentUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment delete
   */
  export type ChatCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    /**
     * Filter which ChatComment to delete.
     */
    where: ChatCommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatComment deleteMany
   */
  export type ChatCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatComments to delete
     */
    where?: ChatCommentWhereInput
  }


  /**
   * ChatComment.largeComment
   */
  export type ChatComment$largeCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    where?: ChatCommentLargTextWhereInput
  }


  /**
   * ChatComment.meta
   */
  export type ChatComment$metaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    where?: MetaDataWhereInput
  }


  /**
   * ChatComment without action
   */
  export type ChatCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
  }



  /**
   * Model ChatCommentLargText
   */

  export type AggregateChatCommentLargText = {
    _count: ChatCommentLargTextCountAggregateOutputType | null
    _avg: ChatCommentLargTextAvgAggregateOutputType | null
    _sum: ChatCommentLargTextSumAggregateOutputType | null
    _min: ChatCommentLargTextMinAggregateOutputType | null
    _max: ChatCommentLargTextMaxAggregateOutputType | null
  }

  export type ChatCommentLargTextAvgAggregateOutputType = {
    id: number | null
    chatCommentId: number | null
  }

  export type ChatCommentLargTextSumAggregateOutputType = {
    id: number | null
    chatCommentId: number | null
  }

  export type ChatCommentLargTextMinAggregateOutputType = {
    id: number | null
    text: string | null
    chatCommentId: number | null
  }

  export type ChatCommentLargTextMaxAggregateOutputType = {
    id: number | null
    text: string | null
    chatCommentId: number | null
  }

  export type ChatCommentLargTextCountAggregateOutputType = {
    id: number
    text: number
    chatCommentId: number
    _all: number
  }


  export type ChatCommentLargTextAvgAggregateInputType = {
    id?: true
    chatCommentId?: true
  }

  export type ChatCommentLargTextSumAggregateInputType = {
    id?: true
    chatCommentId?: true
  }

  export type ChatCommentLargTextMinAggregateInputType = {
    id?: true
    text?: true
    chatCommentId?: true
  }

  export type ChatCommentLargTextMaxAggregateInputType = {
    id?: true
    text?: true
    chatCommentId?: true
  }

  export type ChatCommentLargTextCountAggregateInputType = {
    id?: true
    text?: true
    chatCommentId?: true
    _all?: true
  }

  export type ChatCommentLargTextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatCommentLargText to aggregate.
     */
    where?: ChatCommentLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatCommentLargTexts to fetch.
     */
    orderBy?: ChatCommentLargTextOrderByWithRelationInput | ChatCommentLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatCommentLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatCommentLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatCommentLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatCommentLargTexts
    **/
    _count?: true | ChatCommentLargTextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatCommentLargTextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatCommentLargTextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatCommentLargTextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatCommentLargTextMaxAggregateInputType
  }

  export type GetChatCommentLargTextAggregateType<T extends ChatCommentLargTextAggregateArgs> = {
        [P in keyof T & keyof AggregateChatCommentLargText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatCommentLargText[P]>
      : GetScalarType<T[P], AggregateChatCommentLargText[P]>
  }




  export type ChatCommentLargTextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatCommentLargTextWhereInput
    orderBy?: ChatCommentLargTextOrderByWithAggregationInput | ChatCommentLargTextOrderByWithAggregationInput[]
    by: ChatCommentLargTextScalarFieldEnum[] | ChatCommentLargTextScalarFieldEnum
    having?: ChatCommentLargTextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCommentLargTextCountAggregateInputType | true
    _avg?: ChatCommentLargTextAvgAggregateInputType
    _sum?: ChatCommentLargTextSumAggregateInputType
    _min?: ChatCommentLargTextMinAggregateInputType
    _max?: ChatCommentLargTextMaxAggregateInputType
  }

  export type ChatCommentLargTextGroupByOutputType = {
    id: number
    text: string
    chatCommentId: number
    _count: ChatCommentLargTextCountAggregateOutputType | null
    _avg: ChatCommentLargTextAvgAggregateOutputType | null
    _sum: ChatCommentLargTextSumAggregateOutputType | null
    _min: ChatCommentLargTextMinAggregateOutputType | null
    _max: ChatCommentLargTextMaxAggregateOutputType | null
  }

  type GetChatCommentLargTextGroupByPayload<T extends ChatCommentLargTextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatCommentLargTextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatCommentLargTextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatCommentLargTextGroupByOutputType[P]>
            : GetScalarType<T[P], ChatCommentLargTextGroupByOutputType[P]>
        }
      >
    >


  export type ChatCommentLargTextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    chatCommentId?: boolean
    chatComment?: boolean | ChatCommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatCommentLargText"]>

  export type ChatCommentLargTextSelectScalar = {
    id?: boolean
    text?: boolean
    chatCommentId?: boolean
  }

  export type ChatCommentLargTextInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatComment?: boolean | ChatCommentDefaultArgs<ExtArgs>
  }


  export type $ChatCommentLargTextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatCommentLargText"
    objects: {
      chatComment: Prisma.$ChatCommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      chatCommentId: number
    }, ExtArgs["result"]["chatCommentLargText"]>
    composites: {}
  }


  type ChatCommentLargTextGetPayload<S extends boolean | null | undefined | ChatCommentLargTextDefaultArgs> = $Result.GetResult<Prisma.$ChatCommentLargTextPayload, S>

  type ChatCommentLargTextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatCommentLargTextFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: ChatCommentLargTextCountAggregateInputType | true
    }

  export interface ChatCommentLargTextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatCommentLargText'], meta: { name: 'ChatCommentLargText' } }
    /**
     * Find zero or one ChatCommentLargText that matches the filter.
     * @param {ChatCommentLargTextFindUniqueArgs} args - Arguments to find a ChatCommentLargText
     * @example
     * // Get one ChatCommentLargText
     * const chatCommentLargText = await prisma.chatCommentLargText.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatCommentLargTextFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentLargTextFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatCommentLargText that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatCommentLargTextFindUniqueOrThrowArgs} args - Arguments to find a ChatCommentLargText
     * @example
     * // Get one ChatCommentLargText
     * const chatCommentLargText = await prisma.chatCommentLargText.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatCommentLargTextFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentLargTextFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatCommentLargText that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentLargTextFindFirstArgs} args - Arguments to find a ChatCommentLargText
     * @example
     * // Get one ChatCommentLargText
     * const chatCommentLargText = await prisma.chatCommentLargText.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatCommentLargTextFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentLargTextFindFirstArgs<ExtArgs>>
    ): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatCommentLargText that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentLargTextFindFirstOrThrowArgs} args - Arguments to find a ChatCommentLargText
     * @example
     * // Get one ChatCommentLargText
     * const chatCommentLargText = await prisma.chatCommentLargText.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatCommentLargTextFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentLargTextFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatCommentLargTexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentLargTextFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatCommentLargTexts
     * const chatCommentLargTexts = await prisma.chatCommentLargText.findMany()
     * 
     * // Get first 10 ChatCommentLargTexts
     * const chatCommentLargTexts = await prisma.chatCommentLargText.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatCommentLargTextWithIdOnly = await prisma.chatCommentLargText.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatCommentLargTextFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentLargTextFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatCommentLargText.
     * @param {ChatCommentLargTextCreateArgs} args - Arguments to create a ChatCommentLargText.
     * @example
     * // Create one ChatCommentLargText
     * const ChatCommentLargText = await prisma.chatCommentLargText.create({
     *   data: {
     *     // ... data to create a ChatCommentLargText
     *   }
     * })
     * 
    **/
    create<T extends ChatCommentLargTextCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentLargTextCreateArgs<ExtArgs>>
    ): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatCommentLargTexts.
     *     @param {ChatCommentLargTextCreateManyArgs} args - Arguments to create many ChatCommentLargTexts.
     *     @example
     *     // Create many ChatCommentLargTexts
     *     const chatCommentLargText = await prisma.chatCommentLargText.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatCommentLargTextCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentLargTextCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatCommentLargText.
     * @param {ChatCommentLargTextDeleteArgs} args - Arguments to delete one ChatCommentLargText.
     * @example
     * // Delete one ChatCommentLargText
     * const ChatCommentLargText = await prisma.chatCommentLargText.delete({
     *   where: {
     *     // ... filter to delete one ChatCommentLargText
     *   }
     * })
     * 
    **/
    delete<T extends ChatCommentLargTextDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentLargTextDeleteArgs<ExtArgs>>
    ): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatCommentLargText.
     * @param {ChatCommentLargTextUpdateArgs} args - Arguments to update one ChatCommentLargText.
     * @example
     * // Update one ChatCommentLargText
     * const chatCommentLargText = await prisma.chatCommentLargText.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatCommentLargTextUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentLargTextUpdateArgs<ExtArgs>>
    ): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatCommentLargTexts.
     * @param {ChatCommentLargTextDeleteManyArgs} args - Arguments to filter ChatCommentLargTexts to delete.
     * @example
     * // Delete a few ChatCommentLargTexts
     * const { count } = await prisma.chatCommentLargText.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatCommentLargTextDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatCommentLargTextDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatCommentLargTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentLargTextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatCommentLargTexts
     * const chatCommentLargText = await prisma.chatCommentLargText.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatCommentLargTextUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentLargTextUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatCommentLargText.
     * @param {ChatCommentLargTextUpsertArgs} args - Arguments to update or create a ChatCommentLargText.
     * @example
     * // Update or create a ChatCommentLargText
     * const chatCommentLargText = await prisma.chatCommentLargText.upsert({
     *   create: {
     *     // ... data to create a ChatCommentLargText
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatCommentLargText we want to update
     *   }
     * })
    **/
    upsert<T extends ChatCommentLargTextUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatCommentLargTextUpsertArgs<ExtArgs>>
    ): Prisma__ChatCommentLargTextClient<$Result.GetResult<Prisma.$ChatCommentLargTextPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChatCommentLargTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentLargTextCountArgs} args - Arguments to filter ChatCommentLargTexts to count.
     * @example
     * // Count the number of ChatCommentLargTexts
     * const count = await prisma.chatCommentLargText.count({
     *   where: {
     *     // ... the filter for the ChatCommentLargTexts we want to count
     *   }
     * })
    **/
    count<T extends ChatCommentLargTextCountArgs>(
      args?: Subset<T, ChatCommentLargTextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCommentLargTextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatCommentLargText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentLargTextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatCommentLargTextAggregateArgs>(args: Subset<T, ChatCommentLargTextAggregateArgs>): Prisma.PrismaPromise<GetChatCommentLargTextAggregateType<T>>

    /**
     * Group by ChatCommentLargText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCommentLargTextGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatCommentLargTextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatCommentLargTextGroupByArgs['orderBy'] }
        : { orderBy?: ChatCommentLargTextGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatCommentLargTextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatCommentLargTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatCommentLargText model
   */
  readonly fields: ChatCommentLargTextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatCommentLargText.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatCommentLargTextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chatComment<T extends ChatCommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatCommentDefaultArgs<ExtArgs>>): Prisma__ChatCommentClient<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatCommentLargText model
   */ 
  interface ChatCommentLargTextFieldRefs {
    readonly id: FieldRef<"ChatCommentLargText", 'Int'>
    readonly text: FieldRef<"ChatCommentLargText", 'String'>
    readonly chatCommentId: FieldRef<"ChatCommentLargText", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ChatCommentLargText findUnique
   */
  export type ChatCommentLargTextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which ChatCommentLargText to fetch.
     */
    where: ChatCommentLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText findUniqueOrThrow
   */
  export type ChatCommentLargTextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which ChatCommentLargText to fetch.
     */
    where: ChatCommentLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText findFirst
   */
  export type ChatCommentLargTextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which ChatCommentLargText to fetch.
     */
    where?: ChatCommentLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatCommentLargTexts to fetch.
     */
    orderBy?: ChatCommentLargTextOrderByWithRelationInput | ChatCommentLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatCommentLargTexts.
     */
    cursor?: ChatCommentLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatCommentLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatCommentLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatCommentLargTexts.
     */
    distinct?: ChatCommentLargTextScalarFieldEnum | ChatCommentLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText findFirstOrThrow
   */
  export type ChatCommentLargTextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which ChatCommentLargText to fetch.
     */
    where?: ChatCommentLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatCommentLargTexts to fetch.
     */
    orderBy?: ChatCommentLargTextOrderByWithRelationInput | ChatCommentLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatCommentLargTexts.
     */
    cursor?: ChatCommentLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatCommentLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatCommentLargTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatCommentLargTexts.
     */
    distinct?: ChatCommentLargTextScalarFieldEnum | ChatCommentLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText findMany
   */
  export type ChatCommentLargTextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter, which ChatCommentLargTexts to fetch.
     */
    where?: ChatCommentLargTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatCommentLargTexts to fetch.
     */
    orderBy?: ChatCommentLargTextOrderByWithRelationInput | ChatCommentLargTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatCommentLargTexts.
     */
    cursor?: ChatCommentLargTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatCommentLargTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatCommentLargTexts.
     */
    skip?: number
    distinct?: ChatCommentLargTextScalarFieldEnum | ChatCommentLargTextScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText create
   */
  export type ChatCommentLargTextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatCommentLargText.
     */
    data: XOR<ChatCommentLargTextCreateInput, ChatCommentLargTextUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText createMany
   */
  export type ChatCommentLargTextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatCommentLargTexts.
     */
    data: ChatCommentLargTextCreateManyInput | ChatCommentLargTextCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChatCommentLargText update
   */
  export type ChatCommentLargTextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatCommentLargText.
     */
    data: XOR<ChatCommentLargTextUpdateInput, ChatCommentLargTextUncheckedUpdateInput>
    /**
     * Choose, which ChatCommentLargText to update.
     */
    where: ChatCommentLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText updateMany
   */
  export type ChatCommentLargTextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatCommentLargTexts.
     */
    data: XOR<ChatCommentLargTextUpdateManyMutationInput, ChatCommentLargTextUncheckedUpdateManyInput>
    /**
     * Filter which ChatCommentLargTexts to update
     */
    where?: ChatCommentLargTextWhereInput
  }


  /**
   * ChatCommentLargText upsert
   */
  export type ChatCommentLargTextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatCommentLargText to update in case it exists.
     */
    where: ChatCommentLargTextWhereUniqueInput
    /**
     * In case the ChatCommentLargText found by the `where` argument doesn't exist, create a new ChatCommentLargText with this data.
     */
    create: XOR<ChatCommentLargTextCreateInput, ChatCommentLargTextUncheckedCreateInput>
    /**
     * In case the ChatCommentLargText was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatCommentLargTextUpdateInput, ChatCommentLargTextUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText delete
   */
  export type ChatCommentLargTextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
    /**
     * Filter which ChatCommentLargText to delete.
     */
    where: ChatCommentLargTextWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * ChatCommentLargText deleteMany
   */
  export type ChatCommentLargTextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatCommentLargTexts to delete
     */
    where?: ChatCommentLargTextWhereInput
  }


  /**
   * ChatCommentLargText without action
   */
  export type ChatCommentLargTextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCommentLargText
     */
    select?: ChatCommentLargTextSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentLargTextInclude<ExtArgs> | null
  }



  /**
   * Model MetaData
   */

  export type AggregateMetaData = {
    _count: MetaDataCountAggregateOutputType | null
    _avg: MetaDataAvgAggregateOutputType | null
    _sum: MetaDataSumAggregateOutputType | null
    _min: MetaDataMinAggregateOutputType | null
    _max: MetaDataMaxAggregateOutputType | null
  }

  export type MetaDataAvgAggregateOutputType = {
    id: number | null
  }

  export type MetaDataSumAggregateOutputType = {
    id: number | null
  }

  export type MetaDataMinAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    title: string | null
    description: string | null
    image: string | null
    imageAlt: string | null
    video: string | null
  }

  export type MetaDataMaxAggregateOutputType = {
    id: number | null
    url: string | null
    type: string | null
    title: string | null
    description: string | null
    image: string | null
    imageAlt: string | null
    video: string | null
  }

  export type MetaDataCountAggregateOutputType = {
    id: number
    url: number
    type: number
    title: number
    description: number
    image: number
    imageAlt: number
    video: number
    _all: number
  }


  export type MetaDataAvgAggregateInputType = {
    id?: true
  }

  export type MetaDataSumAggregateInputType = {
    id?: true
  }

  export type MetaDataMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    title?: true
    description?: true
    image?: true
    imageAlt?: true
    video?: true
  }

  export type MetaDataMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    title?: true
    description?: true
    image?: true
    imageAlt?: true
    video?: true
  }

  export type MetaDataCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    title?: true
    description?: true
    image?: true
    imageAlt?: true
    video?: true
    _all?: true
  }

  export type MetaDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaData to aggregate.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaData
    **/
    _count?: true | MetaDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaDataMaxAggregateInputType
  }

  export type GetMetaDataAggregateType<T extends MetaDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaData[P]>
      : GetScalarType<T[P], AggregateMetaData[P]>
  }




  export type MetaDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaDataWhereInput
    orderBy?: MetaDataOrderByWithAggregationInput | MetaDataOrderByWithAggregationInput[]
    by: MetaDataScalarFieldEnum[] | MetaDataScalarFieldEnum
    having?: MetaDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaDataCountAggregateInputType | true
    _avg?: MetaDataAvgAggregateInputType
    _sum?: MetaDataSumAggregateInputType
    _min?: MetaDataMinAggregateInputType
    _max?: MetaDataMaxAggregateInputType
  }

  export type MetaDataGroupByOutputType = {
    id: number
    url: string
    type: string
    title: string
    description: string
    image: string | null
    imageAlt: string | null
    video: string | null
    _count: MetaDataCountAggregateOutputType | null
    _avg: MetaDataAvgAggregateOutputType | null
    _sum: MetaDataSumAggregateOutputType | null
    _min: MetaDataMinAggregateOutputType | null
    _max: MetaDataMaxAggregateOutputType | null
  }

  type GetMetaDataGroupByPayload<T extends MetaDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaDataGroupByOutputType[P]>
            : GetScalarType<T[P], MetaDataGroupByOutputType[P]>
        }
      >
    >


  export type MetaDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    imageAlt?: boolean
    video?: boolean
    posts?: boolean | MetaData$postsArgs<ExtArgs>
    comments?: boolean | MetaData$commentsArgs<ExtArgs>
    _count?: boolean | MetaDataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaData"]>

  export type MetaDataSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    imageAlt?: boolean
    video?: boolean
  }

  export type MetaDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | MetaData$postsArgs<ExtArgs>
    comments?: boolean | MetaData$commentsArgs<ExtArgs>
    _count?: boolean | MetaDataCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MetaDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetaData"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$ChatCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      type: string
      title: string
      description: string
      image: string | null
      imageAlt: string | null
      video: string | null
    }, ExtArgs["result"]["metaData"]>
    composites: {}
  }


  type MetaDataGetPayload<S extends boolean | null | undefined | MetaDataDefaultArgs> = $Result.GetResult<Prisma.$MetaDataPayload, S>

  type MetaDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MetaDataFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: MetaDataCountAggregateInputType | true
    }

  export interface MetaDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetaData'], meta: { name: 'MetaData' } }
    /**
     * Find zero or one MetaData that matches the filter.
     * @param {MetaDataFindUniqueArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MetaDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataFindUniqueArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MetaData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MetaDataFindUniqueOrThrowArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MetaDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MetaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindFirstArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MetaDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataFindFirstArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MetaData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindFirstOrThrowArgs} args - Arguments to find a MetaData
     * @example
     * // Get one MetaData
     * const metaData = await prisma.metaData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MetaDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MetaData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaData
     * const metaData = await prisma.metaData.findMany()
     * 
     * // Get first 10 MetaData
     * const metaData = await prisma.metaData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaDataWithIdOnly = await prisma.metaData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MetaDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MetaData.
     * @param {MetaDataCreateArgs} args - Arguments to create a MetaData.
     * @example
     * // Create one MetaData
     * const MetaData = await prisma.metaData.create({
     *   data: {
     *     // ... data to create a MetaData
     *   }
     * })
     * 
    **/
    create<T extends MetaDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataCreateArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MetaData.
     *     @param {MetaDataCreateManyArgs} args - Arguments to create many MetaData.
     *     @example
     *     // Create many MetaData
     *     const metaData = await prisma.metaData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MetaDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MetaData.
     * @param {MetaDataDeleteArgs} args - Arguments to delete one MetaData.
     * @example
     * // Delete one MetaData
     * const MetaData = await prisma.metaData.delete({
     *   where: {
     *     // ... filter to delete one MetaData
     *   }
     * })
     * 
    **/
    delete<T extends MetaDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataDeleteArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MetaData.
     * @param {MetaDataUpdateArgs} args - Arguments to update one MetaData.
     * @example
     * // Update one MetaData
     * const metaData = await prisma.metaData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MetaDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataUpdateArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MetaData.
     * @param {MetaDataDeleteManyArgs} args - Arguments to filter MetaData to delete.
     * @example
     * // Delete a few MetaData
     * const { count } = await prisma.metaData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MetaDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaData
     * const metaData = await prisma.metaData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MetaDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MetaData.
     * @param {MetaDataUpsertArgs} args - Arguments to update or create a MetaData.
     * @example
     * // Update or create a MetaData
     * const metaData = await prisma.metaData.upsert({
     *   create: {
     *     // ... data to create a MetaData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaData we want to update
     *   }
     * })
    **/
    upsert<T extends MetaDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MetaDataUpsertArgs<ExtArgs>>
    ): Prisma__MetaDataClient<$Result.GetResult<Prisma.$MetaDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataCountArgs} args - Arguments to filter MetaData to count.
     * @example
     * // Count the number of MetaData
     * const count = await prisma.metaData.count({
     *   where: {
     *     // ... the filter for the MetaData we want to count
     *   }
     * })
    **/
    count<T extends MetaDataCountArgs>(
      args?: Subset<T, MetaDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetaDataAggregateArgs>(args: Subset<T, MetaDataAggregateArgs>): Prisma.PrismaPromise<GetMetaDataAggregateType<T>>

    /**
     * Group by MetaData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetaDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaDataGroupByArgs['orderBy'] }
        : { orderBy?: MetaDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetaDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetaData model
   */
  readonly fields: MetaDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends MetaData$postsArgs<ExtArgs> = {}>(args?: Subset<T, MetaData$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends MetaData$commentsArgs<ExtArgs> = {}>(args?: Subset<T, MetaData$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MetaData model
   */ 
  interface MetaDataFieldRefs {
    readonly id: FieldRef<"MetaData", 'Int'>
    readonly url: FieldRef<"MetaData", 'String'>
    readonly type: FieldRef<"MetaData", 'String'>
    readonly title: FieldRef<"MetaData", 'String'>
    readonly description: FieldRef<"MetaData", 'String'>
    readonly image: FieldRef<"MetaData", 'String'>
    readonly imageAlt: FieldRef<"MetaData", 'String'>
    readonly video: FieldRef<"MetaData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MetaData findUnique
   */
  export type MetaDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where: MetaDataWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData findUniqueOrThrow
   */
  export type MetaDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where: MetaDataWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData findFirst
   */
  export type MetaDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaData.
     */
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData findFirstOrThrow
   */
  export type MetaDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaData.
     */
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData findMany
   */
  export type MetaDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter, which MetaData to fetch.
     */
    where?: MetaDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaData to fetch.
     */
    orderBy?: MetaDataOrderByWithRelationInput | MetaDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaData.
     */
    cursor?: MetaDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaData.
     */
    skip?: number
    distinct?: MetaDataScalarFieldEnum | MetaDataScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData create
   */
  export type MetaDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MetaData.
     */
    data: XOR<MetaDataCreateInput, MetaDataUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData createMany
   */
  export type MetaDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetaData.
     */
    data: MetaDataCreateManyInput | MetaDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MetaData update
   */
  export type MetaDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MetaData.
     */
    data: XOR<MetaDataUpdateInput, MetaDataUncheckedUpdateInput>
    /**
     * Choose, which MetaData to update.
     */
    where: MetaDataWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData updateMany
   */
  export type MetaDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetaData.
     */
    data: XOR<MetaDataUpdateManyMutationInput, MetaDataUncheckedUpdateManyInput>
    /**
     * Filter which MetaData to update
     */
    where?: MetaDataWhereInput
  }


  /**
   * MetaData upsert
   */
  export type MetaDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MetaData to update in case it exists.
     */
    where: MetaDataWhereUniqueInput
    /**
     * In case the MetaData found by the `where` argument doesn't exist, create a new MetaData with this data.
     */
    create: XOR<MetaDataCreateInput, MetaDataUncheckedCreateInput>
    /**
     * In case the MetaData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaDataUpdateInput, MetaDataUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData delete
   */
  export type MetaDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
    /**
     * Filter which MetaData to delete.
     */
    where: MetaDataWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * MetaData deleteMany
   */
  export type MetaDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaData to delete
     */
    where?: MetaDataWhereInput
  }


  /**
   * MetaData.posts
   */
  export type MetaData$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * MetaData.comments
   */
  export type MetaData$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatComment
     */
    select?: ChatCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatCommentInclude<ExtArgs> | null
    where?: ChatCommentWhereInput
    orderBy?: ChatCommentOrderByWithRelationInput | ChatCommentOrderByWithRelationInput[]
    cursor?: ChatCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatCommentScalarFieldEnum | ChatCommentScalarFieldEnum[]
  }


  /**
   * MetaData without action
   */
  export type MetaDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaData
     */
    select?: MetaDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaDataInclude<ExtArgs> | null
  }



  /**
   * Model LogAccess
   */

  export type AggregateLogAccess = {
    _count: LogAccessCountAggregateOutputType | null
    _avg: LogAccessAvgAggregateOutputType | null
    _sum: LogAccessSumAggregateOutputType | null
    _min: LogAccessMinAggregateOutputType | null
    _max: LogAccessMaxAggregateOutputType | null
  }

  export type LogAccessAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LogAccessSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LogAccessMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    ip: string | null
    agent: string | null
    updatedAt: Date | null
    userId: number | null
  }

  export type LogAccessMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    ip: string | null
    agent: string | null
    updatedAt: Date | null
    userId: number | null
  }

  export type LogAccessCountAggregateOutputType = {
    id: number
    uuid: number
    ip: number
    agent: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type LogAccessAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LogAccessSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LogAccessMinAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    agent?: true
    updatedAt?: true
    userId?: true
  }

  export type LogAccessMaxAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    agent?: true
    updatedAt?: true
    userId?: true
  }

  export type LogAccessCountAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    agent?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type LogAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAccess to aggregate.
     */
    where?: LogAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAccesses to fetch.
     */
    orderBy?: LogAccessOrderByWithRelationInput | LogAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAccesses
    **/
    _count?: true | LogAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAccessMaxAggregateInputType
  }

  export type GetLogAccessAggregateType<T extends LogAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAccess[P]>
      : GetScalarType<T[P], AggregateLogAccess[P]>
  }




  export type LogAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAccessWhereInput
    orderBy?: LogAccessOrderByWithAggregationInput | LogAccessOrderByWithAggregationInput[]
    by: LogAccessScalarFieldEnum[] | LogAccessScalarFieldEnum
    having?: LogAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAccessCountAggregateInputType | true
    _avg?: LogAccessAvgAggregateInputType
    _sum?: LogAccessSumAggregateInputType
    _min?: LogAccessMinAggregateInputType
    _max?: LogAccessMaxAggregateInputType
  }

  export type LogAccessGroupByOutputType = {
    id: number
    uuid: string
    ip: string
    agent: string
    updatedAt: Date
    userId: number
    _count: LogAccessCountAggregateOutputType | null
    _avg: LogAccessAvgAggregateOutputType | null
    _sum: LogAccessSumAggregateOutputType | null
    _min: LogAccessMinAggregateOutputType | null
    _max: LogAccessMaxAggregateOutputType | null
  }

  type GetLogAccessGroupByPayload<T extends LogAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAccessGroupByOutputType[P]>
            : GetScalarType<T[P], LogAccessGroupByOutputType[P]>
        }
      >
    >


  export type LogAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    ip?: boolean
    agent?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAccess"]>

  export type LogAccessSelectScalar = {
    id?: boolean
    uuid?: boolean
    ip?: boolean
    agent?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type LogAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $LogAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      ip: string
      agent: string
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["logAccess"]>
    composites: {}
  }


  type LogAccessGetPayload<S extends boolean | null | undefined | LogAccessDefaultArgs> = $Result.GetResult<Prisma.$LogAccessPayload, S>

  type LogAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: LogAccessCountAggregateInputType | true
    }

  export interface LogAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAccess'], meta: { name: 'LogAccess' } }
    /**
     * Find zero or one LogAccess that matches the filter.
     * @param {LogAccessFindUniqueArgs} args - Arguments to find a LogAccess
     * @example
     * // Get one LogAccess
     * const logAccess = await prisma.logAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogAccessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LogAccessFindUniqueArgs<ExtArgs>>
    ): Prisma__LogAccessClient<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LogAccess that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogAccessFindUniqueOrThrowArgs} args - Arguments to find a LogAccess
     * @example
     * // Get one LogAccess
     * const logAccess = await prisma.logAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogAccessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogAccessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LogAccessClient<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LogAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAccessFindFirstArgs} args - Arguments to find a LogAccess
     * @example
     * // Get one LogAccess
     * const logAccess = await prisma.logAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogAccessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LogAccessFindFirstArgs<ExtArgs>>
    ): Prisma__LogAccessClient<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LogAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAccessFindFirstOrThrowArgs} args - Arguments to find a LogAccess
     * @example
     * // Get one LogAccess
     * const logAccess = await prisma.logAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogAccessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogAccessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LogAccessClient<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LogAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAccessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAccesses
     * const logAccesses = await prisma.logAccess.findMany()
     * 
     * // Get first 10 LogAccesses
     * const logAccesses = await prisma.logAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logAccessWithIdOnly = await prisma.logAccess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogAccessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogAccessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LogAccess.
     * @param {LogAccessCreateArgs} args - Arguments to create a LogAccess.
     * @example
     * // Create one LogAccess
     * const LogAccess = await prisma.logAccess.create({
     *   data: {
     *     // ... data to create a LogAccess
     *   }
     * })
     * 
    **/
    create<T extends LogAccessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LogAccessCreateArgs<ExtArgs>>
    ): Prisma__LogAccessClient<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LogAccesses.
     *     @param {LogAccessCreateManyArgs} args - Arguments to create many LogAccesses.
     *     @example
     *     // Create many LogAccesses
     *     const logAccess = await prisma.logAccess.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogAccessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogAccessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LogAccess.
     * @param {LogAccessDeleteArgs} args - Arguments to delete one LogAccess.
     * @example
     * // Delete one LogAccess
     * const LogAccess = await prisma.logAccess.delete({
     *   where: {
     *     // ... filter to delete one LogAccess
     *   }
     * })
     * 
    **/
    delete<T extends LogAccessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LogAccessDeleteArgs<ExtArgs>>
    ): Prisma__LogAccessClient<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LogAccess.
     * @param {LogAccessUpdateArgs} args - Arguments to update one LogAccess.
     * @example
     * // Update one LogAccess
     * const logAccess = await prisma.logAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogAccessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LogAccessUpdateArgs<ExtArgs>>
    ): Prisma__LogAccessClient<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LogAccesses.
     * @param {LogAccessDeleteManyArgs} args - Arguments to filter LogAccesses to delete.
     * @example
     * // Delete a few LogAccesses
     * const { count } = await prisma.logAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogAccessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogAccessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAccesses
     * const logAccess = await prisma.logAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogAccessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LogAccessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogAccess.
     * @param {LogAccessUpsertArgs} args - Arguments to update or create a LogAccess.
     * @example
     * // Update or create a LogAccess
     * const logAccess = await prisma.logAccess.upsert({
     *   create: {
     *     // ... data to create a LogAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAccess we want to update
     *   }
     * })
    **/
    upsert<T extends LogAccessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LogAccessUpsertArgs<ExtArgs>>
    ): Prisma__LogAccessClient<$Result.GetResult<Prisma.$LogAccessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LogAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAccessCountArgs} args - Arguments to filter LogAccesses to count.
     * @example
     * // Count the number of LogAccesses
     * const count = await prisma.logAccess.count({
     *   where: {
     *     // ... the filter for the LogAccesses we want to count
     *   }
     * })
    **/
    count<T extends LogAccessCountArgs>(
      args?: Subset<T, LogAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAccessAggregateArgs>(args: Subset<T, LogAccessAggregateArgs>): Prisma.PrismaPromise<GetLogAccessAggregateType<T>>

    /**
     * Group by LogAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAccessGroupByArgs['orderBy'] }
        : { orderBy?: LogAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAccess model
   */
  readonly fields: LogAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LogAccess model
   */ 
  interface LogAccessFieldRefs {
    readonly id: FieldRef<"LogAccess", 'Int'>
    readonly uuid: FieldRef<"LogAccess", 'String'>
    readonly ip: FieldRef<"LogAccess", 'String'>
    readonly agent: FieldRef<"LogAccess", 'String'>
    readonly updatedAt: FieldRef<"LogAccess", 'DateTime'>
    readonly userId: FieldRef<"LogAccess", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * LogAccess findUnique
   */
  export type LogAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * Filter, which LogAccess to fetch.
     */
    where: LogAccessWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess findUniqueOrThrow
   */
  export type LogAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * Filter, which LogAccess to fetch.
     */
    where: LogAccessWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess findFirst
   */
  export type LogAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * Filter, which LogAccess to fetch.
     */
    where?: LogAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAccesses to fetch.
     */
    orderBy?: LogAccessOrderByWithRelationInput | LogAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAccesses.
     */
    cursor?: LogAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAccesses.
     */
    distinct?: LogAccessScalarFieldEnum | LogAccessScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess findFirstOrThrow
   */
  export type LogAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * Filter, which LogAccess to fetch.
     */
    where?: LogAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAccesses to fetch.
     */
    orderBy?: LogAccessOrderByWithRelationInput | LogAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAccesses.
     */
    cursor?: LogAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAccesses.
     */
    distinct?: LogAccessScalarFieldEnum | LogAccessScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess findMany
   */
  export type LogAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * Filter, which LogAccesses to fetch.
     */
    where?: LogAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAccesses to fetch.
     */
    orderBy?: LogAccessOrderByWithRelationInput | LogAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAccesses.
     */
    cursor?: LogAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAccesses.
     */
    skip?: number
    distinct?: LogAccessScalarFieldEnum | LogAccessScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess create
   */
  export type LogAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a LogAccess.
     */
    data: XOR<LogAccessCreateInput, LogAccessUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess createMany
   */
  export type LogAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAccesses.
     */
    data: LogAccessCreateManyInput | LogAccessCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LogAccess update
   */
  export type LogAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a LogAccess.
     */
    data: XOR<LogAccessUpdateInput, LogAccessUncheckedUpdateInput>
    /**
     * Choose, which LogAccess to update.
     */
    where: LogAccessWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess updateMany
   */
  export type LogAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAccesses.
     */
    data: XOR<LogAccessUpdateManyMutationInput, LogAccessUncheckedUpdateManyInput>
    /**
     * Filter which LogAccesses to update
     */
    where?: LogAccessWhereInput
  }


  /**
   * LogAccess upsert
   */
  export type LogAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the LogAccess to update in case it exists.
     */
    where: LogAccessWhereUniqueInput
    /**
     * In case the LogAccess found by the `where` argument doesn't exist, create a new LogAccess with this data.
     */
    create: XOR<LogAccessCreateInput, LogAccessUncheckedCreateInput>
    /**
     * In case the LogAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAccessUpdateInput, LogAccessUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess delete
   */
  export type LogAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
    /**
     * Filter which LogAccess to delete.
     */
    where: LogAccessWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * LogAccess deleteMany
   */
  export type LogAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAccesses to delete
     */
    where?: LogAccessWhereInput
  }


  /**
   * LogAccess without action
   */
  export type LogAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAccess
     */
    select?: LogAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LogAccessInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    positionId: 'positionId',
    groupId: 'groupId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const PositionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    power: 'power'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    order: 'order',
    slug: 'slug',
    name: 'name',
    parentId: 'parentId',
    communityId: 'communityId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    isPrivate: 'isPrivate',
    isPublicRead: 'isPublicRead',
    isPublicWrite: 'isPublicWrite',
    category: 'category',
    slug: 'slug',
    name: 'name',
    latestPostDate: 'latestPostDate',
    managerId: 'managerId'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    communityId: 'communityId',
    userId: 'userId',
    commentCnt: 'commentCnt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostLargTextScalarFieldEnum: {
    id: 'id',
    text: 'text',
    postId: 'postId'
  };

  export type PostLargTextScalarFieldEnum = (typeof PostLargTextScalarFieldEnum)[keyof typeof PostLargTextScalarFieldEnum]


  export const PostCommentScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId',
    userId: 'userId'
  };

  export type PostCommentScalarFieldEnum = (typeof PostCommentScalarFieldEnum)[keyof typeof PostCommentScalarFieldEnum]


  export const PostCommentLargTextScalarFieldEnum: {
    id: 'id',
    text: 'text',
    postCommentId: 'postCommentId'
  };

  export type PostCommentLargTextScalarFieldEnum = (typeof PostCommentLargTextScalarFieldEnum)[keyof typeof PostCommentLargTextScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatCommentScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    createdAt: 'createdAt',
    roomId: 'roomId',
    userId: 'userId',
    metaId: 'metaId'
  };

  export type ChatCommentScalarFieldEnum = (typeof ChatCommentScalarFieldEnum)[keyof typeof ChatCommentScalarFieldEnum]


  export const ChatCommentLargTextScalarFieldEnum: {
    id: 'id',
    text: 'text',
    chatCommentId: 'chatCommentId'
  };

  export type ChatCommentLargTextScalarFieldEnum = (typeof ChatCommentLargTextScalarFieldEnum)[keyof typeof ChatCommentLargTextScalarFieldEnum]


  export const MetaDataScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    title: 'title',
    description: 'description',
    image: 'image',
    imageAlt: 'imageAlt',
    video: 'video'
  };

  export type MetaDataScalarFieldEnum = (typeof MetaDataScalarFieldEnum)[keyof typeof MetaDataScalarFieldEnum]


  export const LogAccessScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    ip: 'ip',
    agent: 'agent',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type LogAccessScalarFieldEnum = (typeof LogAccessScalarFieldEnum)[keyof typeof LogAccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CommunityCategory'
   */
  export type EnumCommunityCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunityCategory'>
    


  /**
   * Reference to a field of type 'CommunityCategory[]'
   */
  export type ListEnumCommunityCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommunityCategory[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    positionId?: IntFilter<"User"> | number
    groupId?: IntNullableFilter<"User"> | number | null
    position?: XOR<PositionRelationFilter, PositionWhereInput>
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    posts?: PostListRelationFilter
    postComments?: PostCommentListRelationFilter
    communities?: CommunityListRelationFilter
    managedCommunities?: CommunityListRelationFilter
    chatRooms?: ChatRoomListRelationFilter
    chatCommets?: ChatCommentListRelationFilter
    access?: LogAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    positionId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    position?: PositionOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    postComments?: PostCommentOrderByRelationAggregateInput
    communities?: CommunityOrderByRelationAggregateInput
    managedCommunities?: CommunityOrderByRelationAggregateInput
    chatRooms?: ChatRoomOrderByRelationAggregateInput
    chatCommets?: ChatCommentOrderByRelationAggregateInput
    access?: LogAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    positionId?: IntFilter<"User"> | number
    groupId?: IntNullableFilter<"User"> | number | null
    position?: XOR<PositionRelationFilter, PositionWhereInput>
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    posts?: PostListRelationFilter
    postComments?: PostCommentListRelationFilter
    communities?: CommunityListRelationFilter
    managedCommunities?: CommunityListRelationFilter
    chatRooms?: ChatRoomListRelationFilter
    chatCommets?: ChatCommentListRelationFilter
    access?: LogAccessListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    positionId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringWithAggregatesFilter<"User"> | string
    positionId?: IntWithAggregatesFilter<"User"> | number
    groupId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    id?: IntFilter<"Position"> | number
    name?: StringFilter<"Position"> | string
    power?: IntFilter<"Position"> | number
    users?: UserListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    power?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    name?: StringFilter<"Position"> | string
    power?: IntFilter<"Position"> | number
    users?: UserListRelationFilter
  }, "id">

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    power?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Position"> | number
    name?: StringWithAggregatesFilter<"Position"> | string
    power?: IntWithAggregatesFilter<"Position"> | number
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    order?: IntFilter<"Group"> | number
    slug?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    parentId?: IntNullableFilter<"Group"> | number | null
    communityId?: IntFilter<"Group"> | number
    parent?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    children?: GroupListRelationFilter
    users?: UserListRelationFilter
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    communityId?: SortOrder
    parent?: GroupOrderByWithRelationInput
    children?: GroupOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    community?: CommunityOrderByWithRelationInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    communityId?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    order?: IntFilter<"Group"> | number
    name?: StringFilter<"Group"> | string
    parentId?: IntNullableFilter<"Group"> | number | null
    parent?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    children?: GroupListRelationFilter
    users?: UserListRelationFilter
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
  }, "id" | "slug" | "communityId">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    communityId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    order?: IntWithAggregatesFilter<"Group"> | number
    slug?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    parentId?: IntNullableWithAggregatesFilter<"Group"> | number | null
    communityId?: IntWithAggregatesFilter<"Group"> | number
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: IntFilter<"Community"> | number
    isPrivate?: BoolFilter<"Community"> | boolean
    isPublicRead?: BoolFilter<"Community"> | boolean
    isPublicWrite?: BoolFilter<"Community"> | boolean
    category?: EnumCommunityCategoryFilter<"Community"> | $Enums.CommunityCategory
    slug?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    latestPostDate?: DateTimeNullableFilter<"Community"> | Date | string | null
    managerId?: IntNullableFilter<"Community"> | number | null
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    posts?: PostListRelationFilter
    manager?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    isPrivate?: SortOrder
    isPublicRead?: SortOrder
    isPublicWrite?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    latestPostDate?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    manager?: UserOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    isPrivate?: BoolFilter<"Community"> | boolean
    isPublicRead?: BoolFilter<"Community"> | boolean
    isPublicWrite?: BoolFilter<"Community"> | boolean
    category?: EnumCommunityCategoryFilter<"Community"> | $Enums.CommunityCategory
    name?: StringFilter<"Community"> | string
    latestPostDate?: DateTimeNullableFilter<"Community"> | Date | string | null
    managerId?: IntNullableFilter<"Community"> | number | null
    group?: XOR<GroupNullableRelationFilter, GroupWhereInput> | null
    posts?: PostListRelationFilter
    manager?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
  }, "id" | "slug">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    isPrivate?: SortOrder
    isPublicRead?: SortOrder
    isPublicWrite?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    latestPostDate?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Community"> | number
    isPrivate?: BoolWithAggregatesFilter<"Community"> | boolean
    isPublicRead?: BoolWithAggregatesFilter<"Community"> | boolean
    isPublicWrite?: BoolWithAggregatesFilter<"Community"> | boolean
    category?: EnumCommunityCategoryWithAggregatesFilter<"Community"> | $Enums.CommunityCategory
    slug?: StringWithAggregatesFilter<"Community"> | string
    name?: StringWithAggregatesFilter<"Community"> | string
    latestPostDate?: DateTimeNullableWithAggregatesFilter<"Community"> | Date | string | null
    managerId?: IntNullableWithAggregatesFilter<"Community"> | number | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    text?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    communityId?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    commentCnt?: IntFilter<"Post"> | number
    largeText?: XOR<PostLargTextNullableRelationFilter, PostLargTextWhereInput> | null
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    meta?: MetaDataListRelationFilter
    comments?: PostCommentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    commentCnt?: SortOrder
    largeText?: PostLargTextOrderByWithRelationInput
    community?: CommunityOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    meta?: MetaDataOrderByRelationAggregateInput
    comments?: PostCommentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    text?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    communityId?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    commentCnt?: IntFilter<"Post"> | number
    largeText?: XOR<PostLargTextNullableRelationFilter, PostLargTextWhereInput> | null
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    meta?: MetaDataListRelationFilter
    comments?: PostCommentListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    commentCnt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    text?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    communityId?: IntWithAggregatesFilter<"Post"> | number
    userId?: IntWithAggregatesFilter<"Post"> | number
    commentCnt?: IntWithAggregatesFilter<"Post"> | number
  }

  export type PostLargTextWhereInput = {
    AND?: PostLargTextWhereInput | PostLargTextWhereInput[]
    OR?: PostLargTextWhereInput[]
    NOT?: PostLargTextWhereInput | PostLargTextWhereInput[]
    id?: IntFilter<"PostLargText"> | number
    text?: StringFilter<"PostLargText"> | string
    postId?: IntFilter<"PostLargText"> | number
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type PostLargTextOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostLargTextWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId?: number
    AND?: PostLargTextWhereInput | PostLargTextWhereInput[]
    OR?: PostLargTextWhereInput[]
    NOT?: PostLargTextWhereInput | PostLargTextWhereInput[]
    text?: StringFilter<"PostLargText"> | string
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id" | "postId">

  export type PostLargTextOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
    _count?: PostLargTextCountOrderByAggregateInput
    _avg?: PostLargTextAvgOrderByAggregateInput
    _max?: PostLargTextMaxOrderByAggregateInput
    _min?: PostLargTextMinOrderByAggregateInput
    _sum?: PostLargTextSumOrderByAggregateInput
  }

  export type PostLargTextScalarWhereWithAggregatesInput = {
    AND?: PostLargTextScalarWhereWithAggregatesInput | PostLargTextScalarWhereWithAggregatesInput[]
    OR?: PostLargTextScalarWhereWithAggregatesInput[]
    NOT?: PostLargTextScalarWhereWithAggregatesInput | PostLargTextScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostLargText"> | number
    text?: StringWithAggregatesFilter<"PostLargText"> | string
    postId?: IntWithAggregatesFilter<"PostLargText"> | number
  }

  export type PostCommentWhereInput = {
    AND?: PostCommentWhereInput | PostCommentWhereInput[]
    OR?: PostCommentWhereInput[]
    NOT?: PostCommentWhereInput | PostCommentWhereInput[]
    id?: IntFilter<"PostComment"> | number
    comment?: StringFilter<"PostComment"> | string
    createdAt?: DateTimeFilter<"PostComment"> | Date | string
    updatedAt?: DateTimeFilter<"PostComment"> | Date | string
    postId?: IntFilter<"PostComment"> | number
    userId?: IntFilter<"PostComment"> | number
    largeComment?: XOR<PostCommentLargTextNullableRelationFilter, PostCommentLargTextWhereInput> | null
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PostCommentOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    largeComment?: PostCommentLargTextOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostCommentWhereInput | PostCommentWhereInput[]
    OR?: PostCommentWhereInput[]
    NOT?: PostCommentWhereInput | PostCommentWhereInput[]
    comment?: StringFilter<"PostComment"> | string
    createdAt?: DateTimeFilter<"PostComment"> | Date | string
    updatedAt?: DateTimeFilter<"PostComment"> | Date | string
    postId?: IntFilter<"PostComment"> | number
    userId?: IntFilter<"PostComment"> | number
    largeComment?: XOR<PostCommentLargTextNullableRelationFilter, PostCommentLargTextWhereInput> | null
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PostCommentOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    _count?: PostCommentCountOrderByAggregateInput
    _avg?: PostCommentAvgOrderByAggregateInput
    _max?: PostCommentMaxOrderByAggregateInput
    _min?: PostCommentMinOrderByAggregateInput
    _sum?: PostCommentSumOrderByAggregateInput
  }

  export type PostCommentScalarWhereWithAggregatesInput = {
    AND?: PostCommentScalarWhereWithAggregatesInput | PostCommentScalarWhereWithAggregatesInput[]
    OR?: PostCommentScalarWhereWithAggregatesInput[]
    NOT?: PostCommentScalarWhereWithAggregatesInput | PostCommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostComment"> | number
    comment?: StringWithAggregatesFilter<"PostComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostComment"> | Date | string
    postId?: IntWithAggregatesFilter<"PostComment"> | number
    userId?: IntWithAggregatesFilter<"PostComment"> | number
  }

  export type PostCommentLargTextWhereInput = {
    AND?: PostCommentLargTextWhereInput | PostCommentLargTextWhereInput[]
    OR?: PostCommentLargTextWhereInput[]
    NOT?: PostCommentLargTextWhereInput | PostCommentLargTextWhereInput[]
    id?: IntFilter<"PostCommentLargText"> | number
    text?: StringFilter<"PostCommentLargText"> | string
    postCommentId?: IntFilter<"PostCommentLargText"> | number
    postComment?: XOR<PostCommentRelationFilter, PostCommentWhereInput>
  }

  export type PostCommentLargTextOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    postCommentId?: SortOrder
    postComment?: PostCommentOrderByWithRelationInput
  }

  export type PostCommentLargTextWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postCommentId?: number
    AND?: PostCommentLargTextWhereInput | PostCommentLargTextWhereInput[]
    OR?: PostCommentLargTextWhereInput[]
    NOT?: PostCommentLargTextWhereInput | PostCommentLargTextWhereInput[]
    text?: StringFilter<"PostCommentLargText"> | string
    postComment?: XOR<PostCommentRelationFilter, PostCommentWhereInput>
  }, "id" | "postCommentId">

  export type PostCommentLargTextOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    postCommentId?: SortOrder
    _count?: PostCommentLargTextCountOrderByAggregateInput
    _avg?: PostCommentLargTextAvgOrderByAggregateInput
    _max?: PostCommentLargTextMaxOrderByAggregateInput
    _min?: PostCommentLargTextMinOrderByAggregateInput
    _sum?: PostCommentLargTextSumOrderByAggregateInput
  }

  export type PostCommentLargTextScalarWhereWithAggregatesInput = {
    AND?: PostCommentLargTextScalarWhereWithAggregatesInput | PostCommentLargTextScalarWhereWithAggregatesInput[]
    OR?: PostCommentLargTextScalarWhereWithAggregatesInput[]
    NOT?: PostCommentLargTextScalarWhereWithAggregatesInput | PostCommentLargTextScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostCommentLargText"> | number
    text?: StringWithAggregatesFilter<"PostCommentLargText"> | string
    postCommentId?: IntWithAggregatesFilter<"PostCommentLargText"> | number
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: IntFilter<"ChatRoom"> | number
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    user?: UserListRelationFilter
    comments?: ChatCommentListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByRelationAggregateInput
    comments?: ChatCommentOrderByRelationAggregateInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    user?: UserListRelationFilter
    comments?: ChatCommentListRelationFilter
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatRoom"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
  }

  export type ChatCommentWhereInput = {
    AND?: ChatCommentWhereInput | ChatCommentWhereInput[]
    OR?: ChatCommentWhereInput[]
    NOT?: ChatCommentWhereInput | ChatCommentWhereInput[]
    id?: IntFilter<"ChatComment"> | number
    comment?: StringFilter<"ChatComment"> | string
    createdAt?: DateTimeFilter<"ChatComment"> | Date | string
    roomId?: IntFilter<"ChatComment"> | number
    userId?: IntFilter<"ChatComment"> | number
    metaId?: IntNullableFilter<"ChatComment"> | number | null
    largeComment?: XOR<ChatCommentLargTextNullableRelationFilter, ChatCommentLargTextWhereInput> | null
    room?: XOR<ChatRoomRelationFilter, ChatRoomWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    meta?: XOR<MetaDataNullableRelationFilter, MetaDataWhereInput> | null
  }

  export type ChatCommentOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    metaId?: SortOrderInput | SortOrder
    largeComment?: ChatCommentLargTextOrderByWithRelationInput
    room?: ChatRoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    meta?: MetaDataOrderByWithRelationInput
  }

  export type ChatCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatCommentWhereInput | ChatCommentWhereInput[]
    OR?: ChatCommentWhereInput[]
    NOT?: ChatCommentWhereInput | ChatCommentWhereInput[]
    comment?: StringFilter<"ChatComment"> | string
    createdAt?: DateTimeFilter<"ChatComment"> | Date | string
    roomId?: IntFilter<"ChatComment"> | number
    userId?: IntFilter<"ChatComment"> | number
    metaId?: IntNullableFilter<"ChatComment"> | number | null
    largeComment?: XOR<ChatCommentLargTextNullableRelationFilter, ChatCommentLargTextWhereInput> | null
    room?: XOR<ChatRoomRelationFilter, ChatRoomWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    meta?: XOR<MetaDataNullableRelationFilter, MetaDataWhereInput> | null
  }, "id">

  export type ChatCommentOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    metaId?: SortOrderInput | SortOrder
    _count?: ChatCommentCountOrderByAggregateInput
    _avg?: ChatCommentAvgOrderByAggregateInput
    _max?: ChatCommentMaxOrderByAggregateInput
    _min?: ChatCommentMinOrderByAggregateInput
    _sum?: ChatCommentSumOrderByAggregateInput
  }

  export type ChatCommentScalarWhereWithAggregatesInput = {
    AND?: ChatCommentScalarWhereWithAggregatesInput | ChatCommentScalarWhereWithAggregatesInput[]
    OR?: ChatCommentScalarWhereWithAggregatesInput[]
    NOT?: ChatCommentScalarWhereWithAggregatesInput | ChatCommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatComment"> | number
    comment?: StringWithAggregatesFilter<"ChatComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatComment"> | Date | string
    roomId?: IntWithAggregatesFilter<"ChatComment"> | number
    userId?: IntWithAggregatesFilter<"ChatComment"> | number
    metaId?: IntNullableWithAggregatesFilter<"ChatComment"> | number | null
  }

  export type ChatCommentLargTextWhereInput = {
    AND?: ChatCommentLargTextWhereInput | ChatCommentLargTextWhereInput[]
    OR?: ChatCommentLargTextWhereInput[]
    NOT?: ChatCommentLargTextWhereInput | ChatCommentLargTextWhereInput[]
    id?: IntFilter<"ChatCommentLargText"> | number
    text?: StringFilter<"ChatCommentLargText"> | string
    chatCommentId?: IntFilter<"ChatCommentLargText"> | number
    chatComment?: XOR<ChatCommentRelationFilter, ChatCommentWhereInput>
  }

  export type ChatCommentLargTextOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    chatCommentId?: SortOrder
    chatComment?: ChatCommentOrderByWithRelationInput
  }

  export type ChatCommentLargTextWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chatCommentId?: number
    AND?: ChatCommentLargTextWhereInput | ChatCommentLargTextWhereInput[]
    OR?: ChatCommentLargTextWhereInput[]
    NOT?: ChatCommentLargTextWhereInput | ChatCommentLargTextWhereInput[]
    text?: StringFilter<"ChatCommentLargText"> | string
    chatComment?: XOR<ChatCommentRelationFilter, ChatCommentWhereInput>
  }, "id" | "chatCommentId">

  export type ChatCommentLargTextOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    chatCommentId?: SortOrder
    _count?: ChatCommentLargTextCountOrderByAggregateInput
    _avg?: ChatCommentLargTextAvgOrderByAggregateInput
    _max?: ChatCommentLargTextMaxOrderByAggregateInput
    _min?: ChatCommentLargTextMinOrderByAggregateInput
    _sum?: ChatCommentLargTextSumOrderByAggregateInput
  }

  export type ChatCommentLargTextScalarWhereWithAggregatesInput = {
    AND?: ChatCommentLargTextScalarWhereWithAggregatesInput | ChatCommentLargTextScalarWhereWithAggregatesInput[]
    OR?: ChatCommentLargTextScalarWhereWithAggregatesInput[]
    NOT?: ChatCommentLargTextScalarWhereWithAggregatesInput | ChatCommentLargTextScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatCommentLargText"> | number
    text?: StringWithAggregatesFilter<"ChatCommentLargText"> | string
    chatCommentId?: IntWithAggregatesFilter<"ChatCommentLargText"> | number
  }

  export type MetaDataWhereInput = {
    AND?: MetaDataWhereInput | MetaDataWhereInput[]
    OR?: MetaDataWhereInput[]
    NOT?: MetaDataWhereInput | MetaDataWhereInput[]
    id?: IntFilter<"MetaData"> | number
    url?: StringFilter<"MetaData"> | string
    type?: StringFilter<"MetaData"> | string
    title?: StringFilter<"MetaData"> | string
    description?: StringFilter<"MetaData"> | string
    image?: StringNullableFilter<"MetaData"> | string | null
    imageAlt?: StringNullableFilter<"MetaData"> | string | null
    video?: StringNullableFilter<"MetaData"> | string | null
    posts?: PostListRelationFilter
    comments?: ChatCommentListRelationFilter
  }

  export type MetaDataOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    comments?: ChatCommentOrderByRelationAggregateInput
  }

  export type MetaDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: MetaDataWhereInput | MetaDataWhereInput[]
    OR?: MetaDataWhereInput[]
    NOT?: MetaDataWhereInput | MetaDataWhereInput[]
    type?: StringFilter<"MetaData"> | string
    title?: StringFilter<"MetaData"> | string
    description?: StringFilter<"MetaData"> | string
    image?: StringNullableFilter<"MetaData"> | string | null
    imageAlt?: StringNullableFilter<"MetaData"> | string | null
    video?: StringNullableFilter<"MetaData"> | string | null
    posts?: PostListRelationFilter
    comments?: ChatCommentListRelationFilter
  }, "id" | "url">

  export type MetaDataOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    imageAlt?: SortOrderInput | SortOrder
    video?: SortOrderInput | SortOrder
    _count?: MetaDataCountOrderByAggregateInput
    _avg?: MetaDataAvgOrderByAggregateInput
    _max?: MetaDataMaxOrderByAggregateInput
    _min?: MetaDataMinOrderByAggregateInput
    _sum?: MetaDataSumOrderByAggregateInput
  }

  export type MetaDataScalarWhereWithAggregatesInput = {
    AND?: MetaDataScalarWhereWithAggregatesInput | MetaDataScalarWhereWithAggregatesInput[]
    OR?: MetaDataScalarWhereWithAggregatesInput[]
    NOT?: MetaDataScalarWhereWithAggregatesInput | MetaDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MetaData"> | number
    url?: StringWithAggregatesFilter<"MetaData"> | string
    type?: StringWithAggregatesFilter<"MetaData"> | string
    title?: StringWithAggregatesFilter<"MetaData"> | string
    description?: StringWithAggregatesFilter<"MetaData"> | string
    image?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    imageAlt?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
    video?: StringNullableWithAggregatesFilter<"MetaData"> | string | null
  }

  export type LogAccessWhereInput = {
    AND?: LogAccessWhereInput | LogAccessWhereInput[]
    OR?: LogAccessWhereInput[]
    NOT?: LogAccessWhereInput | LogAccessWhereInput[]
    id?: IntFilter<"LogAccess"> | number
    uuid?: StringFilter<"LogAccess"> | string
    ip?: StringFilter<"LogAccess"> | string
    agent?: StringFilter<"LogAccess"> | string
    updatedAt?: DateTimeFilter<"LogAccess"> | Date | string
    userId?: IntFilter<"LogAccess"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LogAccessOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    agent?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: LogAccessWhereInput | LogAccessWhereInput[]
    OR?: LogAccessWhereInput[]
    NOT?: LogAccessWhereInput | LogAccessWhereInput[]
    ip?: StringFilter<"LogAccess"> | string
    agent?: StringFilter<"LogAccess"> | string
    updatedAt?: DateTimeFilter<"LogAccess"> | Date | string
    userId?: IntFilter<"LogAccess"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "uuid">

  export type LogAccessOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    agent?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: LogAccessCountOrderByAggregateInput
    _avg?: LogAccessAvgOrderByAggregateInput
    _max?: LogAccessMaxOrderByAggregateInput
    _min?: LogAccessMinOrderByAggregateInput
    _sum?: LogAccessSumOrderByAggregateInput
  }

  export type LogAccessScalarWhereWithAggregatesInput = {
    AND?: LogAccessScalarWhereWithAggregatesInput | LogAccessScalarWhereWithAggregatesInput[]
    OR?: LogAccessScalarWhereWithAggregatesInput[]
    NOT?: LogAccessScalarWhereWithAggregatesInput | LogAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogAccess"> | number
    uuid?: StringWithAggregatesFilter<"LogAccess"> | string
    ip?: StringWithAggregatesFilter<"LogAccess"> | string
    agent?: StringWithAggregatesFilter<"LogAccess"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"LogAccess"> | Date | string
    userId?: IntWithAggregatesFilter<"LogAccess"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PositionCreateInput = {
    name: string
    power: number
    users?: UserCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    id?: number
    name: string
    power: number
    users?: UserUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    id?: number
    name: string
    power: number
  }

  export type PositionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type GroupCreateInput = {
    order: number
    slug: string
    name: string
    parent?: GroupCreateNestedOneWithoutChildrenInput
    children?: GroupCreateNestedManyWithoutParentInput
    users?: UserCreateNestedManyWithoutGroupInput
    community: CommunityCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    order: number
    slug: string
    name: string
    parentId?: number | null
    communityId: number
    children?: GroupUncheckedCreateNestedManyWithoutParentInput
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent?: GroupUpdateOneWithoutChildrenNestedInput
    children?: GroupUpdateManyWithoutParentNestedInput
    users?: UserUpdateManyWithoutGroupNestedInput
    community?: CommunityUpdateOneRequiredWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: IntFieldUpdateOperationsInput | number
    children?: GroupUncheckedUpdateManyWithoutParentNestedInput
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    order: number
    slug: string
    name: string
    parentId?: number | null
    communityId: number
  }

  export type GroupUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunityCreateInput = {
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    group?: GroupCreateNestedOneWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    manager?: UserCreateNestedOneWithoutManagedCommunitiesInput
    users?: UserCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: number
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    managerId?: number | null
    group?: GroupUncheckedCreateNestedOneWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    users?: UserUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUpdateInput = {
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    manager?: UserUpdateOneWithoutManagedCommunitiesNestedInput
    users?: UserUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUncheckedUpdateOneWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    users?: UserUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: number
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    managerId?: number | null
  }

  export type CommunityUpdateManyMutationInput = {
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentCnt: number
    largeText?: PostLargTextCreateNestedOneWithoutPostInput
    community: CommunityCreateNestedOneWithoutPostsInput
    user: UserCreateNestedOneWithoutPostsInput
    meta?: MetaDataCreateNestedManyWithoutPostsInput
    comments?: PostCommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
    userId: number
    commentCnt: number
    largeText?: PostLargTextUncheckedCreateNestedOneWithoutPostInput
    meta?: MetaDataUncheckedCreateNestedManyWithoutPostsInput
    comments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUpdateOneWithoutPostNestedInput
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    meta?: MetaDataUpdateManyWithoutPostsNestedInput
    comments?: PostCommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUncheckedUpdateOneWithoutPostNestedInput
    meta?: MetaDataUncheckedUpdateManyWithoutPostsNestedInput
    comments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
    userId: number
    commentCnt: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentCnt?: IntFieldUpdateOperationsInput | number
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
  }

  export type PostLargTextCreateInput = {
    text: string
    post: PostCreateNestedOneWithoutLargeTextInput
  }

  export type PostLargTextUncheckedCreateInput = {
    id?: number
    text: string
    postId: number
  }

  export type PostLargTextUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutLargeTextNestedInput
  }

  export type PostLargTextUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLargTextCreateManyInput = {
    id?: number
    text: string
    postId: number
  }

  export type PostLargTextUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PostLargTextUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentCreateInput = {
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    largeComment?: PostCommentLargTextCreateNestedOneWithoutPostCommentInput
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentUncheckedCreateInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
    userId: number
    largeComment?: PostCommentLargTextUncheckedCreateNestedOneWithoutPostCommentInput
  }

  export type PostCommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeComment?: PostCommentLargTextUpdateOneWithoutPostCommentNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    largeComment?: PostCommentLargTextUncheckedUpdateOneWithoutPostCommentNestedInput
  }

  export type PostCommentCreateManyInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
    userId: number
  }

  export type PostCommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentLargTextCreateInput = {
    text: string
    postComment: PostCommentCreateNestedOneWithoutLargeCommentInput
  }

  export type PostCommentLargTextUncheckedCreateInput = {
    id?: number
    text: string
    postCommentId: number
  }

  export type PostCommentLargTextUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    postComment?: PostCommentUpdateOneRequiredWithoutLargeCommentNestedInput
  }

  export type PostCommentLargTextUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    postCommentId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentLargTextCreateManyInput = {
    id?: number
    text: string
    postCommentId: number
  }

  export type PostCommentLargTextUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PostCommentLargTextUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    postCommentId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatRoomCreateInput = {
    createdAt?: Date | string
    user?: UserCreateNestedManyWithoutChatRoomsInput
    comments?: ChatCommentCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutChatRoomsInput
    comments?: ChatCommentUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutChatRoomsNestedInput
    comments?: ChatCommentUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutChatRoomsNestedInput
    comments?: ChatCommentUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: number
    createdAt?: Date | string
  }

  export type ChatRoomUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCommentCreateInput = {
    comment: string
    createdAt?: Date | string
    largeComment?: ChatCommentLargTextCreateNestedOneWithoutChatCommentInput
    room: ChatRoomCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutChatCommetsInput
    meta?: MetaDataCreateNestedOneWithoutCommentsInput
  }

  export type ChatCommentUncheckedCreateInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    roomId: number
    userId: number
    metaId?: number | null
    largeComment?: ChatCommentLargTextUncheckedCreateNestedOneWithoutChatCommentInput
  }

  export type ChatCommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeComment?: ChatCommentLargTextUpdateOneWithoutChatCommentNestedInput
    room?: ChatRoomUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutChatCommetsNestedInput
    meta?: MetaDataUpdateOneWithoutCommentsNestedInput
  }

  export type ChatCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    largeComment?: ChatCommentLargTextUncheckedUpdateOneWithoutChatCommentNestedInput
  }

  export type ChatCommentCreateManyInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    roomId: number
    userId: number
    metaId?: number | null
  }

  export type ChatCommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatCommentLargTextCreateInput = {
    text: string
    chatComment: ChatCommentCreateNestedOneWithoutLargeCommentInput
  }

  export type ChatCommentLargTextUncheckedCreateInput = {
    id?: number
    text: string
    chatCommentId: number
  }

  export type ChatCommentLargTextUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    chatComment?: ChatCommentUpdateOneRequiredWithoutLargeCommentNestedInput
  }

  export type ChatCommentLargTextUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    chatCommentId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatCommentLargTextCreateManyInput = {
    id?: number
    text: string
    chatCommentId: number
  }

  export type ChatCommentLargTextUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCommentLargTextUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    chatCommentId?: IntFieldUpdateOperationsInput | number
  }

  export type MetaDataCreateInput = {
    url: string
    type: string
    title: string
    description: string
    image?: string | null
    imageAlt?: string | null
    video?: string | null
    posts?: PostCreateNestedManyWithoutMetaInput
    comments?: ChatCommentCreateNestedManyWithoutMetaInput
  }

  export type MetaDataUncheckedCreateInput = {
    id?: number
    url: string
    type: string
    title: string
    description: string
    image?: string | null
    imageAlt?: string | null
    video?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutMetaInput
    comments?: ChatCommentUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaDataUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutMetaNestedInput
    comments?: ChatCommentUpdateManyWithoutMetaNestedInput
  }

  export type MetaDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutMetaNestedInput
    comments?: ChatCommentUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaDataCreateManyInput = {
    id?: number
    url: string
    type: string
    title: string
    description: string
    image?: string | null
    imageAlt?: string | null
    video?: string | null
  }

  export type MetaDataUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetaDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAccessCreateInput = {
    uuid: string
    ip: string
    agent: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccessInput
  }

  export type LogAccessUncheckedCreateInput = {
    id?: number
    uuid: string
    ip: string
    agent: string
    updatedAt?: Date | string
    userId: number
  }

  export type LogAccessUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccessNestedInput
  }

  export type LogAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LogAccessCreateManyInput = {
    id?: number
    uuid: string
    ip: string
    agent: string
    updatedAt?: Date | string
    userId: number
  }

  export type LogAccessUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PositionRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type GroupNullableRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostCommentListRelationFilter = {
    every?: PostCommentWhereInput
    some?: PostCommentWhereInput
    none?: PostCommentWhereInput
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type ChatCommentListRelationFilter = {
    every?: ChatCommentWhereInput
    some?: ChatCommentWhereInput
    none?: ChatCommentWhereInput
  }

  export type LogAccessListRelationFilter = {
    every?: LogAccessWhereInput
    some?: LogAccessWhereInput
    none?: LogAccessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    positionId?: SortOrder
    groupId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    groupId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    positionId?: SortOrder
    groupId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    positionId?: SortOrder
    groupId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    positionId?: SortOrder
    groupId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    power?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    id?: SortOrder
    power?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    power?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    power?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    id?: SortOrder
    power?: SortOrder
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type CommunityRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumCommunityCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunityCategory | EnumCommunityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CommunityCategory[] | ListEnumCommunityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunityCategory[] | ListEnumCommunityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunityCategoryFilter<$PrismaModel> | $Enums.CommunityCategory
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    isPrivate?: SortOrder
    isPublicRead?: SortOrder
    isPublicWrite?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    latestPostDate?: SortOrder
    managerId?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    isPrivate?: SortOrder
    isPublicRead?: SortOrder
    isPublicWrite?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    latestPostDate?: SortOrder
    managerId?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    isPrivate?: SortOrder
    isPublicRead?: SortOrder
    isPublicWrite?: SortOrder
    category?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    latestPostDate?: SortOrder
    managerId?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCommunityCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunityCategory | EnumCommunityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CommunityCategory[] | ListEnumCommunityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunityCategory[] | ListEnumCommunityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunityCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CommunityCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunityCategoryFilter<$PrismaModel>
    _max?: NestedEnumCommunityCategoryFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostLargTextNullableRelationFilter = {
    is?: PostLargTextWhereInput | null
    isNot?: PostLargTextWhereInput | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MetaDataListRelationFilter = {
    every?: MetaDataWhereInput
    some?: MetaDataWhereInput
    none?: MetaDataWhereInput
  }

  export type MetaDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    commentCnt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    commentCnt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    commentCnt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    commentCnt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    userId?: SortOrder
    commentCnt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostLargTextCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
  }

  export type PostLargTextAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostLargTextMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
  }

  export type PostLargTextMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postId?: SortOrder
  }

  export type PostLargTextSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
  }

  export type PostCommentLargTextNullableRelationFilter = {
    is?: PostCommentLargTextWhereInput | null
    isNot?: PostCommentLargTextWhereInput | null
  }

  export type PostCommentCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostCommentMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostCommentSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostCommentRelationFilter = {
    is?: PostCommentWhereInput
    isNot?: PostCommentWhereInput
  }

  export type PostCommentLargTextCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postCommentId?: SortOrder
  }

  export type PostCommentLargTextAvgOrderByAggregateInput = {
    id?: SortOrder
    postCommentId?: SortOrder
  }

  export type PostCommentLargTextMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postCommentId?: SortOrder
  }

  export type PostCommentLargTextMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    postCommentId?: SortOrder
  }

  export type PostCommentLargTextSumOrderByAggregateInput = {
    id?: SortOrder
    postCommentId?: SortOrder
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatCommentLargTextNullableRelationFilter = {
    is?: ChatCommentLargTextWhereInput | null
    isNot?: ChatCommentLargTextWhereInput | null
  }

  export type ChatRoomRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type MetaDataNullableRelationFilter = {
    is?: MetaDataWhereInput | null
    isNot?: MetaDataWhereInput | null
  }

  export type ChatCommentCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    metaId?: SortOrder
  }

  export type ChatCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    metaId?: SortOrder
  }

  export type ChatCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    metaId?: SortOrder
  }

  export type ChatCommentMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    metaId?: SortOrder
  }

  export type ChatCommentSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    metaId?: SortOrder
  }

  export type ChatCommentRelationFilter = {
    is?: ChatCommentWhereInput
    isNot?: ChatCommentWhereInput
  }

  export type ChatCommentLargTextCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    chatCommentId?: SortOrder
  }

  export type ChatCommentLargTextAvgOrderByAggregateInput = {
    id?: SortOrder
    chatCommentId?: SortOrder
  }

  export type ChatCommentLargTextMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    chatCommentId?: SortOrder
  }

  export type ChatCommentLargTextMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    chatCommentId?: SortOrder
  }

  export type ChatCommentLargTextSumOrderByAggregateInput = {
    id?: SortOrder
    chatCommentId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MetaDataCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    imageAlt?: SortOrder
    video?: SortOrder
  }

  export type MetaDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetaDataMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    imageAlt?: SortOrder
    video?: SortOrder
  }

  export type MetaDataMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    imageAlt?: SortOrder
    video?: SortOrder
  }

  export type MetaDataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LogAccessCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    agent?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LogAccessAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LogAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    agent?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LogAccessMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    agent?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type LogAccessSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PositionCreateNestedOneWithoutUsersInput = {
    create?: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUsersInput
    connect?: PositionWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    connect?: GroupWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput> | PostCommentCreateWithoutUserInput[] | PostCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutUserInput | PostCommentCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentCreateManyUserInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput> | CommunityCreateWithoutUsersInput[] | CommunityUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | CommunityCreateOrConnectWithoutUsersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutManagerInput = {
    create?: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput> | CommunityCreateWithoutManagerInput[] | CommunityUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutManagerInput | CommunityCreateOrConnectWithoutManagerInput[]
    createMany?: CommunityCreateManyManagerInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCommentCreateWithoutUserInput, ChatCommentUncheckedCreateWithoutUserInput> | ChatCommentCreateWithoutUserInput[] | ChatCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutUserInput | ChatCommentCreateOrConnectWithoutUserInput[]
    createMany?: ChatCommentCreateManyUserInputEnvelope
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
  }

  export type LogAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<LogAccessCreateWithoutUserInput, LogAccessUncheckedCreateWithoutUserInput> | LogAccessCreateWithoutUserInput[] | LogAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogAccessCreateOrConnectWithoutUserInput | LogAccessCreateOrConnectWithoutUserInput[]
    createMany?: LogAccessCreateManyUserInputEnvelope
    connect?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput> | PostCommentCreateWithoutUserInput[] | PostCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutUserInput | PostCommentCreateOrConnectWithoutUserInput[]
    createMany?: PostCommentCreateManyUserInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput> | CommunityCreateWithoutUsersInput[] | CommunityUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | CommunityCreateOrConnectWithoutUsersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput> | CommunityCreateWithoutManagerInput[] | CommunityUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutManagerInput | CommunityCreateOrConnectWithoutManagerInput[]
    createMany?: CommunityCreateManyManagerInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCommentCreateWithoutUserInput, ChatCommentUncheckedCreateWithoutUserInput> | ChatCommentCreateWithoutUserInput[] | ChatCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutUserInput | ChatCommentCreateOrConnectWithoutUserInput[]
    createMany?: ChatCommentCreateManyUserInputEnvelope
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
  }

  export type LogAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogAccessCreateWithoutUserInput, LogAccessUncheckedCreateWithoutUserInput> | LogAccessCreateWithoutUserInput[] | LogAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogAccessCreateOrConnectWithoutUserInput | LogAccessCreateOrConnectWithoutUserInput[]
    createMany?: LogAccessCreateManyUserInputEnvelope
    connect?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PositionUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUsersInput
    upsert?: PositionUpsertWithoutUsersInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutUsersInput, PositionUpdateWithoutUsersInput>, PositionUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateOneWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    upsert?: GroupUpsertWithoutUsersInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUsersInput, GroupUpdateWithoutUsersInput>, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput> | PostCommentCreateWithoutUserInput[] | PostCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutUserInput | PostCommentCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutUserInput | PostCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentCreateManyUserInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutUserInput | PostCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutUserInput | PostCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput> | CommunityCreateWithoutUsersInput[] | CommunityUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | CommunityCreateOrConnectWithoutUsersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutUsersInput | CommunityUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutUsersInput | CommunityUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutUsersInput | CommunityUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput> | CommunityCreateWithoutManagerInput[] | CommunityUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutManagerInput | CommunityCreateOrConnectWithoutManagerInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutManagerInput | CommunityUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CommunityCreateManyManagerInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutManagerInput | CommunityUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutManagerInput | CommunityUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserInput | ChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserInput | ChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserInput | ChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCommentCreateWithoutUserInput, ChatCommentUncheckedCreateWithoutUserInput> | ChatCommentCreateWithoutUserInput[] | ChatCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutUserInput | ChatCommentCreateOrConnectWithoutUserInput[]
    upsert?: ChatCommentUpsertWithWhereUniqueWithoutUserInput | ChatCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCommentCreateManyUserInputEnvelope
    set?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    disconnect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    delete?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    update?: ChatCommentUpdateWithWhereUniqueWithoutUserInput | ChatCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatCommentUpdateManyWithWhereWithoutUserInput | ChatCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatCommentScalarWhereInput | ChatCommentScalarWhereInput[]
  }

  export type LogAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogAccessCreateWithoutUserInput, LogAccessUncheckedCreateWithoutUserInput> | LogAccessCreateWithoutUserInput[] | LogAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogAccessCreateOrConnectWithoutUserInput | LogAccessCreateOrConnectWithoutUserInput[]
    upsert?: LogAccessUpsertWithWhereUniqueWithoutUserInput | LogAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogAccessCreateManyUserInputEnvelope
    set?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
    disconnect?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
    delete?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
    connect?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
    update?: LogAccessUpdateWithWhereUniqueWithoutUserInput | LogAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogAccessUpdateManyWithWhereWithoutUserInput | LogAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogAccessScalarWhereInput | LogAccessScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput> | PostCommentCreateWithoutUserInput[] | PostCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutUserInput | PostCommentCreateOrConnectWithoutUserInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutUserInput | PostCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCommentCreateManyUserInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutUserInput | PostCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutUserInput | PostCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput> | CommunityCreateWithoutUsersInput[] | CommunityUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutUsersInput | CommunityCreateOrConnectWithoutUsersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutUsersInput | CommunityUpsertWithWhereUniqueWithoutUsersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutUsersInput | CommunityUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutUsersInput | CommunityUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput> | CommunityCreateWithoutManagerInput[] | CommunityUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutManagerInput | CommunityCreateOrConnectWithoutManagerInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutManagerInput | CommunityUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CommunityCreateManyManagerInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutManagerInput | CommunityUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutManagerInput | CommunityUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserInput | ChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserInput | ChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserInput | ChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCommentCreateWithoutUserInput, ChatCommentUncheckedCreateWithoutUserInput> | ChatCommentCreateWithoutUserInput[] | ChatCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutUserInput | ChatCommentCreateOrConnectWithoutUserInput[]
    upsert?: ChatCommentUpsertWithWhereUniqueWithoutUserInput | ChatCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCommentCreateManyUserInputEnvelope
    set?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    disconnect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    delete?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    update?: ChatCommentUpdateWithWhereUniqueWithoutUserInput | ChatCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatCommentUpdateManyWithWhereWithoutUserInput | ChatCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatCommentScalarWhereInput | ChatCommentScalarWhereInput[]
  }

  export type LogAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogAccessCreateWithoutUserInput, LogAccessUncheckedCreateWithoutUserInput> | LogAccessCreateWithoutUserInput[] | LogAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogAccessCreateOrConnectWithoutUserInput | LogAccessCreateOrConnectWithoutUserInput[]
    upsert?: LogAccessUpsertWithWhereUniqueWithoutUserInput | LogAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogAccessCreateManyUserInputEnvelope
    set?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
    disconnect?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
    delete?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
    connect?: LogAccessWhereUniqueInput | LogAccessWhereUniqueInput[]
    update?: LogAccessUpdateWithWhereUniqueWithoutUserInput | LogAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogAccessUpdateManyWithWhereWithoutUserInput | LogAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogAccessScalarWhereInput | LogAccessScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutPositionInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPositionNestedInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPositionInput | UserUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPositionInput | UserUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPositionInput | UserUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPositionInput | UserUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPositionInput | UserUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPositionInput | UserUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutChildrenInput = {
    create?: XOR<GroupCreateWithoutChildrenInput, GroupUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChildrenInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupCreateNestedManyWithoutParentInput = {
    create?: XOR<GroupCreateWithoutParentInput, GroupUncheckedCreateWithoutParentInput> | GroupCreateWithoutParentInput[] | GroupUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutParentInput | GroupCreateOrConnectWithoutParentInput[]
    createMany?: GroupCreateManyParentInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CommunityCreateNestedOneWithoutGroupInput = {
    create?: XOR<CommunityCreateWithoutGroupInput, CommunityUncheckedCreateWithoutGroupInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutGroupInput
    connect?: CommunityWhereUniqueInput
  }

  export type GroupUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<GroupCreateWithoutParentInput, GroupUncheckedCreateWithoutParentInput> | GroupCreateWithoutParentInput[] | GroupUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutParentInput | GroupCreateOrConnectWithoutParentInput[]
    createMany?: GroupCreateManyParentInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GroupUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<GroupCreateWithoutChildrenInput, GroupUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChildrenInput
    upsert?: GroupUpsertWithoutChildrenInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutChildrenInput, GroupUpdateWithoutChildrenInput>, GroupUncheckedUpdateWithoutChildrenInput>
  }

  export type GroupUpdateManyWithoutParentNestedInput = {
    create?: XOR<GroupCreateWithoutParentInput, GroupUncheckedCreateWithoutParentInput> | GroupCreateWithoutParentInput[] | GroupUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutParentInput | GroupCreateOrConnectWithoutParentInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutParentInput | GroupUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: GroupCreateManyParentInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutParentInput | GroupUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutParentInput | GroupUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommunityUpdateOneRequiredWithoutGroupNestedInput = {
    create?: XOR<CommunityCreateWithoutGroupInput, CommunityUncheckedCreateWithoutGroupInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutGroupInput
    upsert?: CommunityUpsertWithoutGroupInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutGroupInput, CommunityUpdateWithoutGroupInput>, CommunityUncheckedUpdateWithoutGroupInput>
  }

  export type GroupUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<GroupCreateWithoutParentInput, GroupUncheckedCreateWithoutParentInput> | GroupCreateWithoutParentInput[] | GroupUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutParentInput | GroupCreateOrConnectWithoutParentInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutParentInput | GroupUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: GroupCreateManyParentInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutParentInput | GroupUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutParentInput | GroupUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutCommunityInput = {
    create?: XOR<GroupCreateWithoutCommunityInput, GroupUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: GroupCreateOrConnectWithoutCommunityInput
    connect?: GroupWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutCommunityInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutManagedCommunitiesInput = {
    create?: XOR<UserCreateWithoutManagedCommunitiesInput, UserUncheckedCreateWithoutManagedCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput> | UserCreateWithoutCommunitiesInput[] | UserUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | UserCreateOrConnectWithoutCommunitiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedOneWithoutCommunityInput = {
    create?: XOR<GroupCreateWithoutCommunityInput, GroupUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: GroupCreateOrConnectWithoutCommunityInput
    connect?: GroupWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput> | UserCreateWithoutCommunitiesInput[] | UserUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | UserCreateOrConnectWithoutCommunitiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumCommunityCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CommunityCategory
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GroupUpdateOneWithoutCommunityNestedInput = {
    create?: XOR<GroupCreateWithoutCommunityInput, GroupUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: GroupCreateOrConnectWithoutCommunityInput
    upsert?: GroupUpsertWithoutCommunityInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutCommunityInput, GroupUpdateWithoutCommunityInput>, GroupUncheckedUpdateWithoutCommunityInput>
  }

  export type PostUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput | PostUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCommunityInput | PostUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCommunityInput | PostUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserUpdateOneWithoutManagedCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutManagedCommunitiesInput, UserUncheckedCreateWithoutManagedCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedCommunitiesInput
    upsert?: UserUpsertWithoutManagedCommunitiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedCommunitiesInput, UserUpdateWithoutManagedCommunitiesInput>, UserUncheckedUpdateWithoutManagedCommunitiesInput>
  }

  export type UserUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput> | UserCreateWithoutCommunitiesInput[] | UserUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | UserCreateOrConnectWithoutCommunitiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommunitiesInput | UserUpsertWithWhereUniqueWithoutCommunitiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommunitiesInput | UserUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommunitiesInput | UserUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type GroupUncheckedUpdateOneWithoutCommunityNestedInput = {
    create?: XOR<GroupCreateWithoutCommunityInput, GroupUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: GroupCreateOrConnectWithoutCommunityInput
    upsert?: GroupUpsertWithoutCommunityInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutCommunityInput, GroupUpdateWithoutCommunityInput>, GroupUncheckedUpdateWithoutCommunityInput>
  }

  export type PostUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput | PostUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCommunityInput | PostUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCommunityInput | PostUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput> | UserCreateWithoutCommunitiesInput[] | UserUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | UserCreateOrConnectWithoutCommunitiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommunitiesInput | UserUpsertWithWhereUniqueWithoutCommunitiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommunitiesInput | UserUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommunitiesInput | UserUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PostLargTextCreateNestedOneWithoutPostInput = {
    create?: XOR<PostLargTextCreateWithoutPostInput, PostLargTextUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostLargTextCreateOrConnectWithoutPostInput
    connect?: PostLargTextWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutPostsInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type MetaDataCreateNestedManyWithoutPostsInput = {
    create?: XOR<MetaDataCreateWithoutPostsInput, MetaDataUncheckedCreateWithoutPostsInput> | MetaDataCreateWithoutPostsInput[] | MetaDataUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: MetaDataCreateOrConnectWithoutPostsInput | MetaDataCreateOrConnectWithoutPostsInput[]
    connect?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
  }

  export type PostCommentCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type PostLargTextUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<PostLargTextCreateWithoutPostInput, PostLargTextUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostLargTextCreateOrConnectWithoutPostInput
    connect?: PostLargTextWhereUniqueInput
  }

  export type MetaDataUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<MetaDataCreateWithoutPostsInput, MetaDataUncheckedCreateWithoutPostsInput> | MetaDataCreateWithoutPostsInput[] | MetaDataUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: MetaDataCreateOrConnectWithoutPostsInput | MetaDataCreateOrConnectWithoutPostsInput[]
    connect?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
  }

  export type PostCommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostLargTextUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostLargTextCreateWithoutPostInput, PostLargTextUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostLargTextCreateOrConnectWithoutPostInput
    upsert?: PostLargTextUpsertWithoutPostInput
    disconnect?: PostLargTextWhereInput | boolean
    delete?: PostLargTextWhereInput | boolean
    connect?: PostLargTextWhereUniqueInput
    update?: XOR<XOR<PostLargTextUpdateToOneWithWhereWithoutPostInput, PostLargTextUpdateWithoutPostInput>, PostLargTextUncheckedUpdateWithoutPostInput>
  }

  export type CommunityUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    upsert?: CommunityUpsertWithoutPostsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutPostsInput, CommunityUpdateWithoutPostsInput>, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type MetaDataUpdateManyWithoutPostsNestedInput = {
    create?: XOR<MetaDataCreateWithoutPostsInput, MetaDataUncheckedCreateWithoutPostsInput> | MetaDataCreateWithoutPostsInput[] | MetaDataUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: MetaDataCreateOrConnectWithoutPostsInput | MetaDataCreateOrConnectWithoutPostsInput[]
    upsert?: MetaDataUpsertWithWhereUniqueWithoutPostsInput | MetaDataUpsertWithWhereUniqueWithoutPostsInput[]
    set?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
    disconnect?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
    delete?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
    connect?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
    update?: MetaDataUpdateWithWhereUniqueWithoutPostsInput | MetaDataUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: MetaDataUpdateManyWithWhereWithoutPostsInput | MetaDataUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: MetaDataScalarWhereInput | MetaDataScalarWhereInput[]
  }

  export type PostCommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutPostInput | PostCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutPostInput | PostCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutPostInput | PostCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type PostLargTextUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostLargTextCreateWithoutPostInput, PostLargTextUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostLargTextCreateOrConnectWithoutPostInput
    upsert?: PostLargTextUpsertWithoutPostInput
    disconnect?: PostLargTextWhereInput | boolean
    delete?: PostLargTextWhereInput | boolean
    connect?: PostLargTextWhereUniqueInput
    update?: XOR<XOR<PostLargTextUpdateToOneWithWhereWithoutPostInput, PostLargTextUpdateWithoutPostInput>, PostLargTextUncheckedUpdateWithoutPostInput>
  }

  export type MetaDataUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<MetaDataCreateWithoutPostsInput, MetaDataUncheckedCreateWithoutPostsInput> | MetaDataCreateWithoutPostsInput[] | MetaDataUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: MetaDataCreateOrConnectWithoutPostsInput | MetaDataCreateOrConnectWithoutPostsInput[]
    upsert?: MetaDataUpsertWithWhereUniqueWithoutPostsInput | MetaDataUpsertWithWhereUniqueWithoutPostsInput[]
    set?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
    disconnect?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
    delete?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
    connect?: MetaDataWhereUniqueInput | MetaDataWhereUniqueInput[]
    update?: MetaDataUpdateWithWhereUniqueWithoutPostsInput | MetaDataUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: MetaDataUpdateManyWithWhereWithoutPostsInput | MetaDataUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: MetaDataScalarWhereInput | MetaDataScalarWhereInput[]
  }

  export type PostCommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput> | PostCommentCreateWithoutPostInput[] | PostCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostCommentCreateOrConnectWithoutPostInput | PostCommentCreateOrConnectWithoutPostInput[]
    upsert?: PostCommentUpsertWithWhereUniqueWithoutPostInput | PostCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostCommentCreateManyPostInputEnvelope
    set?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    disconnect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    delete?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    connect?: PostCommentWhereUniqueInput | PostCommentWhereUniqueInput[]
    update?: PostCommentUpdateWithWhereUniqueWithoutPostInput | PostCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostCommentUpdateManyWithWhereWithoutPostInput | PostCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutLargeTextInput = {
    create?: XOR<PostCreateWithoutLargeTextInput, PostUncheckedCreateWithoutLargeTextInput>
    connectOrCreate?: PostCreateOrConnectWithoutLargeTextInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutLargeTextNestedInput = {
    create?: XOR<PostCreateWithoutLargeTextInput, PostUncheckedCreateWithoutLargeTextInput>
    connectOrCreate?: PostCreateOrConnectWithoutLargeTextInput
    upsert?: PostUpsertWithoutLargeTextInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLargeTextInput, PostUpdateWithoutLargeTextInput>, PostUncheckedUpdateWithoutLargeTextInput>
  }

  export type PostCommentLargTextCreateNestedOneWithoutPostCommentInput = {
    create?: XOR<PostCommentLargTextCreateWithoutPostCommentInput, PostCommentLargTextUncheckedCreateWithoutPostCommentInput>
    connectOrCreate?: PostCommentLargTextCreateOrConnectWithoutPostCommentInput
    connect?: PostCommentLargTextWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostCommentsInput = {
    create?: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCommentLargTextUncheckedCreateNestedOneWithoutPostCommentInput = {
    create?: XOR<PostCommentLargTextCreateWithoutPostCommentInput, PostCommentLargTextUncheckedCreateWithoutPostCommentInput>
    connectOrCreate?: PostCommentLargTextCreateOrConnectWithoutPostCommentInput
    connect?: PostCommentLargTextWhereUniqueInput
  }

  export type PostCommentLargTextUpdateOneWithoutPostCommentNestedInput = {
    create?: XOR<PostCommentLargTextCreateWithoutPostCommentInput, PostCommentLargTextUncheckedCreateWithoutPostCommentInput>
    connectOrCreate?: PostCommentLargTextCreateOrConnectWithoutPostCommentInput
    upsert?: PostCommentLargTextUpsertWithoutPostCommentInput
    disconnect?: PostCommentLargTextWhereInput | boolean
    delete?: PostCommentLargTextWhereInput | boolean
    connect?: PostCommentLargTextWhereUniqueInput
    update?: XOR<XOR<PostCommentLargTextUpdateToOneWithWhereWithoutPostCommentInput, PostCommentLargTextUpdateWithoutPostCommentInput>, PostCommentLargTextUncheckedUpdateWithoutPostCommentInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutPostCommentsNestedInput = {
    create?: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput
    upsert?: UserUpsertWithoutPostCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostCommentsInput, UserUpdateWithoutPostCommentsInput>, UserUncheckedUpdateWithoutPostCommentsInput>
  }

  export type PostCommentLargTextUncheckedUpdateOneWithoutPostCommentNestedInput = {
    create?: XOR<PostCommentLargTextCreateWithoutPostCommentInput, PostCommentLargTextUncheckedCreateWithoutPostCommentInput>
    connectOrCreate?: PostCommentLargTextCreateOrConnectWithoutPostCommentInput
    upsert?: PostCommentLargTextUpsertWithoutPostCommentInput
    disconnect?: PostCommentLargTextWhereInput | boolean
    delete?: PostCommentLargTextWhereInput | boolean
    connect?: PostCommentLargTextWhereUniqueInput
    update?: XOR<XOR<PostCommentLargTextUpdateToOneWithWhereWithoutPostCommentInput, PostCommentLargTextUpdateWithoutPostCommentInput>, PostCommentLargTextUncheckedUpdateWithoutPostCommentInput>
  }

  export type PostCommentCreateNestedOneWithoutLargeCommentInput = {
    create?: XOR<PostCommentCreateWithoutLargeCommentInput, PostCommentUncheckedCreateWithoutLargeCommentInput>
    connectOrCreate?: PostCommentCreateOrConnectWithoutLargeCommentInput
    connect?: PostCommentWhereUniqueInput
  }

  export type PostCommentUpdateOneRequiredWithoutLargeCommentNestedInput = {
    create?: XOR<PostCommentCreateWithoutLargeCommentInput, PostCommentUncheckedCreateWithoutLargeCommentInput>
    connectOrCreate?: PostCommentCreateOrConnectWithoutLargeCommentInput
    upsert?: PostCommentUpsertWithoutLargeCommentInput
    connect?: PostCommentWhereUniqueInput
    update?: XOR<XOR<PostCommentUpdateToOneWithWhereWithoutLargeCommentInput, PostCommentUpdateWithoutLargeCommentInput>, PostCommentUncheckedUpdateWithoutLargeCommentInput>
  }

  export type UserCreateNestedManyWithoutChatRoomsInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput> | UserCreateWithoutChatRoomsInput[] | UserUncheckedCreateWithoutChatRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput | UserCreateOrConnectWithoutChatRoomsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChatCommentCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatCommentCreateWithoutRoomInput, ChatCommentUncheckedCreateWithoutRoomInput> | ChatCommentCreateWithoutRoomInput[] | ChatCommentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutRoomInput | ChatCommentCreateOrConnectWithoutRoomInput[]
    createMany?: ChatCommentCreateManyRoomInputEnvelope
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatRoomsInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput> | UserCreateWithoutChatRoomsInput[] | UserUncheckedCreateWithoutChatRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput | UserCreateOrConnectWithoutChatRoomsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChatCommentUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatCommentCreateWithoutRoomInput, ChatCommentUncheckedCreateWithoutRoomInput> | ChatCommentCreateWithoutRoomInput[] | ChatCommentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutRoomInput | ChatCommentCreateOrConnectWithoutRoomInput[]
    createMany?: ChatCommentCreateManyRoomInputEnvelope
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutChatRoomsNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput> | UserCreateWithoutChatRoomsInput[] | UserUncheckedCreateWithoutChatRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput | UserCreateOrConnectWithoutChatRoomsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatRoomsInput | UserUpsertWithWhereUniqueWithoutChatRoomsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatRoomsInput | UserUpdateWithWhereUniqueWithoutChatRoomsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatRoomsInput | UserUpdateManyWithWhereWithoutChatRoomsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChatCommentUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatCommentCreateWithoutRoomInput, ChatCommentUncheckedCreateWithoutRoomInput> | ChatCommentCreateWithoutRoomInput[] | ChatCommentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutRoomInput | ChatCommentCreateOrConnectWithoutRoomInput[]
    upsert?: ChatCommentUpsertWithWhereUniqueWithoutRoomInput | ChatCommentUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatCommentCreateManyRoomInputEnvelope
    set?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    disconnect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    delete?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    update?: ChatCommentUpdateWithWhereUniqueWithoutRoomInput | ChatCommentUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatCommentUpdateManyWithWhereWithoutRoomInput | ChatCommentUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatCommentScalarWhereInput | ChatCommentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatRoomsNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput> | UserCreateWithoutChatRoomsInput[] | UserUncheckedCreateWithoutChatRoomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput | UserCreateOrConnectWithoutChatRoomsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatRoomsInput | UserUpsertWithWhereUniqueWithoutChatRoomsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatRoomsInput | UserUpdateWithWhereUniqueWithoutChatRoomsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatRoomsInput | UserUpdateManyWithWhereWithoutChatRoomsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ChatCommentUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatCommentCreateWithoutRoomInput, ChatCommentUncheckedCreateWithoutRoomInput> | ChatCommentCreateWithoutRoomInput[] | ChatCommentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutRoomInput | ChatCommentCreateOrConnectWithoutRoomInput[]
    upsert?: ChatCommentUpsertWithWhereUniqueWithoutRoomInput | ChatCommentUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatCommentCreateManyRoomInputEnvelope
    set?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    disconnect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    delete?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    update?: ChatCommentUpdateWithWhereUniqueWithoutRoomInput | ChatCommentUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatCommentUpdateManyWithWhereWithoutRoomInput | ChatCommentUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatCommentScalarWhereInput | ChatCommentScalarWhereInput[]
  }

  export type ChatCommentLargTextCreateNestedOneWithoutChatCommentInput = {
    create?: XOR<ChatCommentLargTextCreateWithoutChatCommentInput, ChatCommentLargTextUncheckedCreateWithoutChatCommentInput>
    connectOrCreate?: ChatCommentLargTextCreateOrConnectWithoutChatCommentInput
    connect?: ChatCommentLargTextWhereUniqueInput
  }

  export type ChatRoomCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ChatRoomCreateWithoutCommentsInput, ChatRoomUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCommentsInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatCommetsInput = {
    create?: XOR<UserCreateWithoutChatCommetsInput, UserUncheckedCreateWithoutChatCommetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatCommetsInput
    connect?: UserWhereUniqueInput
  }

  export type MetaDataCreateNestedOneWithoutCommentsInput = {
    create?: XOR<MetaDataCreateWithoutCommentsInput, MetaDataUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MetaDataCreateOrConnectWithoutCommentsInput
    connect?: MetaDataWhereUniqueInput
  }

  export type ChatCommentLargTextUncheckedCreateNestedOneWithoutChatCommentInput = {
    create?: XOR<ChatCommentLargTextCreateWithoutChatCommentInput, ChatCommentLargTextUncheckedCreateWithoutChatCommentInput>
    connectOrCreate?: ChatCommentLargTextCreateOrConnectWithoutChatCommentInput
    connect?: ChatCommentLargTextWhereUniqueInput
  }

  export type ChatCommentLargTextUpdateOneWithoutChatCommentNestedInput = {
    create?: XOR<ChatCommentLargTextCreateWithoutChatCommentInput, ChatCommentLargTextUncheckedCreateWithoutChatCommentInput>
    connectOrCreate?: ChatCommentLargTextCreateOrConnectWithoutChatCommentInput
    upsert?: ChatCommentLargTextUpsertWithoutChatCommentInput
    disconnect?: ChatCommentLargTextWhereInput | boolean
    delete?: ChatCommentLargTextWhereInput | boolean
    connect?: ChatCommentLargTextWhereUniqueInput
    update?: XOR<XOR<ChatCommentLargTextUpdateToOneWithWhereWithoutChatCommentInput, ChatCommentLargTextUpdateWithoutChatCommentInput>, ChatCommentLargTextUncheckedUpdateWithoutChatCommentInput>
  }

  export type ChatRoomUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCommentsInput, ChatRoomUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCommentsInput
    upsert?: ChatRoomUpsertWithoutCommentsInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutCommentsInput, ChatRoomUpdateWithoutCommentsInput>, ChatRoomUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutChatCommetsNestedInput = {
    create?: XOR<UserCreateWithoutChatCommetsInput, UserUncheckedCreateWithoutChatCommetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatCommetsInput
    upsert?: UserUpsertWithoutChatCommetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatCommetsInput, UserUpdateWithoutChatCommetsInput>, UserUncheckedUpdateWithoutChatCommetsInput>
  }

  export type MetaDataUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<MetaDataCreateWithoutCommentsInput, MetaDataUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MetaDataCreateOrConnectWithoutCommentsInput
    upsert?: MetaDataUpsertWithoutCommentsInput
    disconnect?: MetaDataWhereInput | boolean
    delete?: MetaDataWhereInput | boolean
    connect?: MetaDataWhereUniqueInput
    update?: XOR<XOR<MetaDataUpdateToOneWithWhereWithoutCommentsInput, MetaDataUpdateWithoutCommentsInput>, MetaDataUncheckedUpdateWithoutCommentsInput>
  }

  export type ChatCommentLargTextUncheckedUpdateOneWithoutChatCommentNestedInput = {
    create?: XOR<ChatCommentLargTextCreateWithoutChatCommentInput, ChatCommentLargTextUncheckedCreateWithoutChatCommentInput>
    connectOrCreate?: ChatCommentLargTextCreateOrConnectWithoutChatCommentInput
    upsert?: ChatCommentLargTextUpsertWithoutChatCommentInput
    disconnect?: ChatCommentLargTextWhereInput | boolean
    delete?: ChatCommentLargTextWhereInput | boolean
    connect?: ChatCommentLargTextWhereUniqueInput
    update?: XOR<XOR<ChatCommentLargTextUpdateToOneWithWhereWithoutChatCommentInput, ChatCommentLargTextUpdateWithoutChatCommentInput>, ChatCommentLargTextUncheckedUpdateWithoutChatCommentInput>
  }

  export type ChatCommentCreateNestedOneWithoutLargeCommentInput = {
    create?: XOR<ChatCommentCreateWithoutLargeCommentInput, ChatCommentUncheckedCreateWithoutLargeCommentInput>
    connectOrCreate?: ChatCommentCreateOrConnectWithoutLargeCommentInput
    connect?: ChatCommentWhereUniqueInput
  }

  export type ChatCommentUpdateOneRequiredWithoutLargeCommentNestedInput = {
    create?: XOR<ChatCommentCreateWithoutLargeCommentInput, ChatCommentUncheckedCreateWithoutLargeCommentInput>
    connectOrCreate?: ChatCommentCreateOrConnectWithoutLargeCommentInput
    upsert?: ChatCommentUpsertWithoutLargeCommentInput
    connect?: ChatCommentWhereUniqueInput
    update?: XOR<XOR<ChatCommentUpdateToOneWithWhereWithoutLargeCommentInput, ChatCommentUpdateWithoutLargeCommentInput>, ChatCommentUncheckedUpdateWithoutLargeCommentInput>
  }

  export type PostCreateNestedManyWithoutMetaInput = {
    create?: XOR<PostCreateWithoutMetaInput, PostUncheckedCreateWithoutMetaInput> | PostCreateWithoutMetaInput[] | PostUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutMetaInput | PostCreateOrConnectWithoutMetaInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ChatCommentCreateNestedManyWithoutMetaInput = {
    create?: XOR<ChatCommentCreateWithoutMetaInput, ChatCommentUncheckedCreateWithoutMetaInput> | ChatCommentCreateWithoutMetaInput[] | ChatCommentUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutMetaInput | ChatCommentCreateOrConnectWithoutMetaInput[]
    createMany?: ChatCommentCreateManyMetaInputEnvelope
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<PostCreateWithoutMetaInput, PostUncheckedCreateWithoutMetaInput> | PostCreateWithoutMetaInput[] | PostUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutMetaInput | PostCreateOrConnectWithoutMetaInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ChatCommentUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<ChatCommentCreateWithoutMetaInput, ChatCommentUncheckedCreateWithoutMetaInput> | ChatCommentCreateWithoutMetaInput[] | ChatCommentUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutMetaInput | ChatCommentCreateOrConnectWithoutMetaInput[]
    createMany?: ChatCommentCreateManyMetaInputEnvelope
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostUpdateManyWithoutMetaNestedInput = {
    create?: XOR<PostCreateWithoutMetaInput, PostUncheckedCreateWithoutMetaInput> | PostCreateWithoutMetaInput[] | PostUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutMetaInput | PostCreateOrConnectWithoutMetaInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutMetaInput | PostUpsertWithWhereUniqueWithoutMetaInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutMetaInput | PostUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: PostUpdateManyWithWhereWithoutMetaInput | PostUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ChatCommentUpdateManyWithoutMetaNestedInput = {
    create?: XOR<ChatCommentCreateWithoutMetaInput, ChatCommentUncheckedCreateWithoutMetaInput> | ChatCommentCreateWithoutMetaInput[] | ChatCommentUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutMetaInput | ChatCommentCreateOrConnectWithoutMetaInput[]
    upsert?: ChatCommentUpsertWithWhereUniqueWithoutMetaInput | ChatCommentUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: ChatCommentCreateManyMetaInputEnvelope
    set?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    disconnect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    delete?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    update?: ChatCommentUpdateWithWhereUniqueWithoutMetaInput | ChatCommentUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: ChatCommentUpdateManyWithWhereWithoutMetaInput | ChatCommentUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: ChatCommentScalarWhereInput | ChatCommentScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<PostCreateWithoutMetaInput, PostUncheckedCreateWithoutMetaInput> | PostCreateWithoutMetaInput[] | PostUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: PostCreateOrConnectWithoutMetaInput | PostCreateOrConnectWithoutMetaInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutMetaInput | PostUpsertWithWhereUniqueWithoutMetaInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutMetaInput | PostUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: PostUpdateManyWithWhereWithoutMetaInput | PostUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ChatCommentUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<ChatCommentCreateWithoutMetaInput, ChatCommentUncheckedCreateWithoutMetaInput> | ChatCommentCreateWithoutMetaInput[] | ChatCommentUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ChatCommentCreateOrConnectWithoutMetaInput | ChatCommentCreateOrConnectWithoutMetaInput[]
    upsert?: ChatCommentUpsertWithWhereUniqueWithoutMetaInput | ChatCommentUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: ChatCommentCreateManyMetaInputEnvelope
    set?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    disconnect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    delete?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    connect?: ChatCommentWhereUniqueInput | ChatCommentWhereUniqueInput[]
    update?: ChatCommentUpdateWithWhereUniqueWithoutMetaInput | ChatCommentUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: ChatCommentUpdateManyWithWhereWithoutMetaInput | ChatCommentUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: ChatCommentScalarWhereInput | ChatCommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccessInput = {
    create?: XOR<UserCreateWithoutAccessInput, UserUncheckedCreateWithoutAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccessNestedInput = {
    create?: XOR<UserCreateWithoutAccessInput, UserUncheckedCreateWithoutAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessInput
    upsert?: UserUpsertWithoutAccessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessInput, UserUpdateWithoutAccessInput>, UserUncheckedUpdateWithoutAccessInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCommunityCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunityCategory | EnumCommunityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CommunityCategory[] | ListEnumCommunityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunityCategory[] | ListEnumCommunityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunityCategoryFilter<$PrismaModel> | $Enums.CommunityCategory
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCommunityCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommunityCategory | EnumCommunityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CommunityCategory[] | ListEnumCommunityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommunityCategory[] | ListEnumCommunityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCommunityCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CommunityCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommunityCategoryFilter<$PrismaModel>
    _max?: NestedEnumCommunityCategoryFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PositionCreateWithoutUsersInput = {
    name: string
    power: number
  }

  export type PositionUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    power: number
  }

  export type PositionCreateOrConnectWithoutUsersInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
  }

  export type GroupCreateWithoutUsersInput = {
    order: number
    slug: string
    name: string
    parent?: GroupCreateNestedOneWithoutChildrenInput
    children?: GroupCreateNestedManyWithoutParentInput
    community: CommunityCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: number
    order: number
    slug: string
    name: string
    parentId?: number | null
    communityId: number
    children?: GroupUncheckedCreateNestedManyWithoutParentInput
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type PostCreateWithoutUserInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentCnt: number
    largeText?: PostLargTextCreateNestedOneWithoutPostInput
    community: CommunityCreateNestedOneWithoutPostsInput
    meta?: MetaDataCreateNestedManyWithoutPostsInput
    comments?: PostCommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
    commentCnt: number
    largeText?: PostLargTextUncheckedCreateNestedOneWithoutPostInput
    meta?: MetaDataUncheckedCreateNestedManyWithoutPostsInput
    comments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCommentCreateWithoutUserInput = {
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    largeComment?: PostCommentLargTextCreateNestedOneWithoutPostCommentInput
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type PostCommentUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
    largeComment?: PostCommentLargTextUncheckedCreateNestedOneWithoutPostCommentInput
  }

  export type PostCommentCreateOrConnectWithoutUserInput = {
    where: PostCommentWhereUniqueInput
    create: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput>
  }

  export type PostCommentCreateManyUserInputEnvelope = {
    data: PostCommentCreateManyUserInput | PostCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutUsersInput = {
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    group?: GroupCreateNestedOneWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    manager?: UserCreateNestedOneWithoutManagedCommunitiesInput
  }

  export type CommunityUncheckedCreateWithoutUsersInput = {
    id?: number
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    managerId?: number | null
    group?: GroupUncheckedCreateNestedOneWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutUsersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput>
  }

  export type CommunityCreateWithoutManagerInput = {
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    group?: GroupCreateNestedOneWithoutCommunityInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    users?: UserCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUncheckedCreateWithoutManagerInput = {
    id?: number
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    group?: GroupUncheckedCreateNestedOneWithoutCommunityInput
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    users?: UserUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityCreateOrConnectWithoutManagerInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput>
  }

  export type CommunityCreateManyManagerInputEnvelope = {
    data: CommunityCreateManyManagerInput | CommunityCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutUserInput = {
    createdAt?: Date | string
    comments?: ChatCommentCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    comments?: ChatCommentUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput>
  }

  export type ChatCommentCreateWithoutUserInput = {
    comment: string
    createdAt?: Date | string
    largeComment?: ChatCommentLargTextCreateNestedOneWithoutChatCommentInput
    room: ChatRoomCreateNestedOneWithoutCommentsInput
    meta?: MetaDataCreateNestedOneWithoutCommentsInput
  }

  export type ChatCommentUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    roomId: number
    metaId?: number | null
    largeComment?: ChatCommentLargTextUncheckedCreateNestedOneWithoutChatCommentInput
  }

  export type ChatCommentCreateOrConnectWithoutUserInput = {
    where: ChatCommentWhereUniqueInput
    create: XOR<ChatCommentCreateWithoutUserInput, ChatCommentUncheckedCreateWithoutUserInput>
  }

  export type ChatCommentCreateManyUserInputEnvelope = {
    data: ChatCommentCreateManyUserInput | ChatCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LogAccessCreateWithoutUserInput = {
    uuid: string
    ip: string
    agent: string
    updatedAt?: Date | string
  }

  export type LogAccessUncheckedCreateWithoutUserInput = {
    id?: number
    uuid: string
    ip: string
    agent: string
    updatedAt?: Date | string
  }

  export type LogAccessCreateOrConnectWithoutUserInput = {
    where: LogAccessWhereUniqueInput
    create: XOR<LogAccessCreateWithoutUserInput, LogAccessUncheckedCreateWithoutUserInput>
  }

  export type LogAccessCreateManyUserInputEnvelope = {
    data: LogAccessCreateManyUserInput | LogAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PositionUpsertWithoutUsersInput = {
    update: XOR<PositionUpdateWithoutUsersInput, PositionUncheckedUpdateWithoutUsersInput>
    create: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutUsersInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutUsersInput, PositionUncheckedUpdateWithoutUsersInput>
  }

  export type PositionUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type PositionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    power?: IntFieldUpdateOperationsInput | number
  }

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateWithoutUsersInput = {
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent?: GroupUpdateOneWithoutChildrenNestedInput
    children?: GroupUpdateManyWithoutParentNestedInput
    community?: CommunityUpdateOneRequiredWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: IntFieldUpdateOperationsInput | number
    children?: GroupUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    text?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    communityId?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    commentCnt?: IntFilter<"Post"> | number
  }

  export type PostCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: PostCommentWhereUniqueInput
    update: XOR<PostCommentUpdateWithoutUserInput, PostCommentUncheckedUpdateWithoutUserInput>
    create: XOR<PostCommentCreateWithoutUserInput, PostCommentUncheckedCreateWithoutUserInput>
  }

  export type PostCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: PostCommentWhereUniqueInput
    data: XOR<PostCommentUpdateWithoutUserInput, PostCommentUncheckedUpdateWithoutUserInput>
  }

  export type PostCommentUpdateManyWithWhereWithoutUserInput = {
    where: PostCommentScalarWhereInput
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type PostCommentScalarWhereInput = {
    AND?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
    OR?: PostCommentScalarWhereInput[]
    NOT?: PostCommentScalarWhereInput | PostCommentScalarWhereInput[]
    id?: IntFilter<"PostComment"> | number
    comment?: StringFilter<"PostComment"> | string
    createdAt?: DateTimeFilter<"PostComment"> | Date | string
    updatedAt?: DateTimeFilter<"PostComment"> | Date | string
    postId?: IntFilter<"PostComment"> | number
    userId?: IntFilter<"PostComment"> | number
  }

  export type CommunityUpsertWithWhereUniqueWithoutUsersInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutUsersInput, CommunityUncheckedUpdateWithoutUsersInput>
    create: XOR<CommunityCreateWithoutUsersInput, CommunityUncheckedCreateWithoutUsersInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutUsersInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutUsersInput, CommunityUncheckedUpdateWithoutUsersInput>
  }

  export type CommunityUpdateManyWithWhereWithoutUsersInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutUsersInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: IntFilter<"Community"> | number
    isPrivate?: BoolFilter<"Community"> | boolean
    isPublicRead?: BoolFilter<"Community"> | boolean
    isPublicWrite?: BoolFilter<"Community"> | boolean
    category?: EnumCommunityCategoryFilter<"Community"> | $Enums.CommunityCategory
    slug?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    latestPostDate?: DateTimeNullableFilter<"Community"> | Date | string | null
    managerId?: IntNullableFilter<"Community"> | number | null
  }

  export type CommunityUpsertWithWhereUniqueWithoutManagerInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutManagerInput, CommunityUncheckedUpdateWithoutManagerInput>
    create: XOR<CommunityCreateWithoutManagerInput, CommunityUncheckedCreateWithoutManagerInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutManagerInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutManagerInput, CommunityUncheckedUpdateWithoutManagerInput>
  }

  export type CommunityUpdateManyWithWhereWithoutManagerInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutManagerInput>
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutUserInput, ChatRoomUncheckedUpdateWithoutUserInput>
    create: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutUserInput, ChatRoomUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutUserInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: IntFilter<"ChatRoom"> | number
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
  }

  export type ChatCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatCommentWhereUniqueInput
    update: XOR<ChatCommentUpdateWithoutUserInput, ChatCommentUncheckedUpdateWithoutUserInput>
    create: XOR<ChatCommentCreateWithoutUserInput, ChatCommentUncheckedCreateWithoutUserInput>
  }

  export type ChatCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatCommentWhereUniqueInput
    data: XOR<ChatCommentUpdateWithoutUserInput, ChatCommentUncheckedUpdateWithoutUserInput>
  }

  export type ChatCommentUpdateManyWithWhereWithoutUserInput = {
    where: ChatCommentScalarWhereInput
    data: XOR<ChatCommentUpdateManyMutationInput, ChatCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatCommentScalarWhereInput = {
    AND?: ChatCommentScalarWhereInput | ChatCommentScalarWhereInput[]
    OR?: ChatCommentScalarWhereInput[]
    NOT?: ChatCommentScalarWhereInput | ChatCommentScalarWhereInput[]
    id?: IntFilter<"ChatComment"> | number
    comment?: StringFilter<"ChatComment"> | string
    createdAt?: DateTimeFilter<"ChatComment"> | Date | string
    roomId?: IntFilter<"ChatComment"> | number
    userId?: IntFilter<"ChatComment"> | number
    metaId?: IntNullableFilter<"ChatComment"> | number | null
  }

  export type LogAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: LogAccessWhereUniqueInput
    update: XOR<LogAccessUpdateWithoutUserInput, LogAccessUncheckedUpdateWithoutUserInput>
    create: XOR<LogAccessCreateWithoutUserInput, LogAccessUncheckedCreateWithoutUserInput>
  }

  export type LogAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: LogAccessWhereUniqueInput
    data: XOR<LogAccessUpdateWithoutUserInput, LogAccessUncheckedUpdateWithoutUserInput>
  }

  export type LogAccessUpdateManyWithWhereWithoutUserInput = {
    where: LogAccessScalarWhereInput
    data: XOR<LogAccessUpdateManyMutationInput, LogAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type LogAccessScalarWhereInput = {
    AND?: LogAccessScalarWhereInput | LogAccessScalarWhereInput[]
    OR?: LogAccessScalarWhereInput[]
    NOT?: LogAccessScalarWhereInput | LogAccessScalarWhereInput[]
    id?: IntFilter<"LogAccess"> | number
    uuid?: StringFilter<"LogAccess"> | string
    ip?: StringFilter<"LogAccess"> | string
    agent?: StringFilter<"LogAccess"> | string
    updatedAt?: DateTimeFilter<"LogAccess"> | Date | string
    userId?: IntFilter<"LogAccess"> | number
  }

  export type UserCreateWithoutPositionInput = {
    name: string
    email: string
    image: string
    group?: GroupCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPositionInput = {
    id?: number
    name: string
    email: string
    image: string
    groupId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPositionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserCreateManyPositionInputEnvelope = {
    data: UserCreateManyPositionInput | UserCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
  }

  export type UserUpdateManyWithWhereWithoutPositionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPositionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    positionId?: IntFilter<"User"> | number
    groupId?: IntNullableFilter<"User"> | number | null
  }

  export type GroupCreateWithoutChildrenInput = {
    order: number
    slug: string
    name: string
    parent?: GroupCreateNestedOneWithoutChildrenInput
    users?: UserCreateNestedManyWithoutGroupInput
    community: CommunityCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutChildrenInput = {
    id?: number
    order: number
    slug: string
    name: string
    parentId?: number | null
    communityId: number
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutChildrenInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutChildrenInput, GroupUncheckedCreateWithoutChildrenInput>
  }

  export type GroupCreateWithoutParentInput = {
    order: number
    slug: string
    name: string
    children?: GroupCreateNestedManyWithoutParentInput
    users?: UserCreateNestedManyWithoutGroupInput
    community: CommunityCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutParentInput = {
    id?: number
    order: number
    slug: string
    name: string
    communityId: number
    children?: GroupUncheckedCreateNestedManyWithoutParentInput
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutParentInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutParentInput, GroupUncheckedCreateWithoutParentInput>
  }

  export type GroupCreateManyParentInputEnvelope = {
    data: GroupCreateManyParentInput | GroupCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutGroupInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserCreateManyGroupInputEnvelope = {
    data: UserCreateManyGroupInput | UserCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutGroupInput = {
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    posts?: PostCreateNestedManyWithoutCommunityInput
    manager?: UserCreateNestedOneWithoutManagedCommunitiesInput
    users?: UserCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUncheckedCreateWithoutGroupInput = {
    id?: number
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    managerId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    users?: UserUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityCreateOrConnectWithoutGroupInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutGroupInput, CommunityUncheckedCreateWithoutGroupInput>
  }

  export type GroupUpsertWithoutChildrenInput = {
    update: XOR<GroupUpdateWithoutChildrenInput, GroupUncheckedUpdateWithoutChildrenInput>
    create: XOR<GroupCreateWithoutChildrenInput, GroupUncheckedCreateWithoutChildrenInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutChildrenInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutChildrenInput, GroupUncheckedUpdateWithoutChildrenInput>
  }

  export type GroupUpdateWithoutChildrenInput = {
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent?: GroupUpdateOneWithoutChildrenNestedInput
    users?: UserUpdateManyWithoutGroupNestedInput
    community?: CommunityUpdateOneRequiredWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    communityId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUpsertWithWhereUniqueWithoutParentInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutParentInput, GroupUncheckedUpdateWithoutParentInput>
    create: XOR<GroupCreateWithoutParentInput, GroupUncheckedCreateWithoutParentInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutParentInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutParentInput, GroupUncheckedUpdateWithoutParentInput>
  }

  export type GroupUpdateManyWithWhereWithoutParentInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutParentInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: IntFilter<"Group"> | number
    order?: IntFilter<"Group"> | number
    slug?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    parentId?: IntNullableFilter<"Group"> | number | null
    communityId?: IntFilter<"Group"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupInput>
  }

  export type CommunityUpsertWithoutGroupInput = {
    update: XOR<CommunityUpdateWithoutGroupInput, CommunityUncheckedUpdateWithoutGroupInput>
    create: XOR<CommunityCreateWithoutGroupInput, CommunityUncheckedCreateWithoutGroupInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutGroupInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutGroupInput, CommunityUncheckedUpdateWithoutGroupInput>
  }

  export type CommunityUpdateWithoutGroupInput = {
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: PostUpdateManyWithoutCommunityNestedInput
    manager?: UserUpdateOneWithoutManagedCommunitiesNestedInput
    users?: UserUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    users?: UserUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type GroupCreateWithoutCommunityInput = {
    order: number
    slug: string
    name: string
    parent?: GroupCreateNestedOneWithoutChildrenInput
    children?: GroupCreateNestedManyWithoutParentInput
    users?: UserCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutCommunityInput = {
    id?: number
    order: number
    slug: string
    name: string
    parentId?: number | null
    children?: GroupUncheckedCreateNestedManyWithoutParentInput
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutCommunityInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCommunityInput, GroupUncheckedCreateWithoutCommunityInput>
  }

  export type PostCreateWithoutCommunityInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentCnt: number
    largeText?: PostLargTextCreateNestedOneWithoutPostInput
    user: UserCreateNestedOneWithoutPostsInput
    meta?: MetaDataCreateNestedManyWithoutPostsInput
    comments?: PostCommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommunityInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    commentCnt: number
    largeText?: PostLargTextUncheckedCreateNestedOneWithoutPostInput
    meta?: MetaDataUncheckedCreateNestedManyWithoutPostsInput
    comments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommunityInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostCreateManyCommunityInputEnvelope = {
    data: PostCreateManyCommunityInput | PostCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutManagedCommunitiesInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagedCommunitiesInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagedCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedCommunitiesInput, UserUncheckedCreateWithoutManagedCommunitiesInput>
  }

  export type UserCreateWithoutCommunitiesInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunitiesInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type GroupUpsertWithoutCommunityInput = {
    update: XOR<GroupUpdateWithoutCommunityInput, GroupUncheckedUpdateWithoutCommunityInput>
    create: XOR<GroupCreateWithoutCommunityInput, GroupUncheckedCreateWithoutCommunityInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutCommunityInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutCommunityInput, GroupUncheckedUpdateWithoutCommunityInput>
  }

  export type GroupUpdateWithoutCommunityInput = {
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent?: GroupUpdateOneWithoutChildrenNestedInput
    children?: GroupUpdateManyWithoutParentNestedInput
    users?: UserUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: GroupUncheckedUpdateManyWithoutParentNestedInput
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
  }

  export type PostUpdateManyWithWhereWithoutCommunityInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCommunityInput>
  }

  export type UserUpsertWithoutManagedCommunitiesInput = {
    update: XOR<UserUpdateWithoutManagedCommunitiesInput, UserUncheckedUpdateWithoutManagedCommunitiesInput>
    create: XOR<UserCreateWithoutManagedCommunitiesInput, UserUncheckedCreateWithoutManagedCommunitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedCommunitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedCommunitiesInput, UserUncheckedUpdateWithoutManagedCommunitiesInput>
  }

  export type UserUpdateWithoutManagedCommunitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type UserUpdateManyWithWhereWithoutCommunitiesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCommunitiesInput>
  }

  export type PostLargTextCreateWithoutPostInput = {
    text: string
  }

  export type PostLargTextUncheckedCreateWithoutPostInput = {
    id?: number
    text: string
  }

  export type PostLargTextCreateOrConnectWithoutPostInput = {
    where: PostLargTextWhereUniqueInput
    create: XOR<PostLargTextCreateWithoutPostInput, PostLargTextUncheckedCreateWithoutPostInput>
  }

  export type CommunityCreateWithoutPostsInput = {
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    group?: GroupCreateNestedOneWithoutCommunityInput
    manager?: UserCreateNestedOneWithoutManagedCommunitiesInput
    users?: UserCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUncheckedCreateWithoutPostsInput = {
    id?: number
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
    managerId?: number | null
    group?: GroupUncheckedCreateNestedOneWithoutCommunityInput
    users?: UserUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityCreateOrConnectWithoutPostsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutPostsInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type MetaDataCreateWithoutPostsInput = {
    url: string
    type: string
    title: string
    description: string
    image?: string | null
    imageAlt?: string | null
    video?: string | null
    comments?: ChatCommentCreateNestedManyWithoutMetaInput
  }

  export type MetaDataUncheckedCreateWithoutPostsInput = {
    id?: number
    url: string
    type: string
    title: string
    description: string
    image?: string | null
    imageAlt?: string | null
    video?: string | null
    comments?: ChatCommentUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaDataCreateOrConnectWithoutPostsInput = {
    where: MetaDataWhereUniqueInput
    create: XOR<MetaDataCreateWithoutPostsInput, MetaDataUncheckedCreateWithoutPostsInput>
  }

  export type PostCommentCreateWithoutPostInput = {
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    largeComment?: PostCommentLargTextCreateNestedOneWithoutPostCommentInput
    user: UserCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentUncheckedCreateWithoutPostInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    largeComment?: PostCommentLargTextUncheckedCreateNestedOneWithoutPostCommentInput
  }

  export type PostCommentCreateOrConnectWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    create: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput>
  }

  export type PostCommentCreateManyPostInputEnvelope = {
    data: PostCommentCreateManyPostInput | PostCommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostLargTextUpsertWithoutPostInput = {
    update: XOR<PostLargTextUpdateWithoutPostInput, PostLargTextUncheckedUpdateWithoutPostInput>
    create: XOR<PostLargTextCreateWithoutPostInput, PostLargTextUncheckedCreateWithoutPostInput>
    where?: PostLargTextWhereInput
  }

  export type PostLargTextUpdateToOneWithWhereWithoutPostInput = {
    where?: PostLargTextWhereInput
    data: XOR<PostLargTextUpdateWithoutPostInput, PostLargTextUncheckedUpdateWithoutPostInput>
  }

  export type PostLargTextUpdateWithoutPostInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PostLargTextUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityUpsertWithoutPostsInput = {
    update: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutPostsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type CommunityUpdateWithoutPostsInput = {
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneWithoutCommunityNestedInput
    manager?: UserUpdateOneWithoutManagedCommunitiesNestedInput
    users?: UserUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUncheckedUpdateOneWithoutCommunityNestedInput
    users?: UserUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MetaDataUpsertWithWhereUniqueWithoutPostsInput = {
    where: MetaDataWhereUniqueInput
    update: XOR<MetaDataUpdateWithoutPostsInput, MetaDataUncheckedUpdateWithoutPostsInput>
    create: XOR<MetaDataCreateWithoutPostsInput, MetaDataUncheckedCreateWithoutPostsInput>
  }

  export type MetaDataUpdateWithWhereUniqueWithoutPostsInput = {
    where: MetaDataWhereUniqueInput
    data: XOR<MetaDataUpdateWithoutPostsInput, MetaDataUncheckedUpdateWithoutPostsInput>
  }

  export type MetaDataUpdateManyWithWhereWithoutPostsInput = {
    where: MetaDataScalarWhereInput
    data: XOR<MetaDataUpdateManyMutationInput, MetaDataUncheckedUpdateManyWithoutPostsInput>
  }

  export type MetaDataScalarWhereInput = {
    AND?: MetaDataScalarWhereInput | MetaDataScalarWhereInput[]
    OR?: MetaDataScalarWhereInput[]
    NOT?: MetaDataScalarWhereInput | MetaDataScalarWhereInput[]
    id?: IntFilter<"MetaData"> | number
    url?: StringFilter<"MetaData"> | string
    type?: StringFilter<"MetaData"> | string
    title?: StringFilter<"MetaData"> | string
    description?: StringFilter<"MetaData"> | string
    image?: StringNullableFilter<"MetaData"> | string | null
    imageAlt?: StringNullableFilter<"MetaData"> | string | null
    video?: StringNullableFilter<"MetaData"> | string | null
  }

  export type PostCommentUpsertWithWhereUniqueWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    update: XOR<PostCommentUpdateWithoutPostInput, PostCommentUncheckedUpdateWithoutPostInput>
    create: XOR<PostCommentCreateWithoutPostInput, PostCommentUncheckedCreateWithoutPostInput>
  }

  export type PostCommentUpdateWithWhereUniqueWithoutPostInput = {
    where: PostCommentWhereUniqueInput
    data: XOR<PostCommentUpdateWithoutPostInput, PostCommentUncheckedUpdateWithoutPostInput>
  }

  export type PostCommentUpdateManyWithWhereWithoutPostInput = {
    where: PostCommentScalarWhereInput
    data: XOR<PostCommentUpdateManyMutationInput, PostCommentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutLargeTextInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentCnt: number
    community: CommunityCreateNestedOneWithoutPostsInput
    user: UserCreateNestedOneWithoutPostsInput
    meta?: MetaDataCreateNestedManyWithoutPostsInput
    comments?: PostCommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLargeTextInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
    userId: number
    commentCnt: number
    meta?: MetaDataUncheckedCreateNestedManyWithoutPostsInput
    comments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLargeTextInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLargeTextInput, PostUncheckedCreateWithoutLargeTextInput>
  }

  export type PostUpsertWithoutLargeTextInput = {
    update: XOR<PostUpdateWithoutLargeTextInput, PostUncheckedUpdateWithoutLargeTextInput>
    create: XOR<PostCreateWithoutLargeTextInput, PostUncheckedCreateWithoutLargeTextInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLargeTextInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLargeTextInput, PostUncheckedUpdateWithoutLargeTextInput>
  }

  export type PostUpdateWithoutLargeTextInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentCnt?: IntFieldUpdateOperationsInput | number
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    meta?: MetaDataUpdateManyWithoutPostsNestedInput
    comments?: PostCommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutLargeTextInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
    meta?: MetaDataUncheckedUpdateManyWithoutPostsNestedInput
    comments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCommentLargTextCreateWithoutPostCommentInput = {
    text: string
  }

  export type PostCommentLargTextUncheckedCreateWithoutPostCommentInput = {
    id?: number
    text: string
  }

  export type PostCommentLargTextCreateOrConnectWithoutPostCommentInput = {
    where: PostCommentLargTextWhereUniqueInput
    create: XOR<PostCommentLargTextCreateWithoutPostCommentInput, PostCommentLargTextUncheckedCreateWithoutPostCommentInput>
  }

  export type PostCreateWithoutCommentsInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentCnt: number
    largeText?: PostLargTextCreateNestedOneWithoutPostInput
    community: CommunityCreateNestedOneWithoutPostsInput
    user: UserCreateNestedOneWithoutPostsInput
    meta?: MetaDataCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
    userId: number
    commentCnt: number
    largeText?: PostLargTextUncheckedCreateNestedOneWithoutPostInput
    meta?: MetaDataUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutPostCommentsInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostCommentsInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
  }

  export type PostCommentLargTextUpsertWithoutPostCommentInput = {
    update: XOR<PostCommentLargTextUpdateWithoutPostCommentInput, PostCommentLargTextUncheckedUpdateWithoutPostCommentInput>
    create: XOR<PostCommentLargTextCreateWithoutPostCommentInput, PostCommentLargTextUncheckedCreateWithoutPostCommentInput>
    where?: PostCommentLargTextWhereInput
  }

  export type PostCommentLargTextUpdateToOneWithWhereWithoutPostCommentInput = {
    where?: PostCommentLargTextWhereInput
    data: XOR<PostCommentLargTextUpdateWithoutPostCommentInput, PostCommentLargTextUncheckedUpdateWithoutPostCommentInput>
  }

  export type PostCommentLargTextUpdateWithoutPostCommentInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PostCommentLargTextUncheckedUpdateWithoutPostCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUpdateOneWithoutPostNestedInput
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    meta?: MetaDataUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUncheckedUpdateOneWithoutPostNestedInput
    meta?: MetaDataUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type UserUpsertWithoutPostCommentsInput = {
    update: XOR<UserUpdateWithoutPostCommentsInput, UserUncheckedUpdateWithoutPostCommentsInput>
    create: XOR<UserCreateWithoutPostCommentsInput, UserUncheckedCreateWithoutPostCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostCommentsInput, UserUncheckedUpdateWithoutPostCommentsInput>
  }

  export type UserUpdateWithoutPostCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCommentCreateWithoutLargeCommentInput = {
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutPostCommentsInput
  }

  export type PostCommentUncheckedCreateWithoutLargeCommentInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
    userId: number
  }

  export type PostCommentCreateOrConnectWithoutLargeCommentInput = {
    where: PostCommentWhereUniqueInput
    create: XOR<PostCommentCreateWithoutLargeCommentInput, PostCommentUncheckedCreateWithoutLargeCommentInput>
  }

  export type PostCommentUpsertWithoutLargeCommentInput = {
    update: XOR<PostCommentUpdateWithoutLargeCommentInput, PostCommentUncheckedUpdateWithoutLargeCommentInput>
    create: XOR<PostCommentCreateWithoutLargeCommentInput, PostCommentUncheckedCreateWithoutLargeCommentInput>
    where?: PostCommentWhereInput
  }

  export type PostCommentUpdateToOneWithWhereWithoutLargeCommentInput = {
    where?: PostCommentWhereInput
    data: XOR<PostCommentUpdateWithoutLargeCommentInput, PostCommentUncheckedUpdateWithoutLargeCommentInput>
  }

  export type PostCommentUpdateWithoutLargeCommentInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentUncheckedUpdateWithoutLargeCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutChatRoomsInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomsInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
  }

  export type ChatCommentCreateWithoutRoomInput = {
    comment: string
    createdAt?: Date | string
    largeComment?: ChatCommentLargTextCreateNestedOneWithoutChatCommentInput
    user: UserCreateNestedOneWithoutChatCommetsInput
    meta?: MetaDataCreateNestedOneWithoutCommentsInput
  }

  export type ChatCommentUncheckedCreateWithoutRoomInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    userId: number
    metaId?: number | null
    largeComment?: ChatCommentLargTextUncheckedCreateNestedOneWithoutChatCommentInput
  }

  export type ChatCommentCreateOrConnectWithoutRoomInput = {
    where: ChatCommentWhereUniqueInput
    create: XOR<ChatCommentCreateWithoutRoomInput, ChatCommentUncheckedCreateWithoutRoomInput>
  }

  export type ChatCommentCreateManyRoomInputEnvelope = {
    data: ChatCommentCreateManyRoomInput | ChatCommentCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutChatRoomsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatRoomsInput, UserUncheckedUpdateWithoutChatRoomsInput>
    create: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatRoomsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatRoomsInput, UserUncheckedUpdateWithoutChatRoomsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatRoomsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatRoomsInput>
  }

  export type ChatCommentUpsertWithWhereUniqueWithoutRoomInput = {
    where: ChatCommentWhereUniqueInput
    update: XOR<ChatCommentUpdateWithoutRoomInput, ChatCommentUncheckedUpdateWithoutRoomInput>
    create: XOR<ChatCommentCreateWithoutRoomInput, ChatCommentUncheckedCreateWithoutRoomInput>
  }

  export type ChatCommentUpdateWithWhereUniqueWithoutRoomInput = {
    where: ChatCommentWhereUniqueInput
    data: XOR<ChatCommentUpdateWithoutRoomInput, ChatCommentUncheckedUpdateWithoutRoomInput>
  }

  export type ChatCommentUpdateManyWithWhereWithoutRoomInput = {
    where: ChatCommentScalarWhereInput
    data: XOR<ChatCommentUpdateManyMutationInput, ChatCommentUncheckedUpdateManyWithoutRoomInput>
  }

  export type ChatCommentLargTextCreateWithoutChatCommentInput = {
    text: string
  }

  export type ChatCommentLargTextUncheckedCreateWithoutChatCommentInput = {
    id?: number
    text: string
  }

  export type ChatCommentLargTextCreateOrConnectWithoutChatCommentInput = {
    where: ChatCommentLargTextWhereUniqueInput
    create: XOR<ChatCommentLargTextCreateWithoutChatCommentInput, ChatCommentLargTextUncheckedCreateWithoutChatCommentInput>
  }

  export type ChatRoomCreateWithoutCommentsInput = {
    createdAt?: Date | string
    user?: UserCreateNestedManyWithoutChatRoomsInput
  }

  export type ChatRoomUncheckedCreateWithoutCommentsInput = {
    id?: number
    createdAt?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutChatRoomsInput
  }

  export type ChatRoomCreateOrConnectWithoutCommentsInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutCommentsInput, ChatRoomUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutChatCommetsInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    access?: LogAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatCommetsInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    access?: LogAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatCommetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatCommetsInput, UserUncheckedCreateWithoutChatCommetsInput>
  }

  export type MetaDataCreateWithoutCommentsInput = {
    url: string
    type: string
    title: string
    description: string
    image?: string | null
    imageAlt?: string | null
    video?: string | null
    posts?: PostCreateNestedManyWithoutMetaInput
  }

  export type MetaDataUncheckedCreateWithoutCommentsInput = {
    id?: number
    url: string
    type: string
    title: string
    description: string
    image?: string | null
    imageAlt?: string | null
    video?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaDataCreateOrConnectWithoutCommentsInput = {
    where: MetaDataWhereUniqueInput
    create: XOR<MetaDataCreateWithoutCommentsInput, MetaDataUncheckedCreateWithoutCommentsInput>
  }

  export type ChatCommentLargTextUpsertWithoutChatCommentInput = {
    update: XOR<ChatCommentLargTextUpdateWithoutChatCommentInput, ChatCommentLargTextUncheckedUpdateWithoutChatCommentInput>
    create: XOR<ChatCommentLargTextCreateWithoutChatCommentInput, ChatCommentLargTextUncheckedCreateWithoutChatCommentInput>
    where?: ChatCommentLargTextWhereInput
  }

  export type ChatCommentLargTextUpdateToOneWithWhereWithoutChatCommentInput = {
    where?: ChatCommentLargTextWhereInput
    data: XOR<ChatCommentLargTextUpdateWithoutChatCommentInput, ChatCommentLargTextUncheckedUpdateWithoutChatCommentInput>
  }

  export type ChatCommentLargTextUpdateWithoutChatCommentInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCommentLargTextUncheckedUpdateWithoutChatCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRoomUpsertWithoutCommentsInput = {
    update: XOR<ChatRoomUpdateWithoutCommentsInput, ChatRoomUncheckedUpdateWithoutCommentsInput>
    create: XOR<ChatRoomCreateWithoutCommentsInput, ChatRoomUncheckedCreateWithoutCommentsInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutCommentsInput, ChatRoomUncheckedUpdateWithoutCommentsInput>
  }

  export type ChatRoomUpdateWithoutCommentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutChatRoomsNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutChatRoomsNestedInput
  }

  export type UserUpsertWithoutChatCommetsInput = {
    update: XOR<UserUpdateWithoutChatCommetsInput, UserUncheckedUpdateWithoutChatCommetsInput>
    create: XOR<UserCreateWithoutChatCommetsInput, UserUncheckedCreateWithoutChatCommetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatCommetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatCommetsInput, UserUncheckedUpdateWithoutChatCommetsInput>
  }

  export type UserUpdateWithoutChatCommetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatCommetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MetaDataUpsertWithoutCommentsInput = {
    update: XOR<MetaDataUpdateWithoutCommentsInput, MetaDataUncheckedUpdateWithoutCommentsInput>
    create: XOR<MetaDataCreateWithoutCommentsInput, MetaDataUncheckedCreateWithoutCommentsInput>
    where?: MetaDataWhereInput
  }

  export type MetaDataUpdateToOneWithWhereWithoutCommentsInput = {
    where?: MetaDataWhereInput
    data: XOR<MetaDataUpdateWithoutCommentsInput, MetaDataUncheckedUpdateWithoutCommentsInput>
  }

  export type MetaDataUpdateWithoutCommentsInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutMetaNestedInput
  }

  export type MetaDataUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type ChatCommentCreateWithoutLargeCommentInput = {
    comment: string
    createdAt?: Date | string
    room: ChatRoomCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutChatCommetsInput
    meta?: MetaDataCreateNestedOneWithoutCommentsInput
  }

  export type ChatCommentUncheckedCreateWithoutLargeCommentInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    roomId: number
    userId: number
    metaId?: number | null
  }

  export type ChatCommentCreateOrConnectWithoutLargeCommentInput = {
    where: ChatCommentWhereUniqueInput
    create: XOR<ChatCommentCreateWithoutLargeCommentInput, ChatCommentUncheckedCreateWithoutLargeCommentInput>
  }

  export type ChatCommentUpsertWithoutLargeCommentInput = {
    update: XOR<ChatCommentUpdateWithoutLargeCommentInput, ChatCommentUncheckedUpdateWithoutLargeCommentInput>
    create: XOR<ChatCommentCreateWithoutLargeCommentInput, ChatCommentUncheckedCreateWithoutLargeCommentInput>
    where?: ChatCommentWhereInput
  }

  export type ChatCommentUpdateToOneWithWhereWithoutLargeCommentInput = {
    where?: ChatCommentWhereInput
    data: XOR<ChatCommentUpdateWithoutLargeCommentInput, ChatCommentUncheckedUpdateWithoutLargeCommentInput>
  }

  export type ChatCommentUpdateWithoutLargeCommentInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatRoomUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutChatCommetsNestedInput
    meta?: MetaDataUpdateOneWithoutCommentsNestedInput
  }

  export type ChatCommentUncheckedUpdateWithoutLargeCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateWithoutMetaInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentCnt: number
    largeText?: PostLargTextCreateNestedOneWithoutPostInput
    community: CommunityCreateNestedOneWithoutPostsInput
    user: UserCreateNestedOneWithoutPostsInput
    comments?: PostCommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutMetaInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
    userId: number
    commentCnt: number
    largeText?: PostLargTextUncheckedCreateNestedOneWithoutPostInput
    comments?: PostCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutMetaInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutMetaInput, PostUncheckedCreateWithoutMetaInput>
  }

  export type ChatCommentCreateWithoutMetaInput = {
    comment: string
    createdAt?: Date | string
    largeComment?: ChatCommentLargTextCreateNestedOneWithoutChatCommentInput
    room: ChatRoomCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutChatCommetsInput
  }

  export type ChatCommentUncheckedCreateWithoutMetaInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    roomId: number
    userId: number
    largeComment?: ChatCommentLargTextUncheckedCreateNestedOneWithoutChatCommentInput
  }

  export type ChatCommentCreateOrConnectWithoutMetaInput = {
    where: ChatCommentWhereUniqueInput
    create: XOR<ChatCommentCreateWithoutMetaInput, ChatCommentUncheckedCreateWithoutMetaInput>
  }

  export type ChatCommentCreateManyMetaInputEnvelope = {
    data: ChatCommentCreateManyMetaInput | ChatCommentCreateManyMetaInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutMetaInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutMetaInput, PostUncheckedUpdateWithoutMetaInput>
    create: XOR<PostCreateWithoutMetaInput, PostUncheckedCreateWithoutMetaInput>
  }

  export type PostUpdateWithWhereUniqueWithoutMetaInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutMetaInput, PostUncheckedUpdateWithoutMetaInput>
  }

  export type PostUpdateManyWithWhereWithoutMetaInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutMetaInput>
  }

  export type ChatCommentUpsertWithWhereUniqueWithoutMetaInput = {
    where: ChatCommentWhereUniqueInput
    update: XOR<ChatCommentUpdateWithoutMetaInput, ChatCommentUncheckedUpdateWithoutMetaInput>
    create: XOR<ChatCommentCreateWithoutMetaInput, ChatCommentUncheckedCreateWithoutMetaInput>
  }

  export type ChatCommentUpdateWithWhereUniqueWithoutMetaInput = {
    where: ChatCommentWhereUniqueInput
    data: XOR<ChatCommentUpdateWithoutMetaInput, ChatCommentUncheckedUpdateWithoutMetaInput>
  }

  export type ChatCommentUpdateManyWithWhereWithoutMetaInput = {
    where: ChatCommentScalarWhereInput
    data: XOR<ChatCommentUpdateManyMutationInput, ChatCommentUncheckedUpdateManyWithoutMetaInput>
  }

  export type UserCreateWithoutAccessInput = {
    name: string
    email: string
    image: string
    position: PositionCreateNestedOneWithoutUsersInput
    group?: GroupCreateNestedOneWithoutUsersInput
    posts?: PostCreateNestedManyWithoutUserInput
    postComments?: PostCommentCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
    groupId?: number | null
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postComments?: PostCommentUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutUsersInput
    managedCommunities?: CommunityUncheckedCreateNestedManyWithoutManagerInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatCommets?: ChatCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessInput, UserUncheckedCreateWithoutAccessInput>
  }

  export type UserUpsertWithoutAccessInput = {
    update: XOR<UserUpdateWithoutAccessInput, UserUncheckedUpdateWithoutAccessInput>
    create: XOR<UserCreateWithoutAccessInput, UserUncheckedCreateWithoutAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessInput, UserUncheckedUpdateWithoutAccessInput>
  }

  export type UserUpdateWithoutAccessInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
    commentCnt: number
  }

  export type PostCommentCreateManyUserInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: number
  }

  export type CommunityCreateManyManagerInput = {
    id?: number
    isPrivate?: boolean
    isPublicRead?: boolean
    isPublicWrite?: boolean
    category?: $Enums.CommunityCategory
    slug: string
    name: string
    latestPostDate?: Date | string | null
  }

  export type ChatCommentCreateManyUserInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    roomId: number
    metaId?: number | null
  }

  export type LogAccessCreateManyUserInput = {
    id?: number
    uuid: string
    ip: string
    agent: string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUpdateOneWithoutPostNestedInput
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    meta?: MetaDataUpdateManyWithoutPostsNestedInput
    comments?: PostCommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUncheckedUpdateOneWithoutPostNestedInput
    meta?: MetaDataUncheckedUpdateManyWithoutPostsNestedInput
    comments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
  }

  export type PostCommentUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeComment?: PostCommentLargTextUpdateOneWithoutPostCommentNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type PostCommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
    largeComment?: PostCommentLargTextUncheckedUpdateOneWithoutPostCommentNestedInput
  }

  export type PostCommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunityUpdateWithoutUsersInput = {
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    manager?: UserUpdateOneWithoutManagedCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    group?: GroupUncheckedUpdateOneWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommunityUpdateWithoutManagerInput = {
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneWithoutCommunityNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    users?: UserUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUncheckedUpdateOneWithoutCommunityNestedInput
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    users?: UserUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPublicRead?: BoolFieldUpdateOperationsInput | boolean
    isPublicWrite?: BoolFieldUpdateOperationsInput | boolean
    category?: EnumCommunityCategoryFieldUpdateOperationsInput | $Enums.CommunityCategory
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latestPostDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ChatCommentUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ChatCommentUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCommentUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeComment?: ChatCommentLargTextUpdateOneWithoutChatCommentNestedInput
    room?: ChatRoomUpdateOneRequiredWithoutCommentsNestedInput
    meta?: MetaDataUpdateOneWithoutCommentsNestedInput
  }

  export type ChatCommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    largeComment?: ChatCommentLargTextUncheckedUpdateOneWithoutChatCommentNestedInput
  }

  export type ChatCommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogAccessUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAccessUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogAccessUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    agent?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyPositionInput = {
    id?: number
    name: string
    email: string
    image: string
    groupId?: number | null
  }

  export type UserUpdateWithoutPositionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPositionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPositionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GroupCreateManyParentInput = {
    id?: number
    order: number
    slug: string
    name: string
    communityId: number
  }

  export type UserCreateManyGroupInput = {
    id?: number
    name: string
    email: string
    image: string
    positionId: number
  }

  export type GroupUpdateWithoutParentInput = {
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    children?: GroupUpdateManyWithoutParentNestedInput
    users?: UserUpdateManyWithoutGroupNestedInput
    community?: CommunityUpdateOneRequiredWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: IntFieldUpdateOperationsInput | number
    children?: GroupUncheckedUpdateManyWithoutParentNestedInput
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyCommunityInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    commentCnt: number
  }

  export type PostUpdateWithoutCommunityInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUpdateOneWithoutPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    meta?: MetaDataUpdateManyWithoutPostsNestedInput
    comments?: PostCommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUncheckedUpdateOneWithoutPostNestedInput
    meta?: MetaDataUncheckedUpdateManyWithoutPostsNestedInput
    comments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutCommunitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCommentCreateManyPostInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type MetaDataUpdateWithoutPostsInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: ChatCommentUpdateManyWithoutMetaNestedInput
  }

  export type MetaDataUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: ChatCommentUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaDataUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    video?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCommentUpdateWithoutPostInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeComment?: PostCommentLargTextUpdateOneWithoutPostCommentNestedInput
    user?: UserUpdateOneRequiredWithoutPostCommentsNestedInput
  }

  export type PostCommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    largeComment?: PostCommentLargTextUncheckedUpdateOneWithoutPostCommentNestedInput
  }

  export type PostCommentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatCommentCreateManyRoomInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    userId: number
    metaId?: number | null
  }

  export type UserUpdateWithoutChatRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    position?: PositionUpdateOneRequiredWithoutUsersNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUpdateManyWithoutManagerNestedInput
    chatCommets?: ChatCommentUpdateManyWithoutUserNestedInput
    access?: LogAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postComments?: PostCommentUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutUsersNestedInput
    managedCommunities?: CommunityUncheckedUpdateManyWithoutManagerNestedInput
    chatCommets?: ChatCommentUncheckedUpdateManyWithoutUserNestedInput
    access?: LogAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    positionId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatCommentUpdateWithoutRoomInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeComment?: ChatCommentLargTextUpdateOneWithoutChatCommentNestedInput
    user?: UserUpdateOneRequiredWithoutChatCommetsNestedInput
    meta?: MetaDataUpdateOneWithoutCommentsNestedInput
  }

  export type ChatCommentUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    largeComment?: ChatCommentLargTextUncheckedUpdateOneWithoutChatCommentNestedInput
  }

  export type ChatCommentUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatCommentCreateManyMetaInput = {
    id?: number
    comment: string
    createdAt?: Date | string
    roomId: number
    userId: number
  }

  export type PostUpdateWithoutMetaInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUpdateOneWithoutPostNestedInput
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: PostCommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutMetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
    largeText?: PostLargTextUncheckedUpdateOneWithoutPostNestedInput
    comments?: PostCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutMetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentCnt?: IntFieldUpdateOperationsInput | number
  }

  export type ChatCommentUpdateWithoutMetaInput = {
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeComment?: ChatCommentLargTextUpdateOneWithoutChatCommentNestedInput
    room?: ChatRoomUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutChatCommetsNestedInput
  }

  export type ChatCommentUncheckedUpdateWithoutMetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    largeComment?: ChatCommentLargTextUncheckedUpdateOneWithoutChatCommentNestedInput
  }

  export type ChatCommentUncheckedUpdateManyWithoutMetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionCountOutputTypeDefaultArgs instead
     */
    export type PositionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityCountOutputTypeDefaultArgs instead
     */
    export type CommunityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatRoomCountOutputTypeDefaultArgs instead
     */
    export type ChatRoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MetaDataCountOutputTypeDefaultArgs instead
     */
    export type MetaDataCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MetaDataCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionDefaultArgs instead
     */
    export type PositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityDefaultArgs instead
     */
    export type CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostLargTextDefaultArgs instead
     */
    export type PostLargTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostLargTextDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCommentDefaultArgs instead
     */
    export type PostCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCommentLargTextDefaultArgs instead
     */
    export type PostCommentLargTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCommentLargTextDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatRoomDefaultArgs instead
     */
    export type ChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatRoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatCommentDefaultArgs instead
     */
    export type ChatCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatCommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatCommentLargTextDefaultArgs instead
     */
    export type ChatCommentLargTextArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatCommentLargTextDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MetaDataDefaultArgs instead
     */
    export type MetaDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MetaDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogAccessDefaultArgs instead
     */
    export type LogAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogAccessDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}