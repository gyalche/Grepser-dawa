import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MyTable from '../../components/Table';

describe('<MyTable />', () => {
  const heading = ['Name', 'Phone', 'Email', 'Website', 'Address'];
  const headIcon = ['/path/to/icon1.svg', '/path/to/icon2.svg'];
  const data = [
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      website: 'www.example.com',
      address: '123 Street, City, Country',
    },
  ];

  it('renders table headers with correct styling', () => {
    const { getAllByRole } = render(
      <MyTable heading={heading} headIcon={headIcon} data={data} />
    );
    const headerCells = getAllByRole('columnheader');
    headerCells.forEach((cell) => {
      const cellStyles = window.getComputedStyle(cell);
      expect(cellStyles.backgroundColor).toBe('rgb(220, 226, 240)');
      expect(cellStyles.color).toBe('rgb(0, 0, 0)');
    });
  });

  it('renders table rows with alternating background color for odd rows', () => {
    const { getAllByRole } = render(
      <MyTable heading={heading} headIcon={headIcon} data={data} />
    );
    // Verify each table body row has the correct background color for odd rows
    const tableRows = getAllByRole('row');
    tableRows.forEach((row, index) => {
      if (index % 2 === 1) {
        const rowStyles = window.getComputedStyle(row);
        expect(rowStyles.backgroundColor).toBe('rgb(246, 245, 251)');
      }
    });
  });

  it('renders table rows with correct data when loading prop is false', () => {
    const { queryByTestId } = render(
      <MyTable
        heading={heading}
        headIcon={headIcon}
        data={data}
        loading={false}
      />
    );

    // Verify that Loading component is not rendered when loading prop is false
    const loadingComponent = queryByTestId('loading-component');
    expect(loadingComponent).toBeNull();
  });
});
