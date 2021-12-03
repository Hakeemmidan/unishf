import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('On All Heroes page', () => {
  let container;

  beforeEach(async () => {
    ({ container } = render(<App />));
    await waitFor(() =>
      expect(container.querySelector('[data-testid="heroes-table-row"]')).not.toBeNull()
    );
  });

  it('renders heroes table', () => {
    expect(container.querySelector('[data-testid="heroes-table"]')).not.toBeNull();
  });

  it('renders items inside heroes table', () => {
    expect(container.querySelectorAll('[data-testid="heroes-table-row"]').length).toBeGreaterThan(
      0
    );
  });

  it('displays heroes table initially ordered by name', () => {
    const heroes = container.querySelectorAll('[data-testid="heroes-table-row"]');
    const firstHero = heroes[0]
      .querySelector('[data-testid="hero-name"]')
      .textContent.toLowerCase();
    const lastHero = heroes[heroes.length - 1]
      .querySelector('[data-testid="hero-name"]')
      .textContent.toLowerCase();
    expect(firstHero.localeCompare(lastHero)).toBeLessThan(0);
  });

  it('renders filters component', () => {
    expect(container.querySelector('[data-testid="heroes-filter-container"')).not.toBeNull();
  });

  it('displays mobile heroes table on mobile view', async () => {
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    await waitFor(() =>
      expect(container.querySelector('[data-testid="mobile-heroes-table"]')).not.toBeNull()
    );
  });
});
