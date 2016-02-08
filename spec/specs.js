describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("John", "Smith");
    expect(testContact.firstName).to.equal("John");
    expect(testContact.lastName).to.equals("Smith");
    expect(testContact.addresses).to.eql([]);
  });
});
