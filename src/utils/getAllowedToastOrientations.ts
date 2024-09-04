import { ToastOrientation, ToastSwipeDirection } from '../types';

export function getAllowedToastOrientations(swipeDirections: ToastSwipeDirection[]): ToastOrientation | 'both' {
  if (swipeDirections.length === 0) return 'vertical';
  const hasUp = swipeDirections.includes('up');
  const hasDown = swipeDirections.includes('down');
  const hasLeft = swipeDirections.includes('left');
  const hasRight = swipeDirections.includes('right');

  const hasVertical = hasUp || hasDown;
  const hasHorizontal = hasLeft || hasRight;

  if (hasVertical && hasHorizontal) return 'both';
  return hasVertical ? 'vertical' : 'horizontal';
}
