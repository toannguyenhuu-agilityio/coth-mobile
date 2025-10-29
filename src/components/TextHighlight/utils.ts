import { TextSegment } from './TextSelectionHighlight';

/**
 * Convert plain text into segments for highlighting
 * Splits text by words and punctuation
 */
export const textToSegments = (text: string): TextSegment[] => {
  // Split by spaces while keeping the spaces
  const parts = text.split(/(\s+)/);

  return parts.map((part, index) => ({
    id: `segment-${index}`,
    text: part,
  }));
};

/**
 * Convert text into sentence segments
 * Each sentence becomes a selectable segment
 */
export const textToSentenceSegments = (text: string): TextSegment[] => {
  // Split by sentence endings while keeping them
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

  return sentences.map((sentence, index) => ({
    id: `sentence-${index}`,
    text: sentence.trim() + ' ',
  }));
};

/**
 * Convert text into paragraph segments
 * Each paragraph becomes a selectable segment
 */
export const textToParagraphSegments = (text: string): TextSegment[] => {
  const paragraphs = text.split(/\n\n+/);

  return paragraphs.map((paragraph, index) => ({
    id: `paragraph-${index}`,
    text: paragraph.trim(),
  }));
};

/**
 * Get the full text from segments
 */
export const segmentsToText = (segments: TextSegment[]): string => {
  return segments.map((seg) => seg.text).join('');
};

/**
 * Export highlights data for persistence
 */
export interface HighlightData {
  segmentId: string;
  text: string;
  highlightColor?: string;
  underlineColor?: string;
}

export const exportHighlights = (segments: TextSegment[]): HighlightData[] => {
  return segments
    .filter((seg) => seg.highlightColor || seg.underlineColor)
    .map((seg) => ({
      segmentId: seg.id,
      text: seg.text,
      highlightColor: seg.highlightColor,
      underlineColor: seg.underlineColor,
    }));
};

/**
 * Import highlights data from persistence
 */
export const importHighlights = (
  segments: TextSegment[],
  highlights: HighlightData[],
): TextSegment[] => {
  const highlightMap = new Map(highlights.map((h) => [h.segmentId, h]));

  return segments.map((seg) => {
    const saved = highlightMap.get(seg.id);
    if (saved) {
      return {
        ...seg,
        highlightColor: saved.highlightColor,
        underlineColor: saved.underlineColor,
      };
    }
    return seg;
  });
};
