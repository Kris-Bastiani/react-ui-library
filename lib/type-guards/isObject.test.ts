import fc from 'fast-check';
import { describe, test } from 'vitest';
import isObject from './isObject.ts';

describe('isObject', () => {
	test('returns true if provided with object', () => fc.assert(
		fc.property(
			fc.object(),
			(input) => isObject(input) === true,
		),
	));

	test('returns false if provided with primitive', () => fc.assert(
		fc.property(
			fc.oneof(fc.bigInt(), fc.boolean(), fc.date(), fc.float(), fc.string()),
			(input) => isObject(input) === false,
		),
	));

	test('returns false if provided with array', () => fc.assert(
		fc.property(
			fc.oneof(fc.array(fc.anything())),
			(input) => isObject(input) === false,
		),
	));

	test('returns false if provided with function', () => fc.assert(
		fc.property(
			fc.oneof(fc.func(fc.anything())),
			(input) => isObject(input) === false,
		),
	));

	test('returns false if provided with null', () => isObject(null) === false);

	test('returns false if provided with undefined', () => isObject(undefined) === false);
});
