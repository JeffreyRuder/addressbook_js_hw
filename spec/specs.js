describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("John", "Smith");
    expect(testContact.firstName).to.equal("John");
    expect(testContact.lastName).to.equals("Smith");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact ("Max", "Powers");
    expect(testContact.fullName()).to.equal("Max Powers");
  })
});

describe('Address', function() {
  it("creates a new address with the given properties", function() {
    var testAddress = new Address("1 Microsoft Way", "Redmond", "WA");
    expect(testAddress.street).to.equal("1 Microsoft Way");
    expect(testAddress.city).to.equal("Redmond");
    expect(testAddress.state).to.equal("WA");
  })
})
