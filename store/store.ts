interface Gasto {
  nome: string;
  valor: number;
}

let lista: Gasto[] = [];
let listeners: ((lista: Gasto[]) => void)[] = [];

export const addGasto = (gasto: Gasto) => {
  lista = [...lista, gasto];
  listeners.forEach((l) => l(lista));
};

export const getLista = () => lista;

export const getTotal = () => {
  return lista.reduce((acc, item) => acc + item.valor, 0);
};

export const subscribe = (callback: (lista: Gasto[]) => void) => {
  listeners.push(callback);

  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
};