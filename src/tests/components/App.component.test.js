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
    await waitFor(() => expect(container.querySelector('.hero-row')).not.toBeNull());
  });

  it('renders heroes table', () => {
    expect(container.querySelector('.heroes-table-table-container')).not.toBeNull();
  });

  it('renders items inside heroes table', () => {
    expect(container.querySelectorAll('.hero-row').length).toBeGreaterThan(0);
  });

  it('displays heroes table initially ordered by name', () => {
    const heroes = container.querySelectorAll('.hero-row');
    const firstHero = heroes[0].querySelector('.hero-name').textContent.toLowerCase();
    const lastHero = heroes[heroes.length - 1]
      .querySelector('.hero-name')
      .textContent.toLowerCase();
    expect(firstHero.localeCompare(lastHero)).toBeLessThan(0);
  });

  it('renders filters component', () => {
    expect(container.querySelector('.all-heroes__filter')).not.toBeNull();
  });

  it('displays mobile heroes table on mobile view', async () => {
    fireEvent.resize(window, { target: { innerWidth: 500 } });
    await waitFor(() => expect(container.querySelector('.hero-mobile-card')).not.toBeNull());
  });

  it('makes filter expand on click on filter toggle element', () => {
    fireEvent.click(container.querySelector('.all-heroes__filter-toggle'));
    expect(container.querySelector('.all-heroes__filter-expanded')).not.toBeNull();
  });

  it('goes to hero profile page on click of hero row', () => {
    fireEvent.click(container.querySelector('.hero-row'));
    expect(container.querySelector('.hero-profile-page')).not.toBeNull();
  });
});
