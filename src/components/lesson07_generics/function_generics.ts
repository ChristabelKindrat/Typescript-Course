export function ToString<T> (data: T): string | undefined{
    if (Array.isArray(data)){
        return data.toString()
    };
    switch (typeof data){
        case "string":
            return data;
        case "number":
        case "symbol":
        case "bigint":
        case "boolean":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
ToString(2);
ToString('string');
ToString(true);
ToString([1,2,3,4]);
ToString({key : 'hello'});