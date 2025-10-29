import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { BookChapterAccordion } from './index';

describe('BookChapterAccordion', () => {
  it('renders correctly with required props', () => {
    const { getByTestId } = render(<BookChapterAccordion bookName="Genesis" chapterCount={50} />);

    expect(getByTestId('book-chapter-accordion')).toBeTruthy();
  });

  it('displays book name in accordion title', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={true} />,
    );

    const title = getByTestId('book-chapter-accordion-title');
    expect(title.props.children).toBe('Genesis');
  });

  it('renders correct number of chapter buttons', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={true} />,
    );

    for (let i = 1; i <= 50; i++) {
      expect(getByTestId(`book-chapter-accordion-chapter-${i}`)).toBeTruthy();
    }
  });

  it('calls onChapterPress when chapter button is pressed', () => {
    const onChapterPress = jest.fn();
    const { getByTestId } = render(
      <BookChapterAccordion
        bookName="Genesis"
        chapterCount={50}
        defaultExpanded={true}
        onChapterPress={onChapterPress}
      />,
    );

    fireEvent.press(getByTestId('book-chapter-accordion-chapter-1'));
    expect(onChapterPress).toHaveBeenCalledWith(1);

    fireEvent.press(getByTestId('book-chapter-accordion-chapter-25'));
    expect(onChapterPress).toHaveBeenCalledWith(25);
  });

  it('displays correct chapter numbers', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={10} defaultExpanded={true} />,
    );

    for (let i = 1; i <= 10; i++) {
      const chapterText = getByTestId(`book-chapter-accordion-chapter-text-${i}`);
      expect(chapterText.props.children).toBe(i);
    }
  });

  it('starts collapsed by default', () => {
    const { queryByTestId } = render(<BookChapterAccordion bookName="Genesis" chapterCount={50} />);

    expect(queryByTestId('book-chapter-accordion-grid')).toBeNull();
  });

  it('starts expanded when defaultExpanded is true', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={true} />,
    );

    expect(getByTestId('book-chapter-accordion-grid')).toBeTruthy();
  });

  it('calls onExpandedChange when accordion is toggled', () => {
    const onExpandedChange = jest.fn();
    const { getByTestId } = render(
      <BookChapterAccordion
        bookName="Genesis"
        chapterCount={50}
        onExpandedChange={onExpandedChange}
      />,
    );

    fireEvent.press(getByTestId('book-chapter-accordion-header'));
    expect(onExpandedChange).toHaveBeenCalledWith(true);
  });

  it('handles single chapter book', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Obadiah" chapterCount={1} defaultExpanded={true} />,
    );

    expect(getByTestId('book-chapter-accordion-chapter-1')).toBeTruthy();
    expect(() => getByTestId('book-chapter-accordion-chapter-2')).toThrow();
  });

  it('handles many chapters', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Psalms" chapterCount={150} defaultExpanded={true} />,
    );

    expect(getByTestId('book-chapter-accordion-chapter-1')).toBeTruthy();
    expect(getByTestId('book-chapter-accordion-chapter-150')).toBeTruthy();
  });

  it('applies custom testID', () => {
    const { getByTestId } = render(
      <BookChapterAccordion
        bookName="Genesis"
        chapterCount={50}
        testID="custom-accordion"
        defaultExpanded={true}
      />,
    );

    expect(getByTestId('custom-accordion')).toBeTruthy();
    expect(getByTestId('custom-accordion-grid')).toBeTruthy();
    expect(getByTestId('custom-accordion-chapter-1')).toBeTruthy();
  });

  it('renders grid when expanded', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={true} />,
    );

    expect(getByTestId('book-chapter-accordion-grid')).toBeTruthy();
  });

  it('does not render grid when collapsed', () => {
    const { queryByTestId } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={false} />,
    );

    expect(queryByTestId('book-chapter-accordion-grid')).toBeNull();
  });

  it('handles controlled expanded state', () => {
    const { getByTestId, rerender } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={50} expanded={false} />,
    );

    expect(() => getByTestId('book-chapter-accordion-grid')).toThrow();

    rerender(<BookChapterAccordion bookName="Genesis" chapterCount={50} expanded={true} />);

    expect(getByTestId('book-chapter-accordion-grid')).toBeTruthy();
  });

  it('renders all chapters for small books', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Philemon" chapterCount={1} defaultExpanded={true} />,
    );

    expect(getByTestId('book-chapter-accordion-chapter-1')).toBeTruthy();
  });

  it('renders all chapters for medium books', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Romans" chapterCount={16} defaultExpanded={true} />,
    );

    for (let i = 1; i <= 16; i++) {
      expect(getByTestId(`book-chapter-accordion-chapter-${i}`)).toBeTruthy();
    }
  });

  it('handles different book names', () => {
    const { getByTestId, rerender } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={true} />,
    );

    expect(getByTestId('book-chapter-accordion-title').props.children).toBe('Genesis');

    rerender(<BookChapterAccordion bookName="Exodus" chapterCount={40} defaultExpanded={true} />);

    expect(getByTestId('book-chapter-accordion-title').props.children).toBe('Exodus');
  });

  it('handles chapter press without handler', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={50} defaultExpanded={true} />,
    );

    expect(() => {
      fireEvent.press(getByTestId('book-chapter-accordion-chapter-1'));
    }).not.toThrow();
  });

  it('applies custom container style', () => {
    const customStyle = { backgroundColor: '#FF0000' };
    const { getByTestId } = render(
      <BookChapterAccordion
        bookName="Genesis"
        chapterCount={50}
        containerStyle={customStyle}
        defaultExpanded={true}
      />,
    );

    const container = getByTestId('book-chapter-accordion');
    expect(container.props.style).toMatchObject(expect.arrayContaining([customStyle]));
  });

  it('handles zero chapters gracefully', () => {
    const { queryByTestId } = render(
      <BookChapterAccordion bookName="Empty" chapterCount={0} defaultExpanded={true} />,
    );

    expect(queryByTestId('book-chapter-accordion-chapter-1')).toBeNull();
  });

  it('renders chapters in correct order', () => {
    const { getByTestId } = render(
      <BookChapterAccordion bookName="Genesis" chapterCount={5} defaultExpanded={true} />,
    );

    const chapter1 = getByTestId('book-chapter-accordion-chapter-text-1');
    const chapter2 = getByTestId('book-chapter-accordion-chapter-text-2');
    const chapter3 = getByTestId('book-chapter-accordion-chapter-text-3');
    const chapter4 = getByTestId('book-chapter-accordion-chapter-text-4');
    const chapter5 = getByTestId('book-chapter-accordion-chapter-text-5');

    expect(chapter1.props.children).toBe(1);
    expect(chapter2.props.children).toBe(2);
    expect(chapter3.props.children).toBe(3);
    expect(chapter4.props.children).toBe(4);
    expect(chapter5.props.children).toBe(5);
  });
});
