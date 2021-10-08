/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type * as Stitches from '@stitches/react'

export const utils = {
  mx: (
    value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginLeft'>
  ) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (
    value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'marginTop'>
  ) => ({
    marginTop: value,
    marginBottom: value,
  }),
  px: (
    value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'paddingLeft'>
  ) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (
    value: Stitches.ScaleValue<'space'> | Stitches.PropertyValue<'paddingTop'>
  ) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  flexCenter: () => ({
    alignItems: 'center',
    justifyContent: 'center',
  }),
}
