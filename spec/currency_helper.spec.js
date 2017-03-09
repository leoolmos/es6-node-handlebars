import '../helpers/hbs';
import hbs from 'hbs';

describe("Testing handlebars helpers", () => {

  let html;

  beforeEach(function() {
    html = "{{currency price}}";
  });

  it("Currency helper should return £1,000,000", () => {
    const template =  hbs.compile(html);
    const result = template({price:1000000});
    expect(result).toBe('£1,000,000');
  });

  it("Currency helper should not return £1,000,000", () => {
    const template =  hbs.compile(html);
    const result = template({price:2000000});
    expect(result).not.toBe('£1,000,000');
  });

});