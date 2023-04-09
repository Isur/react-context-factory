import { PropsWithChildren, createContext, useState } from "react";
import { TaskFilters, TaskOrder } from "./TakFilterTypes";
import { UserFilters, UserOrder } from "./UserFilterTypes";

export type Filters = TaskFilters | UserFilters;
export type Orders = TaskOrder | UserOrder | undefined;
export type Search = string | undefined;

export interface FilterContextInterface<F extends Filters, O extends Orders> {
  filter?: F;
  setFilter: (filter: F) => void;
  search?: Search;
  setSearch: (search: Search) => void;
  order?: O;
  setOrder: (order: O) => void;
}

export function FilterContextFactory<F extends Filters, O extends Orders>(
  defaultFilter: F,
  defaultOrder: O
) {
  const Context = createContext<FilterContextInterface<F, O>>({
    filter: undefined,
    setFilter: (filter: F) => undefined,
    search: undefined,
    setSearch: (search: Search) => undefined,
    order: undefined,
    setOrder: (order: O) => undefined,
  });

  const Provider = ({ children }: PropsWithChildren) => {
    const [filter, setFilter] = useState<F>(defaultFilter);
    const [order, setOrder] = useState<O>(defaultOrder);
    const [search, setSearch] = useState<Search>();

    return (
      <Context.Provider
        value={{ filter, setFilter, search, setSearch, order, setOrder }}
      >
        {children}
      </Context.Provider>
    );
  };

  return {
    Context,
    Provider,
  };
}
