import { uniqueId } from '@nx-react-code-sharing/shared-utils';
import produce from 'immer';
import create from 'zustand';

interface TodoProps {
  id: string;
  name: string;
  order: number;
}

interface TodoStoreProps {
  todos: TodoProps[];
  initialize: () => void;
  reset: () => void;
  addTodo: (name: string) => void;
}

const PREFIX_TODO_ID = 'todo';

export const useTodoStore = create<TodoStoreProps>((set, get) => ({
  todos: [],
  initialize: () => {},
  reset: () => {},
  addTodo: (name: string) => {
    const id = uniqueId('toast');
    set(
      produce<TodoStoreProps>((state) => {
        state.todos.push({
          name,
          id: uniqueId(PREFIX_TODO_ID),
          order: state.todos.length + 1,
        });
      })
    );
  },
}));

export const todosByOrderDESCSelector = (state: TodoStoreProps) =>
  state.todos.reverse();
export const todoTestSelector = (state: TodoStoreProps) => 'todoTest123';
