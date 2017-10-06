/*
 * action types
 */

export const SET_HEADER_TRANSPARENCY = 'SET_HEADER_TRANSPARENCY';

/*
 * action creators
 */

export const setHeaderTransparency = transparent => ({
  type: SET_HEADER_TRANSPARENCY,
  transparent,
});

export const getHeaderTransparency = transparent => ({
  transparent,
});
