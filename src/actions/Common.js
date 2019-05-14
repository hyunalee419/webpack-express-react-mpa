import * as Types from './types';

export const SetIsSpinFull = (isSpinFull) => {
	console.log('action SetIsSpinFull: ', isSpinFull);
  return ({
    type: Types.IS_SPIN_FULL,
    isSpinFull
  });
};
