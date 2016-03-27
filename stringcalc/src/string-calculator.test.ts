/**
 * module dependencies
 */
import calc = require('./string-calculator')
import chai = require('chai')

/**
 * globals
 */
let assert = chai.assert

/**
 * tests
 */
describe('string-calculator', function(){
    describe('adding numbers', function() {
        it('has add function')
        context('when given empty string', function() {
            it('returns zero')
        });
        context('when given string with 1 number', function() {
            it('returns same number')
        });
        context('when given string with 2 numbers', function() {
            it('returns sum')
        });
        context('with input string that contains random numbers', function() {
            it('returns sum')
        });
    });
    describe('delimiters', function() {
        context('with dirty input that contains both commas and newlines', function() {
            it('returns sum')
        });
        context('with custom delimeter given as first character', function() {
            it('returns sum')
        });
    });
    describe('error handling', function() {
        context('when negative number is given', function() {
            it('throws exception: negatives not allowed')
        });
        context('when multiple negatives are given', function() {
            it('shows all of them in the exception message')
        });
    });
});
