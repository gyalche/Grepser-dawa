import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Loading from '../../components/Loading';

describe('Loading test cases', () => {
  it('renders Loading component with no Skeletons when totalLoading prop is an empty array', () => {
    const { queryByTestId } = render(<Loading totalLoading={[]} />);
    // Verify that no Skeleton components are rendered
    const skeleton = queryByTestId('loading-skeleton');
    expect(skeleton).toBeNull();
  });

  it('renders Loading component with no Skeletons when totalLoading prop is undefined', () => {
    const { queryByTestId } = render(<Loading />);

    // Verify that no Skeleton components are rendered
    const skeleton = queryByTestId('loading-skeleton');
    expect(skeleton).toBeNull();
  });
});
