
it('Should calculate the monthly rate correctly', () => {
  const values  = { amount: 10000, years: 10, rate: 4.5 };
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("Should return a result with 2 decimal places", () => {
  const values  = { amount: 10000, years: 8, rate: 4.5 };
  expect(calculateMonthlyPayment(values)).toEqual('124.23');
});

it("Should return not a number", () => {
  const values  = { amount: 10000, years: "Z", rate: 4.5 };
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
})

it("Should handle high interest-rates", () =>{
  const values  = { amount: 10000, years: 8, rate: 99 };
  expect(calculateMonthlyPayment(values)).toEqual('825.41');
})