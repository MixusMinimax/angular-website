import Ajv from 'ajv'

const ajv = new Ajv({ useDefaults: true })

export interface ValidateFunction<T> extends Ajv.ValidateFunction {
    _t?: T // avoid unused parameter lint warnings
}

export function makeValidator<T>(schema: object): ValidateFunction<T> {
    return ajv.compile(schema)
}

export function isValid<T>(
    validator: ValidateFunction<T>,
    candidate: any
): candidate is T {
    return validator(candidate) === true
}
