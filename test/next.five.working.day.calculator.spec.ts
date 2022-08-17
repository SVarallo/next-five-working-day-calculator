import { getNextFiveWorkingDays } from "../src/next.five.working.day.calculator";
import "mocha";
import {expect} from "chai";

const date: Date = new Date('2022-10-19');
const dateBeforeChristmas: Date = new Date('2022-12-23');
const dateBeforeNewYearsDay: Date = new Date('2022-12-30')

const mockFiveWorkingDays: string[] = ['2022-10-19','2022-10-20','2022-10-21','2022-10-24','2022-10-25'];

describe('NEXT FIVE WORKING DAY CALCULATOR', () => {

    it('should return the next five working days', () => {
        const result = getNextFiveWorkingDays(date)
        expect(result).to.equal(mockFiveWorkingDays);
    });

    it('should throw error when given invalid date input', () => {
    });

    it('should throw error when given empty date input', () => {
    });

    it('should exclude Christmas day when calculating next five working days', () => {
        const result = getNextFiveWorkingDays(dateBeforeChristmas)
        expect(result).to.not.contain('2022-12-25');
    });

    it('should exclude New years day when calculating next five working days', () => {
        const result = getNextFiveWorkingDays(dateBeforeNewYearsDay)
        expect(result).to.not.contain('2023-01-01');
    });
});
