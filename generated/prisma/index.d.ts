
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
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model DeviceState
 * 
 */
export type DeviceState = $Result.DefaultSelection<Prisma.$DeviceStatePayload>
/**
 * Model MachineState
 * 
 */
export type MachineState = $Result.DefaultSelection<Prisma.$MachineStatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Devices
 * const devices = await prisma.device.findMany()
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
   * // Fetch zero or more Devices
   * const devices = await prisma.device.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceState`: Exposes CRUD operations for the **DeviceState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceStates
    * const deviceStates = await prisma.deviceState.findMany()
    * ```
    */
  get deviceState(): Prisma.DeviceStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.machineState`: Exposes CRUD operations for the **MachineState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MachineStates
    * const machineStates = await prisma.machineState.findMany()
    * ```
    */
  get machineState(): Prisma.MachineStateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Device: 'Device',
    DeviceState: 'DeviceState',
    MachineState: 'MachineState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "device" | "deviceState" | "machineState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      DeviceState: {
        payload: Prisma.$DeviceStatePayload<ExtArgs>
        fields: Prisma.DeviceStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>
          }
          findFirst: {
            args: Prisma.DeviceStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>
          }
          findMany: {
            args: Prisma.DeviceStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>[]
          }
          create: {
            args: Prisma.DeviceStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>
          }
          createMany: {
            args: Prisma.DeviceStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>[]
          }
          delete: {
            args: Prisma.DeviceStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>
          }
          update: {
            args: Prisma.DeviceStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>
          }
          deleteMany: {
            args: Prisma.DeviceStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>[]
          }
          upsert: {
            args: Prisma.DeviceStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceStatePayload>
          }
          aggregate: {
            args: Prisma.DeviceStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceState>
          }
          groupBy: {
            args: Prisma.DeviceStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceStateCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceStateCountAggregateOutputType> | number
          }
        }
      }
      MachineState: {
        payload: Prisma.$MachineStatePayload<ExtArgs>
        fields: Prisma.MachineStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MachineStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MachineStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>
          }
          findFirst: {
            args: Prisma.MachineStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MachineStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>
          }
          findMany: {
            args: Prisma.MachineStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>[]
          }
          create: {
            args: Prisma.MachineStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>
          }
          createMany: {
            args: Prisma.MachineStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MachineStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>[]
          }
          delete: {
            args: Prisma.MachineStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>
          }
          update: {
            args: Prisma.MachineStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>
          }
          deleteMany: {
            args: Prisma.MachineStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MachineStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MachineStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>[]
          }
          upsert: {
            args: Prisma.MachineStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineStatePayload>
          }
          aggregate: {
            args: Prisma.MachineStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachineState>
          }
          groupBy: {
            args: Prisma.MachineStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachineStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MachineStateCountArgs<ExtArgs>
            result: $Utils.Optional<MachineStateCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    device?: DeviceOmit
    deviceState?: DeviceStateOmit
    machineState?: MachineStateOmit
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
    | 'updateManyAndReturn'
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
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    device_state: number
    machine_state: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device_state?: boolean | DeviceCountOutputTypeCountDevice_stateArgs
    machine_state?: boolean | DeviceCountOutputTypeCountMachine_stateArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDevice_stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceStateWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountMachine_stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineStateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    device_id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    device_id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    device_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    device_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    device_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    device_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    device_id: string
    name: string | null
    created_at: Date
    updated_at: Date
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    device_state?: boolean | Device$device_stateArgs<ExtArgs>
    machine_state?: boolean | Device$machine_stateArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    device_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device_state?: boolean | Device$device_stateArgs<ExtArgs>
    machine_state?: boolean | Device$machine_stateArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      device_state: Prisma.$DeviceStatePayload<ExtArgs>[]
      machine_state: Prisma.$MachineStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      device_id: string
      name: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device_state<T extends Device$device_stateArgs<ExtArgs> = {}>(args?: Subset<T, Device$device_stateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    machine_state<T extends Device$machine_stateArgs<ExtArgs> = {}>(args?: Subset<T, Device$machine_stateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly device_id: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly created_at: FieldRef<"Device", 'DateTime'>
    readonly updated_at: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.device_state
   */
  export type Device$device_stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    where?: DeviceStateWhereInput
    orderBy?: DeviceStateOrderByWithRelationInput | DeviceStateOrderByWithRelationInput[]
    cursor?: DeviceStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceStateScalarFieldEnum | DeviceStateScalarFieldEnum[]
  }

  /**
   * Device.machine_state
   */
  export type Device$machine_stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    where?: MachineStateWhereInput
    orderBy?: MachineStateOrderByWithRelationInput | MachineStateOrderByWithRelationInput[]
    cursor?: MachineStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MachineStateScalarFieldEnum | MachineStateScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model DeviceState
   */

  export type AggregateDeviceState = {
    _count: DeviceStateCountAggregateOutputType | null
    _avg: DeviceStateAvgAggregateOutputType | null
    _sum: DeviceStateSumAggregateOutputType | null
    _min: DeviceStateMinAggregateOutputType | null
    _max: DeviceStateMaxAggregateOutputType | null
  }

  export type DeviceStateAvgAggregateOutputType = {
    id: number | null
  }

  export type DeviceStateSumAggregateOutputType = {
    id: number | null
  }

  export type DeviceStateMinAggregateOutputType = {
    id: number | null
    device_id: string | null
    temperature: string | null
    humidity: string | null
    phValue: string | null
    ecValue: string | null
    waterLevel: string | null
    created_at: Date | null
  }

  export type DeviceStateMaxAggregateOutputType = {
    id: number | null
    device_id: string | null
    temperature: string | null
    humidity: string | null
    phValue: string | null
    ecValue: string | null
    waterLevel: string | null
    created_at: Date | null
  }

  export type DeviceStateCountAggregateOutputType = {
    id: number
    device_id: number
    temperature: number
    humidity: number
    phValue: number
    ecValue: number
    waterLevel: number
    created_at: number
    _all: number
  }


  export type DeviceStateAvgAggregateInputType = {
    id?: true
  }

  export type DeviceStateSumAggregateInputType = {
    id?: true
  }

  export type DeviceStateMinAggregateInputType = {
    id?: true
    device_id?: true
    temperature?: true
    humidity?: true
    phValue?: true
    ecValue?: true
    waterLevel?: true
    created_at?: true
  }

  export type DeviceStateMaxAggregateInputType = {
    id?: true
    device_id?: true
    temperature?: true
    humidity?: true
    phValue?: true
    ecValue?: true
    waterLevel?: true
    created_at?: true
  }

  export type DeviceStateCountAggregateInputType = {
    id?: true
    device_id?: true
    temperature?: true
    humidity?: true
    phValue?: true
    ecValue?: true
    waterLevel?: true
    created_at?: true
    _all?: true
  }

  export type DeviceStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceState to aggregate.
     */
    where?: DeviceStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceStates to fetch.
     */
    orderBy?: DeviceStateOrderByWithRelationInput | DeviceStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceStates
    **/
    _count?: true | DeviceStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceStateMaxAggregateInputType
  }

  export type GetDeviceStateAggregateType<T extends DeviceStateAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceState[P]>
      : GetScalarType<T[P], AggregateDeviceState[P]>
  }




  export type DeviceStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceStateWhereInput
    orderBy?: DeviceStateOrderByWithAggregationInput | DeviceStateOrderByWithAggregationInput[]
    by: DeviceStateScalarFieldEnum[] | DeviceStateScalarFieldEnum
    having?: DeviceStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceStateCountAggregateInputType | true
    _avg?: DeviceStateAvgAggregateInputType
    _sum?: DeviceStateSumAggregateInputType
    _min?: DeviceStateMinAggregateInputType
    _max?: DeviceStateMaxAggregateInputType
  }

  export type DeviceStateGroupByOutputType = {
    id: number
    device_id: string
    temperature: string
    humidity: string
    phValue: string
    ecValue: string
    waterLevel: string
    created_at: Date
    _count: DeviceStateCountAggregateOutputType | null
    _avg: DeviceStateAvgAggregateOutputType | null
    _sum: DeviceStateSumAggregateOutputType | null
    _min: DeviceStateMinAggregateOutputType | null
    _max: DeviceStateMaxAggregateOutputType | null
  }

  type GetDeviceStateGroupByPayload<T extends DeviceStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceStateGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceStateGroupByOutputType[P]>
        }
      >
    >


  export type DeviceStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    temperature?: boolean
    humidity?: boolean
    phValue?: boolean
    ecValue?: boolean
    waterLevel?: boolean
    created_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceState"]>

  export type DeviceStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    temperature?: boolean
    humidity?: boolean
    phValue?: boolean
    ecValue?: boolean
    waterLevel?: boolean
    created_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceState"]>

  export type DeviceStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    temperature?: boolean
    humidity?: boolean
    phValue?: boolean
    ecValue?: boolean
    waterLevel?: boolean
    created_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceState"]>

  export type DeviceStateSelectScalar = {
    id?: boolean
    device_id?: boolean
    temperature?: boolean
    humidity?: boolean
    phValue?: boolean
    ecValue?: boolean
    waterLevel?: boolean
    created_at?: boolean
  }

  export type DeviceStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device_id" | "temperature" | "humidity" | "phValue" | "ecValue" | "waterLevel" | "created_at", ExtArgs["result"]["deviceState"]>
  export type DeviceStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DeviceStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceState"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      device_id: string
      temperature: string
      humidity: string
      phValue: string
      ecValue: string
      waterLevel: string
      created_at: Date
    }, ExtArgs["result"]["deviceState"]>
    composites: {}
  }

  type DeviceStateGetPayload<S extends boolean | null | undefined | DeviceStateDefaultArgs> = $Result.GetResult<Prisma.$DeviceStatePayload, S>

  type DeviceStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceStateCountAggregateInputType | true
    }

  export interface DeviceStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceState'], meta: { name: 'DeviceState' } }
    /**
     * Find zero or one DeviceState that matches the filter.
     * @param {DeviceStateFindUniqueArgs} args - Arguments to find a DeviceState
     * @example
     * // Get one DeviceState
     * const deviceState = await prisma.deviceState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceStateFindUniqueArgs>(args: SelectSubset<T, DeviceStateFindUniqueArgs<ExtArgs>>): Prisma__DeviceStateClient<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceStateFindUniqueOrThrowArgs} args - Arguments to find a DeviceState
     * @example
     * // Get one DeviceState
     * const deviceState = await prisma.deviceState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceStateFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceStateClient<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceStateFindFirstArgs} args - Arguments to find a DeviceState
     * @example
     * // Get one DeviceState
     * const deviceState = await prisma.deviceState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceStateFindFirstArgs>(args?: SelectSubset<T, DeviceStateFindFirstArgs<ExtArgs>>): Prisma__DeviceStateClient<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceStateFindFirstOrThrowArgs} args - Arguments to find a DeviceState
     * @example
     * // Get one DeviceState
     * const deviceState = await prisma.deviceState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceStateFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceStateClient<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceStates
     * const deviceStates = await prisma.deviceState.findMany()
     * 
     * // Get first 10 DeviceStates
     * const deviceStates = await prisma.deviceState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceStateWithIdOnly = await prisma.deviceState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceStateFindManyArgs>(args?: SelectSubset<T, DeviceStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceState.
     * @param {DeviceStateCreateArgs} args - Arguments to create a DeviceState.
     * @example
     * // Create one DeviceState
     * const DeviceState = await prisma.deviceState.create({
     *   data: {
     *     // ... data to create a DeviceState
     *   }
     * })
     * 
     */
    create<T extends DeviceStateCreateArgs>(args: SelectSubset<T, DeviceStateCreateArgs<ExtArgs>>): Prisma__DeviceStateClient<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceStates.
     * @param {DeviceStateCreateManyArgs} args - Arguments to create many DeviceStates.
     * @example
     * // Create many DeviceStates
     * const deviceState = await prisma.deviceState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceStateCreateManyArgs>(args?: SelectSubset<T, DeviceStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceStates and returns the data saved in the database.
     * @param {DeviceStateCreateManyAndReturnArgs} args - Arguments to create many DeviceStates.
     * @example
     * // Create many DeviceStates
     * const deviceState = await prisma.deviceState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceStates and only return the `id`
     * const deviceStateWithIdOnly = await prisma.deviceState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceStateCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceState.
     * @param {DeviceStateDeleteArgs} args - Arguments to delete one DeviceState.
     * @example
     * // Delete one DeviceState
     * const DeviceState = await prisma.deviceState.delete({
     *   where: {
     *     // ... filter to delete one DeviceState
     *   }
     * })
     * 
     */
    delete<T extends DeviceStateDeleteArgs>(args: SelectSubset<T, DeviceStateDeleteArgs<ExtArgs>>): Prisma__DeviceStateClient<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceState.
     * @param {DeviceStateUpdateArgs} args - Arguments to update one DeviceState.
     * @example
     * // Update one DeviceState
     * const deviceState = await prisma.deviceState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceStateUpdateArgs>(args: SelectSubset<T, DeviceStateUpdateArgs<ExtArgs>>): Prisma__DeviceStateClient<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceStates.
     * @param {DeviceStateDeleteManyArgs} args - Arguments to filter DeviceStates to delete.
     * @example
     * // Delete a few DeviceStates
     * const { count } = await prisma.deviceState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceStateDeleteManyArgs>(args?: SelectSubset<T, DeviceStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceStates
     * const deviceState = await prisma.deviceState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceStateUpdateManyArgs>(args: SelectSubset<T, DeviceStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceStates and returns the data updated in the database.
     * @param {DeviceStateUpdateManyAndReturnArgs} args - Arguments to update many DeviceStates.
     * @example
     * // Update many DeviceStates
     * const deviceState = await prisma.deviceState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceStates and only return the `id`
     * const deviceStateWithIdOnly = await prisma.deviceState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceStateUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceState.
     * @param {DeviceStateUpsertArgs} args - Arguments to update or create a DeviceState.
     * @example
     * // Update or create a DeviceState
     * const deviceState = await prisma.deviceState.upsert({
     *   create: {
     *     // ... data to create a DeviceState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceState we want to update
     *   }
     * })
     */
    upsert<T extends DeviceStateUpsertArgs>(args: SelectSubset<T, DeviceStateUpsertArgs<ExtArgs>>): Prisma__DeviceStateClient<$Result.GetResult<Prisma.$DeviceStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceStateCountArgs} args - Arguments to filter DeviceStates to count.
     * @example
     * // Count the number of DeviceStates
     * const count = await prisma.deviceState.count({
     *   where: {
     *     // ... the filter for the DeviceStates we want to count
     *   }
     * })
    **/
    count<T extends DeviceStateCountArgs>(
      args?: Subset<T, DeviceStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceStateAggregateArgs>(args: Subset<T, DeviceStateAggregateArgs>): Prisma.PrismaPromise<GetDeviceStateAggregateType<T>>

    /**
     * Group by DeviceState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceStateGroupByArgs} args - Group by arguments.
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
      T extends DeviceStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceStateGroupByArgs['orderBy'] }
        : { orderBy?: DeviceStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceState model
   */
  readonly fields: DeviceStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DeviceState model
   */
  interface DeviceStateFieldRefs {
    readonly id: FieldRef<"DeviceState", 'Int'>
    readonly device_id: FieldRef<"DeviceState", 'String'>
    readonly temperature: FieldRef<"DeviceState", 'String'>
    readonly humidity: FieldRef<"DeviceState", 'String'>
    readonly phValue: FieldRef<"DeviceState", 'String'>
    readonly ecValue: FieldRef<"DeviceState", 'String'>
    readonly waterLevel: FieldRef<"DeviceState", 'String'>
    readonly created_at: FieldRef<"DeviceState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceState findUnique
   */
  export type DeviceStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * Filter, which DeviceState to fetch.
     */
    where: DeviceStateWhereUniqueInput
  }

  /**
   * DeviceState findUniqueOrThrow
   */
  export type DeviceStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * Filter, which DeviceState to fetch.
     */
    where: DeviceStateWhereUniqueInput
  }

  /**
   * DeviceState findFirst
   */
  export type DeviceStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * Filter, which DeviceState to fetch.
     */
    where?: DeviceStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceStates to fetch.
     */
    orderBy?: DeviceStateOrderByWithRelationInput | DeviceStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceStates.
     */
    cursor?: DeviceStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceStates.
     */
    distinct?: DeviceStateScalarFieldEnum | DeviceStateScalarFieldEnum[]
  }

  /**
   * DeviceState findFirstOrThrow
   */
  export type DeviceStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * Filter, which DeviceState to fetch.
     */
    where?: DeviceStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceStates to fetch.
     */
    orderBy?: DeviceStateOrderByWithRelationInput | DeviceStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceStates.
     */
    cursor?: DeviceStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceStates.
     */
    distinct?: DeviceStateScalarFieldEnum | DeviceStateScalarFieldEnum[]
  }

  /**
   * DeviceState findMany
   */
  export type DeviceStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * Filter, which DeviceStates to fetch.
     */
    where?: DeviceStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceStates to fetch.
     */
    orderBy?: DeviceStateOrderByWithRelationInput | DeviceStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceStates.
     */
    cursor?: DeviceStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceStates.
     */
    skip?: number
    distinct?: DeviceStateScalarFieldEnum | DeviceStateScalarFieldEnum[]
  }

  /**
   * DeviceState create
   */
  export type DeviceStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceState.
     */
    data: XOR<DeviceStateCreateInput, DeviceStateUncheckedCreateInput>
  }

  /**
   * DeviceState createMany
   */
  export type DeviceStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceStates.
     */
    data: DeviceStateCreateManyInput | DeviceStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceState createManyAndReturn
   */
  export type DeviceStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceStates.
     */
    data: DeviceStateCreateManyInput | DeviceStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceState update
   */
  export type DeviceStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceState.
     */
    data: XOR<DeviceStateUpdateInput, DeviceStateUncheckedUpdateInput>
    /**
     * Choose, which DeviceState to update.
     */
    where: DeviceStateWhereUniqueInput
  }

  /**
   * DeviceState updateMany
   */
  export type DeviceStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceStates.
     */
    data: XOR<DeviceStateUpdateManyMutationInput, DeviceStateUncheckedUpdateManyInput>
    /**
     * Filter which DeviceStates to update
     */
    where?: DeviceStateWhereInput
    /**
     * Limit how many DeviceStates to update.
     */
    limit?: number
  }

  /**
   * DeviceState updateManyAndReturn
   */
  export type DeviceStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * The data used to update DeviceStates.
     */
    data: XOR<DeviceStateUpdateManyMutationInput, DeviceStateUncheckedUpdateManyInput>
    /**
     * Filter which DeviceStates to update
     */
    where?: DeviceStateWhereInput
    /**
     * Limit how many DeviceStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceState upsert
   */
  export type DeviceStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceState to update in case it exists.
     */
    where: DeviceStateWhereUniqueInput
    /**
     * In case the DeviceState found by the `where` argument doesn't exist, create a new DeviceState with this data.
     */
    create: XOR<DeviceStateCreateInput, DeviceStateUncheckedCreateInput>
    /**
     * In case the DeviceState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceStateUpdateInput, DeviceStateUncheckedUpdateInput>
  }

  /**
   * DeviceState delete
   */
  export type DeviceStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
    /**
     * Filter which DeviceState to delete.
     */
    where: DeviceStateWhereUniqueInput
  }

  /**
   * DeviceState deleteMany
   */
  export type DeviceStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceStates to delete
     */
    where?: DeviceStateWhereInput
    /**
     * Limit how many DeviceStates to delete.
     */
    limit?: number
  }

  /**
   * DeviceState without action
   */
  export type DeviceStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceState
     */
    select?: DeviceStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceState
     */
    omit?: DeviceStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceStateInclude<ExtArgs> | null
  }


  /**
   * Model MachineState
   */

  export type AggregateMachineState = {
    _count: MachineStateCountAggregateOutputType | null
    _avg: MachineStateAvgAggregateOutputType | null
    _sum: MachineStateSumAggregateOutputType | null
    _min: MachineStateMinAggregateOutputType | null
    _max: MachineStateMaxAggregateOutputType | null
  }

  export type MachineStateAvgAggregateOutputType = {
    id: number | null
  }

  export type MachineStateSumAggregateOutputType = {
    id: number | null
  }

  export type MachineStateMinAggregateOutputType = {
    id: number | null
    device_id: string | null
    water_pump: boolean | null
    acid_solution: boolean | null
    npk_solution: boolean | null
    created_at: Date | null
  }

  export type MachineStateMaxAggregateOutputType = {
    id: number | null
    device_id: string | null
    water_pump: boolean | null
    acid_solution: boolean | null
    npk_solution: boolean | null
    created_at: Date | null
  }

  export type MachineStateCountAggregateOutputType = {
    id: number
    device_id: number
    water_pump: number
    acid_solution: number
    npk_solution: number
    created_at: number
    _all: number
  }


  export type MachineStateAvgAggregateInputType = {
    id?: true
  }

  export type MachineStateSumAggregateInputType = {
    id?: true
  }

  export type MachineStateMinAggregateInputType = {
    id?: true
    device_id?: true
    water_pump?: true
    acid_solution?: true
    npk_solution?: true
    created_at?: true
  }

  export type MachineStateMaxAggregateInputType = {
    id?: true
    device_id?: true
    water_pump?: true
    acid_solution?: true
    npk_solution?: true
    created_at?: true
  }

  export type MachineStateCountAggregateInputType = {
    id?: true
    device_id?: true
    water_pump?: true
    acid_solution?: true
    npk_solution?: true
    created_at?: true
    _all?: true
  }

  export type MachineStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineState to aggregate.
     */
    where?: MachineStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineStates to fetch.
     */
    orderBy?: MachineStateOrderByWithRelationInput | MachineStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MachineStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MachineStates
    **/
    _count?: true | MachineStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MachineStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MachineStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineStateMaxAggregateInputType
  }

  export type GetMachineStateAggregateType<T extends MachineStateAggregateArgs> = {
        [P in keyof T & keyof AggregateMachineState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachineState[P]>
      : GetScalarType<T[P], AggregateMachineState[P]>
  }




  export type MachineStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineStateWhereInput
    orderBy?: MachineStateOrderByWithAggregationInput | MachineStateOrderByWithAggregationInput[]
    by: MachineStateScalarFieldEnum[] | MachineStateScalarFieldEnum
    having?: MachineStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineStateCountAggregateInputType | true
    _avg?: MachineStateAvgAggregateInputType
    _sum?: MachineStateSumAggregateInputType
    _min?: MachineStateMinAggregateInputType
    _max?: MachineStateMaxAggregateInputType
  }

  export type MachineStateGroupByOutputType = {
    id: number
    device_id: string
    water_pump: boolean
    acid_solution: boolean
    npk_solution: boolean
    created_at: Date
    _count: MachineStateCountAggregateOutputType | null
    _avg: MachineStateAvgAggregateOutputType | null
    _sum: MachineStateSumAggregateOutputType | null
    _min: MachineStateMinAggregateOutputType | null
    _max: MachineStateMaxAggregateOutputType | null
  }

  type GetMachineStateGroupByPayload<T extends MachineStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachineStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineStateGroupByOutputType[P]>
            : GetScalarType<T[P], MachineStateGroupByOutputType[P]>
        }
      >
    >


  export type MachineStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    water_pump?: boolean
    acid_solution?: boolean
    npk_solution?: boolean
    created_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machineState"]>

  export type MachineStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    water_pump?: boolean
    acid_solution?: boolean
    npk_solution?: boolean
    created_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machineState"]>

  export type MachineStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    water_pump?: boolean
    acid_solution?: boolean
    npk_solution?: boolean
    created_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["machineState"]>

  export type MachineStateSelectScalar = {
    id?: boolean
    device_id?: boolean
    water_pump?: boolean
    acid_solution?: boolean
    npk_solution?: boolean
    created_at?: boolean
  }

  export type MachineStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device_id" | "water_pump" | "acid_solution" | "npk_solution" | "created_at", ExtArgs["result"]["machineState"]>
  export type MachineStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type MachineStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type MachineStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $MachineStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MachineState"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      device_id: string
      water_pump: boolean
      acid_solution: boolean
      npk_solution: boolean
      created_at: Date
    }, ExtArgs["result"]["machineState"]>
    composites: {}
  }

  type MachineStateGetPayload<S extends boolean | null | undefined | MachineStateDefaultArgs> = $Result.GetResult<Prisma.$MachineStatePayload, S>

  type MachineStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MachineStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MachineStateCountAggregateInputType | true
    }

  export interface MachineStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MachineState'], meta: { name: 'MachineState' } }
    /**
     * Find zero or one MachineState that matches the filter.
     * @param {MachineStateFindUniqueArgs} args - Arguments to find a MachineState
     * @example
     * // Get one MachineState
     * const machineState = await prisma.machineState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MachineStateFindUniqueArgs>(args: SelectSubset<T, MachineStateFindUniqueArgs<ExtArgs>>): Prisma__MachineStateClient<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MachineState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MachineStateFindUniqueOrThrowArgs} args - Arguments to find a MachineState
     * @example
     * // Get one MachineState
     * const machineState = await prisma.machineState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MachineStateFindUniqueOrThrowArgs>(args: SelectSubset<T, MachineStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MachineStateClient<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MachineState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineStateFindFirstArgs} args - Arguments to find a MachineState
     * @example
     * // Get one MachineState
     * const machineState = await prisma.machineState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MachineStateFindFirstArgs>(args?: SelectSubset<T, MachineStateFindFirstArgs<ExtArgs>>): Prisma__MachineStateClient<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MachineState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineStateFindFirstOrThrowArgs} args - Arguments to find a MachineState
     * @example
     * // Get one MachineState
     * const machineState = await prisma.machineState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MachineStateFindFirstOrThrowArgs>(args?: SelectSubset<T, MachineStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MachineStateClient<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MachineStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MachineStates
     * const machineStates = await prisma.machineState.findMany()
     * 
     * // Get first 10 MachineStates
     * const machineStates = await prisma.machineState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machineStateWithIdOnly = await prisma.machineState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MachineStateFindManyArgs>(args?: SelectSubset<T, MachineStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MachineState.
     * @param {MachineStateCreateArgs} args - Arguments to create a MachineState.
     * @example
     * // Create one MachineState
     * const MachineState = await prisma.machineState.create({
     *   data: {
     *     // ... data to create a MachineState
     *   }
     * })
     * 
     */
    create<T extends MachineStateCreateArgs>(args: SelectSubset<T, MachineStateCreateArgs<ExtArgs>>): Prisma__MachineStateClient<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MachineStates.
     * @param {MachineStateCreateManyArgs} args - Arguments to create many MachineStates.
     * @example
     * // Create many MachineStates
     * const machineState = await prisma.machineState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MachineStateCreateManyArgs>(args?: SelectSubset<T, MachineStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MachineStates and returns the data saved in the database.
     * @param {MachineStateCreateManyAndReturnArgs} args - Arguments to create many MachineStates.
     * @example
     * // Create many MachineStates
     * const machineState = await prisma.machineState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MachineStates and only return the `id`
     * const machineStateWithIdOnly = await prisma.machineState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MachineStateCreateManyAndReturnArgs>(args?: SelectSubset<T, MachineStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MachineState.
     * @param {MachineStateDeleteArgs} args - Arguments to delete one MachineState.
     * @example
     * // Delete one MachineState
     * const MachineState = await prisma.machineState.delete({
     *   where: {
     *     // ... filter to delete one MachineState
     *   }
     * })
     * 
     */
    delete<T extends MachineStateDeleteArgs>(args: SelectSubset<T, MachineStateDeleteArgs<ExtArgs>>): Prisma__MachineStateClient<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MachineState.
     * @param {MachineStateUpdateArgs} args - Arguments to update one MachineState.
     * @example
     * // Update one MachineState
     * const machineState = await prisma.machineState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MachineStateUpdateArgs>(args: SelectSubset<T, MachineStateUpdateArgs<ExtArgs>>): Prisma__MachineStateClient<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MachineStates.
     * @param {MachineStateDeleteManyArgs} args - Arguments to filter MachineStates to delete.
     * @example
     * // Delete a few MachineStates
     * const { count } = await prisma.machineState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MachineStateDeleteManyArgs>(args?: SelectSubset<T, MachineStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MachineStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MachineStates
     * const machineState = await prisma.machineState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MachineStateUpdateManyArgs>(args: SelectSubset<T, MachineStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MachineStates and returns the data updated in the database.
     * @param {MachineStateUpdateManyAndReturnArgs} args - Arguments to update many MachineStates.
     * @example
     * // Update many MachineStates
     * const machineState = await prisma.machineState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MachineStates and only return the `id`
     * const machineStateWithIdOnly = await prisma.machineState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MachineStateUpdateManyAndReturnArgs>(args: SelectSubset<T, MachineStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MachineState.
     * @param {MachineStateUpsertArgs} args - Arguments to update or create a MachineState.
     * @example
     * // Update or create a MachineState
     * const machineState = await prisma.machineState.upsert({
     *   create: {
     *     // ... data to create a MachineState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MachineState we want to update
     *   }
     * })
     */
    upsert<T extends MachineStateUpsertArgs>(args: SelectSubset<T, MachineStateUpsertArgs<ExtArgs>>): Prisma__MachineStateClient<$Result.GetResult<Prisma.$MachineStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MachineStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineStateCountArgs} args - Arguments to filter MachineStates to count.
     * @example
     * // Count the number of MachineStates
     * const count = await prisma.machineState.count({
     *   where: {
     *     // ... the filter for the MachineStates we want to count
     *   }
     * })
    **/
    count<T extends MachineStateCountArgs>(
      args?: Subset<T, MachineStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MachineState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MachineStateAggregateArgs>(args: Subset<T, MachineStateAggregateArgs>): Prisma.PrismaPromise<GetMachineStateAggregateType<T>>

    /**
     * Group by MachineState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineStateGroupByArgs} args - Group by arguments.
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
      T extends MachineStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineStateGroupByArgs['orderBy'] }
        : { orderBy?: MachineStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MachineStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MachineState model
   */
  readonly fields: MachineStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MachineState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MachineStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MachineState model
   */
  interface MachineStateFieldRefs {
    readonly id: FieldRef<"MachineState", 'Int'>
    readonly device_id: FieldRef<"MachineState", 'String'>
    readonly water_pump: FieldRef<"MachineState", 'Boolean'>
    readonly acid_solution: FieldRef<"MachineState", 'Boolean'>
    readonly npk_solution: FieldRef<"MachineState", 'Boolean'>
    readonly created_at: FieldRef<"MachineState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MachineState findUnique
   */
  export type MachineStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * Filter, which MachineState to fetch.
     */
    where: MachineStateWhereUniqueInput
  }

  /**
   * MachineState findUniqueOrThrow
   */
  export type MachineStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * Filter, which MachineState to fetch.
     */
    where: MachineStateWhereUniqueInput
  }

  /**
   * MachineState findFirst
   */
  export type MachineStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * Filter, which MachineState to fetch.
     */
    where?: MachineStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineStates to fetch.
     */
    orderBy?: MachineStateOrderByWithRelationInput | MachineStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineStates.
     */
    cursor?: MachineStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineStates.
     */
    distinct?: MachineStateScalarFieldEnum | MachineStateScalarFieldEnum[]
  }

  /**
   * MachineState findFirstOrThrow
   */
  export type MachineStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * Filter, which MachineState to fetch.
     */
    where?: MachineStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineStates to fetch.
     */
    orderBy?: MachineStateOrderByWithRelationInput | MachineStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineStates.
     */
    cursor?: MachineStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineStates.
     */
    distinct?: MachineStateScalarFieldEnum | MachineStateScalarFieldEnum[]
  }

  /**
   * MachineState findMany
   */
  export type MachineStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * Filter, which MachineStates to fetch.
     */
    where?: MachineStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineStates to fetch.
     */
    orderBy?: MachineStateOrderByWithRelationInput | MachineStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MachineStates.
     */
    cursor?: MachineStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineStates.
     */
    skip?: number
    distinct?: MachineStateScalarFieldEnum | MachineStateScalarFieldEnum[]
  }

  /**
   * MachineState create
   */
  export type MachineStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * The data needed to create a MachineState.
     */
    data: XOR<MachineStateCreateInput, MachineStateUncheckedCreateInput>
  }

  /**
   * MachineState createMany
   */
  export type MachineStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MachineStates.
     */
    data: MachineStateCreateManyInput | MachineStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MachineState createManyAndReturn
   */
  export type MachineStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * The data used to create many MachineStates.
     */
    data: MachineStateCreateManyInput | MachineStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MachineState update
   */
  export type MachineStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * The data needed to update a MachineState.
     */
    data: XOR<MachineStateUpdateInput, MachineStateUncheckedUpdateInput>
    /**
     * Choose, which MachineState to update.
     */
    where: MachineStateWhereUniqueInput
  }

  /**
   * MachineState updateMany
   */
  export type MachineStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MachineStates.
     */
    data: XOR<MachineStateUpdateManyMutationInput, MachineStateUncheckedUpdateManyInput>
    /**
     * Filter which MachineStates to update
     */
    where?: MachineStateWhereInput
    /**
     * Limit how many MachineStates to update.
     */
    limit?: number
  }

  /**
   * MachineState updateManyAndReturn
   */
  export type MachineStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * The data used to update MachineStates.
     */
    data: XOR<MachineStateUpdateManyMutationInput, MachineStateUncheckedUpdateManyInput>
    /**
     * Filter which MachineStates to update
     */
    where?: MachineStateWhereInput
    /**
     * Limit how many MachineStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MachineState upsert
   */
  export type MachineStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * The filter to search for the MachineState to update in case it exists.
     */
    where: MachineStateWhereUniqueInput
    /**
     * In case the MachineState found by the `where` argument doesn't exist, create a new MachineState with this data.
     */
    create: XOR<MachineStateCreateInput, MachineStateUncheckedCreateInput>
    /**
     * In case the MachineState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MachineStateUpdateInput, MachineStateUncheckedUpdateInput>
  }

  /**
   * MachineState delete
   */
  export type MachineStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
    /**
     * Filter which MachineState to delete.
     */
    where: MachineStateWhereUniqueInput
  }

  /**
   * MachineState deleteMany
   */
  export type MachineStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineStates to delete
     */
    where?: MachineStateWhereInput
    /**
     * Limit how many MachineStates to delete.
     */
    limit?: number
  }

  /**
   * MachineState without action
   */
  export type MachineStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineState
     */
    select?: MachineStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineState
     */
    omit?: MachineStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineStateInclude<ExtArgs> | null
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


  export const DeviceScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DeviceStateScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    temperature: 'temperature',
    humidity: 'humidity',
    phValue: 'phValue',
    ecValue: 'ecValue',
    waterLevel: 'waterLevel',
    created_at: 'created_at'
  };

  export type DeviceStateScalarFieldEnum = (typeof DeviceStateScalarFieldEnum)[keyof typeof DeviceStateScalarFieldEnum]


  export const MachineStateScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    water_pump: 'water_pump',
    acid_solution: 'acid_solution',
    npk_solution: 'npk_solution',
    created_at: 'created_at'
  };

  export type MachineStateScalarFieldEnum = (typeof MachineStateScalarFieldEnum)[keyof typeof MachineStateScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    device_id?: StringFilter<"Device"> | string
    name?: StringNullableFilter<"Device"> | string | null
    created_at?: DateTimeFilter<"Device"> | Date | string
    updated_at?: DateTimeFilter<"Device"> | Date | string
    device_state?: DeviceStateListRelationFilter
    machine_state?: MachineStateListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    device_state?: DeviceStateOrderByRelationAggregateInput
    machine_state?: MachineStateOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    device_id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringNullableFilter<"Device"> | string | null
    created_at?: DateTimeFilter<"Device"> | Date | string
    updated_at?: DateTimeFilter<"Device"> | Date | string
    device_state?: DeviceStateListRelationFilter
    machine_state?: MachineStateListRelationFilter
  }, "id" | "device_id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    device_id?: StringWithAggregatesFilter<"Device"> | string
    name?: StringNullableWithAggregatesFilter<"Device"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type DeviceStateWhereInput = {
    AND?: DeviceStateWhereInput | DeviceStateWhereInput[]
    OR?: DeviceStateWhereInput[]
    NOT?: DeviceStateWhereInput | DeviceStateWhereInput[]
    id?: IntFilter<"DeviceState"> | number
    device_id?: StringFilter<"DeviceState"> | string
    temperature?: StringFilter<"DeviceState"> | string
    humidity?: StringFilter<"DeviceState"> | string
    phValue?: StringFilter<"DeviceState"> | string
    ecValue?: StringFilter<"DeviceState"> | string
    waterLevel?: StringFilter<"DeviceState"> | string
    created_at?: DateTimeFilter<"DeviceState"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type DeviceStateOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    phValue?: SortOrder
    ecValue?: SortOrder
    waterLevel?: SortOrder
    created_at?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeviceStateWhereInput | DeviceStateWhereInput[]
    OR?: DeviceStateWhereInput[]
    NOT?: DeviceStateWhereInput | DeviceStateWhereInput[]
    device_id?: StringFilter<"DeviceState"> | string
    temperature?: StringFilter<"DeviceState"> | string
    humidity?: StringFilter<"DeviceState"> | string
    phValue?: StringFilter<"DeviceState"> | string
    ecValue?: StringFilter<"DeviceState"> | string
    waterLevel?: StringFilter<"DeviceState"> | string
    created_at?: DateTimeFilter<"DeviceState"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type DeviceStateOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    phValue?: SortOrder
    ecValue?: SortOrder
    waterLevel?: SortOrder
    created_at?: SortOrder
    _count?: DeviceStateCountOrderByAggregateInput
    _avg?: DeviceStateAvgOrderByAggregateInput
    _max?: DeviceStateMaxOrderByAggregateInput
    _min?: DeviceStateMinOrderByAggregateInput
    _sum?: DeviceStateSumOrderByAggregateInput
  }

  export type DeviceStateScalarWhereWithAggregatesInput = {
    AND?: DeviceStateScalarWhereWithAggregatesInput | DeviceStateScalarWhereWithAggregatesInput[]
    OR?: DeviceStateScalarWhereWithAggregatesInput[]
    NOT?: DeviceStateScalarWhereWithAggregatesInput | DeviceStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeviceState"> | number
    device_id?: StringWithAggregatesFilter<"DeviceState"> | string
    temperature?: StringWithAggregatesFilter<"DeviceState"> | string
    humidity?: StringWithAggregatesFilter<"DeviceState"> | string
    phValue?: StringWithAggregatesFilter<"DeviceState"> | string
    ecValue?: StringWithAggregatesFilter<"DeviceState"> | string
    waterLevel?: StringWithAggregatesFilter<"DeviceState"> | string
    created_at?: DateTimeWithAggregatesFilter<"DeviceState"> | Date | string
  }

  export type MachineStateWhereInput = {
    AND?: MachineStateWhereInput | MachineStateWhereInput[]
    OR?: MachineStateWhereInput[]
    NOT?: MachineStateWhereInput | MachineStateWhereInput[]
    id?: IntFilter<"MachineState"> | number
    device_id?: StringFilter<"MachineState"> | string
    water_pump?: BoolFilter<"MachineState"> | boolean
    acid_solution?: BoolFilter<"MachineState"> | boolean
    npk_solution?: BoolFilter<"MachineState"> | boolean
    created_at?: DateTimeFilter<"MachineState"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type MachineStateOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrder
    water_pump?: SortOrder
    acid_solution?: SortOrder
    npk_solution?: SortOrder
    created_at?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type MachineStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MachineStateWhereInput | MachineStateWhereInput[]
    OR?: MachineStateWhereInput[]
    NOT?: MachineStateWhereInput | MachineStateWhereInput[]
    device_id?: StringFilter<"MachineState"> | string
    water_pump?: BoolFilter<"MachineState"> | boolean
    acid_solution?: BoolFilter<"MachineState"> | boolean
    npk_solution?: BoolFilter<"MachineState"> | boolean
    created_at?: DateTimeFilter<"MachineState"> | Date | string
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type MachineStateOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrder
    water_pump?: SortOrder
    acid_solution?: SortOrder
    npk_solution?: SortOrder
    created_at?: SortOrder
    _count?: MachineStateCountOrderByAggregateInput
    _avg?: MachineStateAvgOrderByAggregateInput
    _max?: MachineStateMaxOrderByAggregateInput
    _min?: MachineStateMinOrderByAggregateInput
    _sum?: MachineStateSumOrderByAggregateInput
  }

  export type MachineStateScalarWhereWithAggregatesInput = {
    AND?: MachineStateScalarWhereWithAggregatesInput | MachineStateScalarWhereWithAggregatesInput[]
    OR?: MachineStateScalarWhereWithAggregatesInput[]
    NOT?: MachineStateScalarWhereWithAggregatesInput | MachineStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MachineState"> | number
    device_id?: StringWithAggregatesFilter<"MachineState"> | string
    water_pump?: BoolWithAggregatesFilter<"MachineState"> | boolean
    acid_solution?: BoolWithAggregatesFilter<"MachineState"> | boolean
    npk_solution?: BoolWithAggregatesFilter<"MachineState"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"MachineState"> | Date | string
  }

  export type DeviceCreateInput = {
    device_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    device_state?: DeviceStateCreateNestedManyWithoutDeviceInput
    machine_state?: MachineStateCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    device_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    device_state?: DeviceStateUncheckedCreateNestedManyWithoutDeviceInput
    machine_state?: MachineStateUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_state?: DeviceStateUpdateManyWithoutDeviceNestedInput
    machine_state?: MachineStateUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_state?: DeviceStateUncheckedUpdateManyWithoutDeviceNestedInput
    machine_state?: MachineStateUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: number
    device_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceStateCreateInput = {
    temperature: string
    humidity: string
    phValue: string
    ecValue: string
    waterLevel: string
    created_at?: Date | string
    device: DeviceCreateNestedOneWithoutDevice_stateInput
  }

  export type DeviceStateUncheckedCreateInput = {
    id?: number
    device_id: string
    temperature: string
    humidity: string
    phValue: string
    ecValue: string
    waterLevel: string
    created_at?: Date | string
  }

  export type DeviceStateUpdateInput = {
    temperature?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    phValue?: StringFieldUpdateOperationsInput | string
    ecValue?: StringFieldUpdateOperationsInput | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutDevice_stateNestedInput
  }

  export type DeviceStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: StringFieldUpdateOperationsInput | string
    temperature?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    phValue?: StringFieldUpdateOperationsInput | string
    ecValue?: StringFieldUpdateOperationsInput | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceStateCreateManyInput = {
    id?: number
    device_id: string
    temperature: string
    humidity: string
    phValue: string
    ecValue: string
    waterLevel: string
    created_at?: Date | string
  }

  export type DeviceStateUpdateManyMutationInput = {
    temperature?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    phValue?: StringFieldUpdateOperationsInput | string
    ecValue?: StringFieldUpdateOperationsInput | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: StringFieldUpdateOperationsInput | string
    temperature?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    phValue?: StringFieldUpdateOperationsInput | string
    ecValue?: StringFieldUpdateOperationsInput | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineStateCreateInput = {
    water_pump: boolean
    acid_solution: boolean
    npk_solution: boolean
    created_at?: Date | string
    device: DeviceCreateNestedOneWithoutMachine_stateInput
  }

  export type MachineStateUncheckedCreateInput = {
    id?: number
    device_id: string
    water_pump: boolean
    acid_solution: boolean
    npk_solution: boolean
    created_at?: Date | string
  }

  export type MachineStateUpdateInput = {
    water_pump?: BoolFieldUpdateOperationsInput | boolean
    acid_solution?: BoolFieldUpdateOperationsInput | boolean
    npk_solution?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutMachine_stateNestedInput
  }

  export type MachineStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: StringFieldUpdateOperationsInput | string
    water_pump?: BoolFieldUpdateOperationsInput | boolean
    acid_solution?: BoolFieldUpdateOperationsInput | boolean
    npk_solution?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineStateCreateManyInput = {
    id?: number
    device_id: string
    water_pump: boolean
    acid_solution: boolean
    npk_solution: boolean
    created_at?: Date | string
  }

  export type MachineStateUpdateManyMutationInput = {
    water_pump?: BoolFieldUpdateOperationsInput | boolean
    acid_solution?: BoolFieldUpdateOperationsInput | boolean
    npk_solution?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: StringFieldUpdateOperationsInput | string
    water_pump?: BoolFieldUpdateOperationsInput | boolean
    acid_solution?: BoolFieldUpdateOperationsInput | boolean
    npk_solution?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DeviceStateListRelationFilter = {
    every?: DeviceStateWhereInput
    some?: DeviceStateWhereInput
    none?: DeviceStateWhereInput
  }

  export type MachineStateListRelationFilter = {
    every?: MachineStateWhereInput
    some?: MachineStateWhereInput
    none?: MachineStateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MachineStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type DeviceStateCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    phValue?: SortOrder
    ecValue?: SortOrder
    waterLevel?: SortOrder
    created_at?: SortOrder
  }

  export type DeviceStateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DeviceStateMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    phValue?: SortOrder
    ecValue?: SortOrder
    waterLevel?: SortOrder
    created_at?: SortOrder
  }

  export type DeviceStateMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    phValue?: SortOrder
    ecValue?: SortOrder
    waterLevel?: SortOrder
    created_at?: SortOrder
  }

  export type DeviceStateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MachineStateCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    water_pump?: SortOrder
    acid_solution?: SortOrder
    npk_solution?: SortOrder
    created_at?: SortOrder
  }

  export type MachineStateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MachineStateMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    water_pump?: SortOrder
    acid_solution?: SortOrder
    npk_solution?: SortOrder
    created_at?: SortOrder
  }

  export type MachineStateMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    water_pump?: SortOrder
    acid_solution?: SortOrder
    npk_solution?: SortOrder
    created_at?: SortOrder
  }

  export type MachineStateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DeviceStateCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceStateCreateWithoutDeviceInput, DeviceStateUncheckedCreateWithoutDeviceInput> | DeviceStateCreateWithoutDeviceInput[] | DeviceStateUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceStateCreateOrConnectWithoutDeviceInput | DeviceStateCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceStateCreateManyDeviceInputEnvelope
    connect?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
  }

  export type MachineStateCreateNestedManyWithoutDeviceInput = {
    create?: XOR<MachineStateCreateWithoutDeviceInput, MachineStateUncheckedCreateWithoutDeviceInput> | MachineStateCreateWithoutDeviceInput[] | MachineStateUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MachineStateCreateOrConnectWithoutDeviceInput | MachineStateCreateOrConnectWithoutDeviceInput[]
    createMany?: MachineStateCreateManyDeviceInputEnvelope
    connect?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
  }

  export type DeviceStateUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceStateCreateWithoutDeviceInput, DeviceStateUncheckedCreateWithoutDeviceInput> | DeviceStateCreateWithoutDeviceInput[] | DeviceStateUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceStateCreateOrConnectWithoutDeviceInput | DeviceStateCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceStateCreateManyDeviceInputEnvelope
    connect?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
  }

  export type MachineStateUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<MachineStateCreateWithoutDeviceInput, MachineStateUncheckedCreateWithoutDeviceInput> | MachineStateCreateWithoutDeviceInput[] | MachineStateUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MachineStateCreateOrConnectWithoutDeviceInput | MachineStateCreateOrConnectWithoutDeviceInput[]
    createMany?: MachineStateCreateManyDeviceInputEnvelope
    connect?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
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

  export type DeviceStateUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceStateCreateWithoutDeviceInput, DeviceStateUncheckedCreateWithoutDeviceInput> | DeviceStateCreateWithoutDeviceInput[] | DeviceStateUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceStateCreateOrConnectWithoutDeviceInput | DeviceStateCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceStateUpsertWithWhereUniqueWithoutDeviceInput | DeviceStateUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceStateCreateManyDeviceInputEnvelope
    set?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
    disconnect?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
    delete?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
    connect?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
    update?: DeviceStateUpdateWithWhereUniqueWithoutDeviceInput | DeviceStateUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceStateUpdateManyWithWhereWithoutDeviceInput | DeviceStateUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceStateScalarWhereInput | DeviceStateScalarWhereInput[]
  }

  export type MachineStateUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<MachineStateCreateWithoutDeviceInput, MachineStateUncheckedCreateWithoutDeviceInput> | MachineStateCreateWithoutDeviceInput[] | MachineStateUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MachineStateCreateOrConnectWithoutDeviceInput | MachineStateCreateOrConnectWithoutDeviceInput[]
    upsert?: MachineStateUpsertWithWhereUniqueWithoutDeviceInput | MachineStateUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: MachineStateCreateManyDeviceInputEnvelope
    set?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
    disconnect?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
    delete?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
    connect?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
    update?: MachineStateUpdateWithWhereUniqueWithoutDeviceInput | MachineStateUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: MachineStateUpdateManyWithWhereWithoutDeviceInput | MachineStateUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: MachineStateScalarWhereInput | MachineStateScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceStateUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceStateCreateWithoutDeviceInput, DeviceStateUncheckedCreateWithoutDeviceInput> | DeviceStateCreateWithoutDeviceInput[] | DeviceStateUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceStateCreateOrConnectWithoutDeviceInput | DeviceStateCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceStateUpsertWithWhereUniqueWithoutDeviceInput | DeviceStateUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceStateCreateManyDeviceInputEnvelope
    set?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
    disconnect?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
    delete?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
    connect?: DeviceStateWhereUniqueInput | DeviceStateWhereUniqueInput[]
    update?: DeviceStateUpdateWithWhereUniqueWithoutDeviceInput | DeviceStateUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceStateUpdateManyWithWhereWithoutDeviceInput | DeviceStateUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceStateScalarWhereInput | DeviceStateScalarWhereInput[]
  }

  export type MachineStateUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<MachineStateCreateWithoutDeviceInput, MachineStateUncheckedCreateWithoutDeviceInput> | MachineStateCreateWithoutDeviceInput[] | MachineStateUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MachineStateCreateOrConnectWithoutDeviceInput | MachineStateCreateOrConnectWithoutDeviceInput[]
    upsert?: MachineStateUpsertWithWhereUniqueWithoutDeviceInput | MachineStateUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: MachineStateCreateManyDeviceInputEnvelope
    set?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
    disconnect?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
    delete?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
    connect?: MachineStateWhereUniqueInput | MachineStateWhereUniqueInput[]
    update?: MachineStateUpdateWithWhereUniqueWithoutDeviceInput | MachineStateUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: MachineStateUpdateManyWithWhereWithoutDeviceInput | MachineStateUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: MachineStateScalarWhereInput | MachineStateScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutDevice_stateInput = {
    create?: XOR<DeviceCreateWithoutDevice_stateInput, DeviceUncheckedCreateWithoutDevice_stateInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDevice_stateInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutDevice_stateNestedInput = {
    create?: XOR<DeviceCreateWithoutDevice_stateInput, DeviceUncheckedCreateWithoutDevice_stateInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDevice_stateInput
    upsert?: DeviceUpsertWithoutDevice_stateInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutDevice_stateInput, DeviceUpdateWithoutDevice_stateInput>, DeviceUncheckedUpdateWithoutDevice_stateInput>
  }

  export type DeviceCreateNestedOneWithoutMachine_stateInput = {
    create?: XOR<DeviceCreateWithoutMachine_stateInput, DeviceUncheckedCreateWithoutMachine_stateInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutMachine_stateInput
    connect?: DeviceWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeviceUpdateOneRequiredWithoutMachine_stateNestedInput = {
    create?: XOR<DeviceCreateWithoutMachine_stateInput, DeviceUncheckedCreateWithoutMachine_stateInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutMachine_stateInput
    upsert?: DeviceUpsertWithoutMachine_stateInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutMachine_stateInput, DeviceUpdateWithoutMachine_stateInput>, DeviceUncheckedUpdateWithoutMachine_stateInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DeviceStateCreateWithoutDeviceInput = {
    temperature: string
    humidity: string
    phValue: string
    ecValue: string
    waterLevel: string
    created_at?: Date | string
  }

  export type DeviceStateUncheckedCreateWithoutDeviceInput = {
    id?: number
    temperature: string
    humidity: string
    phValue: string
    ecValue: string
    waterLevel: string
    created_at?: Date | string
  }

  export type DeviceStateCreateOrConnectWithoutDeviceInput = {
    where: DeviceStateWhereUniqueInput
    create: XOR<DeviceStateCreateWithoutDeviceInput, DeviceStateUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceStateCreateManyDeviceInputEnvelope = {
    data: DeviceStateCreateManyDeviceInput | DeviceStateCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type MachineStateCreateWithoutDeviceInput = {
    water_pump: boolean
    acid_solution: boolean
    npk_solution: boolean
    created_at?: Date | string
  }

  export type MachineStateUncheckedCreateWithoutDeviceInput = {
    id?: number
    water_pump: boolean
    acid_solution: boolean
    npk_solution: boolean
    created_at?: Date | string
  }

  export type MachineStateCreateOrConnectWithoutDeviceInput = {
    where: MachineStateWhereUniqueInput
    create: XOR<MachineStateCreateWithoutDeviceInput, MachineStateUncheckedCreateWithoutDeviceInput>
  }

  export type MachineStateCreateManyDeviceInputEnvelope = {
    data: MachineStateCreateManyDeviceInput | MachineStateCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type DeviceStateUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DeviceStateWhereUniqueInput
    update: XOR<DeviceStateUpdateWithoutDeviceInput, DeviceStateUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceStateCreateWithoutDeviceInput, DeviceStateUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceStateUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DeviceStateWhereUniqueInput
    data: XOR<DeviceStateUpdateWithoutDeviceInput, DeviceStateUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceStateUpdateManyWithWhereWithoutDeviceInput = {
    where: DeviceStateScalarWhereInput
    data: XOR<DeviceStateUpdateManyMutationInput, DeviceStateUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceStateScalarWhereInput = {
    AND?: DeviceStateScalarWhereInput | DeviceStateScalarWhereInput[]
    OR?: DeviceStateScalarWhereInput[]
    NOT?: DeviceStateScalarWhereInput | DeviceStateScalarWhereInput[]
    id?: IntFilter<"DeviceState"> | number
    device_id?: StringFilter<"DeviceState"> | string
    temperature?: StringFilter<"DeviceState"> | string
    humidity?: StringFilter<"DeviceState"> | string
    phValue?: StringFilter<"DeviceState"> | string
    ecValue?: StringFilter<"DeviceState"> | string
    waterLevel?: StringFilter<"DeviceState"> | string
    created_at?: DateTimeFilter<"DeviceState"> | Date | string
  }

  export type MachineStateUpsertWithWhereUniqueWithoutDeviceInput = {
    where: MachineStateWhereUniqueInput
    update: XOR<MachineStateUpdateWithoutDeviceInput, MachineStateUncheckedUpdateWithoutDeviceInput>
    create: XOR<MachineStateCreateWithoutDeviceInput, MachineStateUncheckedCreateWithoutDeviceInput>
  }

  export type MachineStateUpdateWithWhereUniqueWithoutDeviceInput = {
    where: MachineStateWhereUniqueInput
    data: XOR<MachineStateUpdateWithoutDeviceInput, MachineStateUncheckedUpdateWithoutDeviceInput>
  }

  export type MachineStateUpdateManyWithWhereWithoutDeviceInput = {
    where: MachineStateScalarWhereInput
    data: XOR<MachineStateUpdateManyMutationInput, MachineStateUncheckedUpdateManyWithoutDeviceInput>
  }

  export type MachineStateScalarWhereInput = {
    AND?: MachineStateScalarWhereInput | MachineStateScalarWhereInput[]
    OR?: MachineStateScalarWhereInput[]
    NOT?: MachineStateScalarWhereInput | MachineStateScalarWhereInput[]
    id?: IntFilter<"MachineState"> | number
    device_id?: StringFilter<"MachineState"> | string
    water_pump?: BoolFilter<"MachineState"> | boolean
    acid_solution?: BoolFilter<"MachineState"> | boolean
    npk_solution?: BoolFilter<"MachineState"> | boolean
    created_at?: DateTimeFilter<"MachineState"> | Date | string
  }

  export type DeviceCreateWithoutDevice_stateInput = {
    device_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    machine_state?: MachineStateCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutDevice_stateInput = {
    id?: number
    device_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    machine_state?: MachineStateUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutDevice_stateInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDevice_stateInput, DeviceUncheckedCreateWithoutDevice_stateInput>
  }

  export type DeviceUpsertWithoutDevice_stateInput = {
    update: XOR<DeviceUpdateWithoutDevice_stateInput, DeviceUncheckedUpdateWithoutDevice_stateInput>
    create: XOR<DeviceCreateWithoutDevice_stateInput, DeviceUncheckedCreateWithoutDevice_stateInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutDevice_stateInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutDevice_stateInput, DeviceUncheckedUpdateWithoutDevice_stateInput>
  }

  export type DeviceUpdateWithoutDevice_stateInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    machine_state?: MachineStateUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutDevice_stateInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    machine_state?: MachineStateUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutMachine_stateInput = {
    device_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    device_state?: DeviceStateCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutMachine_stateInput = {
    id?: number
    device_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    device_state?: DeviceStateUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutMachine_stateInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutMachine_stateInput, DeviceUncheckedCreateWithoutMachine_stateInput>
  }

  export type DeviceUpsertWithoutMachine_stateInput = {
    update: XOR<DeviceUpdateWithoutMachine_stateInput, DeviceUncheckedUpdateWithoutMachine_stateInput>
    create: XOR<DeviceCreateWithoutMachine_stateInput, DeviceUncheckedCreateWithoutMachine_stateInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutMachine_stateInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutMachine_stateInput, DeviceUncheckedUpdateWithoutMachine_stateInput>
  }

  export type DeviceUpdateWithoutMachine_stateInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_state?: DeviceStateUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutMachine_stateInput = {
    id?: IntFieldUpdateOperationsInput | number
    device_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device_state?: DeviceStateUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceStateCreateManyDeviceInput = {
    id?: number
    temperature: string
    humidity: string
    phValue: string
    ecValue: string
    waterLevel: string
    created_at?: Date | string
  }

  export type MachineStateCreateManyDeviceInput = {
    id?: number
    water_pump: boolean
    acid_solution: boolean
    npk_solution: boolean
    created_at?: Date | string
  }

  export type DeviceStateUpdateWithoutDeviceInput = {
    temperature?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    phValue?: StringFieldUpdateOperationsInput | string
    ecValue?: StringFieldUpdateOperationsInput | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceStateUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperature?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    phValue?: StringFieldUpdateOperationsInput | string
    ecValue?: StringFieldUpdateOperationsInput | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceStateUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    temperature?: StringFieldUpdateOperationsInput | string
    humidity?: StringFieldUpdateOperationsInput | string
    phValue?: StringFieldUpdateOperationsInput | string
    ecValue?: StringFieldUpdateOperationsInput | string
    waterLevel?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineStateUpdateWithoutDeviceInput = {
    water_pump?: BoolFieldUpdateOperationsInput | boolean
    acid_solution?: BoolFieldUpdateOperationsInput | boolean
    npk_solution?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineStateUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    water_pump?: BoolFieldUpdateOperationsInput | boolean
    acid_solution?: BoolFieldUpdateOperationsInput | boolean
    npk_solution?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MachineStateUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    water_pump?: BoolFieldUpdateOperationsInput | boolean
    acid_solution?: BoolFieldUpdateOperationsInput | boolean
    npk_solution?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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