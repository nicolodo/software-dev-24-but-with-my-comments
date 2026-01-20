import { sum, multiply, findMaxValue } from "./app";
import {describe, expect, test} from "vitest"


test('test if sum function works', function () {
    // we are expecting the result of sum(5,5) to be 10.
    expect(sum(5,5)).toBe(10)
})


test('test to see if find max value works', function() {
    expect(findMaxValue([])).toBe(null)
    expect(findMaxValue([4,3,2,1])).toBe(4)
})


describe("Sum tests", function() {
    test('Add 1 and 6', function() {
        expect(sum(1,6)).toBe(7)
    })

    test('Pass strings', function() {
        expect(sum('5', '5')).toBe(10)
    })
})