export interface Model {
    id: string;
    name?: string;
    xml: string;
}

export type ModelCollection = Model[];

const write: (id: string, model: Model) => void =
    (id, model) => {
        return localStorage.setItem(`model-${id}`, JSON.stringify(model))
    }

const read: (id: string) => Model =
    (id) => {
        const data = localStorage.getItem(`model-${id}`);
        if (data)
            return JSON.parse(data)
        else
            return null;
    }

const readAll: () => Model[] = () => {
    const res: Model[] = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) || "";
        if (key.startsWith("model")) {
            res.push(read(key.replace("model-", "")))
        }
    }

    return res;
}

export const modelRepository = {
    read,
    readAll,
    write
}

