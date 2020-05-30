
export interface IPizzaItem {
    size: PizzaSizeEnum;
    /**
     * A small hack for imitating a different model returned from server,
     * for the simplicity sake the same interface was used.
     * In real life the server model may vary from the form model.
     * In this case you need to maintain both the server model interface and the client form interface.
     */
    toppings: IToppingItem[] | PizzaToppingsEnum[];
}

export interface IToppingItem {
    name: PizzaToppingsEnum;
    selected: boolean;
}

export enum PizzaSizeEnum {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3
}

export enum PizzaToppingsEnum {
    SAUSAGE = 'Sausage',
    PEPPERONI = 'Pepperoni',
    HAM = 'Ham',
    OLIVES = 'Olives',
    BACON = 'Bacon',
    CORN = 'Corn',
    PINEAPPLE = 'Pineapple',
    MUSHROOMS = 'Mushrooms'
}