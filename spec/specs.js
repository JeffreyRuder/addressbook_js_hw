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
