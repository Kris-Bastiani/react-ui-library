const isObject = (value: unknown): value is Record<string, unknown> => (
	Object.prototype.toString.call(value) === '[object Object]'
);

export default isObject;
