const data = [
    {id: 1, name: 'Lina'},
    {id: 2, name: 'Natali'},
    {id: 3, name: 'Ira'}
];

interface IData {
    id: number,
    name: string
}

export function SortObj<T extends IData>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
        }
    })
}

SortObj(data, 'desc');