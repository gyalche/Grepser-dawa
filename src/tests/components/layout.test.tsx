import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it } from 'vitest';
import Layout from '../../Pages/Layout';

describe('Layout Component', () => {
  it('should render without crashing', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
  });

  it('should toggle drawer open/close', () => {
    const { getAllByLabelText } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const openDrawerButtons = getAllByLabelText('open drawer');
    const openDrawerButton = openDrawerButtons[0];
    fireEvent.click(openDrawerButton);
  });

  it('should navigate to different routes on sidebar item click', async () => {
    const { queryAllByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>
    );
    const workflowsLink = queryAllByText('Workflows')[0];
    expect(workflowsLink).toBeInTheDocument();

    // Click on 'Workflows' link
    fireEvent.click(workflowsLink);

    // Wait for navigation to '/workflow' to complete
    await waitFor(
      () => {
        expect(window.location.pathname).toBe('/workflow');
      },
      { timeout: 10000 }
    ); // Increase timeout as needed
  });
});
