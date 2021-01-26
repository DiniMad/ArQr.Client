export function isKeyOf<T>(key: any, obj: T): key is keyof T {
    return key in obj;
}