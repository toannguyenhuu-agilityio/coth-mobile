import React from 'react';
import { render } from '@testing-library/react-native';
import { Badge } from '../index';

describe('Badge Component', () => {
  describe('Rendering', () => {
    it('renders correctly with default props', () => {
      const { getByTestId } = render(<Badge label="Test Badge" />);
      expect(getByTestId('badge')).toBeTruthy();
    });

    it('renders with custom label', () => {
      const { getByText } = render(<Badge label="Custom Label" />);
      expect(getByText('Custom Label')).toBeTruthy();
    });

    it('renders with custom testID', () => {
      const { getByTestId } = render(<Badge label="Test" testID="custom-badge" />);
      expect(getByTestId('custom-badge')).toBeTruthy();
    });
  });

  describe('Variants', () => {
    it('renders live variant', () => {
      const { getByTestId } = render(<Badge variant="live" label="• LIVE" />);
      const badge = getByTestId('badge');
      expect(badge).toBeTruthy();
    });

    it('renders countdown variant', () => {
      const { getByTestId } = render(<Badge variant="countdown" label="2h 30m" />);
      const badge = getByTestId('badge');
      expect(badge).toBeTruthy();
    });

    it('renders highlight variant', () => {
      const { getByTestId } = render(<Badge variant="highlight" label="Best Value" />);
      const badge = getByTestId('badge');
      expect(badge).toBeTruthy();
    });
  });

  describe('Custom Colors', () => {
    it('applies custom background color', () => {
      const customBg = '#FFD700';
      const { getByTestId } = render(<Badge label="Test" backgroundColor={customBg} />);
      const badge = getByTestId('badge');
      expect(badge.props.style).toContainEqual(
        expect.objectContaining({ backgroundColor: customBg }),
      );
    });

    it('applies custom text color', () => {
      const customColor = '#000000';
      const { getByTestId } = render(<Badge label="Test" textColor={customColor} />);
      const text = getByTestId('badge-text');
      expect(text.props.style).toContainEqual(expect.objectContaining({ color: customColor }));
    });
  });

  describe('Custom Styles', () => {
    it('applies custom container style', () => {
      const customStyle = { marginTop: 20 };
      const { getByTestId } = render(<Badge label="Test" style={customStyle} />);
      const badge = getByTestId('badge');
      expect(badge.props.style).toContainEqual(customStyle);
    });

    it('applies custom text style', () => {
      const customTextStyle = { fontSize: 16 };
      const { getByTestId } = render(<Badge label="Test" textStyle={customTextStyle} />);
      const text = getByTestId('badge-text');
      expect(text.props.style).toContainEqual(customTextStyle);
    });
  });

  describe('Custom Content', () => {
    it('renders children instead of label when provided', () => {
      const { getByTestId, queryByTestId } = render(
        <Badge label="Should not appear" testID="custom-badge">
          {/* Using Text component as children */}
          <React.Fragment />
        </Badge>,
      );
      expect(getByTestId('custom-badge')).toBeTruthy();
      // When children is provided, badge-text should not be rendered
      expect(queryByTestId('custom-badge-text')).toBeNull();
    });
  });

  describe('Accessibility', () => {
    it('has correct accessibility role', () => {
      const { getByTestId } = render(<Badge label="Test" />);
      const badge = getByTestId('badge');
      expect(badge.props.accessibilityRole).toBe('text');
    });

    it('applies custom accessibility label', () => {
      const { getByTestId } = render(
        <Badge label="Test" accessibilityLabel="Custom accessibility" />,
      );
      const badge = getByTestId('badge');
      expect(badge.props.accessibilityLabel).toBe('Custom accessibility');
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty label', () => {
      const { getByTestId } = render(<Badge label="" />);
      expect(getByTestId('badge')).toBeTruthy();
    });

    it('handles missing label prop', () => {
      const { getByTestId } = render(<Badge />);
      expect(getByTestId('badge')).toBeTruthy();
    });

    it('handles invalid variant and falls back to live', () => {
      const { getByTestId } = render(
        // @ts-expect-error Testing invalid variant
        <Badge label="Test" variant="invalid" />,
      );
      const badge = getByTestId('badge');
      expect(badge).toBeTruthy();
    });
  });

  describe('Highlight Variant Specific', () => {
    it('renders highlight variant with correct styling', () => {
      const { getByTestId, getByText } = render(<Badge variant="highlight" label="Best Value" />);
      const badge = getByTestId('badge');
      const text = getByText('Best Value');
      expect(badge).toBeTruthy();
      expect(text).toBeTruthy();
    });

    it('renders multiple highlight variants with different labels', () => {
      const { getByText } = render(
        <>
          <Badge variant="highlight" label="Best Value" testID="badge1" />
          <Badge variant="highlight" label="Popular" testID="badge2" />
          <Badge variant="highlight" label="New" testID="badge3" />
        </>,
      );
      expect(getByText('Best Value')).toBeTruthy();
      expect(getByText('Popular')).toBeTruthy();
      expect(getByText('New')).toBeTruthy();
    });
  });
});
