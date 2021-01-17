export const isSimpleType = (value) => [
    'bigint',
    'boolean',
    'null',
    'number',
    'string',
    'symbol',
    'undefined'
].includes(typeof value) ? value  : undefined;