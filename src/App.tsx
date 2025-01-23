/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type SortOrder = 'alphabetical' | 'length' | '';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<string[]>(goodsFromServer);
  const [sortOrder, setSortOrder] = useState<SortOrder>('');
  const [isReversed, setIsReversed] = useState<boolean>(false);

  const sortAlphabetically = (): void => {
    const sortedGoods = [...goods].sort((a, b) => a.localeCompare(b));
    setGoods(sortedGoods);
    setSortOrder('alphabetical');
    setIsReversed(false);
  };

  const sortByLength = (): void => {
    const sortedGoods = [...goods].sort((a, b) => a.length - b.length);
    setGoods(sortedGoods);
    setSortOrder('length');
    setIsReversed(false);
  };

  const reverseOrder = (): void => {
    const reversedGoods = [...goods].reverse();
    setGoods(reversedGoods);
    setIsReversed(!isReversed);
  };

  const resetOrder = (): void => {
    setGoods(goodsFromServer);
    setSortOrder('');
    setIsReversed(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortOrder === 'alphabetical' ? '' : 'is-light'}`}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sortOrder === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          onClick={reverseOrder}
        >
          Reverse
        </button>

        {(sortOrder || isReversed) && (
          <button
            type="button"
            className="button is-danger"
            onClick={resetOrder}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map((good) => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
