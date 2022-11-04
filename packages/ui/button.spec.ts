/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const typedPassengerFixture = {};
const selectUniqueTypedPassengers = {
  resultFunc: (a: unknown) => {},
};
const expect = (a: unknown) => {
  return { toEqual: (b: unknown) => {} };
};

const describe = (a: string, func: unknown) => {};
const it = (a: string, func: unknown) => {};

describe('pow', () => {
  describe('selectUniqueTypedPassengers', () => {
    it('should return uniqe TypedPassengers list', () => {
      const typedPassengersList = [
        typedPassengerFixture,
        typedPassengerFixture,
      ];
      const actual =
        selectUniqueTypedPassengers.resultFunc(typedPassengersList);
      const expected = [typedPassengerFixture];
      expect(actual).toEqual(expected);
    });
  });
});
