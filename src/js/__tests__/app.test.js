import Validator from '../app';

test('should validate login', () => {
  const check = new Validator();
  let result = check.validateUsername('jenyadio');

  expect(result).toBe(true); 
});

test('should not validate login', () => {
  const check = new Validator();
  let result = check.validateUsername('1jenyadio');

  expect(result).toBe(false); 
})

