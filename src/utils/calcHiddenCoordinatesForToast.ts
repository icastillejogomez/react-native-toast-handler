import { ToastPosition, ToastSwipeDirection, XYPosition } from '../types';

const OUTER_MARGIN = 16;

function calcHiddenTopCoordinatesForToast(
  screenWidth: { width: number; height: number },
  enteringDirection: ToastSwipeDirection,
): XYPosition {
  switch (enteringDirection) {
    case 'up':
      return { y: -OUTER_MARGIN };
    case 'down':
      return { y: screenWidth.height - OUTER_MARGIN };
    case 'left':
      return { x: -OUTER_MARGIN };
    case 'right':
      return { x: screenWidth.width - OUTER_MARGIN };
  }
}

function calcHiddenBottomCoordinatesForToast(
  _screenWidth: { width: number; height: number },
  _enteringDirection: ToastSwipeDirection,
): XYPosition {
  return { x: 0, y: 0 };
}

export function calcHiddenCoordinatesForToast(
  screenWidth: { width: number; height: number },
  position: ToastPosition,
  enteringDirection: ToastSwipeDirection,
): XYPosition {
  if (position === 'top') {
    return calcHiddenTopCoordinatesForToast(screenWidth, enteringDirection);
  }

  return calcHiddenBottomCoordinatesForToast(screenWidth, enteringDirection);
}
