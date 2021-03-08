type Check<T> = T extends string? boolean : number;
// T가 string이면 boolean되고 아니면 number

type Type = Check<string>;

type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'Function'
    : 'object';

type T0 = TypeName<string>; // string

type T2 = TypeName<()=>void>; // function