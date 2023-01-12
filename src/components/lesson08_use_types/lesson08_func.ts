interface IData {
    group: number;
    name: string;
}

const data: IData[] = [
    {group: 1, name: 'A'},
    {group: 1, name: 'B'},
    {group: 2, name: 'C'}
];

interface IGroup<T> {
    [key: string]: T[];
}

type key = string | number | any

export function Group<T extends Record<key, any>>(arr: T[], key: keyof T): IGroup<T> {
    return arr.reduce<IGroup<T>>((map: IGroup<T>, item) => {
        let curEl = map[item[key]];
        if (Array.isArray(curEl)) {
            curEl.push(item)
        } else {
            curEl = [item]
        }
        map[item[key]] = curEl
        return map
    }, {});
}

const res= Group<IData>(data,'group');
console.log(res);