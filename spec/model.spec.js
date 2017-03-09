import api from '../model/api';

describe("Testing the mock", () => {
  it("Mock should have result_count = 5", () => {

    api.getProperties('N11', (result) => {
      expect(result.result_count).toBe(5);
    });


  });
});