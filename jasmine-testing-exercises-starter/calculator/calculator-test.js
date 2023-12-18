
it('should calculate the monthly rate correctly', function () {
  // ...
  const testOne = {
    amount: 20000,
    years: 5,
    rate: 8,
  };

  const result = calculateMonthlyPayment(testOne);

  expect(result).toBe('405.53');
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
