export interface Model {
    xml: string;
    name?: string;
    description?: string;
}

export type ModelCollection = {
    [id: string]: Model
};
