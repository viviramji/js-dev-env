import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our frist test', () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Checking index.html', () => {
  it('Should say H1 that says Users', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const {JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('Users');
    dom.window.close();
  });
});
