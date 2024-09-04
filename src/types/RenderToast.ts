import { SharedValue } from 'react-native-reanimated';

type RenderToastProps = {
  toast: {
    status: string;
    title?: string;
    message: string;
    extraData: Record<string, unknown>;

    onPress?: () => void;
    onClose?: () => void;

    /**
     * This is a reanimated shared value that could be used to control the progress of the toast.
     * It starts at 0 and ends at 1.
     */
    progressToBeClosed: SharedValue<number>;
  };
};

export type RenderToast = (props: RenderToastProps) => JSX.Element;
