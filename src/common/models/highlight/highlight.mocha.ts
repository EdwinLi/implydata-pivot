'use strict';

import { expect } from 'chai';
import { testImmutableClass } from 'immutable-class/build/tester';

import { $, Expression } from 'plywood';
import { Highlight, HighlightJS } from './highlight';

describe('Highlight', () => {
  it('is an immutable class', () => {
    testImmutableClass<HighlightJS>(Highlight, [
      {
        owner: 'Sunkist',
        delta: {
          "op": "chain",
          "expression": { "op": "ref", "name": "language" },
          "actions": [
            {
              "action": "in",
              "expression": {
                "op": "literal",
                "value": { "setType": "STRING", "elements": ["he"] },
                "type": "SET"
              }
            },
            {
              "action": "and",
              "expression": {
                "op": "chain", "expression": { "op": "ref", "name": "namespace" },
                "action": {
                  "action": "in",
                  "expression": {
                    "op": "literal",
                    "value": { "setType": "STRING", "elements": ["wikipedia"] },
                    "type": "SET"
                  }
                }
              }
            }
          ]
        }
      },
      {
        owner: 'Dole',
        delta: { op: 'literal', value: true }
      }
    ]);
  });
});
