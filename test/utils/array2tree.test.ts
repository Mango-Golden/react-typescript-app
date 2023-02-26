/**
 * @author mango
 * @description 接口单元测试
 */

import { assert, describe, it } from 'vitest';

import FetchRequest from '@service/request';

const { request } = new FetchRequest([]);

const host = 'https://cdn.bootcdn.net';
const api = '/ajax/libs/react/18.2.0/cjs/';
const name = 'react-jsx-dev-runtime.production.min.js';

describe('request unit test', () => {
  it('healthy', async () => {
    const response = await fetch(
      `${host}${api}${name}`,
    );
    assert.equal(response.ok, true);
  });

  it('basic request', async () => {
    interface ResBody { status: 'ok' }
    const response = await request<ResBody>(
      `${host}${api}${name}`,
    );
    assert.equal(typeof response, 'string');
  });
});
