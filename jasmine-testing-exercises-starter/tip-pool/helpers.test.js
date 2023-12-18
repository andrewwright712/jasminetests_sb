describe("Utilities test"), function() {
    beforeEach(function () {
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });

    it('should sum total tip amount of all payments', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
      });






}