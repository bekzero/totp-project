
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
 * Model VaultProfile
 * 
 */
export type VaultProfile = $Result.DefaultSelection<Prisma.$VaultProfilePayload>
/**
 * Model VaultItem
 * 
 */
export type VaultItem = $Result.DefaultSelection<Prisma.$VaultItemPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.vaultProfile`: Exposes CRUD operations for the **VaultProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VaultProfiles
    * const vaultProfiles = await prisma.vaultProfile.findMany()
    * ```
    */
  get vaultProfile(): Prisma.VaultProfileDelegate<ExtArgs>;

  /**
   * `prisma.vaultItem`: Exposes CRUD operations for the **VaultItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VaultItems
    * const vaultItems = await prisma.vaultItem.findMany()
    * ```
    */
  get vaultItem(): Prisma.VaultItemDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    VaultProfile: 'VaultProfile',
    VaultItem: 'VaultItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "vaultProfile" | "vaultItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VaultProfile: {
        payload: Prisma.$VaultProfilePayload<ExtArgs>
        fields: Prisma.VaultProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaultProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaultProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload>
          }
          findFirst: {
            args: Prisma.VaultProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaultProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload>
          }
          findMany: {
            args: Prisma.VaultProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload>[]
          }
          create: {
            args: Prisma.VaultProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload>
          }
          createMany: {
            args: Prisma.VaultProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VaultProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload>[]
          }
          delete: {
            args: Prisma.VaultProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload>
          }
          update: {
            args: Prisma.VaultProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload>
          }
          deleteMany: {
            args: Prisma.VaultProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaultProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VaultProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultProfilePayload>
          }
          aggregate: {
            args: Prisma.VaultProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaultProfile>
          }
          groupBy: {
            args: Prisma.VaultProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaultProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaultProfileCountArgs<ExtArgs>
            result: $Utils.Optional<VaultProfileCountAggregateOutputType> | number
          }
        }
      }
      VaultItem: {
        payload: Prisma.$VaultItemPayload<ExtArgs>
        fields: Prisma.VaultItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaultItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaultItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          findFirst: {
            args: Prisma.VaultItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaultItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          findMany: {
            args: Prisma.VaultItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>[]
          }
          create: {
            args: Prisma.VaultItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          createMany: {
            args: Prisma.VaultItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VaultItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>[]
          }
          delete: {
            args: Prisma.VaultItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          update: {
            args: Prisma.VaultItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          deleteMany: {
            args: Prisma.VaultItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaultItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VaultItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaultItemPayload>
          }
          aggregate: {
            args: Prisma.VaultItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaultItem>
          }
          groupBy: {
            args: Prisma.VaultItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaultItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaultItemCountArgs<ExtArgs>
            result: $Utils.Optional<VaultItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'createManyAndReturn'
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
    vaultItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaultItems?: boolean | UserCountOutputTypeCountVaultItemsArgs
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
  export type UserCountOutputTypeCountVaultItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vaultProfile?: boolean | User$vaultProfileArgs<ExtArgs>
    vaultItems?: boolean | User$vaultItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vaultProfile?: boolean | User$vaultProfileArgs<ExtArgs>
    vaultItems?: boolean | User$vaultItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vaultProfile: Prisma.$VaultProfilePayload<ExtArgs> | null
      vaultItems: Prisma.$VaultItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vaultProfile<T extends User$vaultProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$vaultProfileArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    vaultItems<T extends User$vaultItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$vaultItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
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
   * User.vaultProfile
   */
  export type User$vaultProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    where?: VaultProfileWhereInput
  }

  /**
   * User.vaultItems
   */
  export type User$vaultItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    where?: VaultItemWhereInput
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    cursor?: VaultItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VaultProfile
   */

  export type AggregateVaultProfile = {
    _count: VaultProfileCountAggregateOutputType | null
    _avg: VaultProfileAvgAggregateOutputType | null
    _sum: VaultProfileSumAggregateOutputType | null
    _min: VaultProfileMinAggregateOutputType | null
    _max: VaultProfileMaxAggregateOutputType | null
  }

  export type VaultProfileAvgAggregateOutputType = {
    kdfIterations: number | null
    kdfVersion: number | null
  }

  export type VaultProfileSumAggregateOutputType = {
    kdfIterations: number | null
    kdfVersion: number | null
  }

  export type VaultProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    kdfSalt: string | null
    kdfIterations: number | null
    kdfVersion: number | null
    masterVerifier: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaultProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kdfSalt: string | null
    kdfIterations: number | null
    kdfVersion: number | null
    masterVerifier: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaultProfileCountAggregateOutputType = {
    id: number
    userId: number
    kdfSalt: number
    kdfIterations: number
    kdfVersion: number
    masterVerifier: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VaultProfileAvgAggregateInputType = {
    kdfIterations?: true
    kdfVersion?: true
  }

  export type VaultProfileSumAggregateInputType = {
    kdfIterations?: true
    kdfVersion?: true
  }

  export type VaultProfileMinAggregateInputType = {
    id?: true
    userId?: true
    kdfSalt?: true
    kdfIterations?: true
    kdfVersion?: true
    masterVerifier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaultProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    kdfSalt?: true
    kdfIterations?: true
    kdfVersion?: true
    masterVerifier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaultProfileCountAggregateInputType = {
    id?: true
    userId?: true
    kdfSalt?: true
    kdfIterations?: true
    kdfVersion?: true
    masterVerifier?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VaultProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VaultProfile to aggregate.
     */
    where?: VaultProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultProfiles to fetch.
     */
    orderBy?: VaultProfileOrderByWithRelationInput | VaultProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaultProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VaultProfiles
    **/
    _count?: true | VaultProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaultProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaultProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaultProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaultProfileMaxAggregateInputType
  }

  export type GetVaultProfileAggregateType<T extends VaultProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateVaultProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaultProfile[P]>
      : GetScalarType<T[P], AggregateVaultProfile[P]>
  }




  export type VaultProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultProfileWhereInput
    orderBy?: VaultProfileOrderByWithAggregationInput | VaultProfileOrderByWithAggregationInput[]
    by: VaultProfileScalarFieldEnum[] | VaultProfileScalarFieldEnum
    having?: VaultProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaultProfileCountAggregateInputType | true
    _avg?: VaultProfileAvgAggregateInputType
    _sum?: VaultProfileSumAggregateInputType
    _min?: VaultProfileMinAggregateInputType
    _max?: VaultProfileMaxAggregateInputType
  }

  export type VaultProfileGroupByOutputType = {
    id: string
    userId: string
    kdfSalt: string
    kdfIterations: number
    kdfVersion: number
    masterVerifier: string
    createdAt: Date
    updatedAt: Date
    _count: VaultProfileCountAggregateOutputType | null
    _avg: VaultProfileAvgAggregateOutputType | null
    _sum: VaultProfileSumAggregateOutputType | null
    _min: VaultProfileMinAggregateOutputType | null
    _max: VaultProfileMaxAggregateOutputType | null
  }

  type GetVaultProfileGroupByPayload<T extends VaultProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaultProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaultProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaultProfileGroupByOutputType[P]>
            : GetScalarType<T[P], VaultProfileGroupByOutputType[P]>
        }
      >
    >


  export type VaultProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kdfSalt?: boolean
    kdfIterations?: boolean
    kdfVersion?: boolean
    masterVerifier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaultProfile"]>

  export type VaultProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kdfSalt?: boolean
    kdfIterations?: boolean
    kdfVersion?: boolean
    masterVerifier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaultProfile"]>

  export type VaultProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    kdfSalt?: boolean
    kdfIterations?: boolean
    kdfVersion?: boolean
    masterVerifier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VaultProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VaultProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VaultProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VaultProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      kdfSalt: string
      kdfIterations: number
      kdfVersion: number
      masterVerifier: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vaultProfile"]>
    composites: {}
  }

  type VaultProfileGetPayload<S extends boolean | null | undefined | VaultProfileDefaultArgs> = $Result.GetResult<Prisma.$VaultProfilePayload, S>

  type VaultProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VaultProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VaultProfileCountAggregateInputType | true
    }

  export interface VaultProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VaultProfile'], meta: { name: 'VaultProfile' } }
    /**
     * Find zero or one VaultProfile that matches the filter.
     * @param {VaultProfileFindUniqueArgs} args - Arguments to find a VaultProfile
     * @example
     * // Get one VaultProfile
     * const vaultProfile = await prisma.vaultProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaultProfileFindUniqueArgs>(args: SelectSubset<T, VaultProfileFindUniqueArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VaultProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VaultProfileFindUniqueOrThrowArgs} args - Arguments to find a VaultProfile
     * @example
     * // Get one VaultProfile
     * const vaultProfile = await prisma.vaultProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaultProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, VaultProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VaultProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultProfileFindFirstArgs} args - Arguments to find a VaultProfile
     * @example
     * // Get one VaultProfile
     * const vaultProfile = await prisma.vaultProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaultProfileFindFirstArgs>(args?: SelectSubset<T, VaultProfileFindFirstArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VaultProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultProfileFindFirstOrThrowArgs} args - Arguments to find a VaultProfile
     * @example
     * // Get one VaultProfile
     * const vaultProfile = await prisma.vaultProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaultProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, VaultProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VaultProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VaultProfiles
     * const vaultProfiles = await prisma.vaultProfile.findMany()
     * 
     * // Get first 10 VaultProfiles
     * const vaultProfiles = await prisma.vaultProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaultProfileWithIdOnly = await prisma.vaultProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaultProfileFindManyArgs>(args?: SelectSubset<T, VaultProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VaultProfile.
     * @param {VaultProfileCreateArgs} args - Arguments to create a VaultProfile.
     * @example
     * // Create one VaultProfile
     * const VaultProfile = await prisma.vaultProfile.create({
     *   data: {
     *     // ... data to create a VaultProfile
     *   }
     * })
     * 
     */
    create<T extends VaultProfileCreateArgs>(args: SelectSubset<T, VaultProfileCreateArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VaultProfiles.
     * @param {VaultProfileCreateManyArgs} args - Arguments to create many VaultProfiles.
     * @example
     * // Create many VaultProfiles
     * const vaultProfile = await prisma.vaultProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaultProfileCreateManyArgs>(args?: SelectSubset<T, VaultProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VaultProfiles and returns the data saved in the database.
     * @param {VaultProfileCreateManyAndReturnArgs} args - Arguments to create many VaultProfiles.
     * @example
     * // Create many VaultProfiles
     * const vaultProfile = await prisma.vaultProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VaultProfiles and only return the `id`
     * const vaultProfileWithIdOnly = await prisma.vaultProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VaultProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, VaultProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VaultProfile.
     * @param {VaultProfileDeleteArgs} args - Arguments to delete one VaultProfile.
     * @example
     * // Delete one VaultProfile
     * const VaultProfile = await prisma.vaultProfile.delete({
     *   where: {
     *     // ... filter to delete one VaultProfile
     *   }
     * })
     * 
     */
    delete<T extends VaultProfileDeleteArgs>(args: SelectSubset<T, VaultProfileDeleteArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VaultProfile.
     * @param {VaultProfileUpdateArgs} args - Arguments to update one VaultProfile.
     * @example
     * // Update one VaultProfile
     * const vaultProfile = await prisma.vaultProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaultProfileUpdateArgs>(args: SelectSubset<T, VaultProfileUpdateArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VaultProfiles.
     * @param {VaultProfileDeleteManyArgs} args - Arguments to filter VaultProfiles to delete.
     * @example
     * // Delete a few VaultProfiles
     * const { count } = await prisma.vaultProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaultProfileDeleteManyArgs>(args?: SelectSubset<T, VaultProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VaultProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VaultProfiles
     * const vaultProfile = await prisma.vaultProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaultProfileUpdateManyArgs>(args: SelectSubset<T, VaultProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VaultProfile.
     * @param {VaultProfileUpsertArgs} args - Arguments to update or create a VaultProfile.
     * @example
     * // Update or create a VaultProfile
     * const vaultProfile = await prisma.vaultProfile.upsert({
     *   create: {
     *     // ... data to create a VaultProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VaultProfile we want to update
     *   }
     * })
     */
    upsert<T extends VaultProfileUpsertArgs>(args: SelectSubset<T, VaultProfileUpsertArgs<ExtArgs>>): Prisma__VaultProfileClient<$Result.GetResult<Prisma.$VaultProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VaultProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultProfileCountArgs} args - Arguments to filter VaultProfiles to count.
     * @example
     * // Count the number of VaultProfiles
     * const count = await prisma.vaultProfile.count({
     *   where: {
     *     // ... the filter for the VaultProfiles we want to count
     *   }
     * })
    **/
    count<T extends VaultProfileCountArgs>(
      args?: Subset<T, VaultProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaultProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VaultProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VaultProfileAggregateArgs>(args: Subset<T, VaultProfileAggregateArgs>): Prisma.PrismaPromise<GetVaultProfileAggregateType<T>>

    /**
     * Group by VaultProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultProfileGroupByArgs} args - Group by arguments.
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
      T extends VaultProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaultProfileGroupByArgs['orderBy'] }
        : { orderBy?: VaultProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VaultProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaultProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VaultProfile model
   */
  readonly fields: VaultProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VaultProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaultProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VaultProfile model
   */ 
  interface VaultProfileFieldRefs {
    readonly id: FieldRef<"VaultProfile", 'String'>
    readonly userId: FieldRef<"VaultProfile", 'String'>
    readonly kdfSalt: FieldRef<"VaultProfile", 'String'>
    readonly kdfIterations: FieldRef<"VaultProfile", 'Int'>
    readonly kdfVersion: FieldRef<"VaultProfile", 'Int'>
    readonly masterVerifier: FieldRef<"VaultProfile", 'String'>
    readonly createdAt: FieldRef<"VaultProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"VaultProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VaultProfile findUnique
   */
  export type VaultProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * Filter, which VaultProfile to fetch.
     */
    where: VaultProfileWhereUniqueInput
  }

  /**
   * VaultProfile findUniqueOrThrow
   */
  export type VaultProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * Filter, which VaultProfile to fetch.
     */
    where: VaultProfileWhereUniqueInput
  }

  /**
   * VaultProfile findFirst
   */
  export type VaultProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * Filter, which VaultProfile to fetch.
     */
    where?: VaultProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultProfiles to fetch.
     */
    orderBy?: VaultProfileOrderByWithRelationInput | VaultProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultProfiles.
     */
    cursor?: VaultProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultProfiles.
     */
    distinct?: VaultProfileScalarFieldEnum | VaultProfileScalarFieldEnum[]
  }

  /**
   * VaultProfile findFirstOrThrow
   */
  export type VaultProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * Filter, which VaultProfile to fetch.
     */
    where?: VaultProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultProfiles to fetch.
     */
    orderBy?: VaultProfileOrderByWithRelationInput | VaultProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultProfiles.
     */
    cursor?: VaultProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultProfiles.
     */
    distinct?: VaultProfileScalarFieldEnum | VaultProfileScalarFieldEnum[]
  }

  /**
   * VaultProfile findMany
   */
  export type VaultProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * Filter, which VaultProfiles to fetch.
     */
    where?: VaultProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultProfiles to fetch.
     */
    orderBy?: VaultProfileOrderByWithRelationInput | VaultProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VaultProfiles.
     */
    cursor?: VaultProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultProfiles.
     */
    skip?: number
    distinct?: VaultProfileScalarFieldEnum | VaultProfileScalarFieldEnum[]
  }

  /**
   * VaultProfile create
   */
  export type VaultProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a VaultProfile.
     */
    data: XOR<VaultProfileCreateInput, VaultProfileUncheckedCreateInput>
  }

  /**
   * VaultProfile createMany
   */
  export type VaultProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VaultProfiles.
     */
    data: VaultProfileCreateManyInput | VaultProfileCreateManyInput[]
  }

  /**
   * VaultProfile createManyAndReturn
   */
  export type VaultProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VaultProfiles.
     */
    data: VaultProfileCreateManyInput | VaultProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VaultProfile update
   */
  export type VaultProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a VaultProfile.
     */
    data: XOR<VaultProfileUpdateInput, VaultProfileUncheckedUpdateInput>
    /**
     * Choose, which VaultProfile to update.
     */
    where: VaultProfileWhereUniqueInput
  }

  /**
   * VaultProfile updateMany
   */
  export type VaultProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VaultProfiles.
     */
    data: XOR<VaultProfileUpdateManyMutationInput, VaultProfileUncheckedUpdateManyInput>
    /**
     * Filter which VaultProfiles to update
     */
    where?: VaultProfileWhereInput
  }

  /**
   * VaultProfile upsert
   */
  export type VaultProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the VaultProfile to update in case it exists.
     */
    where: VaultProfileWhereUniqueInput
    /**
     * In case the VaultProfile found by the `where` argument doesn't exist, create a new VaultProfile with this data.
     */
    create: XOR<VaultProfileCreateInput, VaultProfileUncheckedCreateInput>
    /**
     * In case the VaultProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaultProfileUpdateInput, VaultProfileUncheckedUpdateInput>
  }

  /**
   * VaultProfile delete
   */
  export type VaultProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
    /**
     * Filter which VaultProfile to delete.
     */
    where: VaultProfileWhereUniqueInput
  }

  /**
   * VaultProfile deleteMany
   */
  export type VaultProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VaultProfiles to delete
     */
    where?: VaultProfileWhereInput
  }

  /**
   * VaultProfile without action
   */
  export type VaultProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultProfile
     */
    select?: VaultProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultProfileInclude<ExtArgs> | null
  }


  /**
   * Model VaultItem
   */

  export type AggregateVaultItem = {
    _count: VaultItemCountAggregateOutputType | null
    _avg: VaultItemAvgAggregateOutputType | null
    _sum: VaultItemSumAggregateOutputType | null
    _min: VaultItemMinAggregateOutputType | null
    _max: VaultItemMaxAggregateOutputType | null
  }

  export type VaultItemAvgAggregateOutputType = {
    schemaVersion: number | null
  }

  export type VaultItemSumAggregateOutputType = {
    schemaVersion: number | null
  }

  export type VaultItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    encryptedBlob: string | null
    iv: string | null
    schemaVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaultItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    encryptedBlob: string | null
    iv: string | null
    schemaVersion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaultItemCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    encryptedBlob: number
    iv: number
    schemaVersion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VaultItemAvgAggregateInputType = {
    schemaVersion?: true
  }

  export type VaultItemSumAggregateInputType = {
    schemaVersion?: true
  }

  export type VaultItemMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    encryptedBlob?: true
    iv?: true
    schemaVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaultItemMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    encryptedBlob?: true
    iv?: true
    schemaVersion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaultItemCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    encryptedBlob?: true
    iv?: true
    schemaVersion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VaultItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VaultItem to aggregate.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VaultItems
    **/
    _count?: true | VaultItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaultItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaultItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaultItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaultItemMaxAggregateInputType
  }

  export type GetVaultItemAggregateType<T extends VaultItemAggregateArgs> = {
        [P in keyof T & keyof AggregateVaultItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaultItem[P]>
      : GetScalarType<T[P], AggregateVaultItem[P]>
  }




  export type VaultItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaultItemWhereInput
    orderBy?: VaultItemOrderByWithAggregationInput | VaultItemOrderByWithAggregationInput[]
    by: VaultItemScalarFieldEnum[] | VaultItemScalarFieldEnum
    having?: VaultItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaultItemCountAggregateInputType | true
    _avg?: VaultItemAvgAggregateInputType
    _sum?: VaultItemSumAggregateInputType
    _min?: VaultItemMinAggregateInputType
    _max?: VaultItemMaxAggregateInputType
  }

  export type VaultItemGroupByOutputType = {
    id: string
    userId: string
    name: string
    encryptedBlob: string
    iv: string
    schemaVersion: number
    createdAt: Date
    updatedAt: Date
    _count: VaultItemCountAggregateOutputType | null
    _avg: VaultItemAvgAggregateOutputType | null
    _sum: VaultItemSumAggregateOutputType | null
    _min: VaultItemMinAggregateOutputType | null
    _max: VaultItemMaxAggregateOutputType | null
  }

  type GetVaultItemGroupByPayload<T extends VaultItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaultItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaultItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaultItemGroupByOutputType[P]>
            : GetScalarType<T[P], VaultItemGroupByOutputType[P]>
        }
      >
    >


  export type VaultItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    encryptedBlob?: boolean
    iv?: boolean
    schemaVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaultItem"]>

  export type VaultItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    encryptedBlob?: boolean
    iv?: boolean
    schemaVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaultItem"]>

  export type VaultItemSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    encryptedBlob?: boolean
    iv?: boolean
    schemaVersion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VaultItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VaultItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VaultItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VaultItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      encryptedBlob: string
      iv: string
      schemaVersion: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vaultItem"]>
    composites: {}
  }

  type VaultItemGetPayload<S extends boolean | null | undefined | VaultItemDefaultArgs> = $Result.GetResult<Prisma.$VaultItemPayload, S>

  type VaultItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VaultItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VaultItemCountAggregateInputType | true
    }

  export interface VaultItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VaultItem'], meta: { name: 'VaultItem' } }
    /**
     * Find zero or one VaultItem that matches the filter.
     * @param {VaultItemFindUniqueArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaultItemFindUniqueArgs>(args: SelectSubset<T, VaultItemFindUniqueArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VaultItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VaultItemFindUniqueOrThrowArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaultItemFindUniqueOrThrowArgs>(args: SelectSubset<T, VaultItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VaultItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindFirstArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaultItemFindFirstArgs>(args?: SelectSubset<T, VaultItemFindFirstArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VaultItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindFirstOrThrowArgs} args - Arguments to find a VaultItem
     * @example
     * // Get one VaultItem
     * const vaultItem = await prisma.vaultItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaultItemFindFirstOrThrowArgs>(args?: SelectSubset<T, VaultItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VaultItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VaultItems
     * const vaultItems = await prisma.vaultItem.findMany()
     * 
     * // Get first 10 VaultItems
     * const vaultItems = await prisma.vaultItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaultItemWithIdOnly = await prisma.vaultItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaultItemFindManyArgs>(args?: SelectSubset<T, VaultItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VaultItem.
     * @param {VaultItemCreateArgs} args - Arguments to create a VaultItem.
     * @example
     * // Create one VaultItem
     * const VaultItem = await prisma.vaultItem.create({
     *   data: {
     *     // ... data to create a VaultItem
     *   }
     * })
     * 
     */
    create<T extends VaultItemCreateArgs>(args: SelectSubset<T, VaultItemCreateArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VaultItems.
     * @param {VaultItemCreateManyArgs} args - Arguments to create many VaultItems.
     * @example
     * // Create many VaultItems
     * const vaultItem = await prisma.vaultItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaultItemCreateManyArgs>(args?: SelectSubset<T, VaultItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VaultItems and returns the data saved in the database.
     * @param {VaultItemCreateManyAndReturnArgs} args - Arguments to create many VaultItems.
     * @example
     * // Create many VaultItems
     * const vaultItem = await prisma.vaultItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VaultItems and only return the `id`
     * const vaultItemWithIdOnly = await prisma.vaultItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VaultItemCreateManyAndReturnArgs>(args?: SelectSubset<T, VaultItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VaultItem.
     * @param {VaultItemDeleteArgs} args - Arguments to delete one VaultItem.
     * @example
     * // Delete one VaultItem
     * const VaultItem = await prisma.vaultItem.delete({
     *   where: {
     *     // ... filter to delete one VaultItem
     *   }
     * })
     * 
     */
    delete<T extends VaultItemDeleteArgs>(args: SelectSubset<T, VaultItemDeleteArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VaultItem.
     * @param {VaultItemUpdateArgs} args - Arguments to update one VaultItem.
     * @example
     * // Update one VaultItem
     * const vaultItem = await prisma.vaultItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaultItemUpdateArgs>(args: SelectSubset<T, VaultItemUpdateArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VaultItems.
     * @param {VaultItemDeleteManyArgs} args - Arguments to filter VaultItems to delete.
     * @example
     * // Delete a few VaultItems
     * const { count } = await prisma.vaultItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaultItemDeleteManyArgs>(args?: SelectSubset<T, VaultItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VaultItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VaultItems
     * const vaultItem = await prisma.vaultItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaultItemUpdateManyArgs>(args: SelectSubset<T, VaultItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VaultItem.
     * @param {VaultItemUpsertArgs} args - Arguments to update or create a VaultItem.
     * @example
     * // Update or create a VaultItem
     * const vaultItem = await prisma.vaultItem.upsert({
     *   create: {
     *     // ... data to create a VaultItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VaultItem we want to update
     *   }
     * })
     */
    upsert<T extends VaultItemUpsertArgs>(args: SelectSubset<T, VaultItemUpsertArgs<ExtArgs>>): Prisma__VaultItemClient<$Result.GetResult<Prisma.$VaultItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VaultItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemCountArgs} args - Arguments to filter VaultItems to count.
     * @example
     * // Count the number of VaultItems
     * const count = await prisma.vaultItem.count({
     *   where: {
     *     // ... the filter for the VaultItems we want to count
     *   }
     * })
    **/
    count<T extends VaultItemCountArgs>(
      args?: Subset<T, VaultItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaultItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VaultItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VaultItemAggregateArgs>(args: Subset<T, VaultItemAggregateArgs>): Prisma.PrismaPromise<GetVaultItemAggregateType<T>>

    /**
     * Group by VaultItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultItemGroupByArgs} args - Group by arguments.
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
      T extends VaultItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaultItemGroupByArgs['orderBy'] }
        : { orderBy?: VaultItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VaultItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaultItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VaultItem model
   */
  readonly fields: VaultItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VaultItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaultItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VaultItem model
   */ 
  interface VaultItemFieldRefs {
    readonly id: FieldRef<"VaultItem", 'String'>
    readonly userId: FieldRef<"VaultItem", 'String'>
    readonly name: FieldRef<"VaultItem", 'String'>
    readonly encryptedBlob: FieldRef<"VaultItem", 'String'>
    readonly iv: FieldRef<"VaultItem", 'String'>
    readonly schemaVersion: FieldRef<"VaultItem", 'Int'>
    readonly createdAt: FieldRef<"VaultItem", 'DateTime'>
    readonly updatedAt: FieldRef<"VaultItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VaultItem findUnique
   */
  export type VaultItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem findUniqueOrThrow
   */
  export type VaultItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem findFirst
   */
  export type VaultItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultItems.
     */
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem findFirstOrThrow
   */
  export type VaultItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItem to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultItems.
     */
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem findMany
   */
  export type VaultItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter, which VaultItems to fetch.
     */
    where?: VaultItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultItems to fetch.
     */
    orderBy?: VaultItemOrderByWithRelationInput | VaultItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VaultItems.
     */
    cursor?: VaultItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultItems.
     */
    skip?: number
    distinct?: VaultItemScalarFieldEnum | VaultItemScalarFieldEnum[]
  }

  /**
   * VaultItem create
   */
  export type VaultItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * The data needed to create a VaultItem.
     */
    data: XOR<VaultItemCreateInput, VaultItemUncheckedCreateInput>
  }

  /**
   * VaultItem createMany
   */
  export type VaultItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VaultItems.
     */
    data: VaultItemCreateManyInput | VaultItemCreateManyInput[]
  }

  /**
   * VaultItem createManyAndReturn
   */
  export type VaultItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VaultItems.
     */
    data: VaultItemCreateManyInput | VaultItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VaultItem update
   */
  export type VaultItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * The data needed to update a VaultItem.
     */
    data: XOR<VaultItemUpdateInput, VaultItemUncheckedUpdateInput>
    /**
     * Choose, which VaultItem to update.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem updateMany
   */
  export type VaultItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VaultItems.
     */
    data: XOR<VaultItemUpdateManyMutationInput, VaultItemUncheckedUpdateManyInput>
    /**
     * Filter which VaultItems to update
     */
    where?: VaultItemWhereInput
  }

  /**
   * VaultItem upsert
   */
  export type VaultItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * The filter to search for the VaultItem to update in case it exists.
     */
    where: VaultItemWhereUniqueInput
    /**
     * In case the VaultItem found by the `where` argument doesn't exist, create a new VaultItem with this data.
     */
    create: XOR<VaultItemCreateInput, VaultItemUncheckedCreateInput>
    /**
     * In case the VaultItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaultItemUpdateInput, VaultItemUncheckedUpdateInput>
  }

  /**
   * VaultItem delete
   */
  export type VaultItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
    /**
     * Filter which VaultItem to delete.
     */
    where: VaultItemWhereUniqueInput
  }

  /**
   * VaultItem deleteMany
   */
  export type VaultItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VaultItems to delete
     */
    where?: VaultItemWhereInput
  }

  /**
   * VaultItem without action
   */
  export type VaultItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VaultItem
     */
    select?: VaultItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaultItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VaultProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kdfSalt: 'kdfSalt',
    kdfIterations: 'kdfIterations',
    kdfVersion: 'kdfVersion',
    masterVerifier: 'masterVerifier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VaultProfileScalarFieldEnum = (typeof VaultProfileScalarFieldEnum)[keyof typeof VaultProfileScalarFieldEnum]


  export const VaultItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    encryptedBlob: 'encryptedBlob',
    iv: 'iv',
    schemaVersion: 'schemaVersion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VaultItemScalarFieldEnum = (typeof VaultItemScalarFieldEnum)[keyof typeof VaultItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vaultProfile?: XOR<VaultProfileNullableRelationFilter, VaultProfileWhereInput> | null
    vaultItems?: VaultItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vaultProfile?: VaultProfileOrderByWithRelationInput
    vaultItems?: VaultItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vaultProfile?: XOR<VaultProfileNullableRelationFilter, VaultProfileWhereInput> | null
    vaultItems?: VaultItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VaultProfileWhereInput = {
    AND?: VaultProfileWhereInput | VaultProfileWhereInput[]
    OR?: VaultProfileWhereInput[]
    NOT?: VaultProfileWhereInput | VaultProfileWhereInput[]
    id?: StringFilter<"VaultProfile"> | string
    userId?: StringFilter<"VaultProfile"> | string
    kdfSalt?: StringFilter<"VaultProfile"> | string
    kdfIterations?: IntFilter<"VaultProfile"> | number
    kdfVersion?: IntFilter<"VaultProfile"> | number
    masterVerifier?: StringFilter<"VaultProfile"> | string
    createdAt?: DateTimeFilter<"VaultProfile"> | Date | string
    updatedAt?: DateTimeFilter<"VaultProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type VaultProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kdfSalt?: SortOrder
    kdfIterations?: SortOrder
    kdfVersion?: SortOrder
    masterVerifier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VaultProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: VaultProfileWhereInput | VaultProfileWhereInput[]
    OR?: VaultProfileWhereInput[]
    NOT?: VaultProfileWhereInput | VaultProfileWhereInput[]
    kdfSalt?: StringFilter<"VaultProfile"> | string
    kdfIterations?: IntFilter<"VaultProfile"> | number
    kdfVersion?: IntFilter<"VaultProfile"> | number
    masterVerifier?: StringFilter<"VaultProfile"> | string
    createdAt?: DateTimeFilter<"VaultProfile"> | Date | string
    updatedAt?: DateTimeFilter<"VaultProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type VaultProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kdfSalt?: SortOrder
    kdfIterations?: SortOrder
    kdfVersion?: SortOrder
    masterVerifier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VaultProfileCountOrderByAggregateInput
    _avg?: VaultProfileAvgOrderByAggregateInput
    _max?: VaultProfileMaxOrderByAggregateInput
    _min?: VaultProfileMinOrderByAggregateInput
    _sum?: VaultProfileSumOrderByAggregateInput
  }

  export type VaultProfileScalarWhereWithAggregatesInput = {
    AND?: VaultProfileScalarWhereWithAggregatesInput | VaultProfileScalarWhereWithAggregatesInput[]
    OR?: VaultProfileScalarWhereWithAggregatesInput[]
    NOT?: VaultProfileScalarWhereWithAggregatesInput | VaultProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VaultProfile"> | string
    userId?: StringWithAggregatesFilter<"VaultProfile"> | string
    kdfSalt?: StringWithAggregatesFilter<"VaultProfile"> | string
    kdfIterations?: IntWithAggregatesFilter<"VaultProfile"> | number
    kdfVersion?: IntWithAggregatesFilter<"VaultProfile"> | number
    masterVerifier?: StringWithAggregatesFilter<"VaultProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VaultProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VaultProfile"> | Date | string
  }

  export type VaultItemWhereInput = {
    AND?: VaultItemWhereInput | VaultItemWhereInput[]
    OR?: VaultItemWhereInput[]
    NOT?: VaultItemWhereInput | VaultItemWhereInput[]
    id?: StringFilter<"VaultItem"> | string
    userId?: StringFilter<"VaultItem"> | string
    name?: StringFilter<"VaultItem"> | string
    encryptedBlob?: StringFilter<"VaultItem"> | string
    iv?: StringFilter<"VaultItem"> | string
    schemaVersion?: IntFilter<"VaultItem"> | number
    createdAt?: DateTimeFilter<"VaultItem"> | Date | string
    updatedAt?: DateTimeFilter<"VaultItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type VaultItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedBlob?: SortOrder
    iv?: SortOrder
    schemaVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VaultItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VaultItemWhereInput | VaultItemWhereInput[]
    OR?: VaultItemWhereInput[]
    NOT?: VaultItemWhereInput | VaultItemWhereInput[]
    userId?: StringFilter<"VaultItem"> | string
    name?: StringFilter<"VaultItem"> | string
    encryptedBlob?: StringFilter<"VaultItem"> | string
    iv?: StringFilter<"VaultItem"> | string
    schemaVersion?: IntFilter<"VaultItem"> | number
    createdAt?: DateTimeFilter<"VaultItem"> | Date | string
    updatedAt?: DateTimeFilter<"VaultItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type VaultItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedBlob?: SortOrder
    iv?: SortOrder
    schemaVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VaultItemCountOrderByAggregateInput
    _avg?: VaultItemAvgOrderByAggregateInput
    _max?: VaultItemMaxOrderByAggregateInput
    _min?: VaultItemMinOrderByAggregateInput
    _sum?: VaultItemSumOrderByAggregateInput
  }

  export type VaultItemScalarWhereWithAggregatesInput = {
    AND?: VaultItemScalarWhereWithAggregatesInput | VaultItemScalarWhereWithAggregatesInput[]
    OR?: VaultItemScalarWhereWithAggregatesInput[]
    NOT?: VaultItemScalarWhereWithAggregatesInput | VaultItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VaultItem"> | string
    userId?: StringWithAggregatesFilter<"VaultItem"> | string
    name?: StringWithAggregatesFilter<"VaultItem"> | string
    encryptedBlob?: StringWithAggregatesFilter<"VaultItem"> | string
    iv?: StringWithAggregatesFilter<"VaultItem"> | string
    schemaVersion?: IntWithAggregatesFilter<"VaultItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VaultItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VaultItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vaultProfile?: VaultProfileCreateNestedOneWithoutUserInput
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vaultProfile?: VaultProfileUncheckedCreateNestedOneWithoutUserInput
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaultProfile?: VaultProfileUpdateOneWithoutUserNestedInput
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaultProfile?: VaultProfileUncheckedUpdateOneWithoutUserNestedInput
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultProfileCreateInput = {
    id?: string
    kdfSalt: string
    kdfIterations: number
    kdfVersion?: number
    masterVerifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVaultProfileInput
  }

  export type VaultProfileUncheckedCreateInput = {
    id?: string
    userId: string
    kdfSalt: string
    kdfIterations: number
    kdfVersion?: number
    masterVerifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kdfSalt?: StringFieldUpdateOperationsInput | string
    kdfIterations?: IntFieldUpdateOperationsInput | number
    kdfVersion?: IntFieldUpdateOperationsInput | number
    masterVerifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVaultProfileNestedInput
  }

  export type VaultProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kdfSalt?: StringFieldUpdateOperationsInput | string
    kdfIterations?: IntFieldUpdateOperationsInput | number
    kdfVersion?: IntFieldUpdateOperationsInput | number
    masterVerifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultProfileCreateManyInput = {
    id?: string
    userId: string
    kdfSalt: string
    kdfIterations: number
    kdfVersion?: number
    masterVerifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kdfSalt?: StringFieldUpdateOperationsInput | string
    kdfIterations?: IntFieldUpdateOperationsInput | number
    kdfVersion?: IntFieldUpdateOperationsInput | number
    masterVerifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kdfSalt?: StringFieldUpdateOperationsInput | string
    kdfIterations?: IntFieldUpdateOperationsInput | number
    kdfVersion?: IntFieldUpdateOperationsInput | number
    masterVerifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemCreateInput = {
    id?: string
    name: string
    encryptedBlob: string
    iv: string
    schemaVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVaultItemsInput
  }

  export type VaultItemUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    encryptedBlob: string
    iv: string
    schemaVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedBlob?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    schemaVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVaultItemsNestedInput
  }

  export type VaultItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedBlob?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    schemaVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemCreateManyInput = {
    id?: string
    userId: string
    name: string
    encryptedBlob: string
    iv: string
    schemaVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedBlob?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    schemaVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedBlob?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    schemaVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VaultProfileNullableRelationFilter = {
    is?: VaultProfileWhereInput | null
    isNot?: VaultProfileWhereInput | null
  }

  export type VaultItemListRelationFilter = {
    every?: VaultItemWhereInput
    some?: VaultItemWhereInput
    none?: VaultItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VaultItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VaultProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kdfSalt?: SortOrder
    kdfIterations?: SortOrder
    kdfVersion?: SortOrder
    masterVerifier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultProfileAvgOrderByAggregateInput = {
    kdfIterations?: SortOrder
    kdfVersion?: SortOrder
  }

  export type VaultProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kdfSalt?: SortOrder
    kdfIterations?: SortOrder
    kdfVersion?: SortOrder
    masterVerifier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kdfSalt?: SortOrder
    kdfIterations?: SortOrder
    kdfVersion?: SortOrder
    masterVerifier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultProfileSumOrderByAggregateInput = {
    kdfIterations?: SortOrder
    kdfVersion?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type VaultItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedBlob?: SortOrder
    iv?: SortOrder
    schemaVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultItemAvgOrderByAggregateInput = {
    schemaVersion?: SortOrder
  }

  export type VaultItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedBlob?: SortOrder
    iv?: SortOrder
    schemaVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    encryptedBlob?: SortOrder
    iv?: SortOrder
    schemaVersion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaultItemSumOrderByAggregateInput = {
    schemaVersion?: SortOrder
  }

  export type VaultProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<VaultProfileCreateWithoutUserInput, VaultProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VaultProfileCreateOrConnectWithoutUserInput
    connect?: VaultProfileWhereUniqueInput
  }

  export type VaultItemCreateNestedManyWithoutUserInput = {
    create?: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput> | VaultItemCreateWithoutUserInput[] | VaultItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutUserInput | VaultItemCreateOrConnectWithoutUserInput[]
    createMany?: VaultItemCreateManyUserInputEnvelope
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
  }

  export type VaultProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VaultProfileCreateWithoutUserInput, VaultProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VaultProfileCreateOrConnectWithoutUserInput
    connect?: VaultProfileWhereUniqueInput
  }

  export type VaultItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput> | VaultItemCreateWithoutUserInput[] | VaultItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutUserInput | VaultItemCreateOrConnectWithoutUserInput[]
    createMany?: VaultItemCreateManyUserInputEnvelope
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VaultProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<VaultProfileCreateWithoutUserInput, VaultProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VaultProfileCreateOrConnectWithoutUserInput
    upsert?: VaultProfileUpsertWithoutUserInput
    disconnect?: VaultProfileWhereInput | boolean
    delete?: VaultProfileWhereInput | boolean
    connect?: VaultProfileWhereUniqueInput
    update?: XOR<XOR<VaultProfileUpdateToOneWithWhereWithoutUserInput, VaultProfileUpdateWithoutUserInput>, VaultProfileUncheckedUpdateWithoutUserInput>
  }

  export type VaultItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput> | VaultItemCreateWithoutUserInput[] | VaultItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutUserInput | VaultItemCreateOrConnectWithoutUserInput[]
    upsert?: VaultItemUpsertWithWhereUniqueWithoutUserInput | VaultItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VaultItemCreateManyUserInputEnvelope
    set?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    disconnect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    delete?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    update?: VaultItemUpdateWithWhereUniqueWithoutUserInput | VaultItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VaultItemUpdateManyWithWhereWithoutUserInput | VaultItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
  }

  export type VaultProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VaultProfileCreateWithoutUserInput, VaultProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VaultProfileCreateOrConnectWithoutUserInput
    upsert?: VaultProfileUpsertWithoutUserInput
    disconnect?: VaultProfileWhereInput | boolean
    delete?: VaultProfileWhereInput | boolean
    connect?: VaultProfileWhereUniqueInput
    update?: XOR<XOR<VaultProfileUpdateToOneWithWhereWithoutUserInput, VaultProfileUpdateWithoutUserInput>, VaultProfileUncheckedUpdateWithoutUserInput>
  }

  export type VaultItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput> | VaultItemCreateWithoutUserInput[] | VaultItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VaultItemCreateOrConnectWithoutUserInput | VaultItemCreateOrConnectWithoutUserInput[]
    upsert?: VaultItemUpsertWithWhereUniqueWithoutUserInput | VaultItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VaultItemCreateManyUserInputEnvelope
    set?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    disconnect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    delete?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    connect?: VaultItemWhereUniqueInput | VaultItemWhereUniqueInput[]
    update?: VaultItemUpdateWithWhereUniqueWithoutUserInput | VaultItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VaultItemUpdateManyWithWhereWithoutUserInput | VaultItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVaultProfileInput = {
    create?: XOR<UserCreateWithoutVaultProfileInput, UserUncheckedCreateWithoutVaultProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVaultProfileInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVaultProfileNestedInput = {
    create?: XOR<UserCreateWithoutVaultProfileInput, UserUncheckedCreateWithoutVaultProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVaultProfileInput
    upsert?: UserUpsertWithoutVaultProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVaultProfileInput, UserUpdateWithoutVaultProfileInput>, UserUncheckedUpdateWithoutVaultProfileInput>
  }

  export type UserCreateNestedOneWithoutVaultItemsInput = {
    create?: XOR<UserCreateWithoutVaultItemsInput, UserUncheckedCreateWithoutVaultItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVaultItemsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVaultItemsNestedInput = {
    create?: XOR<UserCreateWithoutVaultItemsInput, UserUncheckedCreateWithoutVaultItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVaultItemsInput
    upsert?: UserUpsertWithoutVaultItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVaultItemsInput, UserUpdateWithoutVaultItemsInput>, UserUncheckedUpdateWithoutVaultItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VaultProfileCreateWithoutUserInput = {
    id?: string
    kdfSalt: string
    kdfIterations: number
    kdfVersion?: number
    masterVerifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultProfileUncheckedCreateWithoutUserInput = {
    id?: string
    kdfSalt: string
    kdfIterations: number
    kdfVersion?: number
    masterVerifier: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultProfileCreateOrConnectWithoutUserInput = {
    where: VaultProfileWhereUniqueInput
    create: XOR<VaultProfileCreateWithoutUserInput, VaultProfileUncheckedCreateWithoutUserInput>
  }

  export type VaultItemCreateWithoutUserInput = {
    id?: string
    name: string
    encryptedBlob: string
    iv: string
    schemaVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultItemUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    encryptedBlob: string
    iv: string
    schemaVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultItemCreateOrConnectWithoutUserInput = {
    where: VaultItemWhereUniqueInput
    create: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput>
  }

  export type VaultItemCreateManyUserInputEnvelope = {
    data: VaultItemCreateManyUserInput | VaultItemCreateManyUserInput[]
  }

  export type VaultProfileUpsertWithoutUserInput = {
    update: XOR<VaultProfileUpdateWithoutUserInput, VaultProfileUncheckedUpdateWithoutUserInput>
    create: XOR<VaultProfileCreateWithoutUserInput, VaultProfileUncheckedCreateWithoutUserInput>
    where?: VaultProfileWhereInput
  }

  export type VaultProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: VaultProfileWhereInput
    data: XOR<VaultProfileUpdateWithoutUserInput, VaultProfileUncheckedUpdateWithoutUserInput>
  }

  export type VaultProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kdfSalt?: StringFieldUpdateOperationsInput | string
    kdfIterations?: IntFieldUpdateOperationsInput | number
    kdfVersion?: IntFieldUpdateOperationsInput | number
    masterVerifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kdfSalt?: StringFieldUpdateOperationsInput | string
    kdfIterations?: IntFieldUpdateOperationsInput | number
    kdfVersion?: IntFieldUpdateOperationsInput | number
    masterVerifier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemUpsertWithWhereUniqueWithoutUserInput = {
    where: VaultItemWhereUniqueInput
    update: XOR<VaultItemUpdateWithoutUserInput, VaultItemUncheckedUpdateWithoutUserInput>
    create: XOR<VaultItemCreateWithoutUserInput, VaultItemUncheckedCreateWithoutUserInput>
  }

  export type VaultItemUpdateWithWhereUniqueWithoutUserInput = {
    where: VaultItemWhereUniqueInput
    data: XOR<VaultItemUpdateWithoutUserInput, VaultItemUncheckedUpdateWithoutUserInput>
  }

  export type VaultItemUpdateManyWithWhereWithoutUserInput = {
    where: VaultItemScalarWhereInput
    data: XOR<VaultItemUpdateManyMutationInput, VaultItemUncheckedUpdateManyWithoutUserInput>
  }

  export type VaultItemScalarWhereInput = {
    AND?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
    OR?: VaultItemScalarWhereInput[]
    NOT?: VaultItemScalarWhereInput | VaultItemScalarWhereInput[]
    id?: StringFilter<"VaultItem"> | string
    userId?: StringFilter<"VaultItem"> | string
    name?: StringFilter<"VaultItem"> | string
    encryptedBlob?: StringFilter<"VaultItem"> | string
    iv?: StringFilter<"VaultItem"> | string
    schemaVersion?: IntFilter<"VaultItem"> | number
    createdAt?: DateTimeFilter<"VaultItem"> | Date | string
    updatedAt?: DateTimeFilter<"VaultItem"> | Date | string
  }

  export type UserCreateWithoutVaultProfileInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vaultItems?: VaultItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVaultProfileInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vaultItems?: VaultItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVaultProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVaultProfileInput, UserUncheckedCreateWithoutVaultProfileInput>
  }

  export type UserUpsertWithoutVaultProfileInput = {
    update: XOR<UserUpdateWithoutVaultProfileInput, UserUncheckedUpdateWithoutVaultProfileInput>
    create: XOR<UserCreateWithoutVaultProfileInput, UserUncheckedCreateWithoutVaultProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVaultProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVaultProfileInput, UserUncheckedUpdateWithoutVaultProfileInput>
  }

  export type UserUpdateWithoutVaultProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaultItems?: VaultItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVaultProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaultItems?: VaultItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVaultItemsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vaultProfile?: VaultProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVaultItemsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vaultProfile?: VaultProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVaultItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVaultItemsInput, UserUncheckedCreateWithoutVaultItemsInput>
  }

  export type UserUpsertWithoutVaultItemsInput = {
    update: XOR<UserUpdateWithoutVaultItemsInput, UserUncheckedUpdateWithoutVaultItemsInput>
    create: XOR<UserCreateWithoutVaultItemsInput, UserUncheckedCreateWithoutVaultItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVaultItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVaultItemsInput, UserUncheckedUpdateWithoutVaultItemsInput>
  }

  export type UserUpdateWithoutVaultItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaultProfile?: VaultProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVaultItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vaultProfile?: VaultProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VaultItemCreateManyUserInput = {
    id?: string
    name: string
    encryptedBlob: string
    iv: string
    schemaVersion?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VaultItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedBlob?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    schemaVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedBlob?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    schemaVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaultItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    encryptedBlob?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    schemaVersion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VaultProfileDefaultArgs instead
     */
    export type VaultProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VaultProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VaultItemDefaultArgs instead
     */
    export type VaultItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VaultItemDefaultArgs<ExtArgs>

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