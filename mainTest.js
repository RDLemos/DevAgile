var expect = chai.expect;

describe( 'MainTest', function () {

/*  it( 'gutter', function () {
    var test_score = [[0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0]];

	var result = calcscore (test_score);
    expect( result ).to.equal( 0);
  });

it( 'strikeFrame1', function () {
    var test_score = [[10,0,0],
		     [3,6,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0]];

	var result = calcscore (test_score);
    expect( result ).to.equal(28);
  });

it( 'noStrike', function () {
    var test_score = [[1,4,0],
		     [3,2,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0]];

	var result = calcscore (test_score);
    expect( result ).to.equal(10);
  });
*/
it( 'spare', function () {
    var test_score = [[7,3,0],
		     [4,2,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0],
		     [0,0,0]];

	var result = calcscore (test_score);
    expect( result ).to.equal(20);
  });

it( 'strikeMax', function () {
    var test_score = [[10,0,0],
		     [10,0,0],
		     [10,0,0],
		     [10,0,0],
		     [10,0,0],
		     [10,0,0],
			 [10,0,0],
		     [10,0,0],
		     [10,0,0],
		     [10,0,0],
		     [10,0,0]];

	var result = calcscore (test_score);
    expect( result ).to.equal(300);
  });

});
/*
describe ("isolation", function(){
 it('stub', function(){
 
 var ds =  new DataService();
 var stub = sinon.stub(ds, "getById");
 stub.withArgs(1).returns({name: "thing"})
 
 var foo = new Foo(ds);
 var result = foo.getThing();
 expect (result).to.deep.equal({name: "thing"})
 
 });


})*/