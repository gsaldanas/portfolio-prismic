import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ImgBlock`.
 */
export type ImgBlockProps = SliceComponentProps<Content.ImgBlockSlice>;

/**
 * Component for "ImgBlock" Slices.
 */
const ImgBlock = ({ slice }: ImgBlockProps): JSX.Element => {
  return (
    <PrismicNextImage field={slice.primary.image} imgixParams={{ w: 600 }} />
  );
};

export default ImgBlock;
