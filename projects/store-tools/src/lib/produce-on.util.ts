import { ActionCreator, ActionType, on, ReducerTypes } from '@ngrx/store';
import produce from 'immer';

export function produceOn<State, Creators extends ActionCreator>(
  creators: Creators,
  reducer: (state: State, action: ActionType<Creators>) => void
): ReducerTypes<State, Creators[]> {
  return on(
    creators,
    (state, action) => produce(state, (draft) => reducer(draft as State, action)) as State
  ) as unknown as ReducerTypes<State, Creators[]>;
}
